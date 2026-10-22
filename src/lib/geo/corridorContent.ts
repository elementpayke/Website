import type { Country } from "./coverage";
import type { Origin } from "./origins";

function listJoin(items: string[]): string {
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

// Content for /send-money-from-[origin]-to-[dest]. Drops the source handoff's
// "open at weekends" claims (banned per BRAND.md) and its hardcoded, already
// stale indicative FX rate ("1 GBP ≈ 164 KES, October 2026") rather than ship
// a fabricated or quickly-outdated number — rates aren't wired to a live feed.
export function corridorContent(origin: Origin, dest: Country) {
  const railList = listJoin(dest.rails.map((r) => r.name));
  const primaryRail = dest.rails[0].name;

  const title = `Send money from ${origin.name} to ${dest.name}: ${origin.currencyCode} to ${dest.currencyCode} on ${primaryRail}`;
  const description = `For businesses: pay recipients in ${dest.name} from ${origin.shortName}: fund in ${origin.currencyCode}, deliver ${dest.currencyCode} to ${railList}.`;
  const h1 = `Send money from ${origin.name} to ${dest.name}`;
  const intro = `For businesses paying suppliers, staff and partners. Fund in ${origin.currencyCode} by ${origin.fundingMethod} into your ${origin.currencyCode} account, then pay out in ${dest.currencyCode} to ${railList} in ${dest.name}. No correspondent banks, delivery depends on the local rail.`;
  const quickAnswer = `Fund your ElementPay balance in ${origin.currencyCode} by ${origin.fundingMethod} into your ${origin.currencyCode} account, then pay out in ${dest.currencyCode} to ${primaryRail} in ${dest.name}. The rate and fee are shown upfront.`;

  const facts = [
    { label: "Rate and fee", value: "Shown before you confirm" },
    { label: "You send", value: `${origin.currencyCode} · ${origin.fundingMethod}` },
    { label: "Recipient gets", value: `${dest.currencyCode} on ${railList}` },
    { label: "Typical delivery", value: "Depends on the local rail" },
    { label: "Hours", value: "Set by each local rail" },
  ];

  const steps = [
    { num: "01", title: `Fund in ${origin.currencyCode}`, body: `Top up by ${origin.fundingMethod} into your ${origin.currencyCode} account, or use an existing USDC balance.` },
    { num: "02", title: "Add the recipient", body: `Phone number in ${dest.dialCode} format for mobile money, or bank details.` },
    { num: "03", title: "Lock and send", body: `The ${dest.currencyCode} amount and fee are fixed before you confirm. Payouts go out on ${primaryRail} as soon as you confirm, with a status for every payment.` },
  ];

  const compareRows = [
    { label: "Delivery", bank: "2–5 business days", ep: "Depends on the local rail" },
    { label: "Fees", bank: "Deducted by intermediaries", ep: "Shown before you send" },
    { label: "Delivers to mobile money", bank: "No", ep: dest.rails.some((r) => r.kind === "mobile-money") ? listJoin(dest.rails.filter((r) => r.kind === "mobile-money").map((r) => r.name)) : "N/A" },
    { label: "Stablecoin funding", bank: "No", ep: "USDC and USDT" },
  ];

  const faqs = [
    {
      q: `What is the fastest way to send money from ${origin.name} to ${dest.name}?`,
      a: `Fund your ElementPay balance in ${origin.currencyCode} by ${origin.fundingMethod} into your ${origin.currencyCode} account, then pay out in ${dest.currencyCode} to ${primaryRail} in ${dest.name}. Payouts are sent on local rails, with the rate shown upfront.`,
    },
    {
      q: `How much ${dest.currencyCode} will the recipient get?`,
      a: `Your exact rate and fee are shown before you confirm, and the ${dest.currencyCode} amount is fixed once you approve.`,
    },
    {
      q: `Which payout methods can I use in ${dest.name}?`,
      a: `${railList}.`,
    },
    {
      q: "Is there a minimum or maximum amount?",
      a: "There's no fixed minimum. Large corridors can be quoted by the OTC desk for better rates.",
    },
    {
      q: `Can I fund with stablecoins instead of ${origin.currencyCode}?`,
      a: `Yes. You can fund any payout to ${dest.name} from a USDC or USDT balance instead of ${origin.currencyCode}.`,
    },
  ];

  return { title, description, h1, intro, quickAnswer, facts, steps, compareRows, faqs, railList, primaryRail };
}
