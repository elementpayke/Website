/**
 * Company pages (About, Why ElementPay, Help centre), as defined in the
 * design (Company.dc.html).
 */
import type { NavGroupKey } from "@/components/nav/navData";

export type CompanySlug = "about" | "why" | "help";

export const COMPANY_PATH: Record<CompanySlug | "contact", string> = {
  about: "/about",
  why: "/why-elementpay",
  help: "/help",
  contact: "/contact",
};

export const COMPANY_HERO: Record<CompanySlug, { name: string; group: NavGroupKey; title: string; lede: string }> = {
  about: {
    name: "About us",
    group: "Company",
    title: "Connecting emerging-market money to the world.",
    lede: "Billions of people pay and get paid on mobile money and local banks. ElementPay builds the rails that connect those networks to each other, to 30 global currencies and to digital dollars like USDC and USDT.",
  },
  why: {
    name: "Why ElementPay",
    group: "Company",
    title: "Built for teams that need control.",
    lede: "One platform to collect, pay out, convert and hold money across Africa and 30 currencies, with pricing shown upfront, a status on every payment and approvals you set.",
  },
  help: {
    name: "Help centre",
    group: "Resources",
    title: "How can we help?",
    lede: "Answers on payouts, accounts, stablecoins and verification, for finance teams, developers and operators.",
  },
};

export const COMPANY_TABS: Array<[CompanySlug | "contact", string]> = [
  ["about", "About us"],
  ["why", "Why ElementPay"],
  ["help", "Help centre"],
  ["contact", "Contact"],
];

export const PAYOUT_COUNTRIES: Array<[iso: string, name: string]> = [
  ["ke", "Kenya"],
  ["ug", "Uganda"],
  ["tz", "Tanzania"],
  ["rw", "Rwanda"],
  ["et", "Ethiopia"],
  ["ng", "Nigeria"],
  ["gh", "Ghana"],
  ["sn", "Senegal"],
  ["ci", "Côte d’Ivoire"],
  ["bj", "Benin"],
  ["tg", "Togo"],
  ["bf", "Burkina Faso"],
  ["ml", "Mali"],
  ["cm", "Cameroon"],
  ["cd", "DR Congo"],
  ["za", "South Africa"],
  ["zm", "Zambia"],
  ["mw", "Malawi"],
  ["mz", "Mozambique"],
  ["bw", "Botswana"],
];

export const ACCOUNT_CURRENCIES: Array<[code: string, iso: string]> = [
  ["USD", "us"],
  ["EUR", "eu"],
  ["GBP", "gb"],
  ["ZAR", "za"],
  ["CAD", "ca"],
  ["AED", "ae"],
  ["NGN", "ng"],
  ["GHS", "gh"],
  ["KES", "ke"],
  ["TZS", "tz"],
  ["AUD", "au"],
  ["NZD", "nz"],
  ["JPY", "jp"],
  ["CNY", "cn"],
  ["HKD", "hk"],
  ["ILS", "il"],
  ["MXN", "mx"],
  ["SEK", "se"],
  ["CHF", "ch"],
  ["NOK", "no"],
  ["DKK", "dk"],
  ["SGD", "sg"],
  ["KRW", "kr"],
  ["THB", "th"],
  ["HUF", "hu"],
  ["PLN", "pl"],
  ["RON", "ro"],
  ["CZK", "cz"],
  ["XOF", "sn"],
  ["XAF", "cm"],
];

export const ABOUT = {
  nums: [
    ["20", "payout countries in Africa"],
    ["30", "account currencies"],
    ["2", "stablecoins: USDC and USDT"],
    ["1", "platform for all of it"],
  ] as Array<[value: string, label: string]>,
  layers: [
    ["Products", "Mboka, the merchant dashboard, the API and the dApp.", "#3B2ED3", "#fff"],
    ["Liquidity and FX", "30 currencies, USDC and USDT, and an OTC desk for large tickets.", "#131126", "#F6F4EF"],
    ["Compliance", "Business verification, transaction monitoring and licensed banking partners.", "#fff", "#131126"],
    ["Local rails", "Direct connections to mobile money networks and banks in 20 countries.", "#ECEAE4", "#131126"],
  ] as Array<[title: string, detail: string, background: string, color: string]>,
  principles: [
    ["Local first", "Money should arrive on the rail people already use, in the currency they spend."],
    ["Price upfront", "The rate and fee are shown before anyone confirms. No deductions on the way."],
    ["Always open", "Payments run at weekends and on holidays, because people get paid on those days too."],
  ] as Array<[title: string, detail: string]>,
};

export const WHY_PILLARS: Array<[color: string, title: string, detail: string]> = [
  ["#5ED6B4", "One integration", "One platform for every market and rail we cover: mobile money, local banks, international rails and USDC and USDT. Add a country without adding a provider."],
  ["#FFB224", "Pricing upfront", "The rate and fee are shown before you confirm, and the amount your recipient gets is fixed once you approve."],
  ["#A79EFF", "Every payment traceable", "Each payment carries your reference and a status from creation to delivery, in the dashboard and by webhook."],
  ["#FF6A55", "Approvals built in", "Decide who can create, approve and release payments, with a record of who did what."],
];

export const WHY_COMPARE: Array<[row: string, wire: string, elementpay: string]> = [
  ["Route", "Through one or more correspondent banks", "Paid out on the local rail in the recipient’s country"],
  ["Cost visibility", "Intermediary fees can be deducted on the way", "Rate and fee shown before you confirm"],
  ["Tracking", "Limited visibility once sent", "Status and your reference on every payment"],
  ["Ways to receive", "Bank account", "Mobile money, bank account or USDC and USDT"],
  ["Currencies you can hold", "Depends on your bank", "Business accounts in 30 currencies"],
  ["Controls", "Varies by bank", "Roles and approvals for every payment"],
];

export const HELP_CATEGORIES = ["Getting started", "Payouts", "Accounts & FX", "Stablecoins", "Compliance"] as const;

export const HELP_ANSWERS: Array<[category: (typeof HELP_CATEGORIES)[number], question: string, answer: string]> = [
  ["Getting started", "How do we open an account?", "Sign up and complete business verification. Once approved, fund your balance in fiat or stablecoins and start paying and collecting."],
  ["Getting started", "Do we need a separate integration per country?", "No. One API and one dashboard cover every market and rail."],
  [
    "Getting started",
    "What is the difference between Mboka, the dashboard, the API and the dApp?",
    "They are four ways onto the same rails. Mboka is a web app that gives your business real bank accounts, cards and payouts. The merchant dashboard is for collections and payouts, the API is for developers, and the dApp is for on- and off-ramping between USDC or USDT and local currency.",
  ],
  [
    "Payouts",
    "Which countries can we pay out to?",
    "Kenya, Uganda, Tanzania, Rwanda, Ethiopia, Nigeria, Ghana, Senegal, Côte d’Ivoire, Benin, Togo, Burkina Faso, Mali, Cameroon, DR Congo, South Africa, Zambia, Malawi, Mozambique and Botswana. See Coverage for rails in each.",
  ],
  ["Payouts", "How fast do payments arrive?", "Most mobile money payouts are sent on local rails as soon as you confirm, with a status for every payment."],
  ["Payouts", "Can we pay out in bulk?", "Yes. Upload a file in the dashboard or send a batch through the API. Failed lines return to your balance."],
  [
    "Accounts & FX",
    "Which currencies can we hold?",
    "Bank accounts are issued one per currency, in USD, EUR, GBP, ZAR, CAD, AED, NGN, GHS, KES, TZS, AUD, NZD, JPY, CNY, HKD, ILS, MXN, SEK, CHF, NOK, DKK, SGD, KRW, THB, HUF, PLN, RON, CZK, XOF and XAF.",
  ],
  ["Accounts & FX", "Can we move large amounts?", "Yes. The OTC desk quotes large FX and stablecoin tickets directly and settles the same day."],
  ["Stablecoins", "Can we fund payouts with USDC or USDT?", "Yes. Hold USDC or USDT in your ElementPay balance and use it as the source for any payout. We convert to local currency at a rate shown upfront."],
  ["Stablecoins", "Can we receive stablecoins?", "Yes. You get a deposit address for USDC and USDT, and can convert into any of your 30 account currencies."],
  ["Stablecoins", "How does the dApp work?", "Connect a self-custody wallet, enter a phone number or bank account in a supported country, review the local amount and sign."],
  ["Compliance", "Is ElementPay a bank?", "No. ElementPay is a financial technology company. Banking services are provided by licensed partner institutions."],
  [
    "Compliance",
    "What do you need to verify our business?",
    "Company registration documents, details of directors and beneficial owners, and a description of your use case. We will tell you if your markets need anything else.",
  ],
];
