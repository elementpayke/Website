"use client";

import { useState } from "react";

const PURPLE = "#3B2ED3";

export default function Newsletter() {
  const [joined, setJoined] = useState(false);

  return (
    <section style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,48px) 0" }}>
      <div
        style={{
          borderRadius: 32,
          background: PURPLE,
          color: "#fff",
          padding: "clamp(32px,5vw,64px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
          gap: 32,
          alignItems: "end",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(29px,3.16vw,44px)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              fontWeight: 700,
              margin: 0,
            }}
          >
            One email a month.
          </h2>
          <p style={{ fontSize: 17, lineHeight: "26px", color: "#E6E4FF", margin: "16px 0 0", maxWidth: "40ch" }}>
            New corridors, product updates and guides on mobile money and stablecoins.
          </p>
        </div>
        {joined ? (
          <div style={{ padding: 20, borderRadius: 16, background: "rgba(255,255,255,.14)", fontSize: 17, fontWeight: 500 }}>
            You&apos;re subscribed.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setJoined(true);
            }}
            style={{ display: "flex", gap: 6, flexWrap: "wrap", padding: 6, borderRadius: 16, background: "#fff" }}
          >
            <input
              type="email"
              required
              placeholder="Work email"
              aria-label="Work email"
              style={{
                flex: 1,
                minWidth: 160,
                height: 50,
                padding: "0 14px",
                border: 0,
                outline: "none",
                background: "transparent",
                font: "16px var(--font-body)",
                color: "#131126",
              }}
            />
            <button
              type="submit"
              style={{
                height: 50,
                padding: "0 22px",
                border: 0,
                borderRadius: 12,
                background: "#131126",
                color: "#fff",
                font: "500 15px var(--font-body)",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
