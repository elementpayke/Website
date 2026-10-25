/**
 * Press releases, as defined in the design (ep-content.js RELEASES).
 */
export type Release = {
  slug: string;
  date: string;
  title: string;
  desc: string;
  body: string[];
};

export const RELEASES: Release[] = [
  {
    slug: "bank-accounts-30-currencies",
    date: "Oct 14, 2026",
    title: "ElementPay launches bank accounts in 30 currencies",
    desc: "Businesses can now receive, hold and pay in 30 currencies, each with its own account details.",
    body: [
      "ElementPay today announced bank accounts in 30 currencies, issued one per currency. Businesses can now receive, hold and pay in USD, EUR, GBP, ZAR, CAD, AED, NGN, GHS, KES, TZS, AUD, NZD, JPY, CNY, HKD, ILS, MXN, SEK, CHF, NOK, DKK, SGD, KRW, THB, HUF, PLN, RON, CZK, XOF and XAF.",
      "Each currency has its own account details, so customers and partners can pay an ElementPay business as they would a local company. Balances sit alongside USDC and USDT holdings and convert between one another.",
      "The accounts are available in the merchant dashboard, through the ElementPay API and in Mboka, ElementPay's web app.",
    ],
  },
  {
    slug: "payouts-20-african-countries",
    date: "Sep 16, 2026",
    title: "ElementPay expands payouts to 20 African countries",
    desc: "Mobile money and bank payouts now reach East, West, Central and Southern Africa through one API.",
    body: [
      "ElementPay has expanded its payout network to 20 African countries across East, West, Central and Southern Africa. Businesses can pay recipients on mobile money networks including M-Pesa, MTN MoMo, Airtel Money, Orange Money and Wave, and on local bank rails.",
      "Payouts can be funded from any ElementPay balance, including USD, EUR, GBP and the USDC and USDT stablecoins, and are delivered in local currency, including at weekends.",
      "The full list of countries, currencies and rails is published on the ElementPay coverage page.",
    ],
  },
  {
    slug: "mboka-business-app",
    date: "Aug 19, 2026",
    title:
      "ElementPay introduces Mboka, a web app with real business bank accounts, cards and payouts",
    desc: "Mboka brings ElementPay accounts, cards and payouts to growing businesses in one app.",
    body: [
      "ElementPay today introduced Mboka, a web app built on the ElementPay network. Mboka gives growing businesses real bank accounts in their own name, cards and payouts to mobile money and banks in one place.",
      "Teams can pay staff and suppliers across countries, send payment links to customers and keep every currency, including stablecoin balances, on a single balance sheet.",
      "Mboka is available at mboka.finance.",
    ],
  },
  {
    slug: "usdc-usdt-off-ramps",
    date: "Jul 22, 2026",
    title: "ElementPay adds USDC and USDT off-ramps to mobile money",
    desc: "Businesses can convert dollar stablecoins into local currency on mobile money and bank accounts.",
    body: [
      "ElementPay now supports USDC and USDT off-ramps to mobile money and bank accounts. Businesses can send stablecoins through the ElementPay API and pay out in local currency, or on- and off-ramp through the ElementPay dApp.",
      "The local amount is shown before the user confirms, and payouts are delivered on local rails in the recipient country. On-ramps from local currency into USDC are available through the same API.",
      "The dApp is available at dapp.elementpay.net.",
    ],
  },
  {
    slug: "otc-desk",
    date: "Jun 11, 2026",
    title: "ElementPay opens an OTC desk for large-ticket FX",
    desc: "A named trader now quotes large FX and liquidity requests and settles the same day.",
    body: [
      "ElementPay has opened an OTC desk for businesses moving large amounts between currencies. Clients receive firm quotes from a named trader, held for 60 seconds, by chat or phone.",
      "Trades settle the same day into any ElementPay balance, including the 30 account currencies and USDC and USDT.",
      "The desk serves financial institutions, cross-border traders and platforms that need liquidity beyond everyday FX.",
    ],
  },
];

export const releasePath = (slug: string) => `/press/${slug}`;
