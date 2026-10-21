import Link from "next/link";
import { SOLUTION_GROUPS } from "./homeData";

export default function SolutionsSection() {
  return (
    <section data-screen-label="Solutions" id="solutions" style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(72px,9vw,112px) clamp(12px,3vw,24px) 0", scrollMarginTop: 80 }}>
      <h2 style={{ margin: "0 4px 36px", fontFamily: "var(--font-heading)", fontSize: "clamp(27px,3.03vw,39px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1, maxWidth: "16ch" }}>
        Built for how your business moves money.
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,330px),1fr))", gap: 16 }}>
        {SOLUTION_GROUPS.map((g) => (
          <div key={g.h} style={{ padding: "28px 28px 12px", borderRadius: 28, background: "#fff", border: "1px solid rgba(19,17,38,.08)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".06em", color: "#4C4A66" }}>
              <span style={{ width: 8, height: 8, background: g.sqColor }} />
              {g.h}
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", marginTop: 14 }}>
              {g.items.map((it) => (
                <Link
                  key={it.t}
                  href={it.href}
                  style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "4px 16px", alignItems: "center", padding: "16px 0", borderTop: "1px solid #EEECF4", color: "#131126", textDecoration: "none" }}
                >
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: 20, lineHeight: 1.15, fontWeight: 700, letterSpacing: "-0.02em" }}>{it.t}</span>
                  <span style={{ color: "#3B2ED3", gridRow: "span 2" }}>→</span>
                  <span style={{ fontSize: 14, lineHeight: "21px", color: "#4C4A66" }}>{it.d}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
