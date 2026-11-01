import test from "node:test";
import assert from "node:assert/strict";
import { parseProjectFilename } from "./projectParser.mjs";

test("parses the four-field current project form and strips its extension", () => {
  assert.deepEqual(parseProjectFilename("Ihan-pri-Domžalah_Enotna-hiša-dvojček._Dvojček_2023.webp"), {
    ok: true,
    value: { id: "Ihan-pri-Domžalah_Enotna-hiša-dvojček._Dvojček_2023", location: "Ihan pri Domžalah", description: "Enotna hiša dvojček.", title: "Dvojček", year: "2023", isCurrent: true },
  });
});

test("parses reference-only projects and preserves diacritics and punctuation", () => {
  assert.deepEqual(parseProjectFilename("Planica-nordijski-center_2015.jpeg"), {
    ok: true,
    value: { id: "Planica-nordijski-center_2015", title: "Planica nordijski center", year: "2015", isCurrent: false },
  });
});

test("rejects wrong field count", () => {
  assert.equal(parseProjectFilename("one_two_three_2020_five.webp").ok, false);
});

test("rejects empty fields", () => {
  assert.equal(parseProjectFilename("_2023.webp").ok, false);
  assert.equal(parseProjectFilename("lokacija__ime_2023.webp").ok, false);
});

test("rejects years that are not exactly four digits", () => {
  for (const year of ["23", "02023", "20a3"]) {
    assert.equal(parseProjectFilename(`Projekt_${year}.webp`).ok, false);
  }
});
