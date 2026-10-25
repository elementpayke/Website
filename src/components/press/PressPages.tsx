import Image from "next/image";
import Link from "next/link";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import DesignJsonLd from "@/components/design/DesignJsonLd";
import MediaEnquiry from "./MediaEnquiry";
import { hover } from "@/lib/design/pseudo";
import { ARTICLES } from "@/lib/blog/articles";
import { RELEASES, releasePath, type Release } from "@/lib/press/releases";

// Design: Press.dc.html and PressView.dc.html.
export const BOILERPLATE =
  "ElementPay builds payment rails for emerging markets. Businesses use one API and dashboard to pay out to mobile money and banks in 20 African countries, hold bank accounts in 30 currencies and convert between them and USDC and USDT.";

const FACTS: Array<[string, string, string]> = [
  ["Payout countries", "20", "Across East, West, Central and Southern Africa"],
  ["Account currencies", "30", "Bank accounts issued one per currency"],
  ["Stablecoins", "USDC · USDT", "On- and off-ramps to mobile money and banks"],
  ["Typical payout", "34s", "Mobile money delivery, including weekends"],
  ["Products", "4", "Mboka, merchant dashboard, API and dApp"],
];
const SWATCHES = ["#3B2ED3", "#131126", "#F6F4EF", "#131126"];

const wrap = { maxWidth: 1240, margin: "0 auto" } as const;
const pad = (top: string) => ({ ...wrap, padding: `${top} clamp(20px,4vw,48px) 0` });
const h2 = { fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 1.5vw + 22px, 44px)", lineHeight: 0.95, letterSpacing: "-0.04em", fontWeight: 700, margin: 0 } as const;
const mono = { fontFamily: "var(--font-label)" } as const;
const square = <span aria-hidden="true" style={{ display: "inline-block", width: ".2em", height: ".2em", marginLeft: ".06em", background: "#FFB224" }} />;

function Shell({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <>
      <DesignJsonLd url={url} />
      <div style={{ position: "sticky", top: 0, zIndex: 30 }}>
        <EPNav active="Company" />
      </div>
      {children}
      <MediaEnquiry />
      <EPFooter />
    </>
  );
}

function RequestLink() {
  return (
    <a href="#media" style={{ fontWeight: 600, fontSize: 14 }}>
      Request
    </a>
  );
}

function Mark({ dark }: { dark?: boolean }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 8, color: dark ? "#fff" : undefined }}>
      <span style={{ width: 24, height: 24, borderRadius: 7, background: dark ? "#fff" : "#3B2ED3", display: "grid", placeItems: "center" }}>
        <span style={{ width: 10, height: 10, borderRadius: 3, background: dark ? "#3B2ED3" : "#fff" }} />
      </span>
      <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16 }}>ElementPay</span>
    </span>
  );
}

export function Newsroom() {
  const [latest, ...rest] = RELEASES;
  const card = { borderRadius: 22, background: "#fff", padding: 24, display: "grid", gap: 16 } as const;
  const assetRow = (title: string, sub: string) => (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span>
        <span style={{ display: "block", fontWeight: 600 }}>{title}</span>
        <span style={{ display: "block", fontSize: 13, color: "#6E6C8A" }}>{sub}</span>
      </span>
      <RequestLink />
    </div>
  );
  return (
    <Shell url="/press">
      <section data-screen-label="Newsroom hero" style={{ ...wrap, padding: "clamp(48px,7vw,96px) clamp(20px,4vw,48px) clamp(48px,6vw,80px)" }}>
        <div style={{ display: "flex", gap: 8, ...mono, fontSize: 13, color: "#6E6C8A" }}>
          <Link href="/" style={{ color: "#6E6C8A" }}>
            Home
          </Link>
          <span>/</span>
          <span>Company</span>
          <span>/</span>
          <span style={{ color: "#3B2ED3" }}>Press</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: "clamp(32px,5vw,72px)", marginTop: 24, alignItems: "end" }}>
          <div>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(34px, 2.2vw + 26px, 58px)", lineHeight: 0.9, letterSpacing: "-0.05em", fontWeight: 700, margin: 0 }}>
              Newsroom
              {square}
            </h1>
            <p style={{ fontSize: "clamp(17px,1.4vw,19px)", lineHeight: 1.55, color: "#4C4A66", margin: "24px 0 0", maxWidth: "44ch" }}>
              Announcements, company facts and brand assets for journalists covering payments, mobile money and stablecoins in emerging markets.
            </p>
          </div>
          <Link
            href={releasePath(latest.slug)}
            className={hover("background:#2A1FB0;color:#fff")}
            style={{ display: "flex", flexDirection: "column", gap: 14, padding: "clamp(24px,3vw,36px)", borderRadius: 28, background: "#131126", color: "#F6F4EF" }}
          >
            <span style={{ display: "flex", justifyContent: "space-between", gap: 12, ...mono, fontSize: 12, color: "#B4B1D0" }}>
              <span>LATEST RELEASE</span>
              <span>{latest.date}</span>
            </span>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px,2.4vw,32px)", lineHeight: 1.04, letterSpacing: "-0.03em", fontWeight: 700 }}>{latest.title}</span>
            <span style={{ fontSize: 16, lineHeight: "25px", color: "#B4B1D0" }}>{latest.desc}</span>
            <span style={{ fontWeight: 600 }}>Read the release →</span>
          </Link>
        </div>
      </section>

      <div style={{ background: "#F6F4EF" }}>
        <section data-screen-label="Releases" style={pad("clamp(64px,8vw,112px)")}>
          <h2 style={h2}>Press releases.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", marginTop: 32, borderRadius: 24, background: "#fff", overflow: "hidden" }}>
            {rest.map((r) => (
              <Link
                key={r.slug}
                href={releasePath(r.slug)}
                className={hover("background:#FBFAF7;color:#3B2ED3")}
                style={{ display: "grid", gridTemplateColumns: "minmax(0,140px) minmax(0,1fr) auto", gap: 24, alignItems: "center", padding: "24px 28px", borderTop: "1px solid #EEEDE8", color: "#131126" }}
              >
                <span style={{ ...mono, fontSize: 13, color: "#6E6C8A" }}>{r.date}</span>
                <span>
                  <span style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "clamp(20px,2vw,26px)", lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 700 }}>{r.title}</span>
                  <span style={{ display: "block", fontSize: 15, lineHeight: "22px", color: "#4C4A66", marginTop: 6 }}>{r.desc}</span>
                </span>
                <span style={{ fontSize: 20, color: "#3B2ED3" }}>→</span>
              </Link>
            ))}
          </div>
        </section>

        <section data-screen-label="Fact sheet" style={pad("clamp(64px,8vw,112px)")}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <h2 style={h2}>Fact sheet.</h2>
            <p style={{ fontSize: 16, lineHeight: "25px", color: "#4C4A66", margin: 0, maxWidth: "40ch" }}>Figures you can quote. Updated October 2026.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: 10, marginTop: 32 }}>
            {FACTS.map(([k, v, d]) => (
              <div key={k} style={{ padding: 24, borderRadius: 22, background: "#fff", display: "flex", flexDirection: "column", gap: 8, minHeight: 150 }}>
                <span style={{ ...mono, fontSize: 12, letterSpacing: ".06em", textTransform: "uppercase", color: "#6E6C8A" }}>{k}</span>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px,2.4vw,32px)", lineHeight: 1, letterSpacing: "-0.03em", fontWeight: 700, marginTop: "auto" }}>{v}</span>
                <span style={{ fontSize: 14, lineHeight: "20px", color: "#4C4A66" }}>{d}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 10, padding: 28, borderRadius: 22, background: "#131126", color: "#F6F4EF" }}>
            <div style={{ ...mono, fontSize: 12, letterSpacing: ".12em", color: "#8E8BAB" }}>BOILERPLATE</div>
            <p style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(20px,2.2vw,28px)", lineHeight: 1.25, letterSpacing: "-0.015em", fontWeight: 500, margin: "12px 0 0", maxWidth: "60ch" }}>{BOILERPLATE}</p>
          </div>
        </section>

        <section data-screen-label="Brand assets" style={pad("clamp(64px,8vw,112px)")}>
          <h2 style={h2}>Brand assets.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: 10, marginTop: 32 }}>
            <div style={card}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                <div style={{ aspectRatio: "4/3", borderRadius: 14, background: "#F6F4EF", display: "grid", placeItems: "center" }}>
                  <Mark />
                </div>
                <div style={{ aspectRatio: "4/3", borderRadius: 14, background: "#131126", display: "grid", placeItems: "center" }}>
                  <Mark dark />
                </div>
              </div>
              {assetRow("Logo pack", "SVG and PNG, light and dark")}
            </div>
            <div style={card}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6 }}>
                {SWATCHES.map((hex, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 6 }}>
                    <span style={{ aspectRatio: "1", borderRadius: 10, background: hex, boxShadow: "inset 0 0 0 1px rgba(19,17,38,.08)" }} />
                    <span style={{ ...mono, fontSize: 11, color: "#6E6C8A" }}>{hex}</span>
                  </div>
                ))}
              </div>
              {assetRow("Brand colours", "Indigo, deep indigo, paper, ink")}
            </div>
            <div style={card}>
              <div style={{ aspectRatio: "8/3", borderRadius: 14, background: "#F6F4EF", padding: 16, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 34, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>Aa Bricolage</span>
                <span style={{ fontSize: 15, color: "#4C4A66", marginTop: 6 }}>Geist for interface and body text</span>
              </div>
              {assetRow("Typography and screenshots", "Dashboard, API, dApp and Mboka")}
            </div>
          </div>
        </section>

        <section data-screen-label="From the blog" style={pad("clamp(64px,8vw,112px)")}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <h2 style={h2}>Background reading.</h2>
            <Link href="/blog" style={{ fontWeight: 600 }}>
              All guides →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: 12, marginTop: 32 }}>
            {ARTICLES.slice(0, 3).map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className={hover("color:#3B2ED3")} style={{ display: "flex", flexDirection: "column", gap: 12, padding: 24, borderRadius: 22, background: "#fff", color: "#131126" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Image src={`/flags/${a.flag}.svg`} alt="" width={28} height={20} style={{ width: 28, height: 20, borderRadius: 4, objectFit: "cover" }} />
                  <span style={{ ...mono, fontSize: 12, color: "#6E6C8A" }}>
                    {a.cat} · {a.read}
                  </span>
                </span>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 22, lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 700 }}>{a.title}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Shell>
  );
}

export function PressRelease({ release: rel }: { release: Release }) {
  const others = RELEASES.filter((r) => r !== rel).slice(0, 3);
  return (
    <Shell url={releasePath(rel.slug)}>
      <article data-screen-label="Release" style={{ maxWidth: 860, margin: "0 auto", padding: "clamp(40px,6vw,80px) clamp(20px,4vw,48px) 0" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", ...mono, fontSize: 13, color: "#6E6C8A" }}>
          <Link href="/press" style={{ color: "#6E6C8A" }}>
            Newsroom
          </Link>
          <span>/</span>
          <span style={{ color: "#3B2ED3" }}>Press release</span>
        </div>
        <div style={{ ...mono, fontSize: 13, color: "#3B2ED3", marginTop: 28 }}>FOR IMMEDIATE RELEASE · {rel.date}</div>
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(34px, 2.2vw + 26px, 58px)", lineHeight: 1.02, letterSpacing: "-0.04em", fontWeight: 700, margin: "16px 0 0" }}>
          {rel.title.replace(/\.$/, "")}
          {square}
        </h1>
        <p style={{ fontSize: 20, lineHeight: "30px", color: "#4C4A66", margin: "20px 0 0" }}>{rel.desc}</p>
        <div style={{ height: 1, background: "#EEEDE8", margin: "36px 0 12px" }} />
        {rel.body.map((p) => (
          <p key={p} style={{ fontSize: 18, lineHeight: "30px", color: "#2A2840", margin: "20px 0 0" }}>
            {p}
          </p>
        ))}
        <div style={{ marginTop: 40, padding: 24, borderRadius: 20, background: "#F6F4EF" }}>
          <div style={{ fontWeight: 600 }}>About ElementPay</div>
          <p style={{ fontSize: 15, lineHeight: "24px", color: "#4C4A66", margin: "8px 0 0" }}>{BOILERPLATE}</p>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
          <a href="#media" className={hover("background:#2A1FB0;color:#fff")} style={{ padding: "14px 22px", borderRadius: 12, background: "#3B2ED3", color: "#fff", fontWeight: 500 }}>
            Media enquiries
          </a>
          <Link href="/press" className={hover("background:#ECEAE4;color:#131126")} style={{ padding: "14px 22px", borderRadius: 12, background: "#F6F4EF", color: "#131126", fontWeight: 500 }}>
            All releases
          </Link>
        </div>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 1.5vw + 22px, 44px)", letterSpacing: "-0.025em", fontWeight: 700, margin: "64px 0 0" }}>More from the newsroom</h2>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 8, marginTop: 16 }}>
          {others.map((o) => (
            <Link
              key={o.slug}
              href={releasePath(o.slug)}
              className={hover("background:#ECEAE4;color:#131126")}
              style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "18px 20px", borderRadius: 16, background: "#F6F4EF", color: "#131126" }}
            >
              <span style={{ fontWeight: 600 }}>{o.title}</span>
              <span style={{ ...mono, fontSize: 12, color: "#6E6C8A", flex: "none" }}>{o.date}</span>
            </Link>
          ))}
        </div>
      </article>
    </Shell>
  );
}
