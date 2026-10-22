import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import FaqAccordion from "@/components/shared/FaqAccordion";
import { COLOR, TYPE, fullStopSquare } from "@/lib/brand";
import { COUNTRIES, countryBySlug } from "@/lib/geo/coverage";
import { stablecoinContent } from "@/lib/geo/stablecoinContent";
import { breadcrumbSchema, faqSchema, jsonLdGraph, serviceSchema } from "@/lib/schema";

const STEP_BG = [COLOR.indigo, COLOR.amber, COLOR.violet, COLOR.mint];
const STEP_FG = ["#fff", COLOR.ink, COLOR.ink, COLOR.ink];

export function generateStaticParams() {
  return COUNTRIES.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/stablecoin-payments-in/[country]">): Promise<Metadata> {
  const { country: slug } = await params;
  const country = countryBySlug(slug);
  if (!country) return {};
  const content = stablecoinContent(country);
  const path = `/stablecoin-payments-in-${country.slug}`;
  return {
    title: content.title,
    description: content.description,
    alternates: { canonical: path },
    openGraph: { title: `${content.title} | ElementPay`, description: content.description, url: path, type: "website" },
    twitter: { card: "summary_large_image", title: content.title, description: content.description },
  };
}

export default async function StablecoinCountryPage({ params }: PageProps<"/stablecoin-payments-in/[country]">) {
  const { country: slug } = await params;
  const country = countryBySlug(slug);
  if (!country) notFound();

  const content = stablecoinContent(country);
  const path = `/stablecoin-payments-in-${country.slug}`;

  const relatedLinks = [
    { text: `Send money to ${country.name}`, href: `/send-money-to-${country.slug}` },
    ...(country.hasAccount ? [{ text: `Open a ${country.currencyCode} account`, href: `/open-a-${country.currencyCode.toLowerCase()}-account` }] : []),
    { text: "Stablecoins", href: "/stablecoins" },
    { text: "Talk to sales", href: "/contact" },
  ];

  const jsonLd = jsonLdGraph(
    faqSchema(content.faqs),
    serviceSchema({ name: `Stablecoin payments in ${country.name}`, description: content.description, path }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Coverage", path: "/coverage" },
      { name: content.h1, path },
    ])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EPNav active="Products" />

      <section data-screen-label="Hero" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(48px,7vw,96px) clamp(20px,4vw,48px) clamp(48px,6vw,80px)" }}>
        <nav aria-label="Breadcrumb" style={{ display: "flex", gap: 8, flexWrap: "wrap", fontFamily: "var(--font-label)", fontSize: 13, color: COLOR.slate }}>
          <Link href="/" style={{ color: COLOR.slate }}>Home</Link>
          <span>/</span>
          <Link href="/coverage" style={{ color: COLOR.slate }}>Coverage</Link>
          <span>/</span>
          <span style={{ color: COLOR.indigo }}>{content.h1}</span>
        </nav>
        <Image src={`/flags/${country.iso}.svg`} alt={`Flag of ${country.name}`} width={84} height={56} style={{ width: 84, height: 56, borderRadius: 9, objectFit: "cover", marginTop: 28, boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
        <h1 style={{ ...TYPE.h1Hero, margin: "28px 0 0", maxWidth: "16ch" }}>
          {content.h1}
          <span aria-hidden="true" style={fullStopSquare} />
        </h1>
        <p style={{ fontSize: "clamp(17px,1.4vw,19px)", lineHeight: 1.55, color: COLOR.slate, margin: "24px 0 0", maxWidth: "58ch" }}>{content.intro}</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
          <Link href="/contact" style={{ padding: "16px 26px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: COLOR.indigo, color: "#fff" }}>Talk to sales</Link>
          <Link href={`/send-money-to-${country.slug}`} style={{ padding: "16px 26px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: COLOR.cream, color: COLOR.ink }}>Send money to {country.name} →</Link>
        </div>
      </section>

      <div style={{ background: COLOR.cream }}>
        <section data-screen-label="Use cases" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Cta, margin: 0 }}>What businesses do in {country.name}.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 12, marginTop: 32 }}>
            {content.useCases.map((u) => (
              <div key={u.title} style={{ padding: 28, borderRadius: 24, background: "#fff" }}>
                <h3 style={{ ...TYPE.h3Card, margin: 0 }}>{u.title}</h3>
                <p style={{ fontSize: 16, lineHeight: "25px", color: COLOR.slate, margin: "10px 0 0" }}>{u.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section data-screen-label="How it works" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Cta, margin: 0 }}>How it works.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: 12, marginTop: 32 }}>
            {content.howItWorks.map((s, i) => (
              <div key={s.num} style={{ padding: 28, borderRadius: 28, background: STEP_BG[i], color: STEP_FG[i] }}>
                <span style={{ fontFamily: "var(--font-label)", fontSize: 13, opacity: 0.75 }}>{s.num}</span>
                <h3 style={{ ...TYPE.h3Card, margin: "12px 0 0" }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: "23px", opacity: 0.85, margin: "8px 0 0" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section data-screen-label="Related" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Cta, margin: 0 }}>More on {country.name}.</h2>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 28 }}>
            {relatedLinks.map((l) => (
              <Link key={l.href} href={l.href} style={{ display: "inline-flex", alignItems: "center", minHeight: 44, padding: "0 18px", borderRadius: 999, background: "#fff", color: COLOR.ink, fontWeight: 500, fontSize: 15 }}>
                {l.text}
              </Link>
            ))}
          </div>
        </section>

        <section data-screen-label="FAQ" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Cta, margin: 0 }}>Questions.</h2>
          <div style={{ marginTop: 32, maxWidth: 880 }}>
            <FaqAccordion faqs={content.faqs} />
          </div>
        </section>

        <section data-screen-label="CTA" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) clamp(56px,7vw,88px)" }}>
          <div style={{ borderRadius: 28, background: COLOR.indigo, color: "#fff", padding: "clamp(36px,6vw,80px)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
            <h2 style={{ ...TYPE.h2Cta, margin: 0, maxWidth: "12ch" }}>Start paying in {country.name}.</h2>
            <Link href="/contact" style={{ padding: "16px 28px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: "#fff", color: COLOR.indigo }}>Talk to sales</Link>
          </div>
        </section>
      </div>

      <EPFooter />
    </>
  );
}
