import Link from "next/link";
import EPNav from "@/components/nav/EPNav";
import CoverageFooter from "@/components/coverage/CoverageFooter";
import DesignJsonLd from "@/components/design/DesignJsonLd";
import CoverageMap from "@/components/coverage/CoverageMap";
import CoverageDirectory from "@/components/coverage/CoverageDirectory";
import { designHead, designMetadata } from "@/lib/design/pages";
import { ACCOUNT_CURRENCIES, PAYOUT_RAIL_COUNT, STABLECOIN_COUNTRY_LINKS } from "@/lib/geo/coverageData";

// Design: Coverage.html (the map page).
export const metadata = designMetadata(designHead("/coverage"));

// The page-level rules Coverage.html defines. Unlike the other design pages it
// uses border-box sizing throughout, so they are scoped to .cov-page.
const CSS = `
.cov-page,.cov-page *{box-sizing:border-box}
.cov-page .wrap{max-width:1240px;margin:0 auto;padding-left:clamp(20px,4vw,48px);padding-right:clamp(20px,4vw,48px)}
.cov-page .h{font-family:var(--font-heading),sans-serif;font-weight:600;letter-spacing:-0.04em;line-height:.95;margin:0}
.cov-page .mono{font-family:var(--font-label),monospace}
.cov-page .cov-card{padding:20px;border-radius:20px;background:#fff}
.cov-chip{padding:10px 14px;border:0;border-radius:12px;cursor:pointer;font:500 14px var(--font-body),sans-serif;background:#fff;color:#131126}
.cov-chip.on{color:#fff}
`;

const STATS: Array<[string | number, string]> = [
  ["20", "payout countries"],
  ["30", "account currencies"],
  [PAYOUT_RAIL_COUNT, "payout rails"],
  ["USDC · USDT", "stablecoin funding"],
];

/* eslint-disable @next/next/no-img-element -- small static flags, as in the design */
const Flag = ({ c }: { c: string }) => <img className="cov-flag" src={`/flags/${c}.svg`} alt="" loading="lazy" />;
/* eslint-enable @next/next/no-img-element */

export default function CoveragePage() {
  return (
    <>
      <DesignJsonLd url="/coverage" />
      <div style={{ position: "sticky", top: 0, zIndex: 30 }}>
        <EPNav active="Resources" />
      </div>
      <div className="cov-page">
        <style dangerouslySetInnerHTML={{ __html: CSS }} />

        <section data-screen-label="Coverage hero" className="wrap" style={{ paddingTop: "clamp(56px,8vw,104px)", paddingBottom: "clamp(40px,5vw,64px)" }}>
          <div className="mono" style={{ display: "flex", gap: 8, fontSize: 13, color: "#6E6C8A" }}>
            <Link href="/" style={{ color: "#6E6C8A" }}>
              Home
            </Link>
            <span>/</span>
            <span>Resources</span>
            <span>/</span>
            <span style={{ color: "#3B2ED3" }}>Coverage</span>
          </div>
          <h1 className="h" style={{ fontSize: "clamp(33px,4.04vw,60px)", letterSpacing: "-0.045em", marginTop: 24, maxWidth: "14ch" }}>
            Where money moves
            <span aria-hidden="true" style={{ display: "inline-block", width: ".2em", height: ".2em", marginLeft: ".06em", background: "#FFB224" }} />
          </h1>
          <p style={{ fontSize: "clamp(17px,1.4vw,19px)", lineHeight: 1.55, color: "#4C4A66", margin: "24px 0 0", maxWidth: "56ch" }}>
            Payouts to mobile money and banks in 20 African countries. Bank accounts in 30 currencies, issued one per currency. Fund any of it in USD, EUR, GBP or the USDC and USDT stablecoins.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))", gap: 8, marginTop: 40 }}>
            {STATS.map(([v, l]) => (
              <div key={l} style={{ padding: 22, borderRadius: 20, background: "#F6F4EF" }}>
                <div className="h" style={{ fontSize: "clamp(26px,2.4vw,32px)", letterSpacing: "-0.03em" }}>
                  {v}
                </div>
                <div style={{ fontSize: 14, color: "#4C4A66", marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </section>

        <CoverageMap />

        <CoverageDirectory />

        <section data-screen-label="Account currencies" className="wrap" style={{ paddingTop: "clamp(72px,9vw,120px)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <h2 className="h" style={{ fontSize: "clamp(29px,3.16vw,44px)", maxWidth: "14ch" }}>
              30 account currencies. Plus digital dollars.
            </h2>
            <p style={{ fontSize: 16, lineHeight: "25px", color: "#4C4A66", margin: 0, maxWidth: "40ch" }}>
              Bank accounts are issued one per currency. USDC and USDT balances sit on the same balance sheet and convert.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,180px),1fr))", gap: 8, marginTop: 32 }}>
            {ACCOUNT_CURRENCIES.map(([c, n, f]) => (
              <Link key={c} href={`/open-a-${c.toLowerCase()}-account`} className="cov-card" style={{ color: "#131126", background: "#F6F4EF", display: "flex", flexDirection: "column", gap: 14 }}>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="h" style={{ fontSize: 28, letterSpacing: "-0.02em" }}>
                    {c}
                  </span>
                  {c === "XOF" || c === "XAF" ? (
                    <span style={{ display: "flex", gap: 3 }}>
                      {(c === "XOF" ? ["sn", "ci", "bj"] : ["cm", "ga", "td"]).map((x) => (
                        <Flag key={x} c={x} />
                      ))}
                    </span>
                  ) : (
                    <Flag c={f} />
                  )}
                </span>
                <span style={{ fontSize: 14, color: "#4C4A66" }}>{n}</span>
              </Link>
            ))}
            {["USDC", "USDT"].map((c) => (
              <div key={c} className="cov-card" style={{ background: "#131126", color: "#F6F4EF", display: "flex", flexDirection: "column", gap: 14 }}>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="h" style={{ fontSize: 28, letterSpacing: "-0.02em" }}>
                    {c}
                  </span>
                  <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#fff", color: "#131126", display: "grid", placeItems: "center", font: "600 12px var(--font-body),sans-serif" }}>$</span>
                </span>
                <span style={{ fontSize: 14, color: "#B4B1D0" }}>Digital dollar balance</span>
              </div>
            ))}
          </div>
        </section>

        <section className="wrap" style={{ paddingTop: "clamp(80px,10vw,140px)" }}>
          <div style={{ borderRadius: 28, background: "#3B2ED3", color: "#fff", padding: "clamp(36px,6vw,80px)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
            <div>
              <h2 className="h" style={{ fontSize: "clamp(31px,3.65vw,54px)", letterSpacing: "-0.045em", maxWidth: "12ch" }}>
                Need a market we don&apos;t list?
              </h2>
              <p style={{ fontSize: 18, lineHeight: "28px", color: "#E6E4FF", margin: "20px 0 0", maxWidth: "42ch" }}>Tell us where you need to pay and collect. New corridors open regularly.</p>
            </div>
            <Link href="/contact" style={{ padding: "16px 28px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: "#fff", color: "#3B2ED3" }}>
              Talk to sales
            </Link>
          </div>
        </section>

        <section data-screen-label="Stablecoins by country" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(56px,7vw,96px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(27px,2.75vw,39px)", lineHeight: 0.95, letterSpacing: "-0.04em", fontWeight: 700, margin: 0 }}>Stablecoin payments by country.</h2>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: "#4C4A66", margin: "16px 0 0", maxWidth: "56ch" }}>
            USDC and USDT payouts and collections for businesses in every market we cover.{" "}
            <Link href="/stablecoin-payments-africa" style={{ fontWeight: 500 }}>
              Overview →
            </Link>
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 24 }}>
            {STABLECOIN_COUNTRY_LINKS.map(([n, href]) => (
              <Link key={href} href={href} style={{ display: "inline-flex", alignItems: "center", minHeight: 44, padding: "0 18px", borderRadius: 999, background: "#fff", color: "#131126", fontWeight: 500, fontSize: 15, boxShadow: "0 0 0 1px #E6E2DA" }}>
                {n}
              </Link>
            ))}
          </div>
        </section>
        <CoverageFooter />
      </div>
    </>
  );
}
