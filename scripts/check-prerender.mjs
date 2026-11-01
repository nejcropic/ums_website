import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
const routes = ["", "storitve", "reference", "akt_projekti", "o_podjetju", "kontakt"];
const titles = new Set();
for (const route of routes) {
  const html = await readFile(`build/${route ? route + "/" : ""}index.html`, "utf8");
  assert.match(html, /data-prerendered="true"/);
  assert.match(html, /<main\b/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.match(html, new RegExp(`rel="canonical" href="https://www\\.ums\\.si/${route}"`));
  assert.doesNotMatch(html, /class="preloader"|class="page-loading"/);
  assert.doesNotMatch(html, /style="[^"]*opacity:0(?:;|")/);
  titles.add(html.match(/<title>(.*?)<\/title>/)[1]);
  if (route === "storitve") for (const id of ["gr_projekti", "adaptacije", "suhomontaza", "zun_ureditev"]) assert(html.includes(`id="${id}"`));
}
assert.equal(titles.size, 6);
console.log("PASS: six complete static pages, unique titles, canonicals, visible content and no loading overlays.");
