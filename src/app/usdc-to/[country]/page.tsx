import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StablecoinRampPage, { stablecoinRampMeta, stablecoinRampStaticParams } from "@/components/geo/StablecoinRampPage";

export function generateStaticParams() {
  return stablecoinRampStaticParams("USDC");
}

export async function generateMetadata({
  params,
}: PageProps<"/usdc-to/[country]">): Promise<Metadata> {
  const { country } = await params;
  const meta = stablecoinRampMeta("USDC", country);
  if (!meta) return {};
  const { content, path } = meta;
  return {
    title: content.title,
    description: content.description,
    alternates: { canonical: path },
    openGraph: { title: `${content.title} | ElementPay`, description: content.description, url: path, type: "website" },
    twitter: { card: "summary_large_image", title: content.title, description: content.description },
  };
}

export default async function UsdcToCountryPage({ params }: PageProps<"/usdc-to/[country]">) {
  const { country } = await params;
  const meta = stablecoinRampMeta("USDC", country);
  if (!meta) notFound();
  return <StablecoinRampPage token="USDC" countrySlug={country} />;
}
