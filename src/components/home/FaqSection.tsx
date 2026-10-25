"use client";

import { useState } from "react";
import { HOME_FAQS } from "./homeData";
import { TYPE } from "@/lib/brand";

const MUTED = "#4C4A66";

export default function FaqSection() {
  // The design opens the first question by default.
  const [open, setOpen] = useState(0);

  return (
    <section
      data-screen-label="FAQ"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "clamp(72px,9vw,112px) clamp(12px,3vw,24px) 0",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
        gap: "clamp(28px,5vw,72px)",
      }}
    >
      <div style={{ padding: "0 4px" }}>
        <h2 style={{ margin: 0, ...TYPE.h2Section }}>
          Questions.
        </h2>
        <p style={{ margin: "16px 0 0", fontSize: 16, lineHeight: 1.55, color: MUTED, maxWidth: "36ch" }}>
          Something else? <a href="/help" style={{ fontWeight: 700 }}>Visit the help centre</a> or{" "}
          <a href="/contact" style={{ fontWeight: 700 }}>talk to our team</a>.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 8, alignContent: "start" }}>
        {HOME_FAQS.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.q} style={{ borderRadius: 20, background: "#fff", border: "1px solid rgba(19,17,38,.08)" }}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                style={{
                  all: "unset",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                  width: "100%",
                  padding: "20px 22px",
                  fontFamily: "var(--font-heading)",
                  fontSize: 17,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}
              >
                <span>{faq.q}</span>
                <span style={{ width: 30, height: 30, borderRadius: "50%", background: "#EEEDFB", display: "grid", placeItems: "center", color: "#3B2ED3", flex: "none", fontSize: 18 }}>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <p style={{ margin: 0, padding: "0 22px 20px", fontSize: 15, lineHeight: 1.6, color: MUTED }}>{faq.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
