import HeroScene from "./HeroScene";
import { COLOR, TYPE } from "@/lib/brand";

export default function Hero() {
  return (
    <section
      data-screen-label="Hero"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "clamp(40px,7vw,88px) clamp(16px,4vw,24px) 56px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))",
        gap: "clamp(28px,5vw,48px)",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        <span
          style={{
            alignSelf: "flex-start",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "7px 13px",
            borderRadius: 999,
            background: "rgba(19,17,38,.045)",
            fontSize: 13,
            fontWeight: 700,
            color: "#4C4A66",
          }}
        >
          <span style={{ width: 8, height: 8, background: "#FFB224" }} />
          Cross-border payment infrastructure for businesses
        </span>
        <h1 style={{ margin: 0, ...TYPE.h1Hero }}>
          Money should move
          <br />
          <span style={{ color: COLOR.indigo }}>
            like messages
            <span style={{ display: "inline-block", width: ".22em", height: ".22em", marginLeft: ".06em", background: COLOR.amber }} />
          </span>
        </h1>
        <p style={{ margin: 0, fontSize: 18, color: "#4C4A66", maxWidth: 470, lineHeight: 1.55 }}>
          ElementPay helps businesses collect, pay out, convert and hold money across Africa and global markets, on
          mobile money, bank rails and stablecoins.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="/contact" style={{ padding: "15px 28px", borderRadius: 999, background: "#3B2ED3", color: "#fff", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
            Talk to sales
          </a>
          <a href="#platform" style={{ padding: "15px 28px", borderRadius: 999, border: "1.5px solid rgba(19,17,38,.08)", background: "rgba(19,17,38,.045)", color: "#131126", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
            See the platform
          </a>
        </div>
      </div>
      <HeroScene />
    </section>
  );
}
