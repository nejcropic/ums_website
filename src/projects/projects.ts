import { parseProjectFilename } from "./projectParser.mjs";
import type { ParsedProjectName, ParseProjectResult } from "./projectParser.mjs";

export interface Project extends ParsedProjectName {
  photo: string;
  srcSet?: string;
}

const photoFiles = import.meta.glob<string>("../images/projects/*.{webp,jpg,jpeg,png,avif}", {
  eager: true,
  query: "?url",
  import: "default",
});
const responsiveFiles = import.meta.glob<string>("../images/projects/responsive/*.{webp,jpg,jpeg,png,avif}", {
  eager: true,
  query: "?url",
  import: "default",
});

const byFileName = new Map<string, { result: ParseProjectResult; photo: string; fileName: string }[]>();
for (const [path, photo] of Object.entries(photoFiles)) {
  const fileName = path.split("/").at(-1) ?? path;
  const result = parseProjectFilename(fileName);
  const baseName = fileName.replace(/\.[^.]*$/, "");
  const matches = byFileName.get(result.ok ? result.value.id : baseName) ?? [];
  matches.push({ result, photo, fileName });
  byFileName.set(result.ok ? result.value.id : baseName, matches);
  if (!result.ok && import.meta.env.DEV) console.warn(`[projekti] Izpuščena datoteka »${fileName}«: ${result.reason}.`);
}

const projectsById = new Map<string, Project>();
for (const [id, matches] of byFileName) {
  if (matches.length > 1) {
    if (import.meta.env.DEV) console.warn(`[projekti] Podvojena osnovna fotografija (${matches.map((match) => `»${match.fileName}«`).join(", ")}); projekt je izpuščen.`);
    continue;
  }
  if (!matches[0].result.ok) continue;
  const parsed = matches[0].result;
  if (!parsed.ok) continue;
  projectsById.set(id, { ...parsed.value, photo: matches[0].photo });
}

const responsiveById = new Map<string, Map<number, string>>();
for (const [path, photo] of Object.entries(responsiveFiles)) {
  const fileName = path.split("/").at(-1) ?? path;
  const baseName = fileName.replace(/\.[^.]*$/, "");
  const match = /^(.*)-(\d+)$/.exec(baseName);
  if (!match || !projectsById.has(match[1])) {
    if (import.meta.env.DEV) console.warn(`[projekti] Nepričakovana ali nepovezana odzivna fotografija »${fileName}«; uporabljena ne bo.`);
    continue;
  }
  const width = Number(match[2]);
  const widths = responsiveById.get(match[1]) ?? new Map<number, string>();
  if (widths.has(width)) {
    if (import.meta.env.DEV) console.warn(`[projekti] Podvojena širina ${width} za odzivno fotografijo »${match[1]}«; druga datoteka bo prezrta.`);
    continue;
  }
  widths.set(width, photo);
  responsiveById.set(match[1], widths);
}

export const projects: Project[] = [...projectsById.values()]
  .map((project) => {
    const responsive = [...(responsiveById.get(project.id) ?? new Map())].sort(([a], [b]) => a - b);
    return responsive.length
      ? { ...project, srcSet: responsive.map(([width, photo]) => `${photo} ${width}w`).join(", ") }
      : project;
  })
  .sort((a, b) => Number(b.year) - Number(a.year) || a.title.localeCompare(b.title, "sl"));

export const currentProjects = projects.filter((project) => project.isCurrent);

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
