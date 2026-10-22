import Image from "next/image";
import { COLOR } from "@/lib/brand";
import { STABLECOIN_RAMP_COUNTRIES, destCountry } from "@/lib/geo/origins";
import { stablecoinRampContent } from "@/lib/geo/stablecoinRampContent";
import { breadcrumbSchema, faqSchema, jsonLdGraph, serviceSchema } from "@/lib/schema";
import RoutePageLayout from "@/components/geo/RoutePageLayout";

const TOKEN_BADGE = (
  <span style={{ width: 64, height: 64, borderRadius: "50%", background: COLOR.ink, color: "#fff", display: "grid", placeItems: "center", fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 700 }}>
    $
  </span>
);

export function stablecoinRampStaticParams(token: "USDC" | "USDT") {
  return STABLECOIN_RAMP_COUNTRIES[token].map((country) => ({ country }));
}

export function stablecoinRampMeta(token: "USDC" | "USDT", countrySlug: string) {
  const dest = destCountry(countrySlug);
  if (!dest || !STABLECOIN_RAMP_COUNTRIES[token].includes(countrySlug)) return null;
  const content = stablecoinRampContent(token, dest);
  const path = `/${token.toLowerCase()}-to-${dest.slug}`;
  return { content, dest, path };
}

export default function StablecoinRampPage({ token, countrySlug }: { token: "USDC" | "USDT"; countrySlug: string }) {
  const dest = destCountry(countrySlug)!;
  const content = stablecoinRampContent(token, dest);
  const path = `/${token.toLowerCase()}-to-${dest.slug}`;
  const otherToken = token === "USDC" ? "USDT" : "USDC";
  const otherTokenAvailable = STABLECOIN_RAMP_COUNTRIES[otherToken].includes(countrySlug);

  const moreRoutes = [
    {
      href: `/send-money-to-${dest.slug}`,
      label: `All payouts to ${dest.name}`,
      sublabel: `${dest.currencyCode} · ${dest.rails.length} rails`,
      badge: <Image src={`/flags/${dest.iso}.svg`} alt="" width={34} height={23} style={{ width: 34, height: 23, borderRadius: 3, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />,
    },
    {
      href: `/stablecoin-payments-in-${dest.slug}`,
      label: `Stablecoin payments in ${dest.name}`,
      sublabel: "USDC · USDT",
      badge: <Image src={`/flags/${dest.iso}.svg`} alt="" width={34} height={23} style={{ width: 34, height: 23, borderRadius: 3, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />,
    },
    ...(otherTokenAvailable
      ? [
          {
            href: `/${otherToken.toLowerCase()}-to-${dest.slug}`,
            label: `${otherToken} to ${dest.currencyCode}`,
            sublabel: `${otherToken} → ${dest.currencyCode}`,
            badge: TOKEN_BADGE,
          },
        ]
      : []),
  ];

  const jsonLd = jsonLdGraph(
    faqSchema(content.faqs),
    serviceSchema({ name: `${token} to ${dest.currencyCode} in ${dest.name}`, description: content.description, path }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Coverage", path: "/coverage" },
      { name: dest.name, path: `/send-money-to-${dest.slug}` },
      { name: token, path },
    ])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RoutePageLayout
        content={content}
        dest={dest}
        breadcrumbLabel={token}
        originBadge={TOKEN_BADGE}
        originLabel={`Your ${token} balance`}
        originSub="Any supported network"
        secondaryCta={{ href: "/elementpay-dapp", label: "Open the dApp →" }}
        moreRoutes={moreRoutes}
        ctaHeading={`Start paying ${dest.name}.`}
        stepsHeading={`How to convert ${token} to ${dest.currencyCode}.`}
      />
    </>
  );
}

