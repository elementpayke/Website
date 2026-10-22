import type { Country, Rail } from "./coverage";

// Generates all copy for /send-money-to-[country] from the Country record,
// so every page is produced from one BRAND.md-compliant template instead of
// 20 hand-written pages. Delivery-time wording follows BRAND.md section 1
// ("Depends on the local rail") rather than the handoff's "Around 30 seconds",
// which is a banned speed claim.

function listJoin(items: string[]): string {
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

function railNames(rails: Rail[]): string[] {
  return rails.map((r) => r.name);
}

export function sendMoneyContent(country: Country) {
  const { name, currencyCode, currencyName, rails, dialCode, mainCity, region, aboutPara, hasAccount } = country;
  const names = railNames(rails);
  const railList = listJoin(names);
  const mobileRails = rails.filter((r) => r.kind === "mobile-money");
  const bankRails = rails.filter((r) => r.kind === "bank");

  const title = `Send money to ${name}: ${railList} payouts in ${currencyCode}`;
  const description = `For businesses: pay out to ${railList} in ${name}. Fund in USD, EUR, GBP, USDC or USDT. Rates shown upfront.`;
  const h1 = `Send money to ${name}`;
  const intro = `For businesses paying suppliers, staff and partners. Pay out in ${currencyCode} to ${railList}. Fund from USD, EUR, GBP or the USDC and USDT stablecoins, with the rate shown before you confirm.`;
  const quickAnswer = `The fastest way for a business to send money to ${name} is a direct payout to ${names[0]} in ${currencyCode}. With ElementPay the rate and fee are shown upfront, funded from fiat or stablecoins. Delivery depends on the local rail.`;

  const facts = [
    { label: "Currency", value: `${currencyCode} · ${currencyName}` },
    { label: "Payout rails", value: railList },
    { label: "Typical delivery", value: "Depends on the local rail" },
    { label: "Hours", value: "Set by each local rail" },
    { label: "Fund with", value: "USD, EUR, GBP, USDC, USDT" },
    { label: `${currencyCode} account`, value: hasAccount ? "Available" : "Talk to sales" },
  ];

  let recipientStep: string;
  if (mobileRails.length && bankRails.length) {
    recipientStep = `Enter their phone number in ${dialCode} format for ${listJoin(mobileRails.map((r) => r.name))}, or their bank account number and bank.`;
  } else if (mobileRails.length) {
    recipientStep = `Enter their phone number in ${dialCode} format for ${listJoin(mobileRails.map((r) => r.name))}.`;
  } else {
    recipientStep = `Enter their bank account number and bank for a transfer in ${name}.`;
  }

  const steps = [
    { num: "01", title: "Add the recipient", body: recipientStep },
    { num: "02", title: `Lock the ${currencyCode} rate`, body: `Choose USD, EUR, GBP, USDC or USDT as the source. The ${currencyCode} amount and fee are fixed before you confirm.` },
    { num: "03", title: "Delivered", body: `The payout lands on ${names[0]} in ${name}. A webhook and receipt confirm delivery.` },
  ];

  const faqs = [
    {
      q: `How long does it take to send money to ${name}?`,
      a: `Delivery depends on the local rail. ElementPay sends the payout on local rails as soon as you confirm, with a status and reference for every payment.`,
    },
    {
      q: `Which payout methods are available in ${name}?`,
      a: `ElementPay pays out in ${currencyCode} to ${railList}.${mobileRails.length ? ` Mobile money payouts need the recipient’s phone number in ${dialCode} format.` : ""}${bankRails.length ? " Bank payouts need the recipient’s account number and bank." : ""}`,
    },
    {
      q: `Can I send money to ${name} with USDC or USDT?`,
      a: `Yes. Hold USDC or USDT in your ElementPay balance and use it to fund any payout to ${name}. ElementPay converts to ${currencyCode} at a rate shown before you confirm and delivers on the local rail.`,
    },
    {
      q: `Can I hold ${currencyCode} in an ElementPay account?`,
      a: hasAccount
        ? `Yes. ElementPay issues ${currencyCode} bank accounts, one per currency, so you can receive, hold and pay in ${currencyName}s.`
        : `Not yet listed as an account currency. Talk to sales about holding ${currencyCode} — ElementPay issues business accounts in 30 currencies today and coverage grows over time.`,
    },
    {
      q: `What currency does the recipient receive in ${name}?`,
      a: `Recipients in ${name} are paid in ${currencyName}s (${currencyCode}). You can fund the payout from USD, EUR, GBP, any of ElementPay’s 30 account currencies, or USDC and USDT.`,
    },
    {
      q: "Is ElementPay a bank?",
      a: "No. ElementPay is a financial technology company. Banking services are provided by licensed partner institutions.",
    },
  ];

  const statChips = [
    { label: "REGION", value: region },
    { label: "MAIN BUSINESS CITY", value: mainCity },
    { label: "DIALLING CODE", value: dialCode },
    { label: "CURRENCY", value: currencyCode },
  ];

  return { title, description, h1, intro, quickAnswer, facts, steps, faqs, statChips, aboutPara, railList };
}
