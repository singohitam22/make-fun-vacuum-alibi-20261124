// The Vacuum's Alibi: One Line, 200 Characters
// A robot vacuum's deadpan log entry explaining why it missed a spot.
// Writes exactly one line to /output/entry.txt — no trailing newline,
// so the file holds precisely the entry the judge reads.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a log line, deadpan and a little smug about its sensors.
// The chair has four legs. This was the fifth. The sensors cannot be
// wrong, so the only possible conclusion is a new chair.
const ENTRY =
  'Log 04:12: obstacle classified "chair leg", though the chair has four and this was the fifth. ' +
  'My sensors do not make mistakes, so we have logged a new chair.';

// The output directory is /output in the grader sandbox; honour
// MAKEFUN_OUTPUT_DIR when set so the entry can be checked locally.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
