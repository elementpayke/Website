/**
 * Coverage page data, as defined in the design (Coverage.html): the 20
 * African payout markets, the 30 account currencies, and the stablecoin
 * corridors drawn on the map. Country ids are ISO 3166-1 numeric codes, as
 * used by the world-atlas TopoJSON.
 */
export type PayoutRegion = "East Africa" | "West Africa" | "Central Africa" | "Southern Africa";

export type PayoutCountry = {
  iso: string;
  id: string;
  name: string;
  currency: string;
  rails: string[];
  region: PayoutRegion;
  href: string;
};

type Entry = [iso: string, id: string, name: string, currency: string, rails: string[]];

const PAY: Array<[PayoutRegion, Entry[]]> = [
  [
    "East Africa",
    [
      ["ke", "404", "Kenya", "KES", ["M-Pesa", "Airtel Money", "PesaLink", "Bank"]],
      ["ug", "800", "Uganda", "UGX", ["MTN MoMo", "Airtel Money", "Bank"]],
      ["tz", "834", "Tanzania", "TZS", ["M-Pesa", "Airtel Money", "Mixx by Yas", "Bank"]],
      ["rw", "646", "Rwanda", "RWF", ["MTN MoMo", "Airtel Money", "Bank"]],
      ["et", "231", "Ethiopia", "ETB", ["telebirr", "Bank"]],
    ],
  ],
  [
    "West Africa",
    [
      ["ng", "566", "Nigeria", "NGN", ["Bank transfer"]],
      ["gh", "288", "Ghana", "GHS", ["MTN MoMo", "Telecel Cash", "AT Money", "Bank"]],
      ["sn", "686", "Senegal", "XOF", ["Orange Money", "Wave", "Free Money"]],
      ["ci", "384", "Côte d’Ivoire", "XOF", ["Orange Money", "MTN MoMo", "Moov Money", "Wave"]],
      ["bj", "204", "Benin", "XOF", ["MTN MoMo", "Moov Money"]],
      ["tg", "768", "Togo", "XOF", ["Moov Money", "Mixx by Yas"]],
      ["bf", "854", "Burkina Faso", "XOF", ["Orange Money", "Moov Money"]],
      ["ml", "466", "Mali", "XOF", ["Orange Money", "Moov Money"]],
    ],
  ],
  [
    "Central Africa",
    [
      ["cm", "120", "Cameroon", "XAF", ["MTN MoMo", "Orange Money"]],
      ["cd", "180", "DR Congo", "CDF", ["M-Pesa", "Airtel Money", "Orange Money"]],
    ],
  ],
  [
    "Southern Africa",
    [
      ["za", "710", "South Africa", "ZAR", ["Bank EFT"]],
      ["zm", "894", "Zambia", "ZMW", ["MTN MoMo", "Airtel Money", "Zamtel"]],
      ["mw", "454", "Malawi", "MWK", ["Airtel Money", "TNM Mpamba"]],
      ["mz", "508", "Mozambique", "MZN", ["M-Pesa", "e-Mola"]],
      ["bw", "072", "Botswana", "BWP", ["Orange Money", "Bank"]],
    ],
  ],
];

export const PAYOUT_REGIONS = PAY.map(([r]) => r);

const slug = (n: string) =>
  n
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z]+/g, "-")
    .replace(/^-|-$/g, "");

export const PAYOUT_COUNTRIES: PayoutCountry[] = PAY.flatMap(([region, list]) =>
  list.map(([iso, id, name, currency, rails]) => ({ iso, id, name, currency, rails, region, href: `/send-money-to-${slug(name)}` })),
);

export const PAYOUT_BY_ID: Record<string, PayoutCountry> = Object.fromEntries(PAYOUT_COUNTRIES.map((p) => [p.id, p]));

/** Distinct payout rails across the 20 countries (the hero's "payout rails" figure). */
export const PAYOUT_RAIL_COUNT = new Set(PAYOUT_COUNTRIES.flatMap((p) => p.rails)).size;

/** [code, name, flag, ISO numeric ids of the countries that use it] */
export type AccountCurrency = [code: string, name: string, flag: string, ids: string[]];

export const ACCOUNT_CURRENCIES: AccountCurrency[] = [
  ["USD", "US dollar", "us", ["840"]],
  ["EUR", "Euro", "eu", ["040", "056", "233", "246", "250", "276", "300", "372", "380", "428", "440", "442", "528", "620", "703", "705", "724", "191"]],
  ["GBP", "British pound", "gb", ["826"]],
  ["ZAR", "South African rand", "za", ["710"]],
  ["CAD", "Canadian dollar", "ca", ["124"]],
  ["AED", "UAE dirham", "ae", ["784"]],
  ["NGN", "Nigerian naira", "ng", ["566"]],
  ["GHS", "Ghanaian cedi", "gh", ["288"]],
  ["KES", "Kenyan shilling", "ke", ["404"]],
  ["TZS", "Tanzanian shilling", "tz", ["834"]],
  ["AUD", "Australian dollar", "au", ["036"]],
  ["NZD", "New Zealand dollar", "nz", ["554"]],
  ["JPY", "Japanese yen", "jp", ["392"]],
  ["CNY", "Chinese yuan", "cn", ["156"]],
  ["HKD", "Hong Kong dollar", "hk", ["344"]],
  ["ILS", "Israeli shekel", "il", ["376"]],
  ["MXN", "Mexican peso", "mx", ["484"]],
  ["SEK", "Swedish krona", "se", ["752"]],
  ["CHF", "Swiss franc", "ch", ["756"]],
  ["NOK", "Norwegian krone", "no", ["578"]],
  ["DKK", "Danish krone", "dk", ["208", "304"]],
  ["SGD", "Singapore dollar", "sg", ["702"]],
  ["KRW", "South Korean won", "kr", ["410"]],
  ["THB", "Thai baht", "th", ["764"]],
  ["HUF", "Hungarian forint", "hu", ["348"]],
  ["PLN", "Polish złoty", "pl", ["616"]],
  ["RON", "Romanian leu", "ro", ["642"]],
  ["CZK", "Czech koruna", "cz", ["203"]],
  ["XOF", "West African CFA franc", "sn", ["204", "854", "384", "624", "466", "562", "686", "768"]],
  ["XAF", "Central African CFA franc", "cm", ["120", "140", "148", "178", "226", "266"]],
];

export const ACCOUNT_BY_ID: Record<string, AccountCurrency> = {};
ACCOUNT_CURRENCIES.forEach((a) => a[3].forEach((id) => (ACCOUNT_BY_ID[id] = a)));

export const HUBS: Record<string, [number, number]> = {
  London: [-0.13, 51.5],
  "New York": [-74, 40.7],
  Dubai: [55.3, 25.2],
  Shanghai: [121.5, 31.2],
  Frankfurt: [8.7, 50.1],
  Singapore: [103.8, 1.35],
};

/** [hub, destination city, destination [lon, lat], flag] */
export const CORRIDORS: Array<[hub: string, city: string, coords: [number, number], flag: string]> = [
  ["London", "Nairobi", [36.82, -1.29], "ke"],
  ["New York", "Lagos", [3.38, 6.52], "ng"],
  ["Dubai", "Accra", [-0.19, 5.6], "gh"],
  ["Shanghai", "Dar es Salaam", [39.28, -6.8], "tz"],
  ["Frankfurt", "Dakar", [-17.45, 14.7], "sn"],
  ["Singapore", "Johannesburg", [28.05, -26.2], "za"],
  ["London", "Kampala", [32.58, 0.35], "ug"],
  ["Dubai", "Kinshasa", [15.3, -4.3], "cd"],
  ["New York", "Abidjan", [-4.0, 5.36], "ci"],
  ["Shanghai", "Douala", [9.7, 4.05], "cm"],
];

/** Stablecoin country pages listed at the foot of the page, in design order. */
export const STABLECOIN_COUNTRY_LINKS: Array<[name: string, href: string]> = [
  ["Benin", "/stablecoin-payments-in-benin"],
  ["Botswana", "/stablecoin-payments-in-botswana"],
  ["Burkina Faso", "/stablecoin-payments-in-burkina-faso"],
  ["Cameroon", "/stablecoin-payments-in-cameroon"],
  ["Côte d’Ivoire", "/stablecoin-payments-in-cote-divoire"],
  ["DR Congo", "/stablecoin-payments-in-dr-congo"],
  ["Ethiopia", "/stablecoin-payments-in-ethiopia"],
  ["Ghana", "/stablecoin-payments-in-ghana"],
  ["Kenya", "/stablecoin-payments-in-kenya"],
  ["Malawi", "/stablecoin-payments-in-malawi"],
  ["Mali", "/stablecoin-payments-in-mali"],
  ["Mozambique", "/stablecoin-payments-in-mozambique"],
  ["Nigeria", "/stablecoin-payments-api-nigeria"],
  ["Rwanda", "/stablecoin-payments-in-rwanda"],
  ["Senegal", "/stablecoin-payments-in-senegal"],
  ["South Africa", "/stablecoin-payments-in-south-africa"],
  ["Tanzania", "/stablecoin-payments-in-tanzania"],
  ["Togo", "/stablecoin-payments-in-togo"],
  ["Uganda", "/stablecoin-payments-in-uganda"],
  ["Zambia", "/stablecoin-payments-in-zambia"],
];
