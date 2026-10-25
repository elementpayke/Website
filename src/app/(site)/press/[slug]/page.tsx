import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PressRelease } from "@/components/press/PressPages";
import { designHead, designMetadata } from "@/lib/design/pages";
import { RELEASES, releasePath } from "@/lib/press/releases";

export const dynamicParams = false;

export function generateStaticParams() {
  return RELEASES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps<"/press/[slug]">): Promise<Metadata> {
  return designMetadata(designHead(releasePath((await params).slug)));
}

export default async function ReleasePage({ params }: PageProps<"/press/[slug]">) {
  const { slug } = await params;
  const release = RELEASES.find((r) => r.slug === slug);
  if (!release) notFound();
  return <PressRelease release={release} />;
}
