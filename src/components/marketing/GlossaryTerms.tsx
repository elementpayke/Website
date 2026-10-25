import Link from "next/link";
import { COLOR } from "@/lib/brand";
import { GLOSSARY } from "@/lib/marketing/glossaryData";

export default function GlossaryTerms() {
  return (
    <section data-screen-label="Terms" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(48px,6vw,80px) clamp(20px,4vw,48px) 0", display: "grid", gap: 40 }}>
      {GLOSSARY.map(([letter, terms]) => (
        <div
          key={letter}
          id={`letter-${letter}`}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: 12, alignItems: "start", scrollMarginTop: 90 }}
        >
          <span style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(41px,4.62vw,65px)", lineHeight: 0.85, fontWeight: 700, color: COLOR.violet }}>
            {letter}
          </span>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 10, gridColumn: "span 2", minWidth: 0 }}>
            {terms.map((t) => (
              <dl key={t.id} id={t.id} style={{ margin: 0, padding: 24, borderRadius: 22, background: "#fff" }}>
                <dt style={{ fontFamily: "var(--font-heading)", fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em" }}>{t.term}</dt>
                <dd style={{ margin: "10px 0 0", fontSize: 16, lineHeight: "25px", color: "#2A2840" }}>{t.definition}</dd>
                <Link href={t.relatedHref} style={{ display: "inline-block", marginTop: 12, fontSize: 14, fontWeight: 600 }}>
                  Related →
                </Link>
              </dl>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
