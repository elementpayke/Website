import { COLOR, TYPE } from "@/lib/brand";
import type { MarketingPageData } from "@/lib/marketing/types";

export default function MarketingSteps({ page }: { page: MarketingPageData }) {
  if (!page.steps?.length) return null;

  return (
    <section data-screen-label="How it works" style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(48px,7vw,96px) clamp(20px,4vw,48px) 0" }}>
      <h2 style={{ ...TYPE.h2Section, margin: 0 }}>{page.dayIntro ? "A day on the rails." : "How it works."}</h2>
      {page.dayIntro ? (
        <p style={{ ...TYPE.lede, margin: "16px 0 0", maxWidth: "54ch" }}>{page.dayIntro}</p>
      ) : null}
      <ol style={{ listStyle: "none", margin: "32px 0 0", padding: 0, display: "grid", gap: 10 }}>
        {page.steps.map(([label, detail], i) => (
          <li
            key={`${label}-${i}`}
            style={{
              display: "grid",
              gridTemplateColumns: "88px 1fr",
              gap: 16,
              padding: "18px 20px",
              borderRadius: 18,
              background: COLOR.cream,
              alignItems: "start",
            }}
          >
            <span style={{ fontFamily: "var(--font-label)", fontSize: 13, color: COLOR.indigo, fontWeight: 500 }}>{label}</span>
            <span style={{ fontSize: 16, lineHeight: 1.5, color: COLOR.ink }}>{detail}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
