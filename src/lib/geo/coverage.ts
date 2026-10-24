// Source of truth for countries, currencies and rails.
// Country list is intentionally limited to corridors we can confirm are wired
// to a real provider integration (verified against the element-pay-aggregator
// repo, 2026-10-24). Countries we can't confirm at the integration level were
// removed rather than left as unverified marketing claims — add them back once
// they're actually live, not before.

export type Rail = {
  name: string;
  kind: "mobile-money" | "bank";
  format: string; // e.g. "Phone · +254" or "Account number + bank"
  desc: string;
};

export type Country = {
  iso: string; // 2-letter lowercase, matches /flags/{iso}.svg
  slug: string; // e.g. "kenya", "argentina"
  name: string;
  region: "East Africa" | "West Africa" | "Central Africa" | "Southern Africa" | "Latin America";
  currencyName: string;
  currencyCode: string;
  rails: Rail[];
  hasAccount: boolean;
  dialCode: string;
  mainCity: string;
  aboutPara: string;
};

export type GlobalCurrency = {
  iso: string;
  name: string;
  currencyName: string;
  currencyCode: string;
};

const mm = (name: string, dial: string): Rail => ({
  name,
  kind: "mobile-money",
  format: `Phone · ${dial}`,
  desc: "Mobile money wallet, paid to the recipient’s phone number.",
});
const bank = (name: string, desc: string): Rail => ({
  name,
  kind: "bank",
  format: "Account number + bank",
  desc,
});

export const COUNTRIES: Country[] = [
  {
    iso: "ke", slug: "kenya", name: "Kenya", region: "East Africa",
    currencyName: "Kenyan shilling", currencyCode: "KES", hasAccount: true,
    dialCode: "+254", mainCity: "Nairobi",
    aboutPara: "M-Pesa, run by Safaricom since 2007, is how most Kenyans pay and get paid, and Airtel Money is the second-largest wallet. Bank transfer is the usual choice for supplier and payroll payments to accounts.",
    rails: [mm("M-Pesa", "+254"), mm("Airtel Money", "+254"), bank("Bank", "Local bank transfer to accounts in Kenya.")],
  },
  {
    iso: "ug", slug: "uganda", name: "Uganda", region: "East Africa",
    currencyName: "Ugandan shilling", currencyCode: "UGX", hasAccount: false,
    dialCode: "+256", mainCity: "Kampala",
    aboutPara: "MTN MoMo and Airtel Money are the two mobile money networks businesses use to pay suppliers and staff across Uganda, alongside direct bank transfer for larger payments.",
    rails: [mm("MTN MoMo", "+256"), mm("Airtel Money", "+256"), bank("Bank", "Local bank transfer to accounts in Uganda.")],
  },
  {
    iso: "tz", slug: "tanzania", name: "Tanzania", region: "East Africa",
    currencyName: "Tanzanian shilling", currencyCode: "TZS", hasAccount: true,
    dialCode: "+255", mainCity: "Dar es Salaam",
    aboutPara: "M-Pesa and Airtel Money lead mobile money in Tanzania, alongside direct bank transfer for business payments.",
    rails: [mm("M-Pesa", "+255"), mm("Airtel Money", "+255"), bank("Bank", "Local bank transfer to accounts in Tanzania.")],
  },
  {
    iso: "rw", slug: "rwanda", name: "Rwanda", region: "East Africa",
    currencyName: "Rwandan franc", currencyCode: "RWF", hasAccount: false,
    dialCode: "+250", mainCity: "Kigali",
    aboutPara: "MTN MoMo is the dominant mobile money network in Rwanda, with Airtel Money as the second option and bank transfer for larger business payments.",
    rails: [mm("MTN MoMo", "+250"), mm("Airtel Money", "+250"), bank("Bank", "Local bank transfer to accounts in Rwanda.")],
  },
  {
    iso: "ng", slug: "nigeria", name: "Nigeria", region: "West Africa",
    currencyName: "Nigerian naira", currencyCode: "NGN", hasAccount: true,
    dialCode: "+234", mainCity: "Lagos",
    aboutPara: "Nigeria settles business payments through NIBSS-connected bank transfer, the rail nearly every Nigerian bank account can receive on, making it the standard choice for supplier and payroll payouts.",
    rails: [bank("Bank transfer", "NIBSS-connected transfer to Nigerian bank accounts, using the account number and bank.")],
  },
  {
    iso: "gh", slug: "ghana", name: "Ghana", region: "West Africa",
    currencyName: "Ghanaian cedi", currencyCode: "GHS", hasAccount: true,
    dialCode: "+233", mainCity: "Accra",
    aboutPara: "MTN MoMo leads mobile money in Ghana, alongside direct bank transfer for larger payments.",
    rails: [mm("MTN MoMo", "+233"), bank("Bank", "Local bank transfer to accounts in Ghana.")],
  },
  {
    iso: "za", slug: "south-africa", name: "South Africa", region: "Southern Africa",
    currencyName: "South African rand", currencyCode: "ZAR", hasAccount: true,
    dialCode: "+27", mainCity: "Johannesburg",
    aboutPara: "South Africa settles business payments by bank EFT, the standard rail nearly every South African bank account can receive on.",
    rails: [bank("Bank EFT", "Electronic funds transfer to South African bank accounts, using the account number and bank.")],
  },
  {
    iso: "zm", slug: "zambia", name: "Zambia", region: "Southern Africa",
    currencyName: "Zambian kwacha", currencyCode: "ZMW", hasAccount: false,
    dialCode: "+260", mainCity: "Lusaka",
    aboutPara: "MTN MoMo and Airtel Money are the two mobile money networks businesses use to pay suppliers and staff across Zambia.",
    rails: [mm("MTN MoMo", "+260"), mm("Airtel Money", "+260")],
  },
  {
    iso: "mw", slug: "malawi", name: "Malawi", region: "Southern Africa",
    currencyName: "Malawian kwacha", currencyCode: "MWK", hasAccount: false,
    dialCode: "+265", mainCity: "Lilongwe",
    aboutPara: "Airtel Money is the leading mobile money network most businesses in Malawi use to pay suppliers and staff.",
    rails: [mm("Airtel Money", "+265")],
  },
  {
    iso: "bw", slug: "botswana", name: "Botswana", region: "Southern Africa",
    currencyName: "Botswana pula", currencyCode: "BWP", hasAccount: false,
    dialCode: "+267", mainCity: "Gaborone",
    aboutPara: "Orange Money and direct bank transfer are how most businesses pay suppliers and staff in Botswana.",
    rails: [mm("Orange Money", "+267"), bank("Bank", "Local bank transfer to accounts in Botswana.")],
  },
  {
    iso: "ar", slug: "argentina", name: "Argentina", region: "Latin America",
    currencyName: "Argentine peso", currencyCode: "ARS", hasAccount: false,
    dialCode: "+54", mainCity: "Buenos Aires",
    aboutPara: "Bank transfer is how ElementPay pays out to Argentina today, settling to the recipient’s bank account.",
    rails: [bank("Bank transfer", "Local bank transfer to accounts in Argentina.")],
  },
  {
    iso: "co", slug: "colombia", name: "Colombia", region: "Latin America",
    currencyName: "Colombian peso", currencyCode: "COP", hasAccount: false,
    dialCode: "+57", mainCity: "Bogotá",
    aboutPara: "Bank transfer is how ElementPay pays out to Colombia today, settling to the recipient’s bank account.",
    rails: [bank("Bank transfer", "Local bank transfer to accounts in Colombia.")],
  },
];

export const GLOBAL_CURRENCIES: GlobalCurrency[] = [
  { iso: "us", name: "United States", currencyName: "US dollar", currencyCode: "USD" },
  { iso: "eu", name: "Eurozone", currencyName: "Euro", currencyCode: "EUR" },
  { iso: "gb", name: "United Kingdom", currencyName: "British pound", currencyCode: "GBP" },
  { iso: "ca", name: "Canada", currencyName: "Canadian dollar", currencyCode: "CAD" },
  { iso: "ae", name: "United Arab Emirates", currencyName: "UAE dirham", currencyCode: "AED" },
  { iso: "cn", name: "China", currencyName: "Chinese yuan", currencyCode: "CNY" },
  { iso: "hk", name: "Hong Kong", currencyName: "Hong Kong dollar", currencyCode: "HKD" },
  { iso: "sg", name: "Singapore", currencyName: "Singapore dollar", currencyCode: "SGD" },
  { iso: "jp", name: "Japan", currencyName: "Japanese yen", currencyCode: "JPY" },
  { iso: "kr", name: "South Korea", currencyName: "South Korean won", currencyCode: "KRW" },
  { iso: "th", name: "Thailand", currencyName: "Thai baht", currencyCode: "THB" },
  { iso: "au", name: "Australia", currencyName: "Australian dollar", currencyCode: "AUD" },
  { iso: "nz", name: "New Zealand", currencyName: "New Zealand dollar", currencyCode: "NZD" },
  { iso: "il", name: "Israel", currencyName: "Israeli shekel", currencyCode: "ILS" },
  { iso: "mx", name: "Mexico", currencyName: "Mexican peso", currencyCode: "MXN" },
  { iso: "ch", name: "Switzerland", currencyName: "Swiss franc", currencyCode: "CHF" },
  { iso: "se", name: "Sweden", currencyName: "Swedish krona", currencyCode: "SEK" },
  { iso: "no", name: "Norway", currencyName: "Norwegian krone", currencyCode: "NOK" },
  { iso: "dk", name: "Denmark", currencyName: "Danish krone", currencyCode: "DKK" },
  { iso: "pl", name: "Poland", currencyName: "Polish złoty", currencyCode: "PLN" },
  { iso: "cz", name: "Czechia", currencyName: "Czech koruna", currencyCode: "CZK" },
  { iso: "hu", name: "Hungary", currencyName: "Hungarian forint", currencyCode: "HUF" },
  { iso: "ro", name: "Romania", currencyName: "Romanian leu", currencyCode: "RON" },
];

// The 7 African currencies business accounts are issued in, confirmed live
// on the dashboard independent of which countries have a confirmed payout
// corridor above (account currencies and payout corridors are different
// products — see CURRENCY_OPTIONS in B2BDASHBOARD).
const AFRICAN_ACCOUNT_CURRENCIES: Array<{ code: string; name: string; flagIso: string; countryName: string }> = [
  { code: "KES", name: "Kenyan shilling", flagIso: "ke", countryName: "Kenya" },
  { code: "TZS", name: "Tanzanian shilling", flagIso: "tz", countryName: "Tanzania" },
  { code: "NGN", name: "Nigerian naira", flagIso: "ng", countryName: "Nigeria" },
  { code: "GHS", name: "Ghanaian cedi", flagIso: "gh", countryName: "Ghana" },
  { code: "ZAR", name: "South African rand", flagIso: "za", countryName: "South Africa" },
  { code: "XOF", name: "West African CFA franc", flagIso: "sn", countryName: "West Africa (XOF)" },
  { code: "XAF", name: "Central African CFA franc", flagIso: "cm", countryName: "Central Africa (XAF)" },
];

export function countryBySlug(slug: string): Country | undefined {
  return COUNTRIES.find((c) => c.slug === slug);
}

export function regionMates(country: Country): Country[] {
  return COUNTRIES.filter((c) => c.region === country.region && c.slug !== country.slug);
}

// Currency account pages: 23 global currencies + 7 African account currencies = 30.
export function accountCurrencies(): Array<{ code: string; name: string; flagIso: string; countryName?: string }> {
  const out: Array<{ code: string; name: string; flagIso: string; countryName?: string }> = [];
  for (const g of GLOBAL_CURRENCIES) {
    out.push({ code: g.currencyCode, name: g.currencyName, flagIso: g.iso });
  }
  for (const c of AFRICAN_ACCOUNT_CURRENCIES) {
    out.push(c);
  }
  return out;
}

export const RAIL_COUNT = new Set(
  COUNTRIES.flatMap((c) => c.rails.map((r) => r.name)).filter((n) => n !== "Bank" && n !== "Bank EFT" && n !== "Bank transfer")
).size;

export const AFRICAN_COUNTRY_COUNT = COUNTRIES.filter((c) => c.region !== "Latin America").length;
