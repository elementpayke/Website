"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { hover } from "@/lib/design/pseudo";
import { PAYOUT_COUNTRIES, PAYOUT_REGIONS } from "@/lib/geo/coverageData";

// Case- and accent-insensitive, so "cote" finds Côte d'Ivoire.
const fold = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

/** "20 payout countries." with region chips and search (design: Coverage.html). */
export default function CoverageDirectory() {
  const [reg, setReg] = useState("All");
  const [q, setQ] = useState("");
  const ql = fold(q.trim());
  const rows = PAYOUT_COUNTRIES.filter(
    (p) => (reg === "All" || p.region === reg) && (!ql || fold(`${p.name} ${p.currency} ${p.rails.join(" ")}`).includes(ql)),
  );

  return (
    <section data-screen-label="Payout countries" className="wrap" style={{ paddingTop: "clamp(72px,9vw,120px)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
        <h2 className="h" style={{ fontSize: "clamp(29px,3.16vw,44px)" }}>
          20 payout countries.
        </h2>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search country, currency or rail"
          aria-label="Search payout countries"
          style={{ height: 46, padding: "0 16px", borderRadius: 12, border: 0, background: "#F6F4EF", width: "min(100%,320px)", font: "15px var(--font-body)", color: "#131126", outline: "none" }}
        />
      </div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 24 }}>
        {["All", ...PAYOUT_REGIONS].map((r) => (
          <button key={r} type="button" className={`cov-chip${r === reg ? " on" : ""}`} aria-pressed={r === reg} onClick={() => setReg(r)} style={{ background: r === reg ? "#131126" : "#F6F4EF" }}>
            {r}
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,270px),1fr))", gap: 10, marginTop: 20 }}>
        {rows.length ? (
          rows.map((p) => (
            <Link key={p.id} href={p.href} className={hover("background:#ECEAE4")} style={{ color: "#131126", padding: 22, borderRadius: 20, background: "#F6F4EF", display: "flex", flexDirection: "column", gap: 14 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Image src={`/flags/${p.iso}.svg`} alt="" width={36} height={26} style={{ width: 36, height: 26, borderRadius: 4, objectFit: "cover", boxShadow: "0 0 0 1px rgba(19,17,38,.08)" }} />
                <span style={{ flex: 1 }}>
                  <span style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>{p.name}</span>
                  <span style={{ display: "block", fontSize: 12, color: "#6E6C8A" }}>{p.region}</span>
                </span>
                <span className="mono" style={{ fontSize: 13, color: "#3B2ED3" }}>
                  {p.currency}
                </span>
              </span>
              <span style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {p.rails.map((r) => (
                  <span key={r} className="cov-rail" style={{ background: "#fff" }}>
                    {r}
                  </span>
                ))}
                <span className="cov-rail" style={{ background: "#EEEDFB", color: "#3B2ED3" }}>
                  USDC funded
                </span>
              </span>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#3B2ED3" }}>Send money to {p.name} →</span>
            </Link>
          ))
        ) : (
          <div style={{ padding: 32, color: "#6E6C8A" }}>No countries match “{q}”.</div>
        )}
      </div>
    </section>
  );
}
