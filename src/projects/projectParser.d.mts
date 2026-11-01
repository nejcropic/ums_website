export interface ParsedProjectName {
  id: string;
  title: string;
  year: string;
  isCurrent: boolean;
  location?: string;
  description?: string;
}

export type ParseProjectResult =
  | { ok: true; value: ParsedProjectName }
  | { ok: false; reason: string };

export function parseProjectFilename(fileName: string): ParseProjectResult;
