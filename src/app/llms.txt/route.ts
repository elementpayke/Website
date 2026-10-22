import { SITE_URL, siteConfig } from "@/lib/site";
import { ARTICLES } from "@/lib/blog/articles";
import { PRODUCTS } from "@/lib/products/productsData";

export function GET() {
  const lines = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    "## Products",
    ...Object.values(PRODUCTS).map((p) => `- [${p.seo.title}](${SITE_URL}${p.path}): ${p.seo.description}`),
    "",
    "## Blog",
    ...ARTICLES.map((a) => `- [${a.title}](${SITE_URL}/blog/${a.slug}): ${a.desc}`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
