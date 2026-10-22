export type RailChip = { n: string; ini: string; logoStyle: React.CSSProperties; label: string; sq: React.CSSProperties };

const MM: Array<[string, string | null, string?]> = [
  ["M-Pesa", "safaricom.co.ke"], ["Vodacom M-Pesa", "vodacom.com"], ["MTN MoMo", "mtn.com"],
  ["Airtel Money", "airtel.com"], ["Orange Money", "orange.fr"], ["Wave", "wave.com"],
  ["Moov Money", null, "#0066B3"], ["Free Money", null, "#CD1F2A"], ["Telecel Cash", null, "#E4002B"],
  ["AT Money", null, "#00A0DF"], ["Mixx by Yas", "yas.co.tz"], ["telebirr", null, "#0A8FD6"],
  ["Zamtel Kwacha", "zamtel.zm"], ["TNM Mpamba", "tnm.co.mw"], ["e-Mola", null, "#F58220"],
];
const BK: Array<[string, string | null, string?]> = [
  ["PesaLink", "ipsl.co.ke"], ["NIBSS Instant Payment", "nibss-plc.com.ng"], ["GhIPSS", "ghipss.net"],
  ["South African EFT", null, "#007A4D"], ["ACH", "nacha.org"], ["SEPA", null, "#10298E"],
  ["Faster Payments", "wearepay.uk"], ["SWIFT", "swift.com"],
];
const SC: Array<[string, string | null, string?]> = [
  ["USDC", "circle.com"], ["USDT", "tether.to"], ["Stellar", null, "#0F0F0F"], ["Tron", "tron.network"],
  ["Ethereum", "ethereum.org"], ["Base", "base.org"], ["Solana", "solana.com"],
];

function chipOf([n, dom, col]: [string, string | null, string?]): Omit<RailChip, "label" | "sq"> {
  const dark = !!dom;
  return {
    n,
    ini: dom ? "" : n.replace(/[^A-Za-z]/g, "").slice(0, 1).toUpperCase(),
    logoStyle: dark
      ? {
          width: 22,
          height: 22,
          borderRadius: 6,
          flex: "none",
          backgroundImage: `url(https://www.google.com/s2/favicons?domain=${dom}&sz=64)`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }
      : {
          width: 22,
          height: 22,
          borderRadius: 6,
          flex: "none",
          background: col,
          color: "#fff",
          display: "grid",
          placeItems: "center",
          fontFamily: "var(--font-heading)",
          fontSize: 12,
          fontWeight: 700,
        },
  };
}

function grp(label: string, color: string, list: Array<[string, string | null, string?]>): RailChip[] {
  return list.map((x, i) => ({ ...chipOf(x), label: i === 0 ? label : "", sq: { width: 7, height: 7, background: color } }));
}

const A = grp("Mobile money", "#5ED6B4", MM);
const Bk = [...grp("Bank rails", "#7C6FFF", BK), ...grp("Stablecoins and chains", "#FFB224", SC)];
export const RAILS_A: RailChip[] = [...A, ...A];
export const RAILS_B: RailChip[] = [...Bk, ...Bk];
export const RAIL_COUNT = MM.length + BK.length + SC.length;

export type ProductCard = {
  n: string;
  t: string;
  d: string;
  pts: string[];
  href: string;
  bg: string;
  fg: string;
};

const PC: Array<[string, string]> = [
  ["#7C6FFF", "#131126"], ["#FFB224", "#131126"], ["#5ED6B4", "#131126"],
  ["#131126", "#fff"], ["#fff", "#131126"], ["#FF6A55", "#131126"],
];

const PRODUCTS_RAW: Array<[string, string, string[], string]> = [
  ["Payments", "Collect and pay out on local rails.", ["Mobile money", "Bank payouts", "Payment links"], "/payments"],
  ["Settlement and FX", "Convert and settle between currencies.", ["Rate locked before you confirm", "USD · EUR · GBP · CNY"], "/settlement-and-fx"],
  ["Stablecoins", "USDC and USDT into and out of local currency.", ["On- and off-ramps", "Fund payouts"], "/stablecoin-payments-api"],
  ["OTC desk", "Large FX and liquidity, quoted directly.", ["Firm quotes", "Named contact"], "/otc-desk"],
  ["Accounts and treasury", "Hold the currencies you earn and spend.", ["30 currencies", "Statements on demand"], "/business-accounts"],
  ["Agentic payments", "Payments made by software, within your rules.", ["Budgets", "Human approval", "Audit trail"], "/agentic-payments"],
];

export const PRODUCTS: ProductCard[] = PRODUCTS_RAW.map(([t, d, pts, href], i) => {
  const [bg, fg] = PC[i];
  return { n: "0" + (i + 1), t, d, pts, href, bg, fg };
});

export type SolutionItem = { t: string; d: string; href: string };
export type SolutionGroup = { h: string; sqColor: string; items: SolutionItem[] };

const SQ = ["#3B2ED3", "#FFB224", "#5ED6B4"];
const SOL_RAW: Array<[string, Array<[string, string, string]>]> = [
  ["Financial services", [
    ["Financial institutions", "Banks, MFIs and PSPs", "/for-financial-institutions"],
    ["Fintechs and wallets", "Cash-in and cash-out for your users", "/for-fintechs-and-wallets"],
    ["Remittance companies", "Delivery to mobile money and banks", "/for-remittance-companies"],
  ]],
  ["Commerce", [
    ["Global merchants", "Local payment methods in new markets", "/for-global-merchants"],
    ["Platforms and marketplaces", "Mass payouts and collections", "/for-platforms-and-marketplaces"],
    ["Cross-border traders", "FX and settlement for importers and exporters", "/for-cross-border-traders"],
  ]],
  ["Organisations", [
    ["Growing businesses", "Payroll, suppliers and invoices", "/for-growing-businesses"],
    ["NGOs and aid", "Bulk disbursements with an audit trail", "/for-ngos-and-aid"],
    ["AI agents", "Programmable payments within set policies", "/for-ai-agents"],
  ]],
];

export const SOLUTION_GROUPS: SolutionGroup[] = SOL_RAW.map(([h, items], i) => ({
  h,
  sqColor: SQ[i],
  items: items.map(([t, d, href]) => ({ t, d, href })),
}));

export type CoverageStop = { n: string; c: string; flag: string; sub: string; href: string };
export type CoverageRegion = { label: string; stops: CoverageStop[] };

function slugify(n: string): string {
  return n
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z]+/g, "-")
    .replace(/^-|-$/g, "");
}

const COVERAGE_RAW: Array<[string, Array<[string, string, string] | [string, string, string, true]>]> = [
  ["East Africa", [["Kenya", "KES", "ke"], ["Uganda", "UGX", "ug"], ["Tanzania", "TZS", "tz"], ["Rwanda", "RWF", "rw"], ["Ethiopia", "ETB", "et"]]],
  ["West Africa", [["Nigeria", "NGN", "ng"], ["Ghana", "GHS", "gh"], ["Senegal", "XOF", "sn"], ["Côte d’Ivoire", "XOF", "ci"], ["Benin", "XOF", "bj"], ["Togo", "XOF", "tg"], ["Burkina Faso", "XOF", "bf"], ["Mali", "XOF", "ml"]]],
  ["Central Africa", [["Cameroon", "XAF", "cm"], ["DR Congo", "CDF", "cd"]]],
  ["Southern Africa", [["South Africa", "ZAR", "za"], ["Zambia", "ZMW", "zm"], ["Malawi", "MWK", "mw"], ["Mozambique", "MZN", "mz"], ["Botswana", "BWP", "bw"]]],
  ["Bank accounts", [
    ["US dollar", "USD", "us", true], ["Euro", "EUR", "eu", true], ["British pound", "GBP", "gb", true],
    ["UAE dirham", "AED", "ae", true], ["Chinese yuan", "CNY", "cn", true], ["Canadian dollar", "CAD", "ca", true],
    ["South African rand", "ZAR", "za", true], ["Nigerian naira", "NGN", "ng", true], ["Kenyan shilling", "KES", "ke", true],
    ["Ghanaian cedi", "GHS", "gh", true], ["Singapore dollar", "SGD", "sg", true], ["Swiss franc", "CHF", "ch", true],
  ]],
];

export const COVERAGE_REGIONS: CoverageRegion[] = COVERAGE_RAW.map(([label, rows]) => ({
  label,
  stops: rows.map((row) => {
    const [n, c, f] = row;
    const acct = row.length === 4;
    return {
      n,
      c,
      flag: `/flags/${f}.svg`,
      sub: acct ? "Business bank account" : "Mobile money and bank payouts",
      href: acct ? `/open-a-${c.toLowerCase()}-account` : `/send-money-to-${slugify(n)}`,
    };
  }),
}));

export const HOME_FAQS: Array<{ q: string; a: string }> = [
  ["What does ElementPay do?", "ElementPay is payment infrastructure for businesses. You can collect, pay out, convert and hold money across mobile money, bank rails and the USDC and USDT stablecoins on one platform."],
  ["Which markets do you cover?", "Payouts reach 20 African countries across East, West, Central and Southern Africa. Bank accounts are available in 30 currencies."],
  ["What is the difference between Mboka, the dashboard and the API?", "They are three ways onto the same rails. Mboka is a web app with real business bank accounts, cards and payouts for finance teams. The merchant dashboard is for operations teams running collections and payouts. The API is for teams building payments into their own product."],
  ["Do we need a separate setup per country?", "No. One platform covers every market and rail we support."],
  ["Can we fund payments with stablecoins?", "Yes. Hold USDC or USDT in your ElementPay balance and fund payouts from it. The rate to local currency is shown before you confirm."],
  ["Is ElementPay a bank?", "No. ElementPay is a financial technology company. Banking services are provided by licensed partner institutions."],
].map(([q, a]) => ({ q, a }));

export const SCENE_NAMES = ["Collect and pay out", "Where we reach", "Bulk payouts", "Stablecoin ramps", "Settlement and FX"];

export const HOME_SOCIALS: Array<{ n: string; href: string }> = [
  { n: "LinkedIn", href: "https://www.linkedin.com/company/elementpayhq/" },
  { n: "X", href: "https://x.com/element_pay" },
  { n: "TikTok", href: "https://www.tiktok.com/@elementpay" },
  { n: "Instagram", href: "https://www.instagram.com/_elementpay/" },
];

export const HOME_FOOTER_COLUMNS: Array<{ h: string; links: Array<{ t: string; href: string }> }> = [
  { h: "Platform", links: [
    { t: "Mboka", href: "https://mboka.finance" },
    { t: "Merchant dashboard", href: "/merchant-dashboard" },
    { t: "ElementPay API", href: "/payments-api" },
    { t: "ElementPay dApp", href: "/elementpay-dapp" },
  ] },
  { h: "Products", links: [
    { t: "Payments", href: "/payments" },
    { t: "Settlement and FX", href: "/settlement-and-fx" },
    { t: "Accounts", href: "/business-accounts" },
    { t: "OTC desk", href: "/otc-desk" },
    { t: "Stablecoins", href: "/stablecoins" },
    { t: "Agentic payments", href: "/agentic-payments" },
  ] },
  { h: "Resources", links: [
    { t: "Coverage", href: "/coverage" },
    { t: "Pricing", href: "/pricing" },
    { t: "Blog", href: "/blog" },
    { t: "Help centre", href: "/help" },
    { t: "Status", href: "/status" },
  ] },
  { h: "Company", links: [
    { t: "About", href: "/about" },
    { t: "Security", href: "/security-and-compliance" },
    { t: "Press", href: "/press" },
    { t: "Contact", href: "/contact" },
    { t: "Privacy", href: "https://www.elementpay.net/privacy-policy" },
  ] },
];
