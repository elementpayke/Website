/**
 * ElementPay brand tokens, binding per BRAND.md. Use these instead of
 * ad-hoc hex values — the source .dc.html exports predate BRAND.md and
 * drift from it in places (extra near-black/grey shades, off-palette
 * borders). When a page and BRAND.md disagree, BRAND.md wins.
 */
export const COLOR = {
  ink: "#131126",
  indigo: "#3B2ED3",
  indigoPress: "#2A1FB0",
  cream: "#F6F4EF",
  creamPress: "#ECEAE4",
  white: "#FFFFFF",
  slate: "#4C4A66",
  muted: "#6E6C8A",
  tint: "#EEEDFB",
  onDark: "#B4B1D0",
  violet: "#7C6FFF",
  lilac: "#A79EFF",
  amber: "#FFB224",
  mint: "#5ED6B4",
  coral: "#FF6A55",
  success: "#0E7A5A",
  hairline: "rgba(19,17,38,.08)",
  hairlineInput: "rgba(19,17,38,.12)",
} as const;

/** Signature amber square that replaces the period on every H1 (and statement H2s). */
export const fullStopSquare = {
  display: "inline-block" as const,
  width: ".2em",
  height: ".2em",
  marginLeft: ".06em",
  background: COLOR.amber,
};

export const TYPE = {
  h1Hero: { fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(34px, 2.2vw + 26px, 58px)", lineHeight: 0.95, letterSpacing: "-0.045em" },
  h1Article: { fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(30px, 1.6vw + 24px, 48px)", lineHeight: 1.0, letterSpacing: "-0.04em" },
  h2Section: { fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(28px, 1.5vw + 22px, 44px)", lineHeight: 1.0, letterSpacing: "-0.04em" },
  h2Cta: { fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(30px, 1.9vw + 23px, 52px)", lineHeight: 0.95, letterSpacing: "-0.045em" },
  h3Feature: { fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(24px, 0.9vw + 20px, 34px)", lineHeight: 1.05, letterSpacing: "-0.03em" },
  h3Card: { fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(19px, 0.45vw + 17px, 24px)", lineHeight: 1.15, letterSpacing: "-0.02em" },
  statNumber: { fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(30px, 1.3vw + 25px, 44px)", lineHeight: 1.0, letterSpacing: "-0.03em" },
  lede: { fontFamily: "var(--font-body)", fontSize: "clamp(17px, 0.2vw + 16px, 19px)", lineHeight: 1.55, color: COLOR.slate },
  body: { fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.6 },
  articleBody: { fontFamily: "var(--font-body)", fontSize: "clamp(17px, 0.1vw + 16.6px, 18px)", lineHeight: 1.7 },
  navItem: { fontFamily: "var(--font-body)", fontSize: "clamp(13px, 0.4vw + 12px, 15px)", lineHeight: 1 },
  eyebrow: { fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase" as const },
} as const;

export const RADIUS = {
  pill: 999,
  panel: 28,
  card: 22,
  input: 12,
  flag: 4,
} as const;
