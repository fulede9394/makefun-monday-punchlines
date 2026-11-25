// Monday as a kidnapper: it took the weekend and now it wants the coffee too.
// The ransom note is a calendar invite. The hostage is your caffeine.
import { mkdir, writeFile } from "node:fs";
import { join } from "node:path";

const mondayLine =
  "Monday called. It wants its weekend back, and it's holding your coffee hostage until further notice.";

const cap = 200;

function check(line: string): Error | null {
  if (line.length === 0) return new Error("line is empty");
  if (line.length > cap) return new Error("line exceeds the limit");
  if (!line.startsWith("Monday")) return new Error("line lost its caller");
  if (!line.includes("coffee")) return new Error("line lost its coffee");
  return null;
}

function run(): void {
  const problem = check(mondayLine);
  if (problem) throw problem;
  const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdir(folder, { recursive: true }, (mkdirErr) => {
    if (mkdirErr) throw mkdirErr;
    writeFile(join(folder, "entry.txt"), mondayLine, "utf8", (writeErr) => {
      if (writeErr) throw writeErr;
    });
  });
}

run();
