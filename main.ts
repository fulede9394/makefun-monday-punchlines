// Monday as a kidnapper: it took the weekend and now it wants the coffee too.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Monday called. It wants its weekend back, and it's holding your coffee hostage until further notice.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
