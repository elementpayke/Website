export type ProductSlug =
  | "payments"
  | "fx"
  | "accounts"
  | "otc"
  | "agentic"
  | "assets"
  | "dashboard"
  | "api"
  | "dapp";

export type ProductGroup = "Platform" | "Products";

export type ProductData = {
  slug: ProductSlug;
  group: ProductGroup;
  path: string;
  name: string;
  title: string;
  lede: string;
  specs: ReadonlyArray<readonly [string, string]>;
  demoTitle: string;
  demoSub: string;
  features: ReadonlyArray<readonly [string, string]>;
  cta: readonly [string, string];
  related: readonly ProductSlug[];
  seo: { title: string; description: string };
};

export const PRODUCT_PATH: Record<ProductSlug, string> = {
  payments: "/payments",
  fx: "/settlement-and-fx",
  accounts: "/business-accounts",
  otc: "/otc-desk",
  agentic: "/agentic-payments",
  assets: "/stablecoins",
  dashboard: "/merchant-dashboard",
  api: "/payments-api",
  dapp: "/elementpay-dapp",
};

export const PRODUCTS: Record<ProductSlug, ProductData> = {
  payments: {
    slug: "payments",
    group: "Products",
    path: PRODUCT_PATH.payments,
    name: "Payments",
    title: "Pay out to 20 African countries.",
    lede: "Pay suppliers, staff and customers on mobile money and bank rails across East, West, Central and Southern Africa. Fund from USD, EUR, GBP or USDC and USDT.",
    specs: [["Payout countries", "20 in Africa"], ["Rails", "Mobile money and bank"], ["Delivery", "Depends on the rail"], ["Funding", "Fiat or stablecoins"]],
    cta: ["See coverage", "/coverage"],
    demoTitle: "Try a payout.",
    demoSub: "Pick a country and a rail. This is what your recipient sees.",
    features: [
      ["Mobile money payouts", "M-Pesa, MTN MoMo, Airtel Money, Orange Money, Wave, Moov and more."],
      ["Bank payouts", "Local bank transfers, including PesaLink in Kenya and EFT in South Africa."],
      ["Stablecoin funding", "Fund payouts straight from USDC or USDT balances."],
      ["Bulk runs", "Pay thousands of recipients from one file or one API call."],
    ],
    related: ["fx", "assets", "dashboard"],
    seo: {
      title: "Payouts to 20 African countries: M-Pesa, MTN MoMo and bank",
      description: "Pay out to mobile money and bank accounts in 20 African countries. Fund from USD, EUR, GBP, USDC or USDT.",
    },
  },
  fx: {
    slug: "fx",
    group: "Products",
    path: PRODUCT_PATH.fx,
    name: "Settlement & FX",
    title: "Convert between 30 currencies and stablecoins.",
    lede: "Get a live quote, lock it and settle into any balance, with no correspondent bank in the path. USDC and USDT convert like any other currency.",
    specs: [["Quotes", "Locked before you confirm"], ["Currencies", "30 plus USDC, USDT"], ["Correspondents", "None"]],
    cta: ["See all currencies", "/coverage"],
    demoTitle: "Get a quote.",
    demoSub: "Type an amount and pick a pair. Rates shown are indicative.",
    features: [
      ["Live quotes", "See the rate and fee before you commit."],
      ["Rate locks", "Hold a quote while you approve the order."],
      ["Stablecoin pairs", "Convert USDC and USDT to and from local currency."],
      ["Convert and pay out", "Exchange and deliver in local currency in one order."],
    ],
    related: ["accounts", "otc", "assets"],
    seo: {
      title: "Cross-border FX and settlement in 30 currencies and stablecoins",
      description: "Live FX quotes locked before you confirm. Convert between 30 currencies, USDC and USDT with no correspondent banks.",
    },
  },
  accounts: {
    slug: "accounts",
    group: "Products",
    path: PRODUCT_PATH.accounts,
    name: "Accounts & treasury",
    title: "A bank account in every currency you work in.",
    lede: "Bank accounts are issued one per currency across 30 currencies. USDC and USDT balances sit on the same balance sheet.",
    specs: [["Currencies", "30"], ["Issued", "One account per currency"], ["Digital dollars", "USDC and USDT"], ["Statements", "On demand"]],
    cta: ["See all 30 currencies", "/coverage"],
    demoTitle: "Open the account you need.",
    demoSub: "Pick a currency to see the account details your customers would use.",
    features: [
      ["Local account details", "Receive in USD, EUR, GBP, KES, NGN and 25 more currencies."],
      ["One balance sheet", "Every currency and stablecoin together, with a combined USD view."],
      ["Auto-sweeps", "Move funds between currencies on rules you set."],
      ["Proof of funds", "Statements and confirmations whenever you need them."],
    ],
    related: ["fx", "assets", "otc"],
    seo: {
      title: "Multi-currency business accounts in 30 currencies | ElementPay",
      description: "Bank accounts issued one per currency in USD, EUR, GBP, KES, NGN, XOF, XAF and 23 more, alongside USDC and USDT balances.",
    },
  },
  otc: {
    slug: "otc",
    group: "Products",
    path: PRODUCT_PATH.otc,
    name: "OTC desk",
    title: "Large tickets, quoted by a trader.",
    lede: "For large FX, stablecoin and liquidity needs, a named trader quotes you directly and settles into your ElementPay balance the same day.",
    specs: [["Quotes", "Firm, held 60 seconds"], ["Pairs", "Fiat and stablecoin"], ["Contact", "Chat or phone"], ["Settlement", "Same day"]],
    cta: ["Talk to the desk", "/contact"],
    demoTitle: "Request a quote.",
    demoSub: "Pick a pair. The quote holds for 60 seconds.",
    features: [
      ["Firm quotes", "Prices are held for 60 seconds so you can approve."],
      ["A named trader", "Speak to the same person every time."],
      ["USDT and USDC blocks", "Trade large stablecoin tickets against local currency."],
      ["Same-day settlement", "Funds land in the balance of your choice."],
    ],
    related: ["fx", "accounts", "assets"],
    seo: {
      title: "OTC desk for large FX and stablecoin trades | ElementPay",
      description: "Firm quotes from a named trader, held for 60 seconds, settled the same day. USD, USDT and USDC against African currencies.",
    },
  },
  agentic: {
    slug: "agentic",
    group: "Products",
    path: PRODUCT_PATH.agentic,
    name: "Agentic payments",
    title: "Let AI agents pay, within your rules.",
    lede: "Give each agent a budget, an allow-list and approval thresholds. Recipients get local currency or USDC. Every action is logged.",
    specs: [["Limits", "Per agent and payee"], ["Approvals", "Above any threshold"], ["Audit", "Every action logged"], ["Access", "API"]],
    cta: ["Read the docs", "https://docs.elementpay.net/"],
    demoTitle: "The agent console.",
    demoSub: "Flip a policy or approve the held payment.",
    features: [
      ["Budgets", "Set a spending limit for each agent."],
      ["Allow-lists", "Restrict who an agent can pay."],
      ["Approvals", "Route payments above a threshold to a person."],
      ["Audit trail", "See what each agent did and when."],
    ],
    related: ["api", "payments", "assets"],
    seo: {
      title: "Agentic payments infrastructure: stablecoin payment rails for AI agents",
      description: "Agentic payments infrastructure and API for businesses. Let AI agents pay in USDC or local currency within budgets, allow-lists and approval thresholds.",
    },
  },
  assets: {
    slug: "assets",
    group: "Products",
    path: PRODUCT_PATH.assets,
    name: "Stablecoins",
    title: "USDC and USDT, on and off the rails.",
    lede: "Move between dollar stablecoins and local currency, and pay out to mobile money or bank accounts in 20 African countries.",
    specs: [["Assets", "USDC and USDT"], ["Off-ramp to", "Mobile money and bank"], ["On-ramp from", "Local currency"], ["Access", "API and dApp"]],
    cta: ["Open the dApp", "https://dapp.elementpay.net/"],
    demoTitle: "How the ramp works.",
    demoSub: "Switch direction to see on-ramps.",
    features: [
      ["Off-ramps", "Sell stablecoins into local currency payouts."],
      ["On-ramps", "Collect in local currency and settle in USDC."],
      ["Wallet payouts", "Pay crypto-native teams in their wallets."],
      ["Same API", "The objects you already use for payments."],
    ],
    related: ["dapp", "fx", "payments"],
    seo: {
      title: "Stablecoin payment solutions for businesses in Africa: USDC and USDT gateway, on- and off-ramps",
      description: "USDC and USDT payment solutions for businesses in Africa. Convert stablecoins to local currency and pay out to M-Pesa.",
    },
  },
  dashboard: {
    slug: "dashboard",
    group: "Platform",
    path: PRODUCT_PATH.dashboard,
    name: "Merchant dashboard",
    title: "Collections, payouts and approvals in one place.",
    lede: "Where finance teams collect, pay, approve and reconcile across every market and currency ElementPay covers, stablecoins included.",
    specs: [["Access", "Web, any browser"], ["Team", "Roles per user"], ["Approvals", "Multi-step, by amount"], ["Exports", "CSV and PDF"]],
    cta: ["See Mboka", "https://mboka.finance"],
    demoTitle: "Look inside.",
    demoSub: "Click around the sidebar and clear the approval.",
    features: [
      ["Payment links", "Create a link or invoice and share it by message or email."],
      ["Bulk payouts", "Upload a file to pay hundreds of recipients."],
      ["Approvals", "Require approvers above the limits you set."],
      ["Reconciliation", "Every transaction carries references that match your books."],
    ],
    related: ["api", "payments", "accounts"],
    seo: {
      title: "Merchant dashboard for collections, payouts and approvals | ElementPay",
      description: "Collect, pay, approve and reconcile across 20 African payout countries and 30 currencies, including stablecoins, from one dashboard.",
    },
  },
  api: {
    slug: "api",
    group: "Platform",
    path: PRODUCT_PATH.api,
    name: "ElementPay API",
    title: "One API for every rail.",
    lede: "Create orders, quote FX, pay out and collect with the same objects in every market, whether funded in fiat or stablecoins. Every state change arrives as a signed webhook.",
    specs: [["Style", "REST and JSON"], ["Auth", "Keys per environment"], ["Events", "Signed webhooks"], ["Sandbox", "Full test environment"]],
    cta: ["Read the docs", "https://docs.elementpay.net/"],
    demoTitle: "Your first payout.",
    demoSub: "One call creates the order. Webhooks tell you when it has settled.",
    features: [
      ["Orders", "One object for collections and payouts, whatever the rail."],
      ["Quotes", "Request a rate, lock it, then confirm."],
      ["Stablecoin sources", "Fund an order from USDC or USDT with one field."],
      ["Webhooks", "Created, routed, settled or reversed."],
    ],
    related: ["dashboard", "payments", "agentic"],
    seo: {
      title: "Payments API for mobile money, banks and stablecoins | ElementPay",
      description: "One REST API for payouts and collections on every African rail, funded in fiat or USDC, with signed webhooks for every event.",
    },
  },
  dapp: {
    slug: "dapp",
    group: "Platform",
    path: PRODUCT_PATH.dapp,
    name: "ElementPay dApp",
    title: "On- and off-ramp for USDC and USDT.",
    lede: "The dApp does one thing: move between dollar stablecoins and local currency. Off-ramp USDC or USDT to M-Pesa, MTN MoMo or a bank account, or on-ramp from local currency into stablecoins.",
    specs: [["Assets", "USDC and USDT"], ["Destinations", "Mobile money and bank"], ["Custody", "Your own wallet"], ["Pricing", "Shown before you sign"]],
    cta: ["Open the dApp", "https://dapp.elementpay.net/"],
    demoTitle: "Cash out in three steps.",
    demoSub: "Try it with a demo wallet.",
    features: [
      ["Connect a wallet", "Use the self-custody wallet you already have."],
      ["Pick a destination", "A phone number or bank account in a supported country."],
      ["See the rate", "The local amount is shown before you confirm."],
      ["Track delivery", "Follow the transfer from signature to settlement."],
    ],
    related: ["assets", "payments", "api"],
    seo: {
      title: "ElementPay dApp: on- and off-ramp USDC and USDT to M-Pesa, mobile money and banks",
      description: "Connect a self-custody wallet and sell USDC or USDT straight to M-Pesa, MTN MoMo or a bank account. See the local amount before you sign.",
    },
  },
};

export function getRelatedProducts(slugs: readonly ProductSlug[]): ProductData[] {
  return slugs.map((s) => PRODUCTS[s]);
}
