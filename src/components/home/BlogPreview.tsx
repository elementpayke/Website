import Link from "next/link";
import { TYPE } from "@/lib/brand";

const POSTS: Array<{ href: string; dot: string; cat: string; title: string }> = [
  { href: "/blog/stablecoin-off-ramps-africa", dot: "#5ED6B4", cat: "Stablecoins", title: "Stablecoin off-ramps in Africa: turning USDC and USDT into mobile money" },
  { href: "/blog/paying-suppliers-china-from-africa", dot: "#FFB224", cat: "Settlement and FX", title: "Paying suppliers in China from Nigeria, Ghana and Kenya" },
  { href: "/blog/mass-payouts-mobile-money", dot: "#A79EFF", cat: "Payouts", title: "Mass payouts to mobile money: a guide for platforms and marketplaces" },
];

export default function BlogPreview() {
  return (
    <section data-screen-label="Blog" id="blog" style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(72px,9vw,112px) clamp(12px,3vw,24px) 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 20, flexWrap: "wrap", marginBottom: 28, padding: "0 4px" }}>
        <h2 style={{ margin: 0, ...TYPE.h2Section }}>
          From the blog
          <span aria-hidden style={{ display: "inline-block", width: ".2em", height: ".2em", marginLeft: ".06em", background: "#FFB224" }} />
        </h2>
        <Link
          href="/blog"
          style={{ display: "inline-flex", alignItems: "center", minHeight: 44, padding: "0 18px", borderRadius: 999, border: "1.5px solid #131126", color: "#131126", fontWeight: 700, fontSize: 14, textDecoration: "none" }}
        >
          All articles →
        </Link>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: 16 }}>
        {POSTS.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            style={{ display: "flex", flexDirection: "column", gap: 14, padding: 22, borderRadius: 24, background: "#fff", border: "1px solid rgba(19,17,38,.08)", color: "#131126", textDecoration: "none", minHeight: 200 }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-label)", fontSize: 11.5, color: "#4C4A66" }}>
              <span style={{ width: 9, height: 9, background: p.dot }} />
              {p.cat}
            </span>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 21, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2, flex: 1 }}>{p.title}</span>
            <span style={{ fontSize: 13.5, fontWeight: 700, color: "#3B2ED3" }}>Read the guide →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
