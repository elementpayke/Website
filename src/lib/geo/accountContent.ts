import { accountCurrencies, AFRICAN_COUNTRY_COUNT, COUNTRIES } from "./coverage";

const COVERAGE_BLURB = `${AFRICAN_COUNTRY_COUNT}+ African countries, plus Argentina and Colombia`;

type AccountCurrency = ReturnType<typeof accountCurrencies>[number];

export function accountContent(currency: AccountCurrency) {
  const { code, name } = currency;
  const payoutCountry = COUNTRIES.find((c) => c.currencyCode === code);
  const title = `Open a ${code} business account: ${name} account details`;
  const description = `Get a dedicated ${code} account for your business. Receive, hold and convert ${name}s, plus 29 other currencies, USDC and USDT.`;
  const h1 = `A ${name} account for your business`;
  const intro = `Your own ${code} account details, so customers and partners pay you like a local. Hold ${code} alongside 29 other currencies and USDC and USDT, and convert between them.`;
  const quickAnswer = `Yes. ElementPay issues dedicated ${code} accounts to verified businesses, one account per currency. You can receive, hold and convert ${name}s, and use the balance to fund payouts in ${COVERAGE_BLURB}.`;

  const facts = [
    { label: "Currency", value: `${code} · ${name}` },
    { label: "Account number", value: "Dedicated" },
    { label: "Bank details", value: "Local bank code" },
    { label: "Rails", value: `Local ${code} transfers` },
    { label: "Converts to", value: "29 currencies, USDC, USDT" },
  ];

  const uses = [
    { num: "01", title: "Receive", body: `Share your ${code} account details on invoices. Payments arrive in your ElementPay balance.`, link: null as { text: string; href: string } | null },
    { num: "02", title: "Hold", body: `Keep ${code} on the same balance sheet as your other currencies and stablecoins.`, link: null as { text: string; href: string } | null },
    { num: "03", title: "Convert", body: `Exchange ${code} to any of 29 currencies or USDC and USDT at a quote locked before you confirm.`, link: null as { text: string; href: string } | null },
    {
      num: "04",
      title: "Pay out",
      body: payoutCountry ? `Pay recipients in ${code} directly.` : `Fund payouts to mobile money and banks in ${COVERAGE_BLURB}.`,
      link: payoutCountry ? { text: "See payouts →", href: `/send-money-to-${payoutCountry.slug}` } : null,
    },
  ];

  const faqs = [
    {
      q: `Can a business outside the usual region open a ${code} account with ElementPay?`,
      a: `Yes, subject to business verification. ElementPay issues ${code} accounts, one per currency, to verified businesses so they can receive and pay in ${name}s.`,
    },
    {
      q: `What can I do with a ${code} account?`,
      a: `Receive ${code} from customers and partners with your own account details, hold the balance, convert to any of 29 other currencies or to USDC and USDT, and pay out to mobile money and banks in ${COVERAGE_BLURB}.`,
    },
    {
      q: `How fast are conversions from ${code}?`,
      a: "Conversions settle at a quote shown before you confirm. Large tickets can be quoted by the OTC desk.",
    },
    {
      q: `Can I convert ${code} to USDC or USDT?`,
      a: `Yes. ${code} balances convert to and from USDC and USDT on the same balance sheet.`,
    },
  ];

  return { title, description, h1, intro, quickAnswer, facts, uses, faqs };
}
