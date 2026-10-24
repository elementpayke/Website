import type { MarketingPageData } from "./types";

export type SolutionSlug =
  | "fi"
  | "merchants"
  | "traders"
  | "platforms"
  | "smes"
  | "wallets"
  | "remit"
  | "ngos"
  | "ai";

export const SOLUTIONS: Record<SolutionSlug, MarketingPageData> = {
  fi: {
    slug: "fi",
    path: "/for-financial-institutions",
    group: "Solutions",
    name: "Financial institutions",
    title: "Payments infrastructure for banks, MFIs and PSPs.",
    lede: "Offer collections, payouts and cross-border transfers under your own brand. We run the rails, compliance and liquidity, in fiat and stablecoins.",
    inShort: "Offer collections, payouts and cross-border transfers under your own brand. We run the rails, compliance and liquidity, in fiat and stablecoins.",
    specs: [
      [
        "Model",
        "White-label",
      ],
      [
        "Liquidity",
        "OTC desk",
      ],
      [
        "Reporting",
        "Regulator-ready",
      ],
    ],
    features: [
      [
        "White-label payouts",
        "Send to mobile money and banks under your own brand.",
      ],
      [
        "Correspondent-free transfers",
        "Move money across borders without intermediary banks.",
      ],
      [
        "Stablecoin liquidity",
        "Source USD liquidity in USDC or USDT through the OTC desk.",
      ],
    ],
    steps: [
      [
        "07:30",
        "Treasury tops up the USD balance with 500,000 USDC from the OTC desk.",
      ],
      [
        "09:00",
        "Customer transfers from London start arriving through your app.",
      ],
      [
        "09:01",
        "First payouts land on M-Pesa in Nairobi.",
      ],
      [
        "13:00",
        "Corporate batch of 240 bank payouts to Nigeria settles.",
      ],
      [
        "18:00",
        "Daily reconciliation file exported for your regulator.",
      ],
    ],
    dayIntro: "How a mid-sized PSP runs cross-border flows for its customers.",
    faqs: [] as const,
    related: [
      [
        "Payments",
        "/payments",
      ],
      [
        "OTC desk",
        "/otc-desk",
      ],
      [
        "ElementPay API",
        "/payments-api",
      ],
    ],
    seo: {
      title: "Payments infrastructure for banks, MFIs and PSPs in Africa",
      description: "White-label payouts, correspondent-free transfers and stablecoin liquidity for financial institutions.",
    },
  },
  merchants: {
    slug: "merchants",
    path: "/for-global-merchants",
    group: "Solutions",
    name: "Global merchants",
    title: "Accept emerging-market payment methods from anywhere.",
    lede: "Customers pay with M-Pesa, MTN MoMo, Orange Money or local bank transfer. You settle in USD, EUR, GBP or USDC.",
    inShort: "Customers pay with M-Pesa, MTN MoMo, Orange Money or local bank transfer. You settle in USD, EUR, GBP or USDC.",
    specs: [
      [
        "Checkout",
        "Hosted or API",
      ],
      [
        "Conversion",
        "At collection",
      ],
      [
        "Refunds",
        "To the same rail",
      ],
    ],
    features: [
      [
        "Digital services",
        "Subscriptions and top-ups paid on mobile money.",
      ],
      [
        "Gaming and app stores",
        "In-app purchases in local currency.",
      ],
      [
        "Travel and ticketing",
        "Bookings paid locally, settled in your currency.",
      ],
    ],
    steps: [
      [
        "06:00",
        "Monthly renewals start charging M-Pesa wallets in Kenya.",
      ],
      [
        "08:30",
        "New sign-ups in Accra pay with MTN MoMo at checkout.",
      ],
      [
        "12:00",
        "Bank transfer payments in Nigeria reconcile automatically.",
      ],
      [
        "16:00",
        "A refund is returned to a Wave wallet in Dakar.",
      ],
      [
        "23:59",
        "The day settles to your USD account and USDC balance.",
      ],
    ],
    dayIntro: "A streaming service collecting across four markets.",
    faqs: [] as const,
    related: [
      [
        "Payments",
        "/payments",
      ],
      [
        "Settlement & FX",
        "/settlement-and-fx",
      ],
      [
        "Accounts",
        "/business-accounts",
      ],
    ],
    seo: {
      title: "Accept M-Pesa, MTN MoMo and Wave from anywhere",
      description: "Let customers pay with mobile money and local bank transfer. Settle in USD, EUR, GBP or USDC.",
    },
  },
  traders: {
    slug: "traders",
    path: "/for-cross-border-traders",
    group: "Solutions",
    name: "Cross-border traders",
    title: "FX and settlement for importers and exporters.",
    lede: "Collect from buyers locally, hold dollars or USDT between shipments and pay suppliers abroad without waiting on SWIFT.",
    inShort: "Collect from buyers locally, hold dollars or USDT between shipments and pay suppliers abroad without waiting on SWIFT.",
    specs: [
      [
        "Rates",
        "Locked per shipment",
      ],
      [
        "Hold",
        "USD, USDT or local",
      ],
      [
        "Large tickets",
        "OTC desk",
      ],
    ],
    features: [
      [
        "Supplier payments",
        "Pay factories in China, the Gulf and beyond.",
      ],
      [
        "Local collections",
        "Receive from buyers on mobile money and bank.",
      ],
      [
        "Rate locks",
        "Fix the rate for each shipment before you pay.",
      ],
    ],
    steps: [
      [
        "08:00",
        "Buyers in Kampala pay for last week’s delivery on MTN MoMo.",
      ],
      [
        "10:00",
        "UGX balance converts to USDT at a locked rate.",
      ],
      [
        "10:05",
        "Supplier in Guangzhou is paid in CNY to their bank account.",
      ],
      [
        "10:06",
        "Proof of payment PDF shared with the supplier on chat.",
      ],
      [
        "15:00",
        "Freight forwarder in Dubai paid in AED.",
      ],
    ],
    dayIntro: "An electronics importer paying a factory in Guangzhou.",
    faqs: [] as const,
    related: [
      [
        "Settlement & FX",
        "/settlement-and-fx",
      ],
      [
        "OTC desk",
        "/otc-desk",
      ],
      [
        "Accounts",
        "/business-accounts",
      ],
    ],
    seo: {
      title: "Pay suppliers in China and the Gulf from Africa",
      description: "Collect locally, hold USD or USDT, and pay suppliers in CNY or AED without waiting on SWIFT.",
    },
  },
  platforms: {
    slug: "platforms",
    path: "/for-platforms-and-marketplaces",
    group: "Solutions",
    name: "Platforms & marketplaces",
    title: "Mass payouts and collections at scale.",
    lede: "Pay thousands of sellers, drivers or creators on the rail each one prefers, funded from a single USD or USDC balance.",
    inShort: "Pay thousands of sellers, drivers or creators on the rail each one prefers, funded from a single USD or USDC balance.",
    specs: [
      [
        "Run size",
        "Thousands per file",
      ],
      [
        "Splits",
        "Escrow and splits",
      ],
      [
        "Failures",
        "Returned to balance",
      ],
    ],
    features: [
      [
        "Seller and creator payouts",
        "Weekly runs or instant on-demand cash-out.",
      ],
      [
        "Driver earnings",
        "Pay out after every shift to mobile money.",
      ],
      [
        "Split payments",
        "Divide collections between parties, with escrow.",
      ],
    ],
    steps: [
      [
        "09:00",
        "Finance uploads the weekly earnings file: 1,284 creators.",
      ],
      [
        "09:02",
        "Run approved. Funded from the USDC balance.",
      ],
      [
        "09:03",
        "612 creators in Kenya paid on M-Pesa.",
      ],
      [
        "09:05",
        "418 creators in Nigeria paid by bank transfer.",
      ],
      [
        "09:20",
        "Three failed lines returned to balance with reasons.",
      ],
    ],
    dayIntro: "A creator marketplace’s weekly payout run.",
    faqs: [] as const,
    related: [
      [
        "Payments",
        "/payments",
      ],
      [
        "ElementPay API",
        "/payments-api",
      ],
      [
        "Merchant dashboard",
        "/merchant-dashboard",
      ],
    ],
    seo: {
      title: "Mass payouts to mobile money for platforms and marketplaces",
      description: "Pay thousands of sellers, drivers and creators on M-Pesa, banks and Wave from one USD or USDC balance.",
    },
  },
  smes: {
    slug: "smes",
    path: "/for-growing-businesses",
    group: "Solutions",
    name: "Growing businesses",
    title: "An all-in-one finance tool for SMEs.",
    lede: "Collect from customers, pay staff and suppliers, and keep every currency, including digital dollars, in one place with Mboka.",
    inShort: "Collect from customers, pay staff and suppliers, and keep every currency, including digital dollars, in one place with Mboka.",
    specs: [
      [
        "App",
        "Mboka",
      ],
      [
        "Accounts",
        "30 currencies",
      ],
      [
        "Cards",
        "Virtual and physical",
      ],
    ],
    features: [
      [
        "Payroll across countries",
        "Pay your team in Kenya and Uganda in one run.",
      ],
      [
        "Supplier payments",
        "Pay locally on mobile money or abroad by bank.",
      ],
      [
        "Invoices and links",
        "Send links customers can pay on their phones.",
      ],
    ],
    steps: [
      [
        "08:00",
        "London client pays an invoice into the GBP account.",
      ],
      [
        "08:01",
        "GBP converts to KES at a quote shown upfront.",
      ],
      [
        "11:00",
        "Freelancer in Kampala paid on MTN MoMo.",
      ],
      [
        "17:00",
        "A US client pays 1,200 USDC for a project.",
      ],
      [
        "17:30",
        "Monthly payroll for 12 staff goes out on M-Pesa.",
      ],
    ],
    dayIntro: "A design studio in Nairobi with clients in London.",
    faqs: [] as const,
    related: [
      [
        "Accounts",
        "/business-accounts",
      ],
      [
        "Payments",
        "/payments",
      ],
      [
        "Merchant dashboard",
        "/merchant-dashboard",
      ],
    ],
    seo: {
      title: "Business accounts, payroll and payouts for African SMEs",
      description: "Collect from customers, pay staff and suppliers across countries, and hold every currency including USDC in one place.",
    },
  },
  wallets: {
    slug: "wallets",
    path: "/for-fintechs-and-wallets",
    group: "Solutions",
    name: "Fintechs & wallets",
    title: "Cash-in and cash-out for every user.",
    lede: "Add mobile money and bank on- and off-ramps, plus USDC balances, to your app without building telco integrations.",
    inShort: "Add mobile money and bank on- and off-ramps, plus USDC balances, to your app without building telco integrations.",
    specs: [
      [
        "Integration",
        "One API",
      ],
      [
        "Balances",
        "USD, USDC, local",
      ],
      [
        "Delivery",
        "Seconds",
      ],
    ],
    features: [
      [
        "Cash-out to mobile money",
        "Users withdraw to M-Pesa, MTN MoMo, Airtel and more.",
      ],
      [
        "Dollar savings",
        "Offer USD and USDC balances to protect savings.",
      ],
      [
        "Remittance features",
        "Let users send home to 10+ African countries.",
      ],
    ],
    steps: [
      [
        "07:00",
        "A user tops up KES 5,000 from M-Pesa.",
      ],
      [
        "07:01",
        "The app converts it to USDC for a dollar savings goal.",
      ],
      [
        "12:30",
        "Another user cashes out to MTN MoMo in Accra.",
      ],
      [
        "19:00",
        "A business pays a supplier’s Nigerian bank account.",
      ],
      [
        "22:00",
        "A payout goes to a Wave wallet in Dakar.",
      ],
    ],
    dayIntro: "A savings app adding dollar balances for users.",
    faqs: [] as const,
    related: [
      [
        "ElementPay API",
        "/payments-api",
      ],
      [
        "Stablecoins",
        "/stablecoins",
      ],
      [
        "Payments",
        "/payments",
      ],
    ],
    seo: {
      title: "Mobile money cash-in and cash-out API for fintechs",
      description: "Add M-Pesa, MTN MoMo and bank on- and off-ramps plus USDC balances to your app with one API.",
    },
  },
  remit: {
    slug: "remit",
    path: "/for-remittance-companies",
    group: "Solutions",
    name: "Remittance companies",
    title: "Deliver to mobile money in every corridor.",
    lede: "Fund once, in fiat or USDC, and pay out to phones and bank accounts in 10+ African countries without pre-funding a bank in each.",
    inShort: "Fund once, in fiat or USDC, and pay out to phones and bank accounts in 10+ African countries without pre-funding a bank in each.",
    specs: [
      [
        "Float",
        "One balance",
      ],
      [
        "Pre-funding",
        "Not per country",
      ],
      [
        "Hours",
        "Including weekends",
      ],
    ],
    features: [
      [
        "Diaspora corridors",
        "UK to Kenya, US to Nigeria, UAE to Uganda and more.",
      ],
      [
        "No nostro accounts",
        "Fund a single balance, in fiat or USDC.",
      ],
      [
        "Weekend delivery",
        "Payouts run every day of the week.",
      ],
    ],
    steps: [
      [
        "08:00",
        "Weekend float topped up with 250,000 USDC.",
      ],
      [
        "09:15",
        "First transfer of the day lands on M-Pesa.",
      ],
      [
        "12:00",
        "Bank payouts to Nigeria keep settling over the weekend.",
      ],
      [
        "15:00",
        "A family in Kumasi receives GHS on MTN MoMo.",
      ],
      [
        "21:00",
        "Webhooks confirm 3,200 deliveries for the day.",
      ],
    ],
    dayIntro: "A Saturday for a UK remittance company.",
    faqs: [] as const,
    related: [
      [
        "Payments",
        "/payments",
      ],
      [
        "Stablecoins",
        "/stablecoins",
      ],
      [
        "Settlement & FX",
        "/settlement-and-fx",
      ],
    ],
    seo: {
      title: "Remittance payouts to mobile money in 10+ African countries",
      description: "Fund once in fiat or USDC and deliver to M-Pesa, MTN MoMo and banks without pre-funding each country.",
    },
  },
  ngos: {
    slug: "ngos",
    path: "/for-ngos-and-aid",
    group: "Solutions",
    name: "NGOs & aid",
    title: "Disburse to beneficiaries on their phones.",
    lede: "Send cash transfers and stipends to mobile money wallets in bulk, with a full audit trail for donors. Fund from EUR, USD or USDC.",
    inShort: "Send cash transfers and stipends to mobile money wallets in bulk, with a full audit trail for donors. Fund from EUR, USD or USDC.",
    specs: [
      [
        "Payouts",
        "Bulk to mobile money",
      ],
      [
        "Approvals",
        "Multi-step",
      ],
      [
        "Reporting",
        "Donor-ready",
      ],
    ],
    features: [
      [
        "Cash transfer programmes",
        "Reach thousands of households in one run.",
      ],
      [
        "Field staff stipends",
        "Pay enumerators and health workers in remote areas.",
      ],
      [
        "Donor reporting",
        "Exports for every disbursement, by programme.",
      ],
    ],
    steps: [
      [
        "08:00",
        "Programme lead approves the monthly disbursement.",
      ],
      [
        "08:05",
        "3,120 households in Turkana paid on M-Pesa.",
      ],
      [
        "08:20",
        "Stipends for 140 field staff paid on MTN MoMo.",
      ],
      [
        "09:00",
        "Second tranche in Malawi delivered on Airtel Money.",
      ],
      [
        "17:00",
        "Donor report exported with every transaction.",
      ],
    ],
    dayIntro: "A cash transfer programme across three countries.",
    faqs: [] as const,
    related: [
      [
        "Merchant dashboard",
        "/merchant-dashboard",
      ],
      [
        "Payments",
        "/payments",
      ],
      [
        "Accounts",
        "/business-accounts",
      ],
    ],
    seo: {
      title: "Cash transfers to beneficiaries on mobile money",
      description: "Disburse stipends and cash transfers to mobile money wallets in bulk with donor-ready reporting.",
    },
  },
  ai: {
    slug: "ai",
    path: "/for-ai-agents",
    group: "Solutions",
    name: "AI agents",
    title: "Programmable payments for software.",
    lede: "We're building agent budgets and policies so software can pay within your rules, with recipients getting local currency on mobile money, bank or USDC. Early access, by pilot.",
    inShort: "We're building agent budgets and policies so software can pay within your rules, with recipients getting local currency on mobile money, bank or USDC. Early access, by pilot.",
    specs: [
      [
        "Status",
        "Early access",
      ],
      [
        "Policies",
        "Budgets, allow-lists",
      ],
      [
        "Approvals",
        "Over threshold",
      ],
    ],
    features: [
      [
        "Procurement agents",
        "Buy supplies within a monthly budget.",
      ],
      [
        "Usage-based payouts",
        "Pay contractors as work is completed.",
      ],
      [
        "Treasury sweeps",
        "Rebalance currencies on a schedule.",
      ],
    ],
    steps: [
      [
        "06:00",
        "Treasury agent sweeps excess KES into USDC.",
      ],
      [
        "09:10",
        "Freight agent pays a Mombasa trucker on M-Pesa Till.",
      ],
      [
        "11:40",
        "Procurement agent pays an allow-listed supplier in Lagos.",
      ],
      [
        "14:00",
        "A $3,400 request is held for human approval.",
      ],
      [
        "14:03",
        "Ops lead approves from the dashboard.",
      ],
    ],
    dayIntro: "A preview of what three agents could do once this ships.",
    faqs: [] as const,
    related: [
      [
        "Agentic payments",
        "/agentic-payments",
      ],
      [
        "ElementPay API",
        "/payments-api",
      ],
      [
        "Stablecoins",
        "/stablecoins",
      ],
    ],
    seo: {
      title: "Programmable payments for AI agents in local currency (early access)",
      description: "ElementPay is building agent budgets and policies so software can pay suppliers on M-Pesa, banks or USDC within your rules. Early access by pilot.",
    },
  },
} as const;

export const SOLUTION_LIST = Object.values(SOLUTIONS);
