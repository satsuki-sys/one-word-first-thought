// One Word, First Thought — writes exactly one word to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "psithurism";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
