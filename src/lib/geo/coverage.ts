// Source of truth for countries, currencies and rails.
// Extracted from the design handoff's Coverage v3.dc.html (AFR/GL data), which
// is itself generated from the same facts used across every send-money-to-*,
// stablecoin-payments-in-*, open-a-*-account and corridor page.

export type Rail = {
  name: string;
  kind: "mobile-money" | "bank";
  format: string; // e.g. "Phone · +254" or "Account number + bank"
  desc: string;
};

export type Country = {
  iso: string; // 2-letter lowercase, matches /flags/{iso}.svg
  slug: string; // e.g. "kenya", "cote-divoire", "dr-congo"
  name: string;
  region: "East Africa" | "West Africa" | "Central Africa" | "Southern Africa";
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
    aboutPara: "M-Pesa, run by Safaricom since 2007, is how most Kenyans pay and get paid, and Airtel Money is the second-largest wallet. PesaLink connects Kenyan banks in real time, which makes it the usual choice for supplier and payroll payments to bank accounts.",
    rails: [mm("M-Pesa", "+254"), mm("Airtel Money", "+254"), bank("PesaLink", "Real-time transfers between Kenyan banks, using the account number and bank."), bank("Bank", "Local bank transfer to accounts in Kenya.")],
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
    aboutPara: "M-Pesa and Airtel Money lead mobile money in Tanzania, with Mixx by Yas also used by businesses paying staff and suppliers, alongside direct bank transfer.",
    rails: [mm("M-Pesa", "+255"), mm("Airtel Money", "+255"), mm("Mixx by Yas", "+255"), bank("Bank", "Local bank transfer to accounts in Tanzania.")],
  },
  {
    iso: "rw", slug: "rwanda", name: "Rwanda", region: "East Africa",
    currencyName: "Rwandan franc", currencyCode: "RWF", hasAccount: false,
    dialCode: "+250", mainCity: "Kigali",
    aboutPara: "MTN MoMo is the dominant mobile money network in Rwanda, with Airtel Money as the second option and bank transfer for larger business payments.",
    rails: [mm("MTN MoMo", "+250"), mm("Airtel Money", "+250"), bank("Bank", "Local bank transfer to accounts in Rwanda.")],
  },
  {
    iso: "et", slug: "ethiopia", name: "Ethiopia", region: "East Africa",
    currencyName: "Ethiopian birr", currencyCode: "ETB", hasAccount: false,
    dialCode: "+251", mainCity: "Addis Ababa",
    aboutPara: "telebirr, operated by Ethio Telecom, is the leading mobile money wallet in Ethiopia, alongside direct bank transfer for business payments.",
    rails: [mm("telebirr", "+251"), bank("Bank", "Local bank transfer to accounts in Ethiopia.")],
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
    aboutPara: "MTN MoMo leads mobile money in Ghana, with Telecel Cash and AT Money also used by businesses, alongside direct bank transfer for larger payments.",
    rails: [mm("MTN MoMo", "+233"), mm("Telecel Cash", "+233"), mm("AT Money", "+233"), bank("Bank", "Local bank transfer to accounts in Ghana.")],
  },
  {
    iso: "sn", slug: "senegal", name: "Senegal", region: "West Africa",
    currencyName: "West African CFA franc", currencyCode: "XOF", hasAccount: true,
    dialCode: "+221", mainCity: "Dakar",
    aboutPara: "Orange Money and Wave are the two mobile money networks most businesses in Senegal use to pay suppliers and staff, with Free Money as a third option.",
    rails: [mm("Orange Money", "+221"), mm("Wave", "+221"), mm("Free Money", "+221")],
  },
  {
    iso: "ci", slug: "cote-divoire", name: "Côte d’Ivoire", region: "West Africa",
    currencyName: "West African CFA franc", currencyCode: "XOF", hasAccount: true,
    dialCode: "+225", mainCity: "Abidjan",
    aboutPara: "Orange Money, MTN MoMo, Moov Money and Wave all operate in Côte d’Ivoire, giving businesses several mobile money networks to reach suppliers and staff.",
    rails: [mm("Orange Money", "+225"), mm("MTN MoMo", "+225"), mm("Moov Money", "+225"), mm("Wave", "+225")],
  },
  {
    iso: "bj", slug: "benin", name: "Benin", region: "West Africa",
    currencyName: "West African CFA franc", currencyCode: "XOF", hasAccount: true,
    dialCode: "+229", mainCity: "Cotonou",
    aboutPara: "MTN MoMo and Moov Money are the two main mobile money networks in Benin. Cotonou, the economic capital, is a trading hub for goods moving into Nigeria and the Sahel.",
    rails: [mm("MTN MoMo", "+229"), mm("Moov Money", "+229")],
  },
  {
    iso: "tg", slug: "togo", name: "Togo", region: "West Africa",
    currencyName: "West African CFA franc", currencyCode: "XOF", hasAccount: true,
    dialCode: "+228", mainCity: "Lomé",
    aboutPara: "Moov Money and Mixx by Yas are the two mobile money networks businesses use to pay suppliers and staff across Togo.",
    rails: [mm("Moov Money", "+228"), mm("Mixx by Yas", "+228")],
  },
  {
    iso: "bf", slug: "burkina-faso", name: "Burkina Faso", region: "West Africa",
    currencyName: "West African CFA franc", currencyCode: "XOF", hasAccount: true,
    dialCode: "+226", mainCity: "Ouagadougou",
    aboutPara: "Orange Money and Moov Money are the two mobile money networks most businesses in Burkina Faso use to pay suppliers and staff.",
    rails: [mm("Orange Money", "+226"), mm("Moov Money", "+226")],
  },
  {
    iso: "ml", slug: "mali", name: "Mali", region: "West Africa",
    currencyName: "West African CFA franc", currencyCode: "XOF", hasAccount: true,
    dialCode: "+223", mainCity: "Bamako",
    aboutPara: "Orange Money and Moov Money are the two mobile money networks most businesses in Mali use to pay suppliers and staff.",
    rails: [mm("Orange Money", "+223"), mm("Moov Money", "+223")],
  },
  {
    iso: "cm", slug: "cameroon", name: "Cameroon", region: "Central Africa",
    currencyName: "Central African CFA franc", currencyCode: "XAF", hasAccount: true,
    dialCode: "+237", mainCity: "Douala",
    aboutPara: "MTN MoMo and Orange Money are the two mobile money networks most businesses in Cameroon use to pay suppliers and staff, both reaching customers nationwide.",
    rails: [mm("MTN MoMo", "+237"), mm("Orange Money", "+237")],
  },
  {
    iso: "cd", slug: "dr-congo", name: "DR Congo", region: "Central Africa",
    currencyName: "Congolese franc", currencyCode: "CDF", hasAccount: false,
    dialCode: "+243", mainCity: "Kinshasa",
    aboutPara: "M-Pesa, Airtel Money and Orange Money all operate in DR Congo, giving businesses several mobile money networks to reach suppliers and staff across the country.",
    rails: [mm("M-Pesa", "+243"), mm("Airtel Money", "+243"), mm("Orange Money", "+243")],
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
    aboutPara: "MTN MoMo, Airtel Money and Zamtel Kwacha are the three mobile money networks businesses use to pay suppliers and staff across Zambia.",
    rails: [mm("MTN MoMo", "+260"), mm("Airtel Money", "+260"), mm("Zamtel Kwacha", "+260")],
  },
  {
    iso: "mw", slug: "malawi", name: "Malawi", region: "Southern Africa",
    currencyName: "Malawian kwacha", currencyCode: "MWK", hasAccount: false,
    dialCode: "+265", mainCity: "Lilongwe",
    aboutPara: "Airtel Money and TNM Mpamba are the two mobile money networks most businesses in Malawi use to pay suppliers and staff.",
    rails: [mm("Airtel Money", "+265"), mm("TNM Mpamba", "+265")],
  },
  {
    iso: "mz", slug: "mozambique", name: "Mozambique", region: "Southern Africa",
    currencyName: "Mozambican metical", currencyCode: "MZN", hasAccount: false,
    dialCode: "+258", mainCity: "Maputo",
    aboutPara: "M-Pesa and e-Mola are the two mobile money networks most businesses in Mozambique use to pay suppliers and staff.",
    rails: [mm("M-Pesa", "+258"), mm("e-Mola", "+258")],
  },
  {
    iso: "bw", slug: "botswana", name: "Botswana", region: "Southern Africa",
    currencyName: "Botswana pula", currencyCode: "BWP", hasAccount: false,
    dialCode: "+267", mainCity: "Gaborone",
    aboutPara: "Orange Money and direct bank transfer are how most businesses pay suppliers and staff in Botswana.",
    rails: [mm("Orange Money", "+267"), bank("Bank", "Local bank transfer to accounts in Botswana.")],
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

export function countryBySlug(slug: string): Country | undefined {
  return COUNTRIES.find((c) => c.slug === slug);
}

export function regionMates(country: Country): Country[] {
  return COUNTRIES.filter((c) => c.region === country.region && c.slug !== country.slug);
}

// Currency account pages: 23 global currencies + the 7 unique African currencies
// that have hasAccount:true (XOF/XAF are shared by multiple countries -> one page each).
export function accountCurrencies(): Array<{ code: string; name: string; flagIso: string; countryName?: string }> {
  const seen = new Set<string>();
  const out: Array<{ code: string; name: string; flagIso: string; countryName?: string }> = [];
  for (const g of GLOBAL_CURRENCIES) {
    out.push({ code: g.currencyCode, name: g.currencyName, flagIso: g.iso });
    seen.add(g.currencyCode);
  }
  for (const c of COUNTRIES) {
    if (c.hasAccount && !seen.has(c.currencyCode)) {
      out.push({ code: c.currencyCode, name: c.currencyName, flagIso: c.iso, countryName: c.name });
      seen.add(c.currencyCode);
    }
  }
  return out;
}

export const RAIL_COUNT = new Set(
  COUNTRIES.flatMap((c) => c.rails.map((r) => r.name)).filter((n) => n !== "Bank" && n !== "Bank EFT" && n !== "Bank transfer")
).size;
