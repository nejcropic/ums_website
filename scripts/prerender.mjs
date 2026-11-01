import { build } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const output = path.resolve(root, "build");
const serverOutput = path.resolve(root, ".prerender");
await build({ build: { ssr: "src/entry-server.tsx", outDir: serverOutput, manifest: false, emptyOutDir: true } });
const { render, pages, origin } = await import(pathToFileURL(path.join(serverOutput, "entry-server.js")).href);
const template = await readFile(path.join(output, "index.html"), "utf8");
const manifest = JSON.parse(await readFile(path.join(output, ".vite/manifest.json"), "utf8"));
const routeModules = {
  "/": "index.html", "/storitve": "src/routes/Storitve.tsx", "/reference": "src/routes/Reference.tsx",
  "/akt_projekti": "src/routes/Akt_projekti.tsx", "/o_podjetju": "src/routes/O_podjetju.tsx", "/kontakt": "src/routes/Kontakt.tsx",
};
const escape = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function setMeta(html, attribute, key, value) {
  const tag = `<meta ${attribute}="${key}" content="${escape(value)}" />`;
  const pattern = new RegExp(`<meta\\s+${attribute}="${key}"[^>]*>`, "i");
  return pattern.test(html) ? html.replace(pattern, () => tag) : html.replace("</head>", `${tag}\n</head>`);
}
function stylesFor(module, styles = new Set(), visited = new Set()) {
  if (visited.has(module)) return styles;
  visited.add(module);
  const entry = manifest[module];
  if (!entry) throw new Error(`Missing build manifest entry: ${module}`);
  for (const css of entry.css ?? []) styles.add(css);
  for (const dependency of entry.imports ?? []) stylesFor(dependency, styles, visited);
  return styles;
}
for (const [route, metadata] of Object.entries(pages)) {
  const content = await render(route);
  if (!content.includes("<main") || !content.includes("<h1")) throw new Error(`Incomplete render: ${route}`);
  let html = template.replace(/<title>[\s\S]*?<\/title>/i, () => `<title>${escape(metadata.title)}</title>`);
  for (const [attribute, key, value] of [
    ["name", "description", metadata.description], ["property", "og:title", metadata.title],
    ["property", "og:description", metadata.description], ["property", "og:url", `${origin}${route}`],
    ["name", "twitter:title", metadata.title], ["name", "twitter:description", metadata.description],
  ]) html = setMeta(html, attribute, key, value);
  html = html.replace(/<link\b[^>]*rel="canonical"[^>]*>/gi, "");
  html = html.replace("</head>", `<link rel="canonical" href="${escape(origin + route)}" />\n</head>`);
  for (const css of stylesFor(routeModules[route])) {
    if (!html.includes(`href="/${css}"`)) html = html.replace("</head>", `<link rel="stylesheet" href="/${escape(css)}" />\n</head>`);
  }
  // Static content replaces the no-JavaScript fallback, avoiding duplicate headings.
  html = html.replace(/<noscript>[\s\S]*?<\/noscript>/gi, "");
  if (!/<div id="root"><\/div>/.test(html)) throw new Error("Missing root placeholder");
  html = html.replace('<div id="root"></div>', () => `<div id="root" data-prerendered="true">${content}</div>`);
  const directory = route === "/" ? output : path.join(output, route.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), html);
  // Also support static hosts which resolve /route via /route.html instead of a directory index.
  if (route !== "/") await writeFile(path.join(output, `${route.slice(1)}.html`), html);
  console.log(`Prerendered ${route}`);
}
const urls = Object.keys(pages).map(route => `  <url><loc>${escape(origin + route)}</loc></url>`).join("\n");
await writeFile(path.join(output, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
const robotsPath = path.join(output, "robots.txt");
const robots = await readFile(robotsPath, "utf8");
await writeFile(robotsPath, robots.replace(/^Sitemap:.*$/gim, "").trimEnd() + `\nSitemap: ${origin}/sitemap.xml\n`);
