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
  steps?: ReadonlyArray<readonly [string, string]>;
  dayIntro?: string;
  faqs: ReadonlyArray<{ q: string; a: string }>;
  related: ReadonlyArray<readonly [string, string]>;
  seo: { title: string; description: string };
};
