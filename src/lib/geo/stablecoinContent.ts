import type { Country, Rail } from "./coverage";

function listJoin(items: string[]): string {
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

function railNames(rails: Rail[]): string[] {
  return rails.map((r) => r.name);
}

export function stablecoinContent(country: Country) {
  const { name, currencyCode, currencyName, rails } = country;
  const railList = listJoin(railNames(rails));

  const title = `Stablecoin payments in ${name}: USDC and USDT to ${currencyCode} for businesses`;
  const description = `B2B stablecoin payments in ${name}. Pay suppliers and staff in ${currencyCode} on ${railList} from USDC or USDT.`;
  const h1 = `Stablecoin payments in ${name}`;
  const intro = `Pay suppliers, staff and partners in ${name} in ${currencyName.toLowerCase()}s from a USDC or USDT balance, delivered to ${railList}. Or collect ${currencyCode} from customers and settle into stablecoins. Built for businesses, with the rate fixed before you confirm.`;

  const useCases = [
    { title: `Pay suppliers in ${currencyCode}`, body: `Fund in USDC or USDT and settle invoices in ${name} to ${railList}.` },
    { title: `Payroll in ${name}`, body: `Pay employees and contractors in ${currencyName.toLowerCase()}s in one run from a single stablecoin balance.` },
    { title: `Collect ${currencyCode}, settle in USDC`, body: `Accept local payments from customers in ${name} and hold the proceeds in USDC or USDT.` },
    { title: "Embed ramps in your product", body: `Fintechs and wallets offer ${currencyCode} on- and off-ramps to their own users through our API.` },
  ];

  const howItWorks = [
    { num: "01", title: "Verify your business", body: "Complete onboarding once to pay and collect across all 20 countries." },
    { num: "02", title: "Fund in stablecoins", body: "Send USDC or USDT, or use your existing ElementPay balance." },
    { num: "03", title: `Pay out in ${currencyCode}`, body: `Choose ${railList} and confirm the locked ${currencyCode} amount.` },
    { num: "04", title: "Reconcile", body: "Every payment returns a status and your own reference by webhook." },
  ];

  const faqs = [
    {
      q: `How do businesses make stablecoin payments in ${name}?`,
      a: `Fund an ElementPay balance in USDC or USDT, create a payout in ${currencyCode} to ${railList} in ${name}, confirm the quoted amount, and we convert and deliver it.`,
    },
    {
      q: `Can we pay suppliers in ${name} with USDT?`,
      a: `Yes. Suppliers receive ${currencyName.toLowerCase()}s on ${railList}; they do not need a crypto wallet.`,
    },
    {
      q: `Can we collect in ${currencyCode} and settle in stablecoins?`,
      a: `Yes. Customers pay in ${currencyCode} locally and the proceeds settle into USDC or USDT on your balance.`,
    },
    {
      q: `How fast are payouts in ${name}?`,
      a: "Delivery depends on the local rail. ElementPay sends the payout as soon as you confirm, with a status for every payment.",
    },
    {
      q: "Is this for individuals?",
      a: "No. ElementPay is built for businesses, and every account goes through business verification.",
    },
  ];

  return { title, description, h1, intro, useCases, howItWorks, faqs, railList };
}
