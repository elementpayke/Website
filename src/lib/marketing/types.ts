export type MarketingGroup = "Products" | "Solutions" | "Resources" | "Company";

export type MarketingPageData = {
  slug: string;
  path: string;
  group: MarketingGroup;
  name: string;
  title: string;
  lede: string;
  inShort: string;
  specs: ReadonlyArray<readonly [string, string]>;
  features: ReadonlyArray<readonly [string, string]>;
  featuresHeading?: string;
  steps?: ReadonlyArray<readonly [string, string]>;
  dayIntro?: string;
  faqs: ReadonlyArray<{ q: string; a: string }>;
  related: ReadonlyArray<readonly [string, string]>;
  relatedHeading?: string;
  /** Design default is "before-faq" (Related/Coverage, then FAQ, then CTA).
   * A few stablecoin pages put the generic related-links pill list after the
   * CTA instead, right before the footer. */
  relatedPosition?: "before-faq" | "after-cta";
  /** Pill-link section matching the design's "Coverage"/"Related" country or
   * route pill sections on stablecoin pages (e.g. payroll destinations,
   * USDC/USDT routes, stablecoin-payments-in-[country] links). */
  countryPills?: { heading: string; links: ReadonlyArray<readonly [string, string]> };
  seo: { title: string; description: string };
};
