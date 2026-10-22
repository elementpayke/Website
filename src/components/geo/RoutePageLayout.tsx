import Link from "next/link";
import Image from "next/image";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import FaqAccordion from "@/components/shared/FaqAccordion";
import { COLOR, TYPE, fullStopSquare } from "@/lib/brand";
import type { Country } from "@/lib/geo/coverage";

type RouteContent = {
  title: string;
  h1: string;
  intro: string;
  quickAnswer: string;
  facts: Array<{ label: string; value: string }>;
  steps: Array<{ num: string; title: string; body: string }>;
  compareRows: Array<{ label: string; bank: string; ep: string }>;
  faqs: Array<{ q: string; a: string }>;
};

type MoreRoute = { href: string; label: string; sublabel: string; badge: React.ReactNode };

export default function RoutePageLayout({
  content,
  dest,
  breadcrumbLabel,
  originBadge,
  originLabel,
  originSub,
  secondaryCta,
  moreRoutes,
  ctaHeading,
  stepsHeading,
}: {
  content: RouteContent;
  dest: Country;
  breadcrumbLabel: string;
  originBadge: React.ReactNode;
  originLabel: string;
  originSub: string;
  secondaryCta: { href: string; label: string };
  moreRoutes: MoreRoute[];
  ctaHeading: string;
  stepsHeading: string;
}) {
  return (
    <>
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
            <Link href={`/send-money-to-${dest.slug}`} style={{ color: COLOR.muted }}>{dest.name}</Link>
            <span>/</span>
            <span style={{ color: COLOR.indigo }}>{breadcrumbLabel}</span>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 32 }}>
            {originBadge}
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 32, color: COLOR.indigo }}>→</span>
            <Image src={`/flags/${dest.iso}.svg`} alt={`Flag of ${dest.name}`} width={96} height={64} style={{ width: 96, height: 64, borderRadius: 10, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
          </div>
          <h1 style={{ ...TYPE.h1Hero, margin: "28px 0 0" }}>
            {content.h1}
            <span aria-hidden="true" style={fullStopSquare} />
          </h1>
          <p style={{ fontSize: "clamp(17px,1.4vw,19px)", lineHeight: 1.55, color: COLOR.slate, margin: "24px 0 0", maxWidth: "50ch" }}>{content.intro}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
            <Link href="/contact" style={{ padding: "16px 26px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: COLOR.indigo, color: "#fff" }}>Talk to sales</Link>
            <Link href={secondaryCta.href} style={{ padding: "16px 26px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: COLOR.cream, color: COLOR.ink }}>{secondaryCta.label}</Link>
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
        <section data-screen-label="Route" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Section, margin: 0 }}>The route.</h2>
          <div style={{ marginTop: 32, padding: "clamp(20px,3vw,36px)", borderRadius: 28, background: COLOR.ink, color: COLOR.cream, overflowX: "auto" }}>
            <div style={{ minWidth: 520, position: "relative", display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
              <div style={{ position: "absolute", left: "16.6%", right: "16.6%", top: 24, borderTop: "2px solid rgba(255,255,255,.35)" }} />
              <div style={{ display: "grid", justifyItems: "center", gap: 8, textAlign: "center", padding: "0 8px", position: "relative" }}>
                {originBadge}
                <span style={{ fontWeight: 600, fontSize: 15 }}>{originLabel}</span>
                <span style={{ fontSize: 13, color: COLOR.onDark }}>{originSub}</span>
              </div>
              <div style={{ display: "grid", justifyItems: "center", gap: 8, textAlign: "center", padding: "0 8px", position: "relative" }}>
                <span style={{ width: 48, height: 48, borderRadius: 14, background: COLOR.indigo, display: "grid", placeItems: "center" }}>
                  <span style={{ width: 18, height: 18, borderRadius: 5, background: "#fff" }} />
                </span>
                <span style={{ fontWeight: 600, fontSize: 15 }}>ElementPay</span>
                <span style={{ fontSize: 13, color: COLOR.onDark }}>Converts to {dest.currencyCode}</span>
              </div>
              <div style={{ display: "grid", justifyItems: "center", gap: 8, textAlign: "center", padding: "0 8px", position: "relative" }}>
                <Image src={`/flags/${dest.iso}.svg`} alt="" width={68} height={48} style={{ width: 68, height: 48, borderRadius: 7, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
                <span style={{ fontWeight: 600, fontSize: 15 }}>{dest.rails[0].name}</span>
                <span style={{ fontSize: 13, color: COLOR.onDark }}>Recipient in {dest.name}</span>
              </div>
            </div>
          </div>
        </section>

        <section data-screen-label="Steps" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Section, margin: 0 }}>{stepsHeading}</h2>
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

        <section data-screen-label="Compare" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Section, margin: 0 }}>Compared with a bank wire.</h2>
          <div style={{ marginTop: 32, borderRadius: 24, background: "#fff", overflowX: "auto" }}>
            <table style={{ width: "100%", minWidth: 520, borderCollapse: "collapse", fontSize: 15 }}>
              <thead>
                <tr style={{ fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".08em", color: COLOR.muted, textAlign: "left" }}>
                  <th style={{ padding: "18px 24px", fontWeight: 500 }} />
                  <th style={{ padding: "18px 24px", fontWeight: 500 }}>BANK WIRE</th>
                  <th style={{ padding: "18px 24px", fontWeight: 500, color: COLOR.indigo }}>ELEMENTPAY</th>
                </tr>
              </thead>
              <tbody>
                {content.compareRows.map((r) => (
                  <tr key={r.label} style={{ borderTop: `1px solid ${COLOR.hairline}` }}>
                    <td style={{ padding: "18px 24px", fontWeight: 600 }}>{r.label}</td>
                    <td style={{ padding: "18px 24px", color: COLOR.muted }}>{r.bank}</td>
                    <td style={{ padding: "18px 24px", fontWeight: 600, color: COLOR.ink }}>{r.ep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section data-screen-label="FAQ" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(24px,4vw,56px)", alignItems: "start" }}>
            <h2 style={{ ...TYPE.h2Section, margin: 0 }}>Common questions.</h2>
            <div style={{ gridColumn: "span 2", minWidth: 0 }}>
              <FaqAccordion faqs={content.faqs} />
            </div>
          </div>
        </section>

        <section data-screen-label="More routes" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Section, margin: 0 }}>More routes.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,260px),1fr))", gap: 10, marginTop: 24 }}>
            {moreRoutes.map((r) => (
              <Link key={r.href} href={r.href} style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 18px", borderRadius: 18, background: "#fff", color: COLOR.ink }}>
                {r.badge}
                <span>
                  <span style={{ display: "block", fontWeight: 600 }}>{r.label}</span>
                  <span style={{ display: "block", fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.muted }}>{r.sublabel}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(80px,10vw,140px) clamp(20px,4vw,48px) clamp(56px,7vw,88px)" }}>
          <div style={{ borderRadius: 28, background: COLOR.indigo, color: "#fff", padding: "clamp(36px,6vw,80px)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <Image src={`/flags/${dest.iso}.svg`} alt="" width={72} height={48} style={{ width: 72, height: 48, borderRadius: 7, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
              <h2 style={{ ...TYPE.h2Cta, margin: 0, maxWidth: "14ch" }}>{ctaHeading}</h2>
            </div>
            <Link href="/contact" style={{ padding: "16px 28px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: "#fff", color: COLOR.indigo }}>Talk to sales</Link>
          </div>
        </section>
      </div>

      <EPFooter />
    </>
  );
}
