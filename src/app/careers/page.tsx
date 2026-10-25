import type { Metadata } from "next";
import Link from "next/link";
import { getMarketingPage } from "@/lib/marketing/pagesData";
import { breadcrumbSchema, jsonLdGraph } from "@/lib/schema";
import { COLOR, TYPE, fullStopSquare } from "@/lib/brand";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import CareersApplyForm from "@/components/careers/CareersApplyForm";

const page = getMarketingPage("/careers")!;

export const metadata: Metadata = {
  title: page.seo.title,
  description: page.seo.description,
  alternates: { canonical: page.path },
  openGraph: {
    title: `${page.seo.title} | ElementPay`,
    description: page.seo.description,
    url: page.path,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${page.seo.title} | ElementPay`,
    description: page.seo.description,
  },
};

const HOW_WE_WORK: Array<[string, string]> = [
  ["Real money, real care", "Every payment is someone's salary, supplier invoice or stock order. We treat correctness and security as the job."],
  ["Close to the rails", "We work directly with mobile money, banking and stablecoin networks, and learn how each market actually moves money."],
  ["Small team, wide ownership", "People own problems end to end, from the first conversation with a customer to the payment landing."],
  ["Nairobi and beyond", "Our team is based in Nairobi, working with customers and partners across Africa and around the world."],
];

const TEAMS = ["Engineering", "Product and design", "Payments operations", "Compliance and risk", "Sales and partnerships", "Customer success"];

export default function Page() {
  const jsonLd = jsonLdGraph(
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Company", path: "/about" },
      { name: "Careers", path: page.path },
    ])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EPNav active="Company" />

      <section data-screen-label="Careers hero" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(48px,7vw,96px) clamp(20px,4vw,48px) clamp(48px,6vw,80px)" }}>
        <nav aria-label="Breadcrumb" style={{ display: "flex", gap: 8, flexWrap: "wrap", fontFamily: "var(--font-label)", fontSize: 13, color: COLOR.slate }}>
          <Link href="/" style={{ color: COLOR.slate }}>Home</Link>
          <span>/</span>
          <Link href="/about" style={{ color: COLOR.slate }}>Company</Link>
          <span>/</span>
          <span style={{ color: COLOR.indigo }}>Careers</span>
        </nav>
        <h1 style={{ ...TYPE.h1Hero, margin: "28px 0 0", maxWidth: "15ch" }}>
          Build the rails money moves on
          <span aria-hidden="true" style={fullStopSquare} />
        </h1>
        <p style={{ ...TYPE.lede, margin: "24px 0 0", maxWidth: "56ch" }}>
          ElementPay connects mobile money and local banks across Africa to 30 global currencies and to USDC and USDT, for businesses that move money across borders. We are looking for people who want to build that infrastructure with us.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
          <a href="#apply" style={{ padding: "16px 26px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: COLOR.indigo, color: "#fff" }}>
            Apply
          </a>
          <Link href="/about" style={{ padding: "16px 26px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: COLOR.cream, color: COLOR.ink }}>
            About ElementPay →
          </Link>
        </div>
      </section>

      <div style={{ background: COLOR.cream }}>
        <section data-screen-label="How we work" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Section, margin: 0 }}>How we work.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 12, marginTop: 32 }}>
            {HOW_WE_WORK.map(([t, d]) => (
              <div key={t} style={{ padding: 28, borderRadius: 24, background: "#fff", display: "flex", flexDirection: "column", gap: 12 }}>
                <h3 style={{ ...TYPE.h3Feature, margin: 0 }}>{t}</h3>
                <p style={{ fontSize: 15, lineHeight: "23px", color: COLOR.slate, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section data-screen-label="Teams" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Section, margin: 0 }}>Where you could fit.</h2>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 28 }}>
            {TEAMS.map((t) => (
              <span key={t} style={{ display: "inline-flex", alignItems: "center", minHeight: 44, padding: "0 18px", borderRadius: 999, background: "#fff", fontSize: 15, fontWeight: 500 }}>
                {t}
              </span>
            ))}
          </div>
          <p style={{ margin: "20px 0 0", fontSize: 15, lineHeight: 1.6, color: COLOR.slate, maxWidth: "60ch" }}>
            Open roles are posted here when we are hiring. If you don&rsquo;t see one that fits, send a general application and tell us what you would build.
          </p>
        </section>

        <section data-screen-label="Apply" id="apply" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) clamp(64px,8vw,112px)", scrollMarginTop: 80 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "stretch" }}>
            <div style={{ flex: "1 1 300px", minWidth: 0, padding: "clamp(24px,3vw,40px)", borderRadius: 28, background: COLOR.ink, color: COLOR.cream }}>
              <h2 style={{ ...TYPE.h2Section, margin: 0, color: "#fff" }}>Send a general application.</h2>
              <p style={{ margin: "16px 0 0", fontSize: 16, lineHeight: 1.6, color: COLOR.onDark }}>
                Tell us who you are, the team you&rsquo;d join and a link to your work or profile. We read every application.
              </p>
            </div>
            <div style={{ flex: "2 1 480px", minWidth: 0, padding: "clamp(24px,3vw,40px)", borderRadius: 28, background: "#fff" }}>
              <CareersApplyForm />
            </div>
          </div>
        </section>

        <EPFooter />
      </div>
    </>
  );
}
