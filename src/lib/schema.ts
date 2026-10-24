import { SITE_URL, siteConfig } from "@/lib/site";

export const ORG_SOCIALS = [
  "https://www.linkedin.com/company/elementpayhq/",
  "https://x.com/element_pay",
  "https://www.tiktok.com/@elementpay",
  "https://www.instagram.com/_elementpay/",
];

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#org`,
    name: siteConfig.name,
    alternateName: ["Element Pay", "ElementPay Payments"],
    url: SITE_URL,
    sameAs: [...ORG_SOCIALS, "https://mboka.finance", "https://partners.elementpay.net/"],
    description: siteConfig.description,
    knowsAbout: [
      "Cross-border payments", "Mobile money API", "M-Pesa", "Stablecoin payments", "USDC", "USDT",
      "Stablecoin on-ramp", "Stablecoin off-ramp", "Bulk payouts", "Payment gateway", "Foreign exchange",
      "Business bank accounts",
    ],
    brand: [{ "@type": "Brand", name: "Mboka", url: "https://mboka.finance" }],
  };
}

export function websiteSchema() {
  return { "@type": "WebSite", "@id": `${SITE_URL}/#site`, name: siteConfig.name, url: SITE_URL };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema(service: { name: string; description: string; path: string }) {
  return {
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${SITE_URL}${service.path}`,
    provider: { "@id": `${SITE_URL}/#org` },
    areaServed: "Africa",
  };
}

export function faqSchema(faqs: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function blogSchema(posts: ReadonlyArray<{ title: string; slug: string; date: string }>) {
  return {
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "ElementPay Blog",
    url: `${SITE_URL}/blog`,
    blogPost: posts.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `${SITE_URL}/blog/${a.slug}`,
      datePublished: a.date,
    })),
  };
}

export function articleSchema(article: { title: string; desc: string; slug: string; date: string }) {
  return {
    "@type": "BlogPosting",
    headline: article.title,
    description: article.desc,
    url: `${SITE_URL}/blog/${article.slug}`,
    datePublished: article.date,
    author: { "@id": `${SITE_URL}/#org` },
    publisher: { "@id": `${SITE_URL}/#org` },
  };
}

export function withContext(node: object) {
  return { "@context": "https://schema.org", ...node };
}

export function jsonLdGraph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
