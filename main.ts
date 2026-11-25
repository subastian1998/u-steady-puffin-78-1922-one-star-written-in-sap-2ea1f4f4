import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "One star. He waters me like he's apologizing for a crime from another life, then parks me in a dark corner for 'ambience.' My last new leaf was in March. Would not recommend this human to other plants.";

// Gate self-check (RULES.txt): UTF-8 text, 1-279 chars, not whitespace only, single line.
if (entry.length < 1 || entry.length > 279) {
  throw new Error(`entry length ${entry.length} outside 1-279`);
}
if (!entry.trim()) {
  throw new Error("entry is blank");
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, entry, "utf8");
