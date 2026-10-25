import fs from "node:fs";
import path from "node:path";
import { describe, expect, test } from "vitest";
import { classFor, hover } from "./pseudo";

const ROOT = process.cwd();
const css = fs.readFileSync(path.join(ROOT, "src/app/design-pseudo.css"), "utf8");

function sourceFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return sourceFiles(p);
    return /\.tsx?$/.test(e.name) && !/\.test\./.test(e.name) ? [p] : [];
  });
}

describe("design pseudo classes", () => {
  test("matches the importer's class naming", () => {
    expect(css).toContain(`.${hover("color:#3B2ED3")}:hover{color:#3B2ED3 !important}`);
  });

  test("every hover()/focus() used in a component has a generated rule", () => {
    const missing: string[] = [];
    for (const file of sourceFiles(path.join(ROOT, "src"))) {
      const src = fs.readFileSync(file, "utf8");
      for (const m of src.matchAll(/\b(hover|focus)\("([^"]+)"\)/g)) {
        const cls = classFor(m[1], m[2]);
        if (!css.includes(`.${cls}:`)) missing.push(`${path.relative(ROOT, file)}: ${m[1]}("${m[2]}")`);
      }
    }
    expect(missing).toEqual([]);
  });
});
