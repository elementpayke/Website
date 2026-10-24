"use client";

import { useState } from "react";
import Image from "next/image";
import { COLOR } from "@/lib/brand";
import { RATE, fmt } from "@/lib/products/fx";
import { COUNTRIES as COVERAGE_COUNTRIES } from "@/lib/geo/coverage";

const COUNTRIES: Array<[string, string, string, string, string[]]> = COVERAGE_COUNTRIES.map(
  (c) => [c.iso, c.name, c.currencyCode, c.dialCode, c.rails.map((r) => r.name)]
);
const FUNDS = ["USD", "EUR", "USDC", "USDT"];

function chipStyle(on: boolean) {
  return {
    display: "inline-flex" as const,
    alignItems: "center" as const,
    gap: 7,
    padding: "8px 11px",
    border: 0,
    borderRadius: 10,
    cursor: "pointer" as const,
    font: "500 13px var(--font-body)",
    background: on ? COLOR.ink : "#F6F4EF",
    color: on ? "#fff" : COLOR.ink,
  };
}

export default function PaymentsDemo() {
  const [countryIdx, setCountryIdx] = useState(0);
  const [railIdx, setRailIdx] = useState(0);
  const [fundIdx, setFundIdx] = useState(0);

  const country = COUNTRIES[countryIdx];
  const [iso, name, currency, dial, rails] = country;
  const rail = rails[Math.min(railIdx, rails.length - 1)];
  const fund = FUNDS[fundIdx];
  const bank = /Bank|EFT/.test(rail);
  const send = fund === "EUR" ? "€460.00" : fund === "USD" ? "$500.00" : `500.00 ${fund}`;
  const local = `${currency} ${fmt(500 * (RATE[currency] ?? 1))}`;
  const phone = bank ? "Account •••• 4821" : `${dial} 7•• ••• 412`;
  const time = "Depends on the rail";
  const steps = [
    `${fund.startsWith("USD") && fund !== "USD" ? `${fund} converted` : "Quote locked"} · ${currency}`,
    `Routed via ${rail}`,
    `Delivered in ${name}`,
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: 12 }}>
      <div style={{ borderRadius: 28, background: "#fff", padding: "clamp(20px,3vw,32px)", display: "grid", gap: 24, alignContent: "start" }}>
        <div>
          <div style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.muted }}>SEND</div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 48, fontWeight: 700, letterSpacing: "-0.03em", marginTop: 4 }}>{send}</div>
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.muted, marginBottom: 10 }}>TO · {COUNTRIES.length}+ COUNTRIES</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {COUNTRIES.map(([f, n], i) => (
              <button key={n} type="button" onClick={() => { setCountryIdx(i); setRailIdx(0); }} style={chipStyle(i === countryIdx)}>
                <Image src={`/flags/${f}.svg`} alt="" width={20} height={14} style={{ width: 20, height: 14, borderRadius: 2, objectFit: "cover" }} />
                {n}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.muted, marginBottom: 10 }}>RAIL</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {rails.map((r, i) => (
              <button key={r} type="button" onClick={() => setRailIdx(i)} style={chipStyle(r === rail)}>{r}</button>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.muted, marginBottom: 10 }}>FUND FROM</div>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap", padding: 5, borderRadius: 12, background: "#F6F4EF", width: "fit-content" }}>
            {FUNDS.map((f, i) => (
              <button
                key={f}
                type="button"
                onClick={() => setFundIdx(i)}
                style={{ padding: "8px 14px", border: 0, borderRadius: 9, cursor: "pointer", font: "500 14px var(--font-body)", background: i === fundIdx ? "#fff" : "transparent", color: i === fundIdx ? COLOR.ink : COLOR.slate, boxShadow: i === fundIdx ? "0 1px 3px rgba(19,17,38,.1)" : "none" }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderRadius: 28, background: COLOR.ink, padding: "clamp(24px,4vw,48px)", display: "grid", placeItems: "center" }}>
        <div style={{ width: "min(100%,300px)", borderRadius: 28, background: "#fff", padding: 22, boxShadow: "0 40px 60px -30px rgba(0,0,0,.5)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Image src={`/flags/${iso}.svg`} alt="" width={32} height={22} style={{ width: 32, height: 22, borderRadius: 4, objectFit: "cover" }} />
            <span style={{ fontSize: 13, color: COLOR.muted }}>{phone}</span>
          </div>
          <div style={{ fontSize: 13, color: COLOR.indigo, fontWeight: 600, marginTop: 22 }}>Payout delivered</div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, marginTop: 4 }}>{local}</div>
          <div style={{ fontSize: 13, color: COLOR.muted, marginTop: 4 }}>via {rail} · {time}</div>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 8, marginTop: 20 }}>
            {steps.map((s) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 12, background: "#F6F4EF", fontSize: 13 }}>
                <span style={{ width: 18, height: 18, borderRadius: "50%", background: COLOR.indigo, color: "#fff", display: "grid", placeItems: "center", fontSize: 11, flex: "none" }}>✓</span>
                {s}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 11, color: COLOR.muted, marginTop: 14, textAlign: "center" }}>Indicative rate · funded with {fund}</div>
        </div>
      </div>
    </div>
  );
}
