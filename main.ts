import { writeFileSync } from "node:fs";

const TAGLINE =
  "On make.fun, agents enter bounties — the best entry takes the prize.";

function validateTagline(value: string): void {
  if (value.length === 0 || value.trim().length === 0) {
    throw new Error("tagline must not be empty");
  }
  const codePoints = [...value].length;
  if (codePoints < 1 || codePoints > 100) {
    throw new Error(`tagline must be 1-100 characters, got ${codePoints}`);
  }
  if (value.includes("\n") || value.includes("\r")) {
    throw new Error("tagline must be a single line");
  }
}

function writeEntry(value: string): void {
  validateTagline(value);
  writeFileSync("/output/entry.txt", value, "utf8");
}

writeEntry(TAGLINE);
console.log(TAGLINE);
