import { SITE_URL, siteConfig } from "@/lib/site";
import { ARTICLES } from "@/lib/blog/articles";
import { PRODUCTS } from "@/lib/products/productsData";
import { ALL_MARKETING_PAGES } from "@/lib/marketing/pagesData";
import { COUNTRIES } from "@/lib/geo/coverage";

export function GET() {
  const lines = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    "## Products",
    ...Object.values(PRODUCTS).map((p) => `- [${p.seo.title}](${SITE_URL}${p.path}): ${p.seo.description}`),
    "",
    "## Solutions and company",
    ...ALL_MARKETING_PAGES.map((p) => `- [${p.seo.title}](${SITE_URL}${p.path}): ${p.seo.description}`),
    "",
    "## Coverage",
    `- [Payment coverage](${SITE_URL}/coverage): 10+ African payout countries and 30 account currencies.`,
    ...COUNTRIES.map(
      (c) =>
        `- [Send money to ${c.name}](${SITE_URL}/send-money-to-${c.slug}): Payouts to ${c.rails.map((r) => r.name).join(", ")} in ${c.currencyCode}.`
    ),
    "",
    "## Blog",
    ...ARTICLES.map((a) => `- [${a.title}](${SITE_URL}/blog/${a.slug}): ${a.desc}`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
