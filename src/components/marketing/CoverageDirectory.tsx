"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { COLOR, TYPE } from "@/lib/brand";
import { COUNTRIES, accountCurrencies, AFRICAN_COUNTRY_COUNT } from "@/lib/geo/coverage";

const REGIONS = ["East Africa", "West Africa", "Southern Africa", "Latin America"] as const;

export default function CoverageDirectory() {
  const [region, setRegion] = useState<string>("All");
  const [q, setQ] = useState("");

  const rows = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return COUNTRIES.filter((c) => {
      if (region !== "All" && c.region !== region) return false;
      if (!ql) return true;
      const rails = c.rails.map((r) => r.name).join(" ");
      return `${c.name} ${c.currencyCode} ${rails}`.toLowerCase().includes(ql);
    });
  }, [region, q]);

  return (
    <>
      <section data-screen-label="Payout countries" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,48px) 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
          <h2 style={{ ...TYPE.h2Section, margin: 0 }}>{AFRICAN_COUNTRY_COUNT}+ payout countries.</h2>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search country, currency or rail"
            aria-label="Search payout countries"
            style={{ height: 46, padding: "0 16px", borderRadius: 12, border: 0, background: COLOR.cream, width: "min(100%,320px)", font: "15px var(--font-body)", color: COLOR.ink, outline: "none" }}
          />
        </div>
        <p style={{ ...TYPE.lede, margin: "16px 0 0", maxWidth: "60ch" }}>
          {AFRICAN_COUNTRY_COUNT}+ African corridors live today, plus Argentina and Colombia, with more rolling out. Open a country guide for send-money or stablecoin payments on local rails.
        </p>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 24 }}>
          {["All", ...REGIONS].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRegion(r)}
              style={{
                padding: "10px 14px",
                border: 0,
                borderRadius: 12,
                cursor: "pointer",
                font: "500 14px var(--font-body)",
                background: r === region ? COLOR.ink : COLOR.cream,
                color: r === region ? "#fff" : COLOR.ink,
              }}
            >
              {r}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,270px),1fr))", gap: 10, marginTop: 20 }}>
          {rows.length ? (
            rows.map((c) => (
              <Link
                key={c.slug}
                href={`/send-money-to-${c.slug}`}
                style={{ color: COLOR.ink, padding: 22, borderRadius: 20, background: COLOR.cream, display: "flex", flexDirection: "column", gap: 14 }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Image src={`/flags/${c.iso}.svg`} alt="" width={36} height={26} style={{ width: 36, height: 26, borderRadius: 4, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
                  <span style={{ flex: 1 }}>
                    <span style={{ display: "block", ...TYPE.h3Card, fontSize: 22 }}>{c.name}</span>
                    <span style={{ display: "block", fontSize: 12, color: COLOR.muted }}>{c.region}</span>
                  </span>
                  <span style={{ fontFamily: "var(--font-label)", fontSize: 13, color: COLOR.indigo }}>{c.currencyCode}</span>
                </span>
                <span style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {c.rails.map((r) => (
                    <span key={r.name} style={{ padding: "6px 10px", borderRadius: 8, background: "#fff", fontSize: 13 }}>{r.name}</span>
                  ))}
                  <span style={{ padding: "6px 10px", borderRadius: 8, background: COLOR.tint, color: COLOR.indigo, fontSize: 13 }}>USDC funded</span>
                </span>
                <span style={{ fontSize: 14, fontWeight: 600, color: COLOR.indigo }}>Send money to {c.name} →</span>
              </Link>
            ))
          ) : (
            <div style={{ padding: 32, color: COLOR.muted }}>No countries match &ldquo;{q}&rdquo;.</div>
          )}
        </div>
      </section>

      <section data-screen-label="Account currencies" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,48px) 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
          <h2 style={{ ...TYPE.h2Section, margin: 0, maxWidth: "14ch" }}>30 account currencies. Plus digital dollars.</h2>
          <p style={{ fontSize: 16, lineHeight: "25px", color: COLOR.slate, margin: 0, maxWidth: "40ch" }}>
            Bank accounts are issued one per currency. USDC and USDT balances sit on the same balance sheet and convert.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,180px),1fr))", gap: 8, marginTop: 32 }}>
          {accountCurrencies().map((c) => (
            <Link
              key={c.code}
              href={`/open-a-${c.code.toLowerCase()}-account`}
              style={{ padding: 20, borderRadius: 20, background: COLOR.cream, color: COLOR.ink, display: "flex", flexDirection: "column", gap: 14 }}
            >
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ ...TYPE.h3Card, fontSize: 28 }}>{c.code}</span>
                <Image src={`/flags/${c.flagIso}.svg`} alt="" width={22} height={16} style={{ width: 22, height: 16, borderRadius: 3, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
              </span>
              <span style={{ fontSize: 14, color: COLOR.slate }}>{c.name}</span>
            </Link>
          ))}
          {["USDC", "USDT"].map((c) => (
            <div key={c} style={{ padding: 20, borderRadius: 20, background: COLOR.ink, color: COLOR.cream, display: "flex", flexDirection: "column", gap: 14 }}>
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ ...TYPE.h3Card, fontSize: 28, color: "#fff" }}>{c}</span>
                <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#fff", color: COLOR.ink, display: "grid", placeItems: "center", font: "600 12px var(--font-body)" }}>$</span>
              </span>
              <span style={{ fontSize: 14, color: COLOR.onDark }}>Digital dollar balance</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(80px,10vw,140px) clamp(20px,4vw,48px) 0" }}>
        <div style={{ borderRadius: 28, background: COLOR.indigo, color: "#fff", padding: "clamp(36px,6vw,80px)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ ...TYPE.h2Cta, margin: 0, maxWidth: "12ch" }}>Need a market we don&rsquo;t list?</h2>
            <p style={{ fontSize: 18, lineHeight: "28px", color: "#E6E4FF", margin: "20px 0 0", maxWidth: "42ch" }}>
              Tell us where you need to pay and collect. New corridors open regularly.
            </p>
          </div>
          <Link href="/contact" style={{ padding: "16px 28px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: "#fff", color: COLOR.indigo }}>
            Talk to sales
          </Link>
        </div>
      </section>

      <section data-screen-label="Stablecoins by country" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(56px,7vw,96px) clamp(20px,4vw,48px) 0" }}>
        <h2 style={{ ...TYPE.h2Section, fontSize: "clamp(27px,2.75vw,39px)", margin: 0 }}>Stablecoin payments by country.</h2>
        <p style={{ fontSize: 17, lineHeight: 1.55, color: COLOR.slate, margin: "16px 0 0", maxWidth: "56ch" }}>
          USDC and USDT payouts and collections for businesses in every market we cover.{" "}
          <Link href="/stablecoin-payments-africa" style={{ fontWeight: 500 }}>Overview →</Link>
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 24 }}>
          {COUNTRIES.map((c) => (
            <Link
              key={c.slug}
              href={`/stablecoin-payments-in-${c.slug}`}
              style={{ display: "inline-flex", alignItems: "center", minHeight: 44, padding: "0 18px", borderRadius: 999, background: "#fff", color: COLOR.ink, fontWeight: 500, fontSize: 15, boxShadow: `0 0 0 1px ${COLOR.hairline}` }}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
