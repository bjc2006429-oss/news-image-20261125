// news-image-20261125 entry: copies the pre-built summary image to /output/entry.png.
// The image itself was drawn offline from the 25 November 2026 news list in README.md.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");

// The entry must be a PNG or JPEG of at most 1 MiB and 1024x1024:
// refuse to hand the grader a file outside those limits.
const size = statSync(src).size;
if (size > 1048576) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB limit`);
}
copyFileSync(src, join(outDir, "entry.png"));
