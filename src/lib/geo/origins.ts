import { COUNTRIES } from "./coverage";

export type Origin = {
  slug: string; // e.g. "uk", "us", "uae"
  name: string; // display name, e.g. "United Kingdom"
  shortName: string; // e.g. "the UK", "the US", "the UAE"
  iso: string; // flag svg
  currencyCode: string;
  fundingMethod: string; // e.g. "Faster Payments", "ACH", "SEPA"
};

export const ORIGINS: Origin[] = [
  { slug: "uk", name: "United Kingdom", shortName: "the UK", iso: "gb", currencyCode: "GBP", fundingMethod: "Faster Payments" },
  { slug: "us", name: "United States", shortName: "the US", iso: "us", currencyCode: "USD", fundingMethod: "ACH" },
  { slug: "canada", name: "Canada", shortName: "Canada", iso: "ca", currencyCode: "CAD", fundingMethod: "Interac e-Transfer" },
  { slug: "uae", name: "UAE", shortName: "the UAE", iso: "ae", currencyCode: "AED", fundingMethod: "local bank transfer" },
  { slug: "china", name: "China", shortName: "China", iso: "cn", currencyCode: "CNY", fundingMethod: "local bank transfer" },
  { slug: "france", name: "France", shortName: "France", iso: "fr", currencyCode: "EUR", fundingMethod: "SEPA" },
  { slug: "germany", name: "Germany", shortName: "Germany", iso: "de", currencyCode: "EUR", fundingMethod: "SEPA" },
];

// [originSlug, destCountrySlug][]. Only pairs where the destination is a
// confirmed payout country in coverage.ts — France has no corridors left
// now that Benin/Cameroon/Côte d'Ivoire/Mali/Senegal were removed as unconfirmed.
export const CORRIDORS: Array<[string, string]> = [
  ["canada", "ghana"], ["canada", "nigeria"],
  ["china", "ghana"], ["china", "kenya"], ["china", "nigeria"], ["china", "tanzania"],
  ["germany", "ghana"], ["germany", "nigeria"],
  ["uae", "kenya"], ["uae", "nigeria"], ["uae", "uganda"],
  ["uk", "ghana"], ["uk", "kenya"], ["uk", "nigeria"], ["uk", "south-africa"], ["uk", "uganda"],
  ["us", "ghana"], ["us", "kenya"], ["us", "nigeria"],
];

export const STABLECOIN_RAMP_COUNTRIES: Record<"USDC" | "USDT", string[]> = {
  USDC: ["ghana", "kenya", "nigeria", "south-africa", "uganda"],
  USDT: ["ghana", "kenya", "nigeria"],
};

export function originBySlug(slug: string): Origin | undefined {
  return ORIGINS.find((o) => o.slug === slug);
}

export function corridorsForDest(destSlug: string): Array<{ origin: Origin }> {
  return CORRIDORS.filter(([, d]) => d === destSlug).map(([o]) => ({ origin: originBySlug(o)! }));
}

export function corridorsForOrigin(originSlug: string): string[] {
  return CORRIDORS.filter(([o]) => o === originSlug).map(([, d]) => d);
}

export function destCountry(slug: string) {
  return COUNTRIES.find((c) => c.slug === slug);
}
