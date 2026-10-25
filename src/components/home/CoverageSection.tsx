"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { COVERAGE_REGIONS } from "./homeData";
import { TYPE } from "@/lib/brand";

const INK = "#131126";
const MUTED = "#4C4A66";

export default function CoverageSection() {
  const [reg, setReg] = useState(0);
  const region = COVERAGE_REGIONS[reg];

  return (
    <section data-screen-label="Coverage" id="coverage" style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(72px,9vw,112px) clamp(12px,3vw,24px) 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 20, flexWrap: "wrap", marginBottom: 28, padding: "0 4px" }}>
        <div>
          <h2 style={{ margin: 0, ...TYPE.h2Section }}>
            Where your money can go.
          </h2>
          <p style={{ margin: "14px 0 0", fontSize: 16, lineHeight: 1.55, color: MUTED }}>
            Payouts in 20 African countries. Bank accounts in 30 currencies.{" "}
            <Link href="/coverage" style={{ fontWeight: 700 }}>Full coverage →</Link>
          </p>
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {COVERAGE_REGIONS.map((r, i) => {
            const on = i === reg;
            return (
              <button
                key={r.label}
                type="button"
                onClick={() => setReg(i)}
                aria-pressed={on}
                style={{
                  whiteSpace: "nowrap",
                  padding: "9px 15px",
                  borderRadius: 999,
                  cursor: "pointer",
                  font: "700 13px var(--font-body)",
                  border: on ? "1px solid #131126" : "1px solid rgba(19,17,38,.12)",
                  background: on ? INK : "#fff",
                  color: on ? "#fff" : INK,
                }}
              >
                {r.label}
              </button>
            );
          })}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,260px),1fr))", gap: 10 }}>
        {region.stops.map((st) => (
          <Link
            key={st.n}
            href={st.href}
            style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 18px", borderRadius: 20, background: "#fff", border: "1px solid rgba(19,17,38,.08)", color: INK, textDecoration: "none" }}
          >
            <Image src={st.flag} alt={`${st.n} flag`} width={30} height={21} style={{ width: 30, height: 21, borderRadius: 4, objectFit: "cover", flex: "none", boxShadow: "0 0 0 1px rgba(0,0,0,.08)" }} />
            <span style={{ flex: 1, minWidth: 0 }}>
              <span style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: 17, fontWeight: 700, letterSpacing: "-0.015em" }}>{st.n}</span>
              <span style={{ display: "block", fontSize: 12.5, color: "#6E6C8A", marginTop: 2 }}>{st.sub}</span>
            </span>
            <span style={{ fontFamily: "var(--font-label)", fontSize: 11.5, padding: "4px 9px", borderRadius: 999, background: "#EEEDFB", color: "#3B2ED3", flex: "none" }}>
              {st.c}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
