"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { hover } from "@/lib/design/pseudo";
import { COVERAGE_REGIONS, COVERAGE_ROWS } from "@/lib/geo/coverageTable";

const yes = {
  display: "inline-flex",
  padding: "3px 10px",
  borderRadius: 999,
  background: "#EEEDFB",
  color: "#3B2ED3",
  fontSize: 12.5,
  fontWeight: 700,
} as const;
const no = { color: "#8E8BAB", fontSize: 13 } as const;
const th = { padding: "16px 12px", fontWeight: 500, borderBottom: "1px solid rgba(19,17,38,.08)" } as const;

/** Searchable, region-filterable coverage table (design: Coverage v3). */
export default function CoverageTable() {
  const [reg, setReg] = useState<(typeof COVERAGE_REGIONS)[number]>("All");
  const [q, setQ] = useState("");

  const ql = q.trim().toLowerCase();
  const rows = COVERAGE_ROWS.filter(
    (r) =>
      (reg === "All" || r.region === reg) &&
      (!ql || `${r.name} ${r.currencyName} ${r.code} ${r.rails.join(" ")}`.toLowerCase().includes(ql)),
  );

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 20, flexWrap: "wrap", marginBottom: 20 }}>
        <div>
          <h2 id="table-h" style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 1.5vw + 22px, 44px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>
            Countries, currencies and rails
          </h2>
          <p style={{ margin: "12px 0 0", fontSize: 15, lineHeight: 1.55, color: "#4C4A66", maxWidth: "60ch" }}>
            Every market ElementPay supports, with payouts, business accounts and the local rails per country.
          </p>
        </div>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            minHeight: 48,
            padding: "0 16px",
            borderRadius: 999,
            background: "#fff",
            border: "1px solid rgba(19,17,38,.12)",
            width: "min(100%,320px)",
            boxSizing: "border-box",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6E6C8A" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search country, currency or rail"
            aria-label="Search coverage"
            style={{ flex: 1, minWidth: 0, border: 0, outline: 0, background: "transparent", font: "500 15px var(--font-body)", color: "#131126" }}
          />
        </label>
      </div>
      <div role="group" aria-label="Filter by region" style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
        {COVERAGE_REGIONS.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setReg(r)}
            aria-pressed={reg === r}
            style={{
              minHeight: 40,
              padding: "0 16px",
              whiteSpace: "nowrap",
              borderRadius: 999,
              border: 0,
              cursor: "pointer",
              font: "600 13.5px var(--font-body)",
              background: reg === r ? "#131126" : "#fff",
              color: reg === r ? "#fff" : "#131126",
              boxShadow: reg === r ? "none" : "inset 0 0 0 1px rgba(19,17,38,.12)",
            }}
          >
            {r}
          </button>
        ))}
      </div>
      <div style={{ borderRadius: 24, background: "#fff", border: "1px solid rgba(19,17,38,.08)", overflowX: "auto" }}>
        <table style={{ width: "100%", minWidth: 760, borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ textAlign: "left", fontFamily: "var(--font-label)", fontSize: 11.5, letterSpacing: ".04em", color: "#6E6C8A" }}>
              <th scope="col" style={{ ...th, padding: "16px 20px" }}>COUNTRY</th>
              <th scope="col" style={th}>CURRENCY</th>
              <th scope="col" style={th}>CODE</th>
              <th scope="col" style={th}>PAYOUTS</th>
              <th scope="col" style={th}>BUSINESS ACCOUNT</th>
              <th scope="col" style={{ ...th, padding: "16px 20px 16px 12px" }}>RAILS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={`${r.region}-${r.iso}`} style={{ borderBottom: "1px solid rgba(19,17,38,.06)" }}>
                <th scope="row" style={{ padding: "14px 20px", textAlign: "left", fontWeight: 700 }}>
                  <Link href={r.href} className={hover("color:#3B2ED3")} style={{ display: "flex", alignItems: "center", gap: 10, color: "#131126" }}>
                    <Image src={`/flags/${r.iso}.svg`} alt="" width={24} height={17} style={{ width: 24, height: 17, borderRadius: 3, objectFit: "cover", flex: "none", boxShadow: "0 0 0 1px rgba(0,0,0,.08)" }} />
                    {r.name}
                  </Link>
                </th>
                <td style={{ padding: "14px 12px", color: "#4C4A66" }}>{r.currencyName}</td>
                <td style={{ padding: "14px 12px", fontFamily: "var(--font-label)", color: "#3B2ED3" }}>{r.code}</td>
                <td style={{ padding: "14px 12px" }}>
                  <span style={r.payouts ? yes : no}>{r.payouts ? "Yes" : "—"}</span>
                </td>
                <td style={{ padding: "14px 12px" }}>
                  <span style={r.account ? yes : no}>{r.account ? "Yes" : "—"}</span>
                </td>
                <td style={{ padding: "14px 20px 14px 12px", color: "#4C4A66" }}>{r.rails.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 && (
          <p style={{ margin: 0, padding: "28px 20px", fontSize: 15, color: "#4C4A66" }}>
            No match. <Link href="/contact" style={{ fontWeight: 700 }}>Ask us about a market →</Link>
          </p>
        )}
      </div>
    </>
  );
}
