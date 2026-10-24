import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { ARTICLES } from "@/lib/blog/articles";
import { PRODUCTS } from "@/lib/products/productsData";
import { ALL_MARKETING_PAGES } from "@/lib/marketing/pagesData";
import { COUNTRIES, accountCurrencies } from "@/lib/geo/coverage";
import { CORRIDORS, STABLECOIN_RAMP_COUNTRIES } from "@/lib/geo/origins";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority = 0.7): MetadataRoute.Sitemap[number] => ({
    url: path === "/" ? SITE_URL : path.startsWith("http") ? path : `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  });

  return [
    entry("/", 1),
    entry("/blog", 0.8),
    entry("/contact", 0.8),
    ...ARTICLES.map((a) => entry(`/blog/${a.slug}`, 0.6)),
    ...Object.values(PRODUCTS).map((p) => entry(p.path, 0.9)),
    ...ALL_MARKETING_PAGES.map((p) => entry(p.path, 0.8)),
    ...COUNTRIES.map((c) => entry(`/send-money-to-${c.slug}`, 0.7)),
    ...COUNTRIES.map((c) => entry(`/stablecoin-payments-in-${c.slug}`, 0.7)),
    ...accountCurrencies().map((c) => entry(`/open-a-${c.code.toLowerCase()}-account`, 0.65)),
    ...CORRIDORS.map(([origin, dest]) => entry(`/send-money-from-${origin}-to-${dest}`, 0.65)),
    ...STABLECOIN_RAMP_COUNTRIES.USDC.map((c) => entry(`/usdc-to-${c}`, 0.65)),
    ...STABLECOIN_RAMP_COUNTRIES.USDT.map((c) => entry(`/usdt-to-${c}`, 0.65)),
  ];
}
