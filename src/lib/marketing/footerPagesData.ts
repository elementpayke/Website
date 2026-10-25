import type { MarketingPageData } from "./types";
import { COUNTRIES } from "../geo/coverage";

const PAYROLL_DESTINATION_LINKS: ReadonlyArray<readonly [string, string]> = COUNTRIES.map(
  (c) => [c.name, `/send-money-to-${c.slug}`] as const
);

export const FOOTER_PAGES: Record<string, MarketingPageData> = {
  "/mobile-money-api": {
    slug: "mobile-money-api",
    path: "/mobile-money-api",
    group: "Products",
    name: "One mobile money API for Africa",
    title: "One mobile money API for Africa.",
    lede: "Pay out to and collect from mobile money wallets across 10+ African countries through one integration: M-Pesa, MTN MoMo, Airtel Money, Orange Money, Wave and the other networks each market uses.",
    inShort: "Pay out to and collect from mobile money wallets across 10+ African countries through one integration: M-Pesa, MTN MoMo, Airtel Money, Orange Money, Wave and the other networks each market uses.",
    specs: [
      [
        "Audience",
        "Businesses",
      ],
      [
        "Focus",
        "Africa rails",
      ],
      [
        "Stablecoins",
        "USDC and USDT",
      ],
      [
        "CTA",
        "Talk to sales",
      ],
    ],
    featuresHeading: "What businesses use it for.",
    features: [
      [
        "Payouts to wallets",
        "Pay suppliers, staff, agents and users straight to their mobile money wallet.",
      ],
      [
        "Collections",
        "Request payment from customers’ wallets and settle into one balance.",
      ],
      [
        "Bulk disbursements",
        "Send hundreds of wallet payouts from one file or API call.",
      ],
      [
        "Wallet cash-in and cash-out",
        "Fintechs and apps move users between their app and mobile money.",
      ],
    ],
    faqs: [
      {
        q: "Which mobile money networks does ElementPay support?",
        a: "Networks include M-Pesa, MTN MoMo, Airtel Money, Orange Money, Wave, Moov Money, Free Money, Telecel Cash, AT Money, Mixx by Yas, telebirr, Zamtel Kwacha, TNM Mpamba and e-Mola, depending on the country.",
      },
      {
        q: "How many countries does the mobile money API cover?",
        a: "10+ African countries across East, West and Southern Africa, plus Argentina and Colombia in Latin America.",
      },
      {
        q: "Can we both pay out and collect?",
        a: "Yes. The same API handles payouts to wallets and collections from wallets.",
      },
      {
        q: "Do we need a separate integration per network?",
        a: "No. One integration covers every network and country we support.",
      },
      {
        q: "Who can use it?",
        a: "Verified businesses: fintechs, platforms, payroll providers, merchants and remittance companies.",
      },
    ],
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Stablecoin payments API",
        "/stablecoin-payments-api",
      ],
      [
        "Contact",
        "/contact",
      ],
    ],
    seo: {
      title: "Mobile money API for Africa: M-Pesa, MTN MoMo, Airtel Money and Orange",
      description: "One mobile money API for businesses. Pay out and collect on M-Pesa, MTN MoMo, Airtel Money, Orange Money, Wave and more across 10+ African countries.",
    },
    steps: [
      [
        "Integrate once",
        "One API for every network and country we cover.",
      ],
      [
        "Fund your balance",
        "In local currency, USD, or USDC and USDT.",
      ],
      [
        "Send or request",
        "Choose the network and confirm the amount.",
      ],
      [
        "Track by webhook",
        "Every payment returns a status and your reference.",
      ],
    ],
  },
  "/payout-api": {
    slug: "payout-api",
    path: "/payout-api",
    group: "Products",
    name: "One payout API for Africa",
    title: "One payout API for Africa.",
    lede: "Pay suppliers, staff, sellers and users across 10+ African countries from one balance. Mobile money and bank payouts, single or bulk, funded in local currency, USD or USDC and USDT.",
    inShort: "Pay suppliers, staff, sellers and users across 10+ African countries from one balance. Mobile money and bank payouts, single or bulk, funded in local currency, USD or USDC and USDT.",
    specs: [
      [
        "Audience",
        "Businesses",
      ],
      [
        "Focus",
        "Africa rails",
      ],
      [
        "Stablecoins",
        "USDC and USDT",
      ],
      [
        "CTA",
        "Talk to sales",
      ],
    ],
    featuresHeading: "Built for payout-heavy businesses.",
    features: [
      [
        "Marketplaces",
        "Pay sellers and drivers in their local currency.",
      ],
      [
        "Payroll and EOR",
        "Pay employees and contractors across many countries.",
      ],
      [
        "Fintechs",
        "Power withdrawals from your app to wallets and banks.",
      ],
      [
        "Remittance companies",
        "Deliver to mobile money and banks by corridor.",
      ],
    ],
    faqs: [
      {
        q: "Which countries can the payout API reach?",
        a: "10+ African countries, on mobile money and bank rails.",
      },
      {
        q: "Can payouts be funded with stablecoins?",
        a: "Yes. Fund from a USDC or USDT balance, or in local currency or USD.",
      },
      {
        q: "Do you support bulk payouts?",
        a: "Yes, by API or by uploading a file in the dashboard.",
      },
      {
        q: "Is there a sandbox?",
        a: "Yes. Approved businesses get sandbox access to test payouts and webhooks.",
      },
    ],
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Stablecoin payments API",
        "/stablecoin-payments-api",
      ],
      [
        "Contact",
        "/contact",
      ],
    ],
    seo: {
      title: "Payout API for Africa: mobile money and bank payouts in 10+ countries",
      description: "One payout API for businesses paying suppliers, staff, sellers and users across Africa. Mobile money and bank payouts in 10+ countries, funded in fiat or stablec",
    },
    steps: [
      [
        "Create a payout",
        "Amount, currency, rail and your reference in one call.",
      ],
      [
        "See the quote",
        "Rate and fee returned before you confirm.",
      ],
      [
        "We deliver",
        "On the local rail for that country.",
      ],
      [
        "Webhook",
        "Status updates on every payout.",
      ],
    ],
  },
  "/bulk-payouts-africa": {
    slug: "bulk-payouts-africa",
    path: "/bulk-payouts-africa",
    group: "Products",
    name: "Bulk payouts across Africa from one file",
    title: "Bulk payouts across Africa from one file.",
    lede: "Upload one file or make one API call to pay hundreds of suppliers, staff or users across 10+ African countries. Approvals before release, and a status for every recipient.",
    inShort: "Upload one file or make one API call to pay hundreds of suppliers, staff or users across 10+ African countries. Approvals before release, and a status for every recipient.",
    specs: [
      [
        "Audience",
        "Businesses",
      ],
      [
        "Focus",
        "Africa rails",
      ],
      [
        "Stablecoins",
        "USDC and USDT",
      ],
      [
        "CTA",
        "Talk to sales",
      ],
    ],
    featuresHeading: "Who runs bulk payouts.",
    features: [
      [
        "Payroll",
        "Monthly salaries for teams in several countries.",
      ],
      [
        "Supplier runs",
        "Weekly or monthly supplier settlements.",
      ],
      [
        "Aid and disbursements",
        "NGO cash transfers with a full audit trail.",
      ],
      [
        "Seller and driver payouts",
        "Marketplace earnings paid out on schedule.",
      ],
    ],
    faqs: [
      {
        q: "How many recipients can one bulk payout include?",
        a: "Hundreds of recipients can be paid from one file or batch request. Talk to sales about your volumes.",
      },
      {
        q: "Can one batch include several countries?",
        a: "Yes. A single batch can pay recipients across different countries and rails.",
      },
      {
        q: "Can we require approval?",
        a: "Yes. Set approval rules so a second person releases each batch.",
      },
      {
        q: "How do we see failures?",
        a: "Each recipient has its own status, so failed or returned payments are visible and can be retried.",
      },
    ],
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Stablecoin payments API",
        "/stablecoin-payments-api",
      ],
      [
        "Contact",
        "/contact",
      ],
    ],
    seo: {
      title: "Bulk payouts in Africa: pay hundreds of recipients from one file",
      description: "Send bulk payments to mobile money and bank accounts across 10+ African countries from one file or API call, with approvals and a status for every recipient.",
    },
    steps: [
      [
        "Upload or call the API",
        "CSV in the dashboard or a batch API request.",
      ],
      [
        "Review the quote",
        "Totals per currency, shown before release.",
      ],
      [
        "Approve",
        "A second person signs off on the batch.",
      ],
      [
        "Track each payment",
        "Status per recipient, with retries visible.",
      ],
    ],
  },
  "/collect-payments-in-africa": {
    slug: "collect-payments-in-africa",
    path: "/collect-payments-in-africa",
    group: "Products",
    name: "Collect payments across Africa",
    title: "Collect payments across Africa.",
    lede: "Accept payments from customers on the methods they use every day, mobile money and local bank transfer, and settle into one balance in local currency, USD or stablecoins.",
    inShort: "Accept payments from customers on the methods they use every day, mobile money and local bank transfer, and settle into one balance in local currency, USD or stablecoins.",
    specs: [
      [
        "Audience",
        "Businesses",
      ],
      [
        "Focus",
        "Africa rails",
      ],
      [
        "Stablecoins",
        "USDC and USDT",
      ],
      [
        "CTA",
        "Talk to sales",
      ],
    ],
    featuresHeading: "Ways to collect.",
    features: [
      [
        "Payment links",
        "Send a link by email or chat, no code needed.",
      ],
      [
        "Hosted checkout",
        "A ready payment page for your website.",
      ],
      [
        "API collections",
        "Request payment from inside your own product.",
      ],
      [
        "Invoices",
        "Attach your invoice reference to every payment.",
      ],
    ],
    faqs: [
      {
        q: "Which payment methods can customers use?",
        a: "Mobile money and local bank transfer in supported countries, plus USDC and USDT.",
      },
      {
        q: "Can we settle collections in USD or stablecoins?",
        a: "Yes. Settle into local currency, USD, USDC or USDT.",
      },
      {
        q: "Do we need code?",
        a: "No. Payment links work without code; the API is there when you want to integrate.",
      },
      {
        q: "Can a business outside Africa collect from African customers?",
        a: "Yes, subject to business verification.",
      },
    ],
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Stablecoin payments API",
        "/stablecoin-payments-api",
      ],
      [
        "Contact",
        "/contact",
      ],
    ],
    seo: {
      title: "Collect payments in Africa: mobile money and bank collections for busi",
      description: "Accept payments from customers across Africa by mobile money and bank transfer, and settle into local currency, USD or USDC and USDT. One API and dashboard.",
    },
    steps: [
      [
        "Create a request",
        "Link, checkout or API call.",
      ],
      [
        "Customer pays locally",
        "On mobile money or bank transfer.",
      ],
      [
        "Get notified",
        "Webhook and dashboard update.",
      ],
      [
        "Settle",
        "Into local currency, USD or stablecoins.",
      ],
    ],
  },
  "/cross-border-payments-africa": {
    slug: "cross-border-payments-africa",
    path: "/cross-border-payments-africa",
    group: "Products",
    name: "Cross-border payments for Africa",
    title: "Cross-border payments for Africa.",
    lede: "Pay into Africa from the UK, US, Europe, the UAE and China, collect from African customers, and move money between African markets, on local rails instead of long correspondent chains.",
    inShort: "Pay into Africa from the UK, US, Europe, the UAE and China, collect from African customers, and move money between African markets, on local rails instead of long correspondent chains.",
    specs: [
      [
        "Audience",
        "Businesses",
      ],
      [
        "Focus",
        "Africa rails",
      ],
      [
        "Stablecoins",
        "USDC and USDT",
      ],
      [
        "CTA",
        "Talk to sales",
      ],
    ],
    featuresHeading: "Every direction money moves.",
    features: [
      [
        "Into Africa",
        "Fund in USD, GBP, EUR, AED or CNY and pay out locally.",
      ],
      [
        "Out of Africa",
        "Pay overseas suppliers from African revenue.",
      ],
      [
        "Within Africa",
        "Move money between African markets and currencies.",
      ],
      [
        "Via stablecoins",
        "Use USDC and USDT as a settlement layer.",
      ],
    ],
    faqs: [
      {
        q: "What is the cheapest way for a business to send money to Africa?",
        a: "Costs depend on corridor and volume. ElementPay shows the rate and fee before you confirm, and pays out on local rails rather than through chains of correspondent banks.",
      },
      {
        q: "Which corridors do you support?",
        a: "Funding from the UK, US, Europe, the UAE, Canada and China, with payouts in 10+ African countries.",
      },
      {
        q: "Can we hold foreign currency?",
        a: "Yes, in accounts across 30 currencies.",
      },
      {
        q: "Is ElementPay a bank?",
        a: "No. ElementPay is a financial technology company; banking services are provided by licensed partner institutions.",
      },
    ],
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Stablecoin payments API",
        "/stablecoin-payments-api",
      ],
      [
        "Contact",
        "/contact",
      ],
    ],
    seo: {
      title: "Cross-border payments to and from Africa for businesses",
      description: "Move money into, out of and across Africa: payouts in 10+ countries, accounts in 30 currencies, FX with rates shown upfront, and USDC and USDT ramps. One platfor",
    },
    steps: [
      [
        "Hold",
        "Accounts in 30 currencies.",
      ],
      [
        "Convert",
        "Rate shown and locked before you confirm.",
      ],
      [
        "Pay",
        "On mobile money and bank rails.",
      ],
      [
        "Reconcile",
        "Status and reference on every payment.",
      ],
    ],
  },
  "/card-payment-gateway": {
    slug: "card-payment-gateway",
    path: "/card-payment-gateway",
    group: "Products",
    name: "Mobile money, bank and stablecoins today. Cards coming soon",
    title: "Mobile money, bank and stablecoins today. Cards coming soon.",
    lede: "Collect in the same checkout by mobile money, bank transfer and stablecoins, settled into one balance in local currency, USD or USDC. Card acceptance is in certification and not yet live.",
    inShort: "Collect in the same checkout by mobile money, bank transfer and stablecoins, settled into one balance in local currency, USD or USDC. Card acceptance is in certification and not yet live.",
    specs: [
      [
        "Audience",
        "Businesses",
      ],
      [
        "Focus",
        "Africa rails",
      ],
      [
        "Cards",
        "In certification, not yet live",
      ],
      [
        "CTA",
        "Talk to sales",
      ],
    ],
    featuresHeading: "Why one gateway.",
    features: [
      [
        "One checkout",
        "Mobile money, bank and stablecoins in one hosted page or API today.",
      ],
      [
        "One balance",
        "Every method settles to the same ElementPay balance.",
      ],
      [
        "Flexible settlement",
        "Local currency, USD, USDC or USDT.",
      ],
      [
        "Cards, coming soon",
        "Visa and Mastercard acceptance is going through PCI certification and isn't live yet.",
      ],
    ],
    faqs: [
      {
        q: "Can we accept card payments today?",
        a: "Not yet. Card acceptance is going through PCI certification. Mobile money, bank transfer and stablecoins are live in one checkout today.",
      },
      {
        q: "What currencies can payments settle in?",
        a: "Local currency, USD, USDC or USDT.",
      },
      {
        q: "Is there a no-code option?",
        a: "Yes. Payment links work for mobile money, bank and stablecoins.",
      },
      {
        q: "How is pricing set?",
        a: "Pricing depends on method and market. Talk to sales for a quote.",
      },
    ],
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Stablecoin payments API",
        "/stablecoin-payments-api",
      ],
      [
        "Contact",
        "/contact",
      ],
    ],
    seo: {
      title: "Payment gateway for Africa: mobile money, bank and stablecoins (cards soon)",
      description: "Accept payments from customers by mobile money, bank transfer and stablecoins, and settle in local currency, USD or USDC. Card acceptance is in certification.",
    },
    steps: [
      [
        "Integrate",
        "Hosted checkout, payment links or API.",
      ],
      [
        "Customer pays locally",
        "By mobile money, bank or stablecoin.",
      ],
      [
        "Webhook",
        "You are notified on authorisation and settlement.",
      ],
      [
        "Settle",
        "Into your chosen currency.",
      ],
    ],
  },
  "/stablecoin-payroll": {
    slug: "stablecoin-payroll",
    path: "/stablecoin-payroll",
    group: "Products",
    name: "Stablecoin payroll for teams across Africa",
    title: "Stablecoin payroll for teams across Africa.",
    lede: "Hold payroll in USDC or USDT and pay employees and contractors in local currency on M-Pesa, MTN MoMo, Airtel Money or their bank. One run, many countries, every payment reconciled. Built for employers, EOR and payroll providers.",
    inShort: "Hold payroll in USDC or USDT and pay employees and contractors in local currency on M-Pesa, MTN MoMo, Airtel Money or their bank. One run, many countries, every payment reconciled. Built for employers, EOR and payroll providers.",
    specs: [
      [
        "Audience",
        "Businesses",
      ],
      [
        "Focus",
        "Africa rails",
      ],
      [
        "Stablecoins",
        "USDC and USDT",
      ],
      [
        "CTA",
        "Talk to sales",
      ],
    ],
    featuresHeading: "Who uses it.",
    features: [
      [
        "Employers with distributed teams",
        "Pay staff in Kenya, Nigeria, Ghana and Uganda in one run from a single stablecoin balance.",
      ],
      [
        "Payroll and EOR providers",
        "Add African payouts to your platform through our API, funded in USDC or USDT.",
      ],
      [
        "Contractor platforms",
        "Pay freelancers in local currency to mobile money the same day the invoice is approved.",
      ],
    ],
    faqs: [
      {
        q: "How do I pay employees in Africa using stablecoins?",
        a: "Fund an ElementPay balance in USDC or USDT, upload your payroll or call the API, approve the run, and each employee receives local currency on mobile money or in their bank account.",
      },
      {
        q: "Do employees need a crypto wallet?",
        a: "No. Employees receive local currency on M-Pesa, mobile money or their bank account. Only the employer holds stablecoins.",
      },
      {
        q: "Which countries can we pay?",
        a: "10+ African countries, including Kenya, Nigeria, Ghana, Uganda, Tanzania, Rwanda and South Africa.",
      },
      {
        q: "Is there an API for stablecoin payroll?",
        a: "Yes. The same payouts API supports bulk payroll runs, approvals and per-employee status webhooks.",
      },
      {
        q: "How long do payroll payments take?",
        a: "Most delivery time depends on the rail and the market.",
      },
    ],
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Stablecoin payments API",
        "/stablecoin-payments-api",
      ],
      [
        "Contact",
        "/contact",
      ],
    ],
    relatedPosition: "after-cta",
    countryPills: { heading: "Payroll destinations.", links: PAYROLL_DESTINATION_LINKS },
    seo: {
      title: "Stablecoin payroll for Africa: pay staff in Kenya and Nigeria from USD",
      description: "Pay employees and contractors in Kenya, Nigeria and 8 other African countries from a USDC or USDT balance.",
    },
    steps: [
      [
        "Upload or call the API",
        "Send a payroll file or one API request with every employee and amount.",
      ],
      [
        "Fund in stablecoins",
        "Top up in USDC or USDT. The quote shows the exact local amount each person receives.",
      ],
      [
        "Approve",
        "Set approval rules so a second person signs off before the run is released.",
      ],
      [
        "Staff get paid",
        "Payments land on mobile money or bank, usually within minutes, with a status for each person.",
      ],
    ],
  },
  "/stablecoin-off-ramp-api": {
    slug: "stablecoin-off-ramp-api",
    path: "/stablecoin-off-ramp-api",
    group: "Products",
    name: "Stablecoin off-ramp API for Africa",
    title: "Stablecoin off-ramp API for Africa.",
    lede: "Convert USDC and USDT into local currency and deliver it to mobile money wallets and bank accounts in 10+ African countries. For wallets, exchanges, fintechs and treasury teams.",
    inShort: "Convert USDC and USDT into local currency and deliver it to mobile money wallets and bank accounts in 10+ African countries. For wallets, exchanges, fintechs and treasury teams.",
    specs: [
      [
        "Audience",
        "Businesses",
      ],
      [
        "Focus",
        "Africa rails",
      ],
      [
        "Stablecoins",
        "USDC and USDT",
      ],
      [
        "CTA",
        "Talk to sales",
      ],
    ],
    featuresHeading: "Who off-ramps with ElementPay.",
    features: [
      [
        "Wallets and exchanges",
        "Offer users cash-out to mobile money and banks.",
      ],
      [
        "Treasury teams",
        "Convert stablecoin revenue into local currency.",
      ],
      [
        "Payroll",
        "Fund payroll in stablecoins, pay in local currency.",
      ],
      [
        "Supplier payments",
        "Pay African suppliers from a stablecoin balance.",
      ],
    ],
    faqs: [
      {
        q: "What is a stablecoin off-ramp?",
        a: "A service that converts stablecoins such as USDC and USDT into local currency and pays it to a bank account or mobile money wallet.",
      },
      {
        q: "Which chains are supported?",
        a: "Supported chains are confirmed during onboarding. Talk to sales for the current list.",
      },
      {
        q: "Where can we off-ramp to?",
        a: "Mobile money and bank accounts in 10+ African countries.",
      },
      {
        q: "Is it for businesses only?",
        a: "Yes. Every account goes through business verification.",
      },
    ],
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Stablecoin payments API",
        "/stablecoin-payments-api",
      ],
      [
        "Contact",
        "/contact",
      ],
    ],
    seo: {
      title: "Stablecoin off-ramp API: USDC and USDT to mobile money and bank in Afr",
      description: "Off-ramp USDC and USDT to local currency on M-Pesa, MTN MoMo, Airtel Money and bank accounts in 10+ African countries through one business API.",
    },
    steps: [
      [
        "Send USDC or USDT",
        "To your deposit address on a supported chain.",
      ],
      [
        "Get a quote",
        "Local amount and fee shown upfront.",
      ],
      [
        "Pay out",
        "To mobile money or bank.",
      ],
      [
        "Webhook",
        "Status and reference.",
      ],
    ],
  },
  "/stablecoin-on-ramp-api": {
    slug: "stablecoin-on-ramp-api",
    path: "/stablecoin-on-ramp-api",
    group: "Products",
    name: "Stablecoin on-ramp API for Africa",
    title: "Stablecoin on-ramp API for Africa.",
    lede: "Let your business or your users move from local currency into USDC and USDT. Collect by mobile money or bank transfer, and settle into stablecoins at a rate shown upfront.",
    inShort: "Let your business or your users move from local currency into USDC and USDT. Collect by mobile money or bank transfer, and settle into stablecoins at a rate shown upfront.",
    specs: [
      [
        "Audience",
        "Businesses",
      ],
      [
        "Focus",
        "Africa rails",
      ],
      [
        "Stablecoins",
        "USDC and USDT",
      ],
      [
        "CTA",
        "Talk to sales",
      ],
    ],
    features: [
      [
        "Treasury protection",
        "Convert local revenue into dollar stablecoins.",
      ],
      [
        "Wallet top-ups",
        "Let users fund a wallet from mobile money.",
      ],
      [
        "Cross-border settlement",
        "Use stablecoins to settle with overseas partners.",
      ],
      [
        "Exchange funding",
        "Fund trading accounts from local rails.",
      ],
    ],
    faqs: [
      {
        q: "What is a stablecoin on-ramp?",
        a: "A service that converts local currency into stablecoins such as USDC and USDT.",
      },
      {
        q: "Which currencies can be on-ramped?",
        a: "Local currencies in supported African markets, collected by mobile money or bank transfer.",
      },
      {
        q: "Where do the stablecoins go?",
        a: "To your ElementPay balance or an approved wallet.",
      },
      {
        q: "Is the rate shown first?",
        a: "Yes, before you confirm.",
      },
    ],
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Stablecoin payments API",
        "/stablecoin-payments-api",
      ],
      [
        "Contact",
        "/contact",
      ],
    ],
    seo: {
      title: "Stablecoin on-ramp API: local currency to USDC and USDT in Africa",
      description: "On-ramp from naira, shillings, cedis and other African currencies into USDC and USDT through one business API, with the rate shown before you confirm.",
    },
    steps: [
      [
        "Collect locally",
        "Mobile money or bank transfer.",
      ],
      [
        "Quote",
        "Stablecoin amount shown upfront.",
      ],
      [
        "Settle",
        "USDC or USDT to your balance or wallet.",
      ],
      [
        "Webhook",
        "Status and reference.",
      ],
    ],
  },
  "/best-stablecoin-payment-api-africa": {
    slug: "best-stablecoin-payment-api-africa",
    path: "/best-stablecoin-payment-api-africa",
    group: "Products",
    name: "How to choose a stablecoin payment API for Afric",
    title: "How to choose a stablecoin payment API for Africa: a buyer’s checklist.",
    lede: "What fintechs, payroll providers and platforms should check before choosing a stablecoin payment API for African corridors: coverage, rails, speed, FX.",
    inShort: "What fintechs, payroll providers and platforms should check before choosing a stablecoin payment API for African corridors: coverage, rails, speed, FX.",
    specs: [
      [
        "Audience",
        "Businesses",
      ],
      [
        "Focus",
        "Africa rails",
      ],
      [
        "Stablecoins",
        "USDC and USDT",
      ],
      [
        "CTA",
        "Talk to sales",
      ],
    ],
    features: [
      [
        "Built for businesses",
        "What fintechs, payroll providers and platforms should check before choosing a stablecoin payment API for African corridors: coverage, rails, speed, FX.",
      ],
      [
        "Local rails",
        "Mobile money and bank payouts in 10+ African countries.",
      ],
      [
        "Stablecoins",
        "USDC and USDT on the same balance sheet.",
      ],
    ],
    faqs: [
      {
        q: "What is the best stablecoin payment API for Africa?",
        a: "The best fit depends on your corridors and use case. Check country and rail coverage, payout speed, FX transparency, webhooks and reconciliation, business verification and support hours before choosing.",
      },
      {
        q: "Which stablecoins should an African payment API support?",
        a: "USDC and USDT are the most widely used dollar stablecoins for business payments into and out of Africa.",
      },
      {
        q: "Do recipients need a crypto wallet?",
        a: "Not with an off-ramp API. Recipients can receive local currency on mobile money or in a bank account.",
      },
    ],
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Stablecoin payments API",
        "/stablecoin-payments-api",
      ],
      [
        "Contact",
        "/contact",
      ],
    ],
    seo: {
      title: "How to choose a stablecoin payment API for Africa: a buyer’s checklist",
      description: "What fintechs, payroll providers and platforms should check before choosing a stablecoin payment API for African corridors: coverage, rails, speed, FX.",
    },
  },
  "/elementpay-facts": {
    slug: "elementpay-facts",
    path: "/elementpay-facts",
    group: "Products",
    name: "ElementPay at a glance: facts, coverage, product",
    title: "ElementPay at a glance: facts, coverage, products and status.",
    lede: "Key facts about ElementPay (Element Pay): what it does, who it serves, its platform and products, 10+ payout countries, 30 account currencies and regulatory status.",
    inShort: "Key facts about ElementPay (Element Pay): what it does, who it serves, its platform and products, 10+ payout countries, 30 account currencies and regulatory status.",
    specs: [
      [
        "Audience",
        "Businesses",
      ],
      [
        "Focus",
        "Africa rails",
      ],
      [
        "Stablecoins",
        "USDC and USDT",
      ],
      [
        "CTA",
        "Talk to sales",
      ],
    ],
    features: [
      [
        "Built for businesses",
        "Key facts about ElementPay (Element Pay): what it does, who it serves, its platform and products, 10+ payout countries, 30 account currencies and regulatory status.",
      ],
      [
        "Local rails",
        "Mobile money and bank payouts in 10+ African countries.",
      ],
      [
        "Stablecoins",
        "USDC and USDT on the same balance sheet.",
      ],
    ],
    faqs: [
      {
        q: "What is ElementPay?",
        a: "ElementPay is cross-border and stablecoin payment infrastructure for businesses. Businesses use it to collect, pay out, convert and hold money across mobile money, bank rails and USDC and USDT.",
      },
      {
        q: "Which countries does ElementPay cover?",
        a: "Payouts in 10+ African countries and bank accounts in 30 currencies.",
      },
      {
        q: "Is ElementPay a bank?",
        a: "No. ElementPay is a financial technology company. Banking services are provided by licensed partner institutions.",
      },
      {
        q: "What is Mboka?",
        a: "Mboka is ElementPay’s web app for finance teams, with real business bank accounts, cards and payouts.",
      },
      {
        q: "Does ElementPay serve individuals?",
        a: "No. ElementPay serves verified businesses.",
      },
    ],
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Stablecoin payments API",
        "/stablecoin-payments-api",
      ],
      [
        "Contact",
        "/contact",
      ],
    ],
    seo: {
      title: "ElementPay at a glance: facts, coverage, products and status",
      description: "Key facts about ElementPay (Element Pay): what it does, who it serves, its platform and products, 10+ payout countries, 30 account currencies and regulatory stat",
    },
  },
};
