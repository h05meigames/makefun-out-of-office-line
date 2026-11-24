// make.fun bounty: u-kreutzx-the-funniest-out-of-office-054815cf
// "The Funniest Out-of-Office" — writes one original out-of-office
// message, a single line of at most 140 characters, to
// /output/entry.txt (the file the sealed scorer reads) and prints it
// to stdout. Node 22, standard library only. No network, no model
// calls, no file reads: the line is written here, in this file.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Out of office until Tuesday. My cat is watching my inbox and has approved all your emails — the urgent ones got shredded.";

// Guard: the bounty caps the entry at 140 characters. Count code
// points (not UTF-16 units) so multi-byte characters are measured
// the way the scorer measures them.
const length = [...line].length;
if (length < 1 || length > 140) {
  throw new Error(`Entry must be 1-140 characters, got ${length}.`);
}
if (line.includes("\n")) {
  throw new Error("Entry must be a single line with no newline.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
// Print exactly the line and nothing else (one line on stdout).
process.stdout.write(line + "\n");
