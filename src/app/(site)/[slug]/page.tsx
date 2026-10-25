import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DesignPageView from "@/components/design/DesignPageView";
import { designMetadata, designSlugs, loadDesignPage } from "@/lib/design/pages";

// Static marketing, country, corridor, account and stablecoin pages imported
// from the design export (scripts/import-design.mjs). Explicit route folders
// take precedence over this segment.
export const dynamicParams = false;

export function generateStaticParams() {
  return designSlugs("en").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const page = loadDesignPage("en", (await params).slug);
  return page ? designMetadata(page) : {};
}

export default async function DesignRoute({ params }: PageProps<"/[slug]">) {
  const page = loadDesignPage("en", (await params).slug);
  if (!page) notFound();
  return <DesignPageView page={page} />;
}
