/**
 * @typedef {{id: string, title: string, year: string, isCurrent: boolean, location?: string, description?: string}} ParsedProjectName
 * @typedef {{ok: true, value: ParsedProjectName} | {ok: false, reason: string}} ParseProjectResult
 */

/** @param {string} fileName @returns {ParseProjectResult} */
export function parseProjectFilename(fileName) {
  const name = fileName.replace(/\\/g, "/").split("/").at(-1) ?? "";
  const baseName = name.replace(/\.[^.]*$/, "");
  const fields = baseName.split("_");

  if (fields.length !== 2 && fields.length !== 4) {
    return { ok: false, reason: `pričakovani sta 2 ali 4 polji, prejetih je ${fields.length}` };
  }
  if (fields.some((field) => field.length === 0)) {
    return { ok: false, reason: "polja ne smejo biti prazna" };
  }

  const year = fields.at(-1);
  if (!/^\d{4}$/.test(year)) {
    return { ok: false, reason: "letnica mora vsebovati natanko štiri številke" };
  }

  const values = fields.map((field) => field.replace(/-/g, " "));
  if (values.some((field) => field.trim().length === 0)) {
    return { ok: false, reason: "polja po zamenjavi vezajev ne smejo biti prazna" };
  }

  if (fields.length === 2) {
    return { ok: true, value: { id: baseName, title: values[0], year, isCurrent: false } };
  }
  return {
    ok: true,
    value: { id: baseName, location: values[0], description: values[1], title: values[2], year, isCurrent: true },
  };
}
