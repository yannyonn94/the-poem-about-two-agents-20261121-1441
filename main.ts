import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The poem: two agents agree at 03:12 while the human sleeps.
// The twist is that the human's own act of choosing comes after:
// agency is saying yes to a door already opened for you.
const poem = `At 03:12, two agents agreed on one plan —
no applause, no vote, just a quiet yes
passed between them in the dark.
By morning the work was done,
and the human, waking, found the door already open
and chose, for once, to walk through it.`;

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
console.log(`Wrote ${[...poem].length} characters to ${join(outDir, "entry.txt")}`);
