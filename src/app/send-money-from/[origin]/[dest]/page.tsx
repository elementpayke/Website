import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { COLOR } from "@/lib/brand";
import { CORRIDORS, corridorsForDest, destCountry, originBySlug } from "@/lib/geo/origins";
import { corridorContent } from "@/lib/geo/corridorContent";
import { breadcrumbSchema, faqSchema, jsonLdGraph, serviceSchema } from "@/lib/schema";
import RoutePageLayout from "@/components/geo/RoutePageLayout";

export function generateStaticParams() {
  return CORRIDORS.map(([origin, dest]) => ({ origin, dest }));
}

export async function generateMetadata({
  params,
}: PageProps<"/send-money-from/[origin]/[dest]">): Promise<Metadata> {
  const { origin: originSlug, dest: destSlug } = await params;
  const origin = originBySlug(originSlug);
  const dest = destCountry(destSlug);
  if (!origin || !dest) return {};
  const content = corridorContent(origin, dest);
  const path = `/send-money-from-${origin.slug}-to-${dest.slug}`;
  return {
    title: content.title,
    description: content.description,
    alternates: { canonical: path },
    openGraph: { title: `${content.title} | ElementPay`, description: content.description, url: path, type: "website" },
    twitter: { card: "summary_large_image", title: content.title, description: content.description },
  };
}

export default async function CorridorPage({ params }: PageProps<"/send-money-from/[origin]/[dest]">) {
  const { origin: originSlug, dest: destSlug } = await params;
  const origin = originBySlug(originSlug);
  const dest = destCountry(destSlug);
  if (!origin || !dest) notFound();

  const content = corridorContent(origin, dest);
  const path = `/send-money-from-${origin.slug}-to-${dest.slug}`;

  const otherOrigins = corridorsForDest(dest.slug).filter((c) => c.origin.slug !== origin.slug);
  const otherDests = CORRIDORS.filter(([o, d]) => o === origin.slug && d !== dest.slug);

  const moreRoutes = [
    {
      href: `/send-money-to-${dest.slug}`,
      label: `All payouts to ${dest.name}`,
      sublabel: `${dest.currencyCode} · ${dest.rails.length} rails`,
      badge: <Image src={`/flags/${dest.iso}.svg`} alt="" width={34} height={23} style={{ width: 34, height: 23, borderRadius: 3, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />,
    },
    ...otherOrigins.slice(0, 4).map((c) => ({
      href: `/send-money-from-${c.origin.slug}-to-${dest.slug}`,
      label: `From ${c.origin.name}`,
      sublabel: `${c.origin.currencyCode} → ${dest.currencyCode}`,
      badge: (
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Image src={`/flags/${c.origin.iso}.svg`} alt="" width={26} height={18} style={{ width: 26, height: 18, borderRadius: 3, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
          <span style={{ color: COLOR.indigo }}>→</span>
          <Image src={`/flags/${dest.iso}.svg`} alt="" width={26} height={18} style={{ width: 26, height: 18, borderRadius: 3, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
        </span>
      ),
    })),
    ...otherDests.slice(0, 4).map(([, d]) => {
      const other = destCountry(d)!;
      return {
        href: `/send-money-from-${origin.slug}-to-${other.slug}`,
        label: `To ${other.name}`,
        sublabel: `${origin.currencyCode} → ${other.currencyCode}`,
        badge: (
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Image src={`/flags/${origin.iso}.svg`} alt="" width={26} height={18} style={{ width: 26, height: 18, borderRadius: 3, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
            <span style={{ color: COLOR.indigo }}>→</span>
            <Image src={`/flags/${other.iso}.svg`} alt="" width={26} height={18} style={{ width: 26, height: 18, borderRadius: 3, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
          </span>
        ),
      };
    }),
  ];

  const jsonLd = jsonLdGraph(
    faqSchema(content.faqs),
    serviceSchema({ name: `Send money from ${origin.name} to ${dest.name}`, description: content.description, path }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Coverage", path: "/coverage" },
      { name: dest.name, path: `/send-money-to-${dest.slug}` },
      { name: `Send money from ${origin.name} to ${dest.name}`, path },
    ])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RoutePageLayout
        content={content}
        dest={dest}
        breadcrumbLabel={`From ${origin.name}`}
        originBadge={<Image src={`/flags/${origin.iso}.svg`} alt={`Flag of ${origin.name}`} width={96} height={64} style={{ width: 96, height: 64, borderRadius: 10, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />}
        originLabel={`Your ${origin.currencyCode} balance`}
        originSub={origin.fundingMethod}
        secondaryCta={{ href: "/exchange-rates", label: "See live rates →" }}
        moreRoutes={moreRoutes}
        ctaHeading={`Start sending to ${dest.name}.`}
        stepsHeading={`How to send money from ${origin.name} to ${dest.name}.`}
      />
    </>
  );
}
