/**
 * Coverage page data, as defined in the design (Coverage v3.dc.html): the 20
 * African payout markets by region, plus the global account currencies.
 */
export type CoverageRegion = "East Africa" | "West Africa" | "Central Africa" | "Southern Africa" | "Global accounts";

export type CoverageRow = {
  region: CoverageRegion;
  iso: string;
  name: string;
  currencyName: string;
  code: string;
  rails: string[];
  payouts: boolean;
  account: boolean;
  href: string;
};

type AfricaEntry = [iso: string, name: string, currencyName: string, code: string, rails: string[], account: 0 | 1];

export const AFRICA: Array<[CoverageRegion, AfricaEntry[]]> = [
  [
    "East Africa",
    [
      ["ke", "Kenya", "Kenyan shilling", "KES", ["M-Pesa", "Airtel Money", "PesaLink", "Bank"], 1],
      ["ug", "Uganda", "Ugandan shilling", "UGX", ["MTN MoMo", "Airtel Money", "Bank"], 0],
      ["tz", "Tanzania", "Tanzanian shilling", "TZS", ["M-Pesa", "Airtel Money", "Mixx by Yas", "Bank"], 1],
      ["rw", "Rwanda", "Rwandan franc", "RWF", ["MTN MoMo", "Airtel Money", "Bank"], 0],
      ["et", "Ethiopia", "Ethiopian birr", "ETB", ["telebirr", "Bank"], 0],
    ],
  ],
  [
    "West Africa",
    [
      ["ng", "Nigeria", "Nigerian naira", "NGN", ["Bank transfer"], 1],
      ["gh", "Ghana", "Ghanaian cedi", "GHS", ["MTN MoMo", "Telecel Cash", "AT Money", "Bank"], 1],
      ["sn", "Senegal", "West African CFA franc", "XOF", ["Orange Money", "Wave", "Free Money"], 1],
      ["ci", "Côte d’Ivoire", "West African CFA franc", "XOF", ["Orange Money", "MTN MoMo", "Moov Money", "Wave"], 1],
      ["bj", "Benin", "West African CFA franc", "XOF", ["MTN MoMo", "Moov Money"], 1],
      ["tg", "Togo", "West African CFA franc", "XOF", ["Moov Money", "Mixx by Yas"], 1],
      ["bf", "Burkina Faso", "West African CFA franc", "XOF", ["Orange Money", "Moov Money"], 1],
      ["ml", "Mali", "West African CFA franc", "XOF", ["Orange Money", "Moov Money"], 1],
    ],
  ],
  [
    "Central Africa",
    [
      ["cm", "Cameroon", "Central African CFA franc", "XAF", ["MTN MoMo", "Orange Money"], 1],
      ["cd", "DR Congo", "Congolese franc", "CDF", ["M-Pesa", "Airtel Money", "Orange Money"], 0],
    ],
  ],
  [
    "Southern Africa",
    [
      ["za", "South Africa", "South African rand", "ZAR", ["Bank EFT"], 1],
      ["zm", "Zambia", "Zambian kwacha", "ZMW", ["MTN MoMo", "Airtel Money", "Zamtel"], 0],
      ["mw", "Malawi", "Malawian kwacha", "MWK", ["Airtel Money", "TNM Mpamba"], 0],
      ["mz", "Mozambique", "Mozambican metical", "MZN", ["M-Pesa", "e-Mola"], 0],
      ["bw", "Botswana", "Botswana pula", "BWP", ["Orange Money", "Bank"], 0],
    ],
  ],
];

export const GLOBAL: Array<[iso: string, name: string, currencyName: string, code: string]> = [
  ["us", "United States", "US dollar", "USD"],
  ["eu", "Eurozone", "Euro", "EUR"],
  ["gb", "United Kingdom", "British pound", "GBP"],
  ["ca", "Canada", "Canadian dollar", "CAD"],
  ["ae", "United Arab Emirates", "UAE dirham", "AED"],
  ["cn", "China", "Chinese yuan", "CNY"],
  ["hk", "Hong Kong", "Hong Kong dollar", "HKD"],
  ["sg", "Singapore", "Singapore dollar", "SGD"],
  ["jp", "Japan", "Japanese yen", "JPY"],
  ["kr", "South Korea", "South Korean won", "KRW"],
  ["th", "Thailand", "Thai baht", "THB"],
  ["au", "Australia", "Australian dollar", "AUD"],
  ["nz", "New Zealand", "New Zealand dollar", "NZD"],
  ["il", "Israel", "Israeli shekel", "ILS"],
  ["mx", "Mexico", "Mexican peso", "MXN"],
  ["ch", "Switzerland", "Swiss franc", "CHF"],
  ["se", "Sweden", "Swedish krona", "SEK"],
  ["no", "Norway", "Norwegian krone", "NOK"],
  ["dk", "Denmark", "Danish krone", "DKK"],
  ["pl", "Poland", "Polish złoty", "PLN"],
  ["cz", "Czechia", "Czech koruna", "CZK"],
  ["hu", "Hungary", "Hungarian forint", "HUF"],
  ["ro", "Romania", "Romanian leu", "RON"],
];

const slug = (n: string) =>
  n
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z]+/g, "-")
    .replace(/^-|-$/g, "");

export const COVERAGE_ROWS: CoverageRow[] = [
  ...AFRICA.flatMap(([region, list]) =>
    list.map(([iso, name, currencyName, code, rails, account]) => ({
      region,
      iso,
      name,
      currencyName,
      code,
      rails,
      payouts: true,
      account: account === 1,
      href: `/send-money-to-${slug(name)}`,
    })),
  ),
  ...GLOBAL.map(([iso, name, currencyName, code]) => ({
    region: "Global accounts" as const,
    iso,
    name,
    currencyName,
    code,
    rails: ["Local account details"],
    payouts: false,
    account: true,
    href: "/business-accounts",
  })),
];

export const COVERAGE_REGIONS: Array<"All" | CoverageRegion> = ["All", ...AFRICA.map(([r]) => r), "Global accounts"];

/** Distinct local payout rails across the African markets (bank rails excluded). */
export const LOCAL_RAIL_COUNT = new Set(
  AFRICA.flatMap(([, list]) => list.flatMap((c) => c[4])).filter((r) => !/^Bank/.test(r)),
).size;

export const flagsOf = (region: CoverageRegion) =>
  (AFRICA.find(([r]) => r === region)?.[1] ?? []).map(([iso, name]) => ({ src: `/flags/${iso}.svg`, alt: name }));
