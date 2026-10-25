import fs from "node:fs";
import path from "node:path";
import { describe, expect, test } from "vitest";
import sitemap from "./sitemap";
import { SITE_URL } from "@/lib/site";
import { ARTICLES } from "@/lib/blog/articles";
import { RELEASES } from "@/lib/press/releases";
import { DESIGN_PAGES } from "@/lib/design/pages";

const APP = path.join(process.cwd(), "src/app");

/** Every public path a route in this app can render. */
function routablePaths(): Set<string> {
  const paths = new Set<string>(["/"]);
  for (const group of ["(site)", "(fr)"]) {
    const walk = (dir: string, prefix: string) => {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        if (!e.isDirectory() || e.name.startsWith("[")) continue;
        const sub = path.join(dir, e.name);
        if (fs.existsSync(path.join(sub, "page.tsx"))) paths.add(`${prefix}/${e.name}`);
        walk(sub, `${prefix}/${e.name}`);
      }
    };
    walk(path.join(APP, group), "");
  }
  DESIGN_PAGES.forEach((p) => paths.add(p.url));
  ARTICLES.forEach((a) => paths.add(`/blog/${a.slug}`));
  RELEASES.forEach((r) => paths.add(`/press/${r.slug}`));
  return paths;
}

describe("sitemap", () => {
  test("lists the home page and every imported design page", () => {
    const urls = sitemap().map((e) => e.url);
    expect(urls).toContain(SITE_URL);
    for (const p of DESIGN_PAGES) expect(urls).toContain(`${SITE_URL}${p.url}`);
  });

  test("every sitemap URL is served by a route", () => {
    const routable = routablePaths();
    const missing = sitemap()
      .map((e) => e.url.replace(SITE_URL, "") || "/")
      .filter((p) => !routable.has(p));
    expect(missing).toEqual([]);
  });
});
