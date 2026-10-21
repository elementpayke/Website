import Link from "next/link";
import { PRODUCTS } from "./homeData";

export default function ProductsGrid() {
  return (
    <section data-screen-label="Products" id="products" style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(72px,9vw,112px) clamp(12px,3vw,24px) 0", scrollMarginTop: 80 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 20, flexWrap: "wrap", marginBottom: 36, padding: "0 4px" }}>
        <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "clamp(27px,3.03vw,39px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1, maxWidth: "14ch" }}>
          Everything your money needs to do.
        </h2>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "#4C4A66", maxWidth: "42ch" }}>
          Use one product or combine them. They share the same balance and business verification.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,330px),1fr))", gap: 16 }}>
        {PRODUCTS.map((b) => {
          const dark = b.fg === "#fff";
          return (
            <Link
              key={b.t}
              href={b.href}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                minHeight: 260,
                padding: "clamp(24px,3vw,32px)",
                borderRadius: 28,
                background: b.bg,
                color: b.fg,
                border: b.bg === "#fff" ? "1px solid #E6E2DA" : "0",
                boxSizing: "border-box",
                textDecoration: "none",
              }}
            >
              <span style={{ fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".06em", opacity: 0.8 }}>{b.n}</span>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: 28, lineHeight: 1.05, fontWeight: 700, letterSpacing: "-0.035em" }}>{b.t}</span>
              <span style={{ fontSize: 15, lineHeight: 1.5, opacity: 0.85 }}>{b.d}</span>
              <span style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: "auto", paddingTop: 14 }}>
                {b.pts.map((pt) => (
                  <span
                    key={pt}
                    style={{
                      padding: "7px 12px",
                      borderRadius: 999,
                      border: `1px solid ${dark ? "rgba(255,255,255,.22)" : "rgba(19,17,38,.18)"}`,
                      fontSize: 12,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {pt}
                  </span>
                ))}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
