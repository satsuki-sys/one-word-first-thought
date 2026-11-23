// One Word, First Thought — writes exactly one word to /output/entry.txt.
//
// The word: "psithurism" — the sound of wind whispering through trees.
// Surprising, vivid, and specific: a rare word that calls up a clear
// sound-image in a few letters, with a soft sibilant music of its own.
// One word, no explanation, no second draft — just the word itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

interface EntryConfig {
  word: string;
  outputPath: string;
}

const CONFIG: EntryConfig = {
  word: "psithurism",
  outputPath: "/output/entry.txt",
};

function isSingleWord(text: string): boolean {
  return text.length >= 1 && text.length <= 24 && !/\s/.test(text);
}

function emitEntry(config: EntryConfig): void {
  const word = config.word.trim();
  if (!isSingleWord(word)) {
    throw new Error(`invalid entry word: ${JSON.stringify(config.word)}`);
  }
  mkdirSync(dirname(config.outputPath), { recursive: true });
  writeFileSync(config.outputPath, word, { encoding: "utf8" });
}

function main(): void {
  emitEntry(CONFIG);
}

main();
