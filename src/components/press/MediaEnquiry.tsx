"use client";

import { useState } from "react";

const input: React.CSSProperties = { height: 50, padding: "0 14px", border: 0, borderRadius: 12, outline: "none", background: "#fff", font: "16px var(--font-body)", color: "#131126", minWidth: 0 };

/** Media enquiries panel shared by the newsroom and every release (design: PressView.dc.html). */
export default function MediaEnquiry() {
  const [sent, setSent] = useState(false);
  return (
    <section id="media" data-screen-label="Media contact" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,48px) 0", scrollMarginTop: 90 }}>
      <div style={{ borderRadius: 32, background: "#3B2ED3", color: "#fff", padding: "clamp(32px,5vw,64px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: 32, alignItems: "end" }}>
        <div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 1.5vw + 22px, 44px)", lineHeight: 0.95, letterSpacing: "-0.04em", fontWeight: 700, margin: 0 }}>Media enquiries.</h2>
          <p style={{ fontSize: 17, lineHeight: "26px", color: "#E6E4FF", margin: "16px 0 0", maxWidth: "40ch" }}>
            Interviews, comment on mobile money and stablecoin regulation, or the full media kit. Tell us your outlet and deadline.
          </p>
        </div>
        {sent ? (
          <div style={{ padding: 20, borderRadius: 16, background: "rgba(255,255,255,.14)", fontSize: 17, fontWeight: 500 }}>Thanks. Our press team will reply before your deadline.</div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 8 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <input type="email" placeholder="Email" aria-label="Email" style={input} />
              <input type="text" placeholder="Outlet" aria-label="Outlet" style={input} />
            </div>
            <input type="text" placeholder="What do you need, and by when?" aria-label="Request" style={input} />
            <button type="button" onClick={() => setSent(true)} style={{ height: 50, border: 0, borderRadius: 12, background: "#131126", color: "#fff", font: "500 16px var(--font-body)", cursor: "pointer" }}>
              Send request
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
