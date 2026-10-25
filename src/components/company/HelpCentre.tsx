"use client";

import { useState } from "react";
import Link from "next/link";
import { HELP_ANSWERS, HELP_CATEGORIES } from "@/lib/company/companyData";

/** Searchable, category-filtered help answers (design: Company.dc.html, help). */
export default function HelpCentre() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [open, setOpen] = useState(0);

  const ql = q.trim().toLowerCase();
  const answers = HELP_ANSWERS.filter(([c, question, answer]) => (cat === "All" || c === cat) && (!ql || `${question} ${answer}`.toLowerCase().includes(ql)));

  return (
    <>
      <section data-screen-label="Help search" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(48px,6vw,80px) clamp(20px,4vw,48px) 0" }}>
        <input
          type="search"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(0);
          }}
          placeholder="Search: payouts, USDC, XOF, verification…"
          aria-label="Search help"
          style={{ width: "100%", boxSizing: "border-box", height: 72, padding: "0 28px", borderRadius: 20, border: 0, background: "#fff", font: "500 20px var(--font-body)", color: "#131126", outline: "none", boxShadow: "0 20px 40px -30px rgba(19,17,38,.3)" }}
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: 10, marginTop: 16 }}>
          {HELP_CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setCat(cat === c ? "All" : c);
                setOpen(0);
              }}
              style={{ all: "unset", boxSizing: "border-box", cursor: "pointer", display: "grid", gap: 6, padding: 22, borderRadius: 20, background: cat === c ? "#131126" : "#fff", color: cat === c ? "#fff" : "#131126" }}
            >
              <span style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>{c}</span>
              <span style={{ fontSize: 13, opacity: 0.7 }}>{HELP_ANSWERS.filter((x) => x[0] === c).length} answers</span>
            </button>
          ))}
        </div>
      </section>
      <section data-screen-label="Answers" style={{ maxWidth: 1240, margin: "0 auto", padding: "32px clamp(20px,4vw,48px) 0", display: "grid", gap: 8 }}>
        {answers.map(([c, question, answer], i) => (
          <div key={question} style={{ borderRadius: 20, background: "#fff" }}>
            <button
              type="button"
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
              style={{ all: "unset", boxSizing: "border-box", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, width: "100%", padding: "22px 24px" }}
            >
              <span style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 4 }}>
                <span style={{ fontFamily: "var(--font-label)", fontSize: 11, color: "#3B2ED3" }}>{c}</span>
                <span style={{ fontSize: 17, fontWeight: 500 }}>{question}</span>
              </span>
              <span style={{ width: 30, height: 30, borderRadius: "50%", background: "#F6F4EF", display: "grid", placeItems: "center", color: "#3B2ED3", flex: "none", fontSize: 18 }}>{open === i ? "−" : "+"}</span>
            </button>
            {open === i && <p style={{ margin: 0, padding: "0 24px 22px", fontSize: 16, lineHeight: "25px", color: "#4C4A66", maxWidth: "80ch" }}>{answer}</p>}
          </div>
        ))}
        {answers.length === 0 && (
          <div style={{ padding: 32, borderRadius: 20, background: "#fff", color: "#4C4A66" }}>
            No answers for “{q}”. <Link href="/contact">Ask our team →</Link>
          </div>
        )}
      </section>
    </>
  );
}
