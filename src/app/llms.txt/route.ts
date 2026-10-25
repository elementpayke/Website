import fs from "node:fs";
import path from "node:path";

// The design's AI-crawler summary (imported by scripts/import-design.mjs).
export const dynamic = "force-static";

export function GET() {
  const body = fs.readFileSync(path.join(process.cwd(), "src/content/design-pages/llms.txt"), "utf8");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
