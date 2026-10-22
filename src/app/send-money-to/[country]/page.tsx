import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import FaqAccordion from "@/components/shared/FaqAccordion";
import { COLOR, TYPE, fullStopSquare } from "@/lib/brand";
import { COUNTRIES, countryBySlug, regionMates } from "@/lib/geo/coverage";
import { sendMoneyContent } from "@/lib/geo/sendMoneyContent";
import { breadcrumbSchema, faqSchema, jsonLdGraph, serviceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return COUNTRIES.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/send-money-to/[country]">): Promise<Metadata> {
  const { country: slug } = await params;
  const country = countryBySlug(slug);
  if (!country) return {};
  const content = sendMoneyContent(country);
  const path = `/send-money-to-${country.slug}`;
  return {
    title: content.title,
    description: content.description,
    alternates: { canonical: path },
    openGraph: { title: `${content.title} | ElementPay`, description: content.description, url: path, type: "website" },
    twitter: { card: "summary_large_image", title: content.title, description: content.description },
  };
}

export default async function SendMoneyToCountryPage({ params }: PageProps<"/send-money-to/[country]">) {
  const { country: slug } = await params;
  const country = countryBySlug(slug);
  if (!country) notFound();

  const content = sendMoneyContent(country);
  const path = `/send-money-to-${country.slug}`;
  const mates = regionMates(country).slice(0, 4);

  const jsonLd = jsonLdGraph(
    faqSchema(content.faqs),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Coverage", path: "/coverage" },
      { name: country.name, path },
    ]),
    serviceSchema({ name: `Payouts to ${country.name}`, description: content.description, path })
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EPNav active="Resources" />

      <section
        data-screen-label="Hero"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "clamp(48px,7vw,96px) clamp(20px,4vw,48px) clamp(48px,6vw,80px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))",
          gap: "clamp(32px,5vw,72px)",
          alignItems: "start",
        }}
      >
        <div>
          <nav aria-label="Breadcrumb" style={{ display: "flex", gap: 8, flexWrap: "wrap", fontFamily: "var(--font-label)", fontSize: 13, color: COLOR.muted }}>
            <Link href="/" style={{ color: COLOR.muted }}>Home</Link>
            <span>/</span>
            <Link href="/coverage" style={{ color: COLOR.muted }}>Coverage</Link>
            <span>/</span>
            <span style={{ color: COLOR.indigo }}>{country.name}</span>
          </nav>
          <div style={{ marginTop: 32 }}>
            <Image src={`/flags/${country.iso}.svg`} alt={`Flag of ${country.name}`} width={96} height={64} style={{ width: 96, height: 64, borderRadius: 10, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
          </div>
          <h1 style={{ ...TYPE.h1Hero, margin: "28px 0 0" }}>
            {content.h1}
            <span aria-hidden="true" style={fullStopSquare} />
          </h1>
          <p style={{ fontSize: "clamp(17px,1.4vw,19px)", lineHeight: 1.55, color: COLOR.slate, margin: "24px 0 0", maxWidth: "50ch" }}>{content.intro}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
            <Link href="/contact" style={{ padding: "16px 26px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: COLOR.indigo, color: "#fff" }}>Talk to sales</Link>
            <Link href="/payments" style={{ padding: "16px 26px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: COLOR.cream, color: COLOR.ink }}>How payouts work →</Link>
          </div>
          <Link href={`/stablecoin-payments-in-${country.slug}`} style={{ display: "inline-flex", alignItems: "center", minHeight: 44, marginTop: 16, fontWeight: 500, fontSize: 15 }}>
            Stablecoin payments in {country.name} for businesses →
          </Link>
        </div>
        <div style={{ display: "grid", gap: 10 }}>
          <div style={{ padding: 24, borderRadius: 24, background: COLOR.ink, color: COLOR.cream }}>
            <div style={{ fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".12em", color: COLOR.onDark }}>QUICK ANSWER</div>
            <p style={{ fontSize: 18, lineHeight: "28px", margin: "12px 0 0" }}>{content.quickAnswer}</p>
          </div>
          <div style={{ borderRadius: 24, background: COLOR.cream, padding: 8, display: "grid", gap: 4 }}>
            {content.facts.map((f) => (
              <div key={f.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, padding: "16px 18px", borderRadius: 16, background: "#fff" }}>
                <span style={{ fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".06em", textTransform: "uppercase", color: COLOR.muted, flex: "none" }}>{f.label}</span>
                <span style={{ fontWeight: 600, fontSize: 15, textAlign: "right" }}>
                  {f.label === `${country.currencyCode} account` ? <Link href={`/open-a-${country.currencyCode.toLowerCase()}-account`}>{f.value} →</Link> : f.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: COLOR.cream }}>
        <section data-screen-label="Rails" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Cta, margin: 0 }}>Payout rails in {country.name}.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 12, marginTop: 32 }}>
            {country.rails.map((r) => (
              <div key={r.name} style={{ padding: 26, borderRadius: 24, background: "#fff", display: "flex", flexDirection: "column", gap: 12, minHeight: 200 }}>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Image src={`/flags/${country.iso}.svg`} alt="" width={30} height={21} style={{ width: 30, height: 21, borderRadius: 3, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
                  <span style={{ fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 999, background: r.kind === "mobile-money" ? COLOR.tint : COLOR.cream, color: r.kind === "mobile-money" ? COLOR.indigo : COLOR.slate }}>
                    {r.kind === "mobile-money" ? "Mobile money" : "Bank"}
                  </span>
                </span>
                <h3 style={{ ...TYPE.h3Feature, margin: "auto 0 0" }}>{r.name}</h3>
                <p style={{ fontSize: 15, lineHeight: "22px", color: COLOR.slate, margin: 0 }}>{r.desc}</p>
                <span style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.muted }}>{r.format}</span>
              </div>
            ))}
            <Link href="/stablecoins" style={{ padding: 26, borderRadius: 24, background: COLOR.ink, color: COLOR.cream, display: "flex", flexDirection: "column", gap: 12, minHeight: 200 }}>
              <span style={{ display: "flex", gap: 6 }}>
                <span style={{ padding: "4px 10px", borderRadius: 999, background: "#fff", color: COLOR.ink, fontSize: 12, fontWeight: 600 }}>USDC</span>
                <span style={{ padding: "4px 10px", borderRadius: 999, background: "#fff", color: COLOR.ink, fontSize: 12, fontWeight: 600 }}>USDT</span>
              </span>
              <h3 style={{ ...TYPE.h3Feature, margin: "auto 0 0" }}>Stablecoin funded</h3>
              <p style={{ fontSize: 15, lineHeight: "22px", color: COLOR.onDark, margin: 0 }}>Send digital dollars, deliver {country.currencyCode} on any rail above.</p>
            </Link>
          </div>
        </section>

        <section data-screen-label="How to send" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Cta, margin: 0 }}>How to send money to {country.name}.</h2>
          <ol style={{ listStyle: "none", margin: "32px 0 0", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: 12 }}>
            {content.steps.map((s) => (
              <li key={s.num} style={{ padding: 28, borderRadius: 24, background: "#fff", display: "grid", gap: 12, alignContent: "start" }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 52, lineHeight: 1, fontWeight: 700, color: COLOR.violet }}>{s.num}</span>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 26, fontWeight: 700, letterSpacing: "-0.025em" }}>{s.title}</span>
                <span style={{ fontSize: 15, lineHeight: "23px", color: COLOR.slate }}>{s.body}</span>
              </li>
            ))}
          </ol>
        </section>

        <section data-screen-label="About payments" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(24px,4vw,56px)", alignItems: "start" }}>
            <h2 style={{ ...TYPE.h2Cta, margin: 0 }}>Payments in {country.name}.</h2>
            <div style={{ gridColumn: "span 2", minWidth: 0 }}>
              <p style={{ fontSize: 19, lineHeight: "31px", color: "#2A2840", margin: 0 }}>{content.aboutPara}</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 8, marginTop: 24 }}>
                {content.statChips.map((c) => (
                  <div key={c.label} style={{ padding: 16, borderRadius: 16, background: "#fff" }}>
                    <div style={{ fontFamily: "var(--font-label)", fontSize: 11, color: COLOR.muted }}>{c.label}</div>
                    <div style={{ fontWeight: 600, marginTop: 4 }}>{c.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section data-screen-label="FAQ" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(24px,4vw,56px)", alignItems: "start" }}>
            <h2 style={{ ...TYPE.h2Cta, margin: 0 }}>Questions about {country.name}.</h2>
            <div style={{ gridColumn: "span 2", minWidth: 0 }}>
              <FaqAccordion faqs={content.faqs} />
            </div>
          </div>
        </section>

        {mates.length > 0 && (
          <section data-screen-label="Nearby" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
              <h2 style={{ ...TYPE.h2Section, margin: 0 }}>Also in {country.region}.</h2>
              <Link href="/coverage" style={{ fontWeight: 600 }}>All 20 countries →</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,220px),1fr))", gap: 10, marginTop: 24 }}>
              {mates.map((m) => (
                <Link key={m.slug} href={`/send-money-to-${m.slug}`} style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 18px", borderRadius: 18, background: "#fff", color: COLOR.ink }}>
                  <Image src={`/flags/${m.iso}.svg`} alt="" width={34} height={23} style={{ width: 34, height: 23, borderRadius: 3, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
                  <span>
                    <span style={{ display: "block", fontWeight: 600 }}>{m.name}</span>
                    <span style={{ display: "block", fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.muted }}>{m.currencyCode} · {m.rails[0].name}</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(80px,10vw,140px) clamp(20px,4vw,48px) clamp(56px,7vw,88px)" }}>
          <div style={{ borderRadius: 28, background: COLOR.indigo, color: "#fff", padding: "clamp(36px,6vw,80px)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <Image src={`/flags/${country.iso}.svg`} alt="" width={72} height={48} style={{ width: 72, height: 48, borderRadius: 7, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
              <h2 style={{ ...TYPE.h2Cta, margin: 0, maxWidth: "14ch" }}>Start paying {country.name}.</h2>
            </div>
            <Link href="/contact" style={{ padding: "16px 28px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: "#fff", color: COLOR.indigo }}>Talk to sales</Link>
          </div>
        </section>
      </div>

      <EPFooter />
    </>
  );
}
