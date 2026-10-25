import Image from "next/image";
import Link from "next/link";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import DesignJsonLd from "@/components/design/DesignJsonLd";
import HelpCentre from "./HelpCentre";
import { hover } from "@/lib/design/pseudo";
import {
  ABOUT,
  ACCOUNT_CURRENCIES,
  COMPANY_HERO,
  COMPANY_PATH,
  COMPANY_TABS,
  PAYOUT_COUNTRIES,
  WHY_COMPARE,
  WHY_PILLARS,
  type CompanySlug,
} from "@/lib/company/companyData";

const wrap = { maxWidth: 1240, margin: "0 auto" } as const;
const pad = (top: string, bottom = "0") => ({ ...wrap, padding: `${top} clamp(20px,4vw,48px) ${bottom}` });
const h2 = { fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 1.5vw + 22px, 44px)", lineHeight: 0.95, letterSpacing: "-0.04em", fontWeight: 700, margin: 0 } as const;
const num = (i: number) => String(i + 1).padStart(2, "0");

function About() {
  return (
    <>
      <section data-screen-label="Flag wall" style={{ background: "#131126", color: "#F6F4EF" }}>
        <div style={pad("clamp(56px,7vw,96px)", "clamp(56px,7vw,96px)")}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: 24 }}>
            {ABOUT.nums.map(([v, k]) => (
              <div key={k}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(33px,3.65vw,49px)", lineHeight: 1, fontWeight: 700, letterSpacing: "-0.04em" }}>{v}</div>
                <div style={{ fontSize: 15, color: "#B4B1D0", marginTop: 8 }}>{k}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(110px,1fr))", gap: 8, marginTop: 48 }}>
            {PAYOUT_COUNTRIES.map(([iso, n]) => (
              <div key={iso} style={{ padding: 12, borderRadius: 14, background: "rgba(255,255,255,.07)", display: "grid", gap: 8 }}>
                <Image src={`/flags/${iso}.svg`} alt="" width={120} height={80} style={{ width: "100%", height: "auto", aspectRatio: "3/2", borderRadius: 6, objectFit: "cover" }} />
                <span style={{ fontSize: 13, color: "#DCDAFB" }}>{n}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 20, alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-label)", fontSize: 12, color: "#8E8BAB", marginRight: 6 }}>ACCOUNTS IN</span>
            {ACCOUNT_CURRENCIES.map(([c, iso]) => (
              <span key={c} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 9px", borderRadius: 8, background: "rgba(255,255,255,.07)", fontFamily: "var(--font-label)", fontSize: 12 }}>
                <Image src={`/flags/${iso}.svg`} alt="" width={16} height={11} style={{ width: 16, height: 11, borderRadius: 2, objectFit: "cover" }} />
                {c}
              </span>
            ))}
            {["USDC", "USDT"].map((c) => (
              <span key={c} style={{ padding: "6px 9px", borderRadius: 8, background: "#fff", color: "#131126", fontFamily: "var(--font-label)", fontSize: 12, fontWeight: 600 }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>
      <div style={{ background: "#F6F4EF" }}>
        <section
          data-screen-label="Stack"
          style={{ ...pad("clamp(64px,8vw,112px)"), display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(24px,4vw,56px)", alignItems: "start" }}
        >
          <div>
            <h2 style={h2}>How we&apos;re built.</h2>
            <p style={{ fontSize: 16, lineHeight: "25px", color: "#4C4A66", margin: "20px 0 0", maxWidth: "38ch" }}>
              Four layers, owned end to end. Each product you use sits on the same ledger, liquidity and local connections.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 8, gridColumn: "span 2", minWidth: 0 }}>
            {ABOUT.layers.map(([t, d, bg, c], i) => (
              <div key={t} style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 16, alignItems: "start", padding: "24px 28px", borderRadius: 22, background: bg, color: c, marginLeft: `${i * 4}%` }}>
                <span style={{ fontFamily: "var(--font-label)", fontSize: 12, opacity: 0.7 }}>{num(i)}</span>
                <span style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 6 }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em" }}>{t}</span>
                  <span style={{ fontSize: 15, lineHeight: "22px", opacity: 0.8 }}>{d}</span>
                </span>
              </div>
            ))}
          </div>
        </section>
        <section data-screen-label="Principles" style={pad("clamp(64px,8vw,112px)")}>
          <h2 style={h2}>What we hold ourselves to.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: 12, marginTop: 32 }}>
            {ABOUT.principles.map(([t, d], i) => (
              <div key={t} style={{ padding: 32, borderRadius: 24, background: "#fff", display: "grid", gap: 14 }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 51, lineHeight: 1, fontWeight: 700, color: "#3B2ED3" }}>{num(i)}</span>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 28, lineHeight: 1.05, fontWeight: 700, letterSpacing: "-0.025em" }}>{t}</span>
                <span style={{ fontSize: 15, lineHeight: "23px", color: "#4C4A66" }}>{d}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

function Why() {
  const row = { display: "grid", gridTemplateColumns: "1fr 1.2fr 1.2fr", gap: 16, padding: "18px 24px" } as const;
  return (
    <>
      <section data-screen-label="Why pillars" style={{ background: "#131126", color: "#F6F4EF" }}>
        <div style={pad("clamp(56px,7vw,96px)", "clamp(56px,7vw,96px)")}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 12 }}>
            {WHY_PILLARS.map(([c, t, d]) => (
              <div key={t} style={{ padding: 28, borderRadius: 24, background: "rgba(255,255,255,.06)", display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ width: 12, height: 12, background: c }} />
                <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "clamp(19px, 0.45vw + 17px, 24px)", fontWeight: 700, letterSpacing: "-0.02em" }}>{t}</h3>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "#B4B1D0" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div style={{ background: "#F6F4EF" }}>
        <section data-screen-label="Compare" style={pad("clamp(64px,8vw,112px)")}>
          <h2 style={h2}>Compared with a bank wire.</h2>
          <div style={{ marginTop: 32, borderRadius: 24, background: "#fff", overflowX: "auto" }}>
            <div style={{ minWidth: 560 }}>
              <div style={{ ...row, fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".08em", color: "#6E6C8A" }}>
                <span />
                <span>BANK WIRE</span>
                <span style={{ color: "#3B2ED3" }}>ELEMENTPAY</span>
              </div>
              {WHY_COMPARE.map(([k, a, b]) => (
                <div key={k} style={{ ...row, borderTop: "1px solid #EEEDE8", fontSize: 15, alignItems: "center" }}>
                  <span style={{ fontWeight: 600 }}>{k}</span>
                  <span style={{ color: "#6E6C8A" }}>{a}</span>
                  <span style={{ fontWeight: 600, color: "#131126" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section data-screen-label="Trust" style={pad("clamp(64px,8vw,112px)")}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: 24, alignItems: "center", padding: "clamp(28px,4vw,48px)", borderRadius: 28, background: "#fff" }}>
            <div>
              <h2 style={h2}>Verified, partnered, accountable.</h2>
              <p style={{ margin: "16px 0 0", fontSize: 16, lineHeight: 1.6, color: "#4C4A66", maxWidth: "52ch" }}>
                ElementPay is a financial technology company, not a bank. Banking services are provided by licensed partner institutions, and every customer goes through business verification.
              </p>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link
                href="/security-and-compliance"
                className={hover("background:#3B2ED3;color:#fff")}
                style={{ display: "inline-flex", alignItems: "center", minHeight: 48, padding: "0 22px", borderRadius: 999, background: "#131126", color: "#fff", fontWeight: 600, fontSize: 15 }}
              >
                How we protect funds →
              </Link>
              <Link
                href="/contact"
                className={hover("background:#ECEAE4;color:#131126")}
                style={{ display: "inline-flex", alignItems: "center", minHeight: 48, padding: "0 22px", borderRadius: 999, background: "#F6F4EF", color: "#131126", fontWeight: 600, fontSize: 15 }}
              >
                Talk to sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function Help() {
  const card = { display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 6, padding: 28, borderRadius: 22 } as const;
  const title = { fontFamily: "var(--font-heading)", fontSize: 26, fontWeight: 700 } as const;
  return (
    <div style={{ background: "#F6F4EF" }}>
      <HelpCentre />
      <section style={{ ...pad("clamp(56px,7vw,96px)"), display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 12 }}>
        <Link href="/contact" className={hover("background:#2A1FB0;color:#fff")} style={{ ...card, background: "#3B2ED3", color: "#fff" }}>
          <span style={title}>Contact support →</span>
          <span style={{ fontSize: 14, color: "#E6E4FF" }}>Replies within one business day.</span>
        </Link>
        <Link href="/status" className={hover("background:#ECEAE4;color:#131126")} style={{ ...card, background: "#fff", color: "#131126" }}>
          <span style={title}>System status →</span>
          <span style={{ fontSize: 14, color: "#4C4A66" }}>Live uptime for every rail.</span>
        </Link>
        <a href="https://docs.elementpay.net/" target="_blank" rel="noopener" className={hover("background:#ECEAE4;color:#131126")} style={{ ...card, background: "#fff", color: "#131126" }}>
          <span style={title}>Developer docs →</span>
          <span style={{ fontSize: 14, color: "#4C4A66" }}>Guides and API reference.</span>
        </a>
      </section>
    </div>
  );
}

/** About, Why ElementPay and Help centre (design: Company.dc.html). */
export default function CompanyPage({ page }: { page: CompanySlug }) {
  const h = COMPANY_HERO[page];
  return (
    <>
      <DesignJsonLd url={COMPANY_PATH[page]} />
      <div style={{ position: "sticky", top: 0, zIndex: 30 }}>
        <EPNav active={h.group} />
      </div>

      <section data-screen-label="Company hero" style={pad("clamp(48px,7vw,96px)", "clamp(40px,5vw,64px)")}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", fontFamily: "var(--font-label)", fontSize: 13, color: "#6E6C8A" }}>
          <Link href="/" style={{ color: "#6E6C8A" }}>
            Home
          </Link>
          <span>/</span>
          <span>{h.group}</span>
          <span>/</span>
          <span style={{ color: "#3B2ED3" }}>{h.name}</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(34px, 2.2vw + 26px, 58px)", lineHeight: 0.93, letterSpacing: "-0.05em", fontWeight: 700, margin: "24px 0 0", maxWidth: "15ch" }}>
          {h.title.replace(/\.$/, "")}
          <span aria-hidden="true" style={{ display: "inline-block", width: ".2em", height: ".2em", marginLeft: ".06em", background: "#FFB224" }} />
        </h1>
        <p style={{ fontSize: "clamp(17px,1.5vw,20px)", lineHeight: 1.55, color: "#4C4A66", margin: "24px 0 0", maxWidth: "56ch" }}>{h.lede}</p>
      </section>

      {page === "about" && <About />}
      {page === "why" && <Why />}
      {page === "help" && <Help />}

      <div style={{ background: "#F6F4EF" }}>
        <section style={{ ...pad("clamp(64px,8vw,112px)"), display: "flex", gap: 6, flexWrap: "wrap" }}>
          {COMPANY_TABS.map(([k, n]) => (
            <Link key={k} href={COMPANY_PATH[k]} style={{ padding: "10px 16px", borderRadius: 999, fontSize: 14, fontWeight: 500, background: k === page ? "#131126" : "#fff", color: k === page ? "#fff" : "#131126" }}>
              {n}
            </Link>
          ))}
        </section>
        <EPFooter />
      </div>
    </>
  );
}
