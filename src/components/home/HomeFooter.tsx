"use client";

import { useState } from "react";
import Link from "next/link";
import { HOME_FOOTER_COLUMNS, HOME_SOCIALS } from "./homeData";

export default function HomeFooter() {
  const [nlEmail, setNlEmail] = useState("");
  const [nlDone, setNlDone] = useState(false);

  return (
    <footer style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,24px) 40px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
          gap: 24,
          alignItems: "center",
          padding: "clamp(22px,3.4vw,36px)",
          borderRadius: 28,
          background: "#fff",
          border: "1px solid rgba(19,17,38,.08)",
          marginBottom: 56,
        }}
      >
        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(22px,2.4vw,28px)", lineHeight: 1.1, letterSpacing: "-0.03em", fontWeight: 700 }}>
            The ElementPay briefing
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.5, color: "#4C4A66", margin: "8px 0 0", maxWidth: "46ch" }}>
            A monthly note for finance and payments teams on new corridors, rail updates and regulation.
          </p>
        </div>
        {nlDone ? (
          <div style={{ padding: "16px 20px", borderRadius: 999, background: "#EEEDFB", color: "#3B2ED3", fontWeight: 700 }}>
            Subscribed. See you in the next briefing.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setNlDone(true);
            }}
            style={{ display: "flex", gap: 8, flexWrap: "wrap", padding: 6, borderRadius: 999, background: "#F6F4EF" }}
          >
            <input
              type="email"
              required
              value={nlEmail}
              onChange={(e) => setNlEmail(e.target.value)}
              placeholder="Work email"
              aria-label="Work email for newsletter"
              style={{ flex: 1, minWidth: 160, height: 48, padding: "0 18px", border: 0, outline: "none", background: "transparent", color: "#131126", font: "16px var(--font-body)" }}
            />
            <button
              type="submit"
              style={{ height: 48, padding: "0 22px", border: 0, borderRadius: 999, background: "#3B2ED3", color: "#fff", font: "700 14px var(--font-heading)", cursor: "pointer" }}
            >
              Subscribe
            </button>
          </form>
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,160px),1fr))", gap: 40 }}>
        <div style={{ gridColumn: "span 2", minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 32, height: 32, borderRadius: 10, background: "#3B2ED3", display: "grid", placeItems: "center" }}>
              <span style={{ width: 13, height: 13, borderRadius: 3, background: "#fff" }} />
            </span>
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 19, letterSpacing: "-0.02em" }}>ElementPay</span>
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.5, color: "#4C4A66", margin: "14px 0 0", maxWidth: "34ch" }}>
            Cross-border payment infrastructure for businesses.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20 }}>
            {HOME_SOCIALS.map((so) => (
              <a
                key={so.n}
                href={so.href}
                target="_blank"
                rel="noopener"
                aria-label={`ElementPay on ${so.n}`}
                style={{ height: 38, padding: "0 14px", borderRadius: 999, background: "#fff", color: "#131126", fontSize: 13, fontWeight: 700, display: "inline-flex", alignItems: "center", border: "1px solid rgba(19,17,38,.08)", textDecoration: "none" }}
              >
                {so.n}
              </a>
            ))}
          </div>
        </div>

        {HOME_FOOTER_COLUMNS.map((fc) => (
          <div key={fc.h} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 2, alignContent: "start", fontSize: 14.5 }}>
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, marginBottom: 4 }}>{fc.h}</span>
            {fc.links.map((l) => (
              <Link key={l.t} href={l.href} style={{ color: "#4C4A66", padding: "6px 0", display: "inline-block", textDecoration: "none" }}>
                {l.t}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 48, paddingTop: 22, borderTop: "1px solid rgba(19,17,38,.08)", display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap", fontSize: 12.5, lineHeight: 1.5, color: "#6E6C8A" }}>
        <p style={{ margin: 0, maxWidth: "72ch" }}>
          ElementPay is a financial technology company, not a bank. Banking services are provided by licensed
          partner institutions. Services are subject to business verification and local regulation. Rates shown are
          indicative.
        </p>
        <span>© 2026 ElementPay</span>
      </div>
    </footer>
  );
}
