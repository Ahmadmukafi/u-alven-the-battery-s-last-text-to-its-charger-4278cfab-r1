// The Battery's Last Text to Its Charger — entry program.
// Writes the battery's final message to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You had ONE job and you spent all day in the other room. I hope my last 1% haunts you.";

// Gate guard: the sealed scorer only accepts 1–200 characters. Fail loudly
// instead of writing an invalid entry if the line is ever edited past the gate.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1–200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
