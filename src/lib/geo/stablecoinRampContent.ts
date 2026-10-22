import type { Country } from "./coverage";

function listJoin(items: string[]): string {
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

export function stablecoinRampContent(token: "USDC" | "USDT", dest: Country) {
  const railList = listJoin(dest.rails.map((r) => r.name));
  const primaryRail = dest.rails[0].name;

  const title = `${token} to ${dest.currencyCode}: convert ${token} to ${dest.name} payouts`;
  const description = `For businesses: sell ${token} and pay out in ${dest.currencyCode} to ${railList} in ${dest.name}. API, dashboard or dApp.`;
  const h1 = `Convert ${token} to ${dest.currencyCode} in ${dest.name}`;
  const intro = `Sell ${token} and pay out in ${dest.currencyCode} to ${railList} in ${dest.name}. Treasury and payments teams use the API, dashboard or dApp from a company wallet.`;
  const quickAnswer = `Fund a payout from your ${token} balance, convert to ${dest.currencyCode} at a rate shown before you confirm, and deliver to ${primaryRail} in ${dest.name}.`;

  const facts = [
    { label: "Rate and fee", value: "Shown before you confirm" },
    { label: "You send", value: `${token} · any supported network` },
    { label: "Recipient gets", value: `${dest.currencyCode} on ${railList}` },
    { label: "Typical delivery", value: "Depends on the local rail" },
  ];

  const steps = [
    { num: "01", title: `Fund in ${token}`, body: `Send ${token} to your ElementPay balance, or use an existing balance.` },
    { num: "02", title: "Add the recipient", body: `Phone number in ${dest.dialCode} format for mobile money, or bank details.` },
    { num: "03", title: "Lock and send", body: `The ${dest.currencyCode} amount and fee are fixed before you confirm. Payouts go out on ${primaryRail} as soon as you confirm, with a status for every payment.` },
  ];

  const compareRows = [
    { label: "Delivery", bank: "2–5 business days", ep: "Depends on the local rail" },
    { label: "Fees", bank: "Deducted by intermediaries", ep: "Shown before you send" },
    { label: "Delivers to mobile money", bank: "No", ep: dest.rails.some((r) => r.kind === "mobile-money") ? listJoin(dest.rails.filter((r) => r.kind === "mobile-money").map((r) => r.name)) : "N/A" },
    { label: "Source", bank: "Bank wire only", ep: `${token} or fiat` },
  ];

  const faqs = [
    {
      q: `How do I convert ${token} to ${dest.currencyCode}?`,
      a: `Fund your ElementPay balance in ${token}, create a payout in ${dest.currencyCode} to ${railList} in ${dest.name}, confirm the quoted amount, and we convert and deliver it.`,
    },
    {
      q: "Do recipients need a crypto wallet?",
      a: `No. Recipients in ${dest.name} receive ${dest.currencyCode} in their mobile money wallet or bank account.`,
    },
    {
      q: `Which payout methods can I use in ${dest.name}?`,
      a: `${railList}.`,
    },
    {
      q: "Is there a minimum or maximum amount?",
      a: "There's no fixed minimum. Large tickets can be quoted by the OTC desk for better rates.",
    },
    {
      q: "Is this for individuals?",
      a: "No. ElementPay is built for businesses, and every account goes through business verification.",
    },
  ];

  return { title, description, h1, intro, quickAnswer, facts, steps, compareRows, faqs, railList, primaryRail };
}
