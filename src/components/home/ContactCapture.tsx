"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { COLOR, TYPE, fullStopSquare } from "@/lib/brand";

export default function ContactCapture() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <section data-screen-label="Contact" id="contact" style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(72px,9vw,112px) clamp(12px,3vw,24px)" }}>
      <div
        style={{
          borderRadius: 28,
          background: COLOR.indigo,
          color: "#fff",
          padding: "clamp(32px,5vw,64px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
          gap: 32,
          alignItems: "end",
        }}
      >
        <div>
          <h2 style={{ margin: 0, ...TYPE.h2Cta }}>
            Get on the rails
            <span style={fullStopSquare} />
          </h2>
          <p style={{ margin: "20px 0 0", fontSize: 17, lineHeight: 1.55, opacity: 0.9, maxWidth: "40ch" }}>
            Leave your work email and tell us what your business needs. We&apos;ll scope your markets with you and
            walk you through going live.
          </p>
        </div>
        <div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", padding: 6, borderRadius: 999, background: "#fff" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Work email"
              aria-label="Work email"
              style={{ flex: 1, minWidth: 160, height: 50, padding: "0 18px", border: 0, outline: "none", background: "transparent", color: COLOR.ink, font: "16px var(--font-body)" }}
            />
            <button
              type="button"
              onClick={() => {
                router.push("/contact" + (email ? `?email=${encodeURIComponent(email)}` : ""));
              }}
              style={{ height: 50, padding: "0 24px", border: 0, borderRadius: 999, background: "#131126", color: "#fff", font: "700 15px var(--font-heading)", cursor: "pointer" }}
            >
              Talk to sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
