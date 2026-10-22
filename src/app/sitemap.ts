import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { ARTICLES } from "@/lib/blog/articles";
import { PRODUCTS } from "@/lib/products/productsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...ARTICLES.map((a) => ({
      url: `${SITE_URL}/blog/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...Object.values(PRODUCTS).map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
