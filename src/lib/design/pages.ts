import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import type { NavGroupKey } from "@/components/nav/navData";
import { SITE_URL } from "@/lib/site";
import index from "@/content/design-pages/index.json";
import heads from "@/content/design-pages/heads.json";

/**
 * Pages imported verbatim from the Claude Design export by
 * scripts/import-design.mjs. Each one is a JSON file under
 * src/content/design-pages/<lang>/<slug>.json; edit the design and re-run
 * the importer rather than editing the JSON by hand.
 */
export type DesignLang = "en" | "fr";

export type DesignPage = {
  slug: string;
  lang: DesignLang;
  url: string;
  nav: NavGroupKey | null;
  head: {
    title: string;
    description: string;
    canonical: string;
    alternates: Record<string, string>;
    og: Record<string, string>;
    twitter: Record<string, string>;
  };
  jsonLd: unknown[];
  background: string | null;
  footerBackground: string | null;
  css: string | null;
  html: string;
};

export type DesignPageSummary = { slug: string; lang: DesignLang; url: string; title: string; description: string };

export const DESIGN_PAGES = index as DesignPageSummary[];

const DIR = path.join(process.cwd(), "src/content/design-pages");

export function designSlugs(lang: DesignLang): string[] {
  return DESIGN_PAGES.filter((p) => p.lang === lang).map((p) => p.slug);
}

export function loadDesignPage(lang: DesignLang, slug: string): DesignPage | null {
  if (!designSlugs(lang).includes(slug)) return null;
  return JSON.parse(fs.readFileSync(path.join(DIR, lang, `${slug}.json`), "utf8")) as DesignPage;
}

type DesignHead = Pick<DesignPage, "head" | "jsonLd">;
const HEADS = heads as Record<string, DesignHead>;

/** Head metadata and JSON-LD for a page built by hand from a design component. */
export function designHead(url: string): DesignHead {
  const h = HEADS[url];
  if (!h) throw new Error(`No design head for ${url}; re-run scripts/import-design.mjs`);
  return h;
}

export function designMetadata(page: DesignHead): Metadata {
  const { head } = page;
  const languages = Object.fromEntries(Object.entries(head.alternates).map(([k, v]) => [k, `${SITE_URL}${v}`]));
  return {
    // Design titles are final: some already carry "| ElementPay", some
    // deliberately drop it to stay under 60 characters.
    title: { absolute: head.title },
    description: head.description,
    alternates: {
      canonical: `${SITE_URL}${head.canonical}`,
      ...(Object.keys(languages).length ? { languages } : {}),
    },
    openGraph: {
      type: (head.og.type as "website" | "article") ?? "website",
      siteName: head.og.site_name ?? "ElementPay",
      locale: head.og.locale,
      title: head.og.title ?? head.title,
      description: head.og.description ?? head.description,
      url: head.og.url ?? `${SITE_URL}${head.canonical}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: head.og["image:alt"] }],
    },
    twitter: {
      card: "summary_large_image",
      title: head.twitter.title ?? head.og.title ?? head.title,
      description: head.twitter.description ?? head.og.description ?? head.description,
      images: ["/og-image.png"],
    },
  };
}
