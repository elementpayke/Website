import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import entries from "@/content/design-pages/sitemap.json";

// The design's sitemap (imported by scripts/import-design.mjs), one entry
// per public page.
export default function sitemap(): MetadataRoute.Sitemap {
  return (entries as Array<{ path: string; lastmod: string | null }>).map(({ path, lastmod }) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    ...(lastmod ? { lastModified: lastmod } : {}),
  }));
}
