export const ICONS = {
  store: "M3 9l1.5-5h15L21 9M4 9v11h16V9M3 9h18M9 20v-6h6v6",
  grid: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
  code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
  coins:
    "M8 8a6 3 0 1012 0A6 3 0 008 8zM8 8v4c0 1.7 2.7 3 6 3s6-1.3 6-3V8M4 12a6 3 0 006 3M4 12v4c0 1.7 2.7 3 6 3",
  send: "M22 2L11 13M22 2l-7 20-4-9-9-4z",
  globe:
    "M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2c3 3 4 6.5 4 10s-1 7-4 10c-3-3-4-6.5-4-10s1-7 4-10z",
  bank: "M3 10l9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 21h18",
  bot: "M4 8h16v12H4zM12 4v4M9 13h.01M15 13h.01M9 17h6",
  swap: "M7 4L3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7",
  building: "M4 21V3h11v18M15 9h5v12M8 7h3M8 11h3M8 15h3M2 21h20",
  ship: "M2 20c2 1 4 1 6 0s4-1 6 0 4 1 6 0M4 16l-1-5h18l-1 5M6 11V6h12v5M12 3v3",
  trend: "M3 17l6-6 4 4 8-8M15 7h6v6",
  wallet: "M3 6h15a3 3 0 013 3v9a2 2 0 01-2 2H3zM3 6l13-3v3M17 13h.01",
  heart: "M12 21s-8-5-8-11a5 5 0 019-3 5 5 0 019 3c0 6-8 11-8 11z",
  map: "M9 3L3 6v15l6-3 6 3 6-3V3l-6 3zM9 3v15M15 6v15",
  book: "M4 4h6a3 3 0 013 3v14a2 2 0 00-2-2H4zM20 4h-6a3 3 0 00-3 3v14a2 2 0 012-2h7z",
  news: "M4 4h13v16H6a2 2 0 01-2-2zM17 8h3v10a2 2 0 01-2 2M8 8h5M8 12h5M8 16h5",
  help: "M12 22a10 10 0 100-20 10 10 0 000 20zM9.1 9a3 3 0 015.8 1c0 2-3 3-3 3M12 17h.01",
  pulse: "M22 12h-4l-3 9L9 3l-3 9H2",
  info: "M12 22a10 10 0 100-20 10 10 0 000 20zM12 16v-4M12 8h.01",
  star: "M12 2l3 7 7 .6-5.3 4.6 1.6 7L12 17.5 5.7 21.2l1.6-7L2 9.6 9 9z",
  mail: "M3 5h18v14H3zM3 6l9 7 9-7",
  mic: "M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3zM19 11a7 7 0 01-14 0M12 18v4",
} as const;

export type IconKey = keyof typeof ICONS;

export type NavItem = readonly [IconKey, string, string, string];

export type NavGroupKey = "Platform" | "Products" | "Solutions" | "Resources" | "Company";

export const NAV_GROUPS: Record<NavGroupKey, { blurb: string; items: readonly NavItem[] }> = {
  Platform: {
    blurb: "Four ways for your business onto the same rails.",
    items: [
      ["store", "Mboka", "Web app with real business bank accounts, cards and payouts", "https://mboka.finance"],
      ["grid", "Merchant dashboard", "Collections, payouts, payment links and approvals", "dashboard"],
      ["code", "ElementPay API", "One order API with webhooks for every event", "api"],
      ["coins", "ElementPay dApp", "On- and off-ramp between USDC/USDT and local currency", "dapp"],
    ],
  },
  Products: {
    blurb: "The building blocks of cross-border money.",
    items: [
      ["send", "Payments", "Payouts in 10+ African countries", "payments"],
      ["globe", "Settlement and FX", "Convert currencies and stablecoins", "fx"],
      ["bank", "Accounts and treasury", "Bank accounts in 30 currencies", "accounts"],
      ["swap", "OTC desk", "Large-ticket FX quoted by a trader", "otc"],
      ["bot", "Agentic payments", "Budgets and policies for AI agents", "agentic"],
      ["coins", "Stablecoins", "USDC and USDT on- and off-ramps", "assets"],
      ["code", "Stablecoin payments API", "B2B stablecoin payouts and collections", "stablecoin-payments-api"],
      ["grid", "Payment gateway", "Mobile money, bank, card and stablecoins", "payment-gateway-africa"],
      ["wallet", "Stablecoin payment gateway", "Accept USDC and USDT, settle locally", "stablecoin-payment-gateway"],
    ],
  },
  Solutions: {
    blurb: "Tailored for every business type.",
    items: [
      ["building", "Financial institutions", "Infrastructure for banks, MFIs and PSPs", "fi"],
      ["globe", "Global merchants", "Accept emerging-market payment methods", "merchants"],
      ["ship", "Cross-border traders", "FX and settlement for importers and exporters", "traders"],
      ["grid", "Platforms and marketplaces", "Mass payouts and collections", "platforms"],
      ["trend", "Growing businesses", "An all-in-one finance tool for SMEs", "smes"],
      ["wallet", "Fintechs and wallets", "Cash-in and cash-out for your users", "wallets"],
      ["send", "Remittance companies", "Deliver to mobile money in every corridor", "remit"],
      ["heart", "NGOs and aid", "Disburse to beneficiaries on their phones", "ngos"],
      ["bot", "AI agents", "Programmable payments for software", "ai"],
    ],
  },
  Resources: {
    blurb: "Everything you need to get started.",
    items: [
      ["map", "Coverage", "10+ payout countries, 30 account currencies", "coverage"],
      ["globe", "Stablecoin payments in Africa", "Country-by-country guides", "stablecoin-payments-africa"],
      ["book", "Developer documentation", "Guides and tutorials for integrating", "https://docs.elementpay.net/"],
      ["globe", "Exchange rates", "Indicative rates for 30 currencies and stablecoins", "rates"],
      ["book", "Glossary", "Mobile money, FX and stablecoin terms explained", "glossary"],
      ["help", "Help centre", "Answers for finance teams", "help"],
      ["pulse", "System status", "Live uptime for every rail", "status"],
    ],
  },
  Company: {
    blurb: "Learn more about ElementPay.",
    items: [
      ["info", "About us", "Connecting emerging-market money to the world", "about"],
      ["star", "Why ElementPay", "Control, upfront pricing and traceability", "why"],
      ["coins", "Pricing", "How rates and fees work", "pricing"],
      ["info", "Security and compliance", "Verification, safeguarding and licences", "trust"],
      ["star", "Careers", "Build payment infrastructure with us", "careers"],
      ["mic", "Press", "Newsroom and media kit", "press"],
      ["mail", "Contact", "Get in touch with our team", "contact"],
    ],
  },
};

export const NAV_GROUP_KEYS = Object.keys(NAV_GROUPS) as NavGroupKey[];

export const MENU_FEATURE: Record<NavGroupKey, { title: string; href: string }> = {
  Platform: { title: "Talk to sales", href: "contact" },
  Products: { title: "Stablecoin payments API", href: "stablecoin-payments-api" },
  Solutions: { title: "B2B stablecoin payments", href: "b2b-stablecoin-payments" },
  Resources: { title: "Stablecoins in Africa", href: "stablecoin-payments-africa" },
  Company: { title: "Talk to sales", href: "contact" },
};

const ROUTE_MAP: Record<string, string> = {
  payments: "payments",
  fx: "settlement-and-fx",
  accounts: "business-accounts",
  otc: "otc-desk",
  agentic: "agentic-payments",
  assets: "stablecoins",
  dashboard: "merchant-dashboard",
  api: "payments-api",
  dapp: "elementpay-dapp",
  fi: "for-financial-institutions",
  merchants: "for-global-merchants",
  traders: "for-cross-border-traders",
  platforms: "for-platforms-and-marketplaces",
  smes: "for-growing-businesses",
  wallets: "for-fintechs-and-wallets",
  remit: "for-remittance-companies",
  ngos: "for-ngos-and-aid",
  ai: "for-ai-agents",
  about: "about",
  why: "why-elementpay",
  help: "help",
  contact: "contact",
  glossary: "glossary",
  rates: "exchange-rates",
  trust: "security-and-compliance",
  pricing: "pricing",
};

export function resolveNavHref(x: string): string {
  if (x.startsWith("http")) return x;
  if (x === "coverage") return "/coverage";
  return "/" + (ROUTE_MAP[x] ?? x);
}
