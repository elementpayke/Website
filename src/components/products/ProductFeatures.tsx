import { COLOR, TYPE } from "@/lib/brand";
import type { ProductData } from "@/lib/products/productsData";

export default function ProductFeatures({ product }: { product: ProductData }) {
  return (
    <section data-screen-label="Features" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,48px) 0" }}>
      <h2 style={{ ...TYPE.h2Section, margin: 0 }}>What&apos;s included.</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 12, marginTop: 32 }}>
        {product.features.map(([t, d], i) => (
          <div key={t} style={{ padding: 28, borderRadius: 24, background: "#fff", display: "flex", flexDirection: "column", gap: 10, minHeight: 200 }}>
            <span style={{ fontFamily: "var(--font-label)", fontSize: 13, color: COLOR.indigo }}>{String(i + 1).padStart(2, "0")}</span>
            <span style={{ ...TYPE.h3Card, marginTop: "auto" }}>{t}</span>
            <span style={{ fontSize: 15, lineHeight: "22px", color: COLOR.slate }}>{d}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
