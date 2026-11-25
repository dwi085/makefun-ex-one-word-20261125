// Describe Your Ex in One Word — make.fun entry.
// The program writes exactly one word to /output/entry.txt:
// a one-word verdict on an ex. Nothing else is attached.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Placeholder";

// The gate: exactly one word, 1 to 111 characters, no whitespace.
function isOneWord(text: string): boolean {
  return text.length >= 1 && text.length <= 111 && !/\s/.test(text);
}

function main(): void {
  if (!isOneWord(WORD)) {
    throw new Error("word fails the one-word gate");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, WORD, "utf8");
}

main();
