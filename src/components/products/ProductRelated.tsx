import Link from "next/link";
import { hover } from "@/lib/design/pseudo";
import { COLOR, TYPE } from "@/lib/brand";
import { getRelatedProducts, type ProductData } from "@/lib/products/productsData";

export default function ProductRelated({ product }: { product: ProductData }) {
  const related = getRelatedProducts(product.related);
  return (
    <section data-screen-label="Related" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,48px) 0" }}>
      <h2 style={{ ...TYPE.h2Section, lineHeight: "normal", letterSpacing: "-0.03em", margin: 0 }}>Works well with.</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 12, marginTop: 24 }}>
        {related.map((r) => (
          <Link
            key={r.slug}
            href={r.path}
            className={hover("background:#ECEAE4;color:#131126")}
            style={{ display: "flex", flexDirection: "column", gap: 8, padding: 24, borderRadius: 20, background: "#fff", color: COLOR.ink }}
          >
            <span style={{ fontFamily: "var(--font-label)", fontSize: 12, color: COLOR.muted }}>{r.group}</span>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>{r.name} →</span>
            <span style={{ fontSize: 14, lineHeight: "21px", color: COLOR.slate }}>{r.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
