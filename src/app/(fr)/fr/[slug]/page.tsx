import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DesignPageView from "@/components/design/DesignPageView";
import { designMetadata, designSlugs, loadDesignPage } from "@/lib/design/pages";

// French country and stablecoin pages, each paired with its English page
// through hreflang alternates.
export const dynamicParams = false;

export function generateStaticParams() {
  return designSlugs("fr").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/fr/[slug]">): Promise<Metadata> {
  const page = loadDesignPage("fr", (await params).slug);
  return page ? designMetadata(page) : {};
}

export default async function FrenchDesignRoute({ params }: PageProps<"/fr/[slug]">) {
  const page = loadDesignPage("fr", (await params).slug);
  if (!page) notFound();
  return <DesignPageView page={page} />;
}
