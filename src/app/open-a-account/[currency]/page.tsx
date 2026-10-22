import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import FaqAccordion from "@/components/shared/FaqAccordion";
import { COLOR, TYPE, fullStopSquare } from "@/lib/brand";
import { accountCurrencies } from "@/lib/geo/coverage";
import { accountContent } from "@/lib/geo/accountContent";
import { breadcrumbSchema, faqSchema, jsonLdGraph } from "@/lib/schema";

export function generateStaticParams() {
  return accountCurrencies().map((c) => ({ currency: c.code.toLowerCase() }));
}

function findCurrency(code: string) {
  return accountCurrencies().find((c) => c.code.toLowerCase() === code.toLowerCase());
}

export async function generateMetadata({
  params,
}: PageProps<"/open-a-account/[currency]">): Promise<Metadata> {
  const { currency: code } = await params;
  const currency = findCurrency(code);
  if (!currency) return {};
  const content = accountContent(currency);
  const path = `/open-a-${currency.code.toLowerCase()}-account`;
  return {
    title: content.title,
    description: content.description,
    alternates: { canonical: path },
    openGraph: { title: `${content.title} | ElementPay`, description: content.description, url: path, type: "website" },
    twitter: { card: "summary_large_image", title: content.title, description: content.description },
  };
}

export default async function OpenAccountPage({ params }: PageProps<"/open-a-account/[currency]">) {
  const { currency: code } = await params;
  const currency = findCurrency(code);
  if (!currency) notFound();

  const content = accountContent(currency);
  const path = `/open-a-${currency.code.toLowerCase()}-account`;
  const others = accountCurrencies().filter((c) => c.code !== currency.code);

  const jsonLd = jsonLdGraph(
    faqSchema(content.faqs),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Business accounts", path: "/business-accounts" },
      { name: `${currency.code} account`, path },
    ]),
    {
      "@type": "FinancialProduct",
      name: `${currency.code} business account`,
      provider: { "@id": "https://www.elementpay.net/#org" },
    }
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EPNav active="Products" />

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
            <Link href="/business-accounts" style={{ color: COLOR.muted }}>Business accounts</Link>
            <span>/</span>
            <span style={{ color: COLOR.indigo }}>{currency.code} account</span>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 32 }}>
            <Image src={`/flags/${currency.flagIso}.svg`} alt={currency.name} width={96} height={64} style={{ width: 96, height: 64, borderRadius: 10, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em" }}>{currency.code}</span>
          </div>
          <h1 style={{ ...TYPE.h1Hero, margin: "28px 0 0" }}>
            {content.h1}
            <span aria-hidden="true" style={fullStopSquare} />
          </h1>
          <p style={{ fontSize: "clamp(17px,1.4vw,19px)", lineHeight: 1.55, color: COLOR.slate, margin: "24px 0 0", maxWidth: "50ch" }}>{content.intro}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
            <Link href="/contact" style={{ padding: "16px 26px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: COLOR.indigo, color: "#fff" }}>Open a {currency.code} account</Link>
            <Link href="/coverage" style={{ padding: "16px 26px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: COLOR.cream, color: COLOR.ink }}>All 30 currencies →</Link>
          </div>
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
                <span style={{ fontWeight: 600, fontSize: 15, textAlign: "right" }}>{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: COLOR.cream }}>
        <section data-screen-label="Uses" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Section, margin: 0 }}>What you can do with {currency.code}.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 12, marginTop: 32 }}>
            {content.uses.map((u) => (
              <div key={u.num} style={{ padding: 28, borderRadius: 24, background: "#fff", display: "flex", flexDirection: "column", gap: 12, minHeight: 200 }}>
                <span style={{ fontFamily: "var(--font-label)", fontSize: 13, color: COLOR.indigo }}>{u.num}</span>
                <h3 style={{ ...TYPE.h3Feature, margin: 0 }}>{u.title}</h3>
                <p style={{ fontSize: 15, lineHeight: "23px", color: COLOR.slate, margin: 0 }}>
                  {u.body} {u.link && <Link href={u.link.href}>{u.link.text}</Link>}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section data-screen-label="FAQ" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(24px,4vw,56px)", alignItems: "start" }}>
            <h2 style={{ ...TYPE.h2Section, margin: 0 }}>About {currency.code} accounts.</h2>
            <div style={{ gridColumn: "span 2", minWidth: 0 }}>
              <FaqAccordion faqs={content.faqs} />
            </div>
          </div>
        </section>

        <section data-screen-label="Other currencies" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Section, margin: 0 }}>Other account currencies.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(110px,1fr))", gap: 8, marginTop: 24 }}>
            {others.map((c) => (
              <Link key={c.code} href={`/open-a-${c.code.toLowerCase()}-account`} style={{ display: "flex", alignItems: "center", gap: 8, padding: 12, borderRadius: 14, background: "#fff", color: COLOR.ink, fontFamily: "var(--font-label)", fontSize: 14, fontWeight: 500 }}>
                <Image src={`/flags/${c.flagIso}.svg`} alt="" width={24} height={16} style={{ width: 24, height: 16, borderRadius: 3, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
                {c.code}
              </Link>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(80px,10vw,140px) clamp(20px,4vw,48px) clamp(56px,7vw,88px)" }}>
          <div style={{ borderRadius: 28, background: COLOR.indigo, color: "#fff", padding: "clamp(36px,6vw,80px)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <Image src={`/flags/${currency.flagIso}.svg`} alt="" width={72} height={48} style={{ width: 72, height: 48, borderRadius: 7, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
              <h2 style={{ ...TYPE.h2Cta, margin: 0, maxWidth: "14ch" }}>Open your {currency.code} account.</h2>
            </div>
            <Link href="/contact" style={{ padding: "16px 28px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: "#fff", color: COLOR.indigo }}>Talk to sales</Link>
          </div>
        </section>
      </div>

      <EPFooter />
    </>
  );
}
