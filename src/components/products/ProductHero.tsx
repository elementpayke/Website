import Link from "next/link";
import { COLOR, TYPE, fullStopSquare } from "@/lib/brand";
import type { ProductData } from "@/lib/products/productsData";

export default function ProductHero({ product }: { product: ProductData }) {
  const h1Text = product.title.replace(/\.$/, "");
  const ctaIsExternal = product.cta[1].startsWith("http");

  return (
    <section
      data-screen-label="Product hero"
      style={{
        maxWidth: 1240,
        margin: "0 auto",
        padding: "clamp(48px,7vw,96px) clamp(20px,4vw,48px) clamp(48px,6vw,80px)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))",
        gap: "clamp(32px,5vw,80px)",
        alignItems: "end",
      }}
    >
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", fontFamily: "var(--font-label)", fontSize: 13, color: COLOR.muted }}>
          <Link href="/" style={{ color: COLOR.muted }}>Home</Link>
          <span>/</span>
          <span>{product.group}</span>
          <span>/</span>
          <span style={{ color: COLOR.indigo }}>{product.name}</span>
        </div>
        <h1 style={{ ...TYPE.h1Hero, margin: "24px 0 0", maxWidth: "15ch" }}>
          {h1Text}
          <span aria-hidden="true" style={fullStopSquare} />
        </h1>
        <p style={{ fontSize: "clamp(17px,1.4vw,19px)", lineHeight: 1.55, color: COLOR.slate, margin: "24px 0 0", maxWidth: "50ch" }}>
          {product.lede}
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
          <Link
            href="/contact"
            style={{ padding: "16px 26px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: COLOR.indigo, color: "#fff" }}
          >
            Talk to sales
          </Link>
          {ctaIsExternal ? (
            <a
              href={product.cta[1]}
              target="_blank"
              rel="noopener"
              style={{ padding: "16px 26px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: COLOR.cream, color: COLOR.ink }}
            >
              {product.cta[0]} →
            </a>
          ) : (
            <Link
              href={product.cta[1]}
              style={{ padding: "16px 26px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: COLOR.cream, color: COLOR.ink }}
            >
              {product.cta[0]} →
            </Link>
          )}
        </div>
      </div>
      <div style={{ minWidth: 0, borderRadius: 24, background: COLOR.cream, padding: 8, display: "grid", gap: 4 }}>
        {product.specs.map(([k, v]) => (
          <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, padding: "18px 20px", borderRadius: 16, background: "#fff" }}>
            <span style={{ fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".06em", textTransform: "uppercase", color: COLOR.muted, minWidth: 0 }}>{k}</span>
            <span style={{ fontWeight: 600, fontSize: 16, textAlign: "right", minWidth: 0 }}>{v}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
