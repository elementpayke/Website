import type { MarketingPageData } from "./types";
import { SOLUTIONS } from "./solutionsData";
import { FOOTER_PAGES } from "./footerPagesData";

const CORE_MARKETING_PAGES: Record<string, MarketingPageData> = {
  "/stablecoin-payments-api": {
    slug: "stablecoin-payments-api",
    path: "/stablecoin-payments-api",
    group: "Products",
    name: "stablecoin payments API for Africa",
    title: "The stablecoin payments API for Africa.",
    lede: "Collect, pay out and settle in USDC and USDT through one API. Your customers and recipients get local currency on M-Pesa, MTN MoMo, Airtel Money or their bank. Built for fintechs, platforms, payroll providers and merchants.",
    inShort: "Collect, pay out and settle in USDC and USDT through one API. Your customers and recipients get local currency on M-Pesa, MTN MoMo, Airtel Money or their bank. Built for fintechs, platforms, payroll providers and merchants.",
    specs: [
      [
        "Stablecoins",
        "USDC and USDT",
      ],
      [
        "Payout countries",
        "10+ in Africa",
      ],
      [
        "Rails",
        "Mobile money and bank",
      ],
      [
        "Integration",
        "One order API",
      ],
    ],
    features: [
      [
        "Stablecoin payouts",
        "Fund in USDC or USDT and pay suppliers, staff or users in local currency to mobile money and banks in 10+ African countries.",
      ],
      [
        "Stablecoin collections",
        "Collect in naira, shillings or cedis through local rails and settle into USDC or USDT on your balance.",
      ],
      [
        "Payment gateway and checkout",
        "Accept stablecoins from customers at checkout and reconcile each payment against an order or invoice.",
      ],
      [
        "Wallet integration",
        "Add on- and off-ramps to your own wallet or mobile app so users can move between stablecoins and mobile money.",
      ],
    ],
    faqs: [
      {
        q: "What is a stablecoin payments API?",
        a: "It is a single integration that lets your software send, receive and convert dollar stablecoins such as USDC and USDT, and pay out or collect in local currency.",
      },
      {
        q: "Which stablecoins and countries do you support?",
        a: "USDC and USDT, with payouts to mobile money and bank accounts in 10+ African countries including Nigeria, Kenya, Ghana, Uganda, Tanzania and South Africa, plus Argentina and Colombia.",
      },
      {
        q: "How fast are payouts?",
        a: "Most mobile money payouts are sent on local rails as soon as you confirm, with a status for every payment.",
      },
      {
        q: "Is there a sandbox?",
        a: "Yes. Approved businesses get sandbox keys to test orders, quotes and webhooks before going live.",
      },
      {
        q: "Can we reconcile stablecoin payments with invoices?",
        a: "Yes. Every order carries your own reference and every webhook returns it, so each payment can be matched to an invoice or ledger entry.",
      },
      {
        q: "Who is it for?",
        a: "Businesses: fintechs, platforms, payroll providers, PSPs, remittance companies and merchants. Every account goes through business verification.",
      },
    ],
    related: [
      [
        "Stablecoin off-ramp API",
        "/stablecoin-off-ramp-api",
      ],
      [
        "Stablecoin on-ramp API",
        "/stablecoin-on-ramp-api",
      ],
      [
        "Payout API",
        "/payout-api",
      ],
    ],
    seo: {
      title: "Stablecoin payments API and gateway for Africa: USDC and USDT payment ",
      description: "Stablecoin payments API and payment gateway for businesses in Africa. Collect, pay out and settle in USDC and USDT to M-Pesa.",
    },
    steps: [
      [
        "Create an order",
        "One API call with the amount, currency and destination. Use the same objects in every market.",
      ],
      [
        "Lock the quote",
        "We return the rate and fee upfront. Once confirmed, the local amount is fixed.",
      ],
      [
        "Fund in stablecoins",
        "Send USDC or USDT on supported chains, or draw from your ElementPay balance.",
      ],
      [
        "Track by webhook",
        "Receive events for created, routed, settled and failed, each with a reference you can reconcile.",
      ],
    ],
  },
  "/payment-gateway-africa": {
    slug: "payment-gateway-africa",
    path: "/payment-gateway-africa",
    group: "Products",
    name: "One payment gateway for Africa",
    title: "One payment gateway for Africa.",
    lede: "Collect from customers across Africa on the methods they actually use: mobile money, bank transfer and stablecoins. Settle in local currency, USD, or USDC and USDT, and pay out on the same rails. Card acceptance is in certification, not yet live.",
    inShort: "Collect from customers across Africa on the methods they actually use: mobile money, bank transfer and stablecoins. Settle in local currency, USD, or USDC and USDT, and pay out on the same rails. Card acceptance is in certification, not yet live.",
    specs: [
      [
        "Methods",
        "Mobile money, bank, stablecoins",
      ],
      [
        "Cards",
        "In certification, not yet live",
      ],
      [
        "Settlement",
        "Local, USD or USDC",
      ],
      [
        "Checkout",
        "Hosted or API",
      ],
    ],
    features: [
      [
        "Mobile money",
        "M-Pesa, MTN MoMo, Airtel Money, Orange Money, Wave and more.",
      ],
      [
        "Bank transfer",
        "Local bank rails including PesaLink and Nigerian bank transfers.",
      ],
      [
        "Cards, coming soon",
        "Visa and Mastercard acceptance is going through PCI certification and isn't live yet.",
      ],
      [
        "Stablecoins",
        "USDC and USDT, settled to stablecoins or local currency.",
      ],
    ],
    faqs: [
      {
        q: "Which payment methods does the gateway support?",
        a: "Mobile money, local bank transfer and the USDC and USDT stablecoins, depending on the country. Card acceptance is going through PCI certification and isn't live yet.",
      },
      {
        q: "Which countries?",
        a: "10+ African countries.",
      },
      {
        q: "Can we settle in USD or stablecoins?",
        a: "Yes. Settle in local currency, USD, USDC or USDT.",
      },
      {
        q: "Is there a hosted checkout?",
        a: "Yes, plus payment links for no-code collection.",
      },
    ],
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Contact",
        "/contact",
      ],
      [
        "Blog",
        "/blog",
      ],
    ],
    seo: {
      title: "Payment gateway for Africa: mobile money, bank and stablecoin payments",
      description: "One payment gateway for Africa. Collect by mobile money, bank transfer and stablecoins and settle in local currency, USD or USDC. Card acceptance is in certification.",
    },
    steps: [
      [
        "Integrate once",
        "One API, hosted checkout or payment links.",
      ],
      [
        "Customer pays locally",
        "On the method they prefer.",
      ],
      [
        "Get notified",
        "Webhooks for every status change.",
      ],
      [
        "Settle",
        "Into local currency, USD or stablecoins.",
      ],
    ],
  },
  "/stablecoin-payment-gateway": {
    slug: "stablecoin-payment-gateway",
    path: "/stablecoin-payment-gateway",
    group: "Products",
    name: "A stablecoin payment gateway for businesses",
    title: "A stablecoin payment gateway for businesses.",
    lede: "Accept USDC and USDT from customers at checkout or by payment link, then keep the stablecoins or settle to local currency on mobile money or bank. Every payment is matched to an order with your own reference.",
    inShort: "Accept USDC and USDT from customers at checkout or by payment link, then keep the stablecoins or settle to local currency on mobile money or bank. Every payment is matched to an order with your own reference.",
    specs: [
      [
        "Accept",
        "USDC and USDT",
      ],
      [
        "Settle",
        "Stablecoins or local",
      ],
      [
        "Countries",
        "10+ in Africa",
      ],
      [
        "Checkout",
        "Hosted or API",
      ],
    ],
    features: [
      [
        "Stablecoin checkout",
        "Accept USDC and USDT in your app, website or by payment link.",
      ],
      [
        "Flexible settlement",
        "Keep stablecoins, or settle to local currency in 10+ African countries.",
      ],
      [
        "Order matching",
        "Each payment carries your order or invoice reference.",
      ],
      [
        "Subscriptions and invoices",
        "Send payment links for recurring invoices and track each one.",
      ],
    ],
    faqs: [
      {
        q: "What is a stablecoin payment gateway?",
        a: "A service that lets a business accept stablecoins such as USDC and USDT as payment and settle them into a balance or local currency.",
      },
      {
        q: "Which stablecoins can customers pay with?",
        a: "USDC and USDT.",
      },
      {
        q: "Can we settle into local currency?",
        a: "Yes, to mobile money or bank accounts in 10+ African countries.",
      },
      {
        q: "Is there a no-code option?",
        a: "Yes. Payment links can be created in the merchant dashboard without writing code.",
      },
    ],
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Contact",
        "/contact",
      ],
      [
        "Blog",
        "/blog",
      ],
    ],
    seo: {
      title: "Stablecoin payment gateway: accept USDC and USDT and settle to local c",
      description: "A stablecoin payment gateway for merchants and platforms. Accept USDC and USDT at checkout, settle in stablecoins or local currency in 10+ African countries.",
    },
    steps: [
      [
        "Create a payment",
        "Call the API or create a payment link in the dashboard.",
      ],
      [
        "Customer pays",
        "In USDC or USDT on a supported chain.",
      ],
      [
        "Confirm by webhook",
        "We notify you once the payment is confirmed.",
      ],
      [
        "Settle",
        "Into your stablecoin balance or local currency.",
      ],
    ],
  },
  "/b2b-stablecoin-payments": {
    slug: "b2b-stablecoin-payments",
    path: "/b2b-stablecoin-payments",
    group: "Products",
    name: "B2B stablecoin payments",
    title: "B2B stablecoin payments.",
    lede: "Use USDC and USDT for the payments your business already makes: supplier invoices, payroll, partner payouts and treasury moves. Recipients get local currency; your finance team gets one balance, approvals and clean reconciliation.",
    inShort: "Use USDC and USDT for the payments your business already makes: supplier invoices, payroll, partner payouts and treasury moves. Recipients get local currency; your finance team gets one balance, approvals and clean reconciliation.",
    specs: [
      [
        "Use cases",
        "Suppliers, payroll, treasury",
      ],
      [
        "Stablecoins",
        "USDC and USDT",
      ],
      [
        "Payouts",
        "10+ African countries",
      ],
      [
        "Pricing",
        "Shown before you confirm",
      ],
    ],
    features: [
      [
        "Supplier payments",
        "Pay invoices across Africa and beyond without waiting on correspondent banks.",
      ],
      [
        "Payroll and contractors",
        "Pay teams in local currency from one stablecoin balance.",
      ],
      [
        "Treasury",
        "Hold value in dollar stablecoins and convert at the moment you pay.",
      ],
      [
        "Invoicing and reconciliation",
        "Attach your references to every payment and match them to invoices automatically.",
      ],
    ],
    faqs: [
      {
        q: "What are B2B stablecoin payments?",
        a: "Payments between businesses that use dollar stablecoins such as USDC and USDT to move value, often with conversion to local currency on delivery.",
      },
      {
        q: "Can we reconcile stablecoin payments with invoices?",
        a: "Yes. Every payment carries your reference, returned in webhooks and exports.",
      },
      {
        q: "Can large payments be quoted?",
        a: "Yes. The OTC desk quotes large tickets and settles into your balance.",
      },
      {
        q: "Do suppliers need to hold crypto?",
        a: "No. They can receive local currency on mobile money or in their bank account.",
      },
    ],
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Contact",
        "/contact",
      ],
      [
        "Blog",
        "/blog",
      ],
    ],
    seo: {
      title: "B2B stablecoin payments: USDC and USDT for supplier, payroll and treas",
      description: "B2B stablecoin payments for companies trading with Africa. Pay suppliers, run payroll and manage treasury in USDC and USDT.",
    },
    steps: [
      [
        "Verify your business",
        "Business verification for every account.",
      ],
      [
        "Set approvals",
        "Require sign-off above any threshold.",
      ],
      [
        "Pay in bulk or by API",
        "Upload a file or call the API.",
      ],
      [
        "Reconcile",
        "Export or sync statuses and references to your ledger.",
      ],
    ],
  },
  "/pricing": {
    slug: "pricing",
    path: "/pricing",
    group: "Company",
    name: "Know the cost before you send",
    title: "Know the cost before you send.",
    lede: "Every payment shows the exchange rate and the fee before you confirm. The recipient gets exactly the amount shown, with no deductions on the way.",
    inShort: "Every payment shows the exchange rate and the fee before you confirm. The recipient gets exactly the amount shown, with no deductions on the way.",
    specs: [
      [
        "Quotes",
        "Rate and fee upfront",
      ],
      [
        "Volume",
        "Business pricing",
      ],
      [
        "OTC",
        "Large-ticket quotes",
      ],
      [
        "Intermediaries",
        "None",
      ],
    ],
    features: [
      [
        "Talk to sales",
        "Walk through coverage, pricing and verification with our team.",
      ],
      [
        "See the platform",
        "Explore products for payouts, FX, accounts and stablecoins.",
      ],
      [
        "Read the docs",
        "Developer guides live at docs.elementpay.net.",
      ],
    ],
    faqs: [
      {
        q: "How does ElementPay pricing work?",
        a: "Each payment shows two things before you confirm: the exchange rate and the fee. Nothing is deducted by intermediaries on the way, so the recipient gets the amount shown.",
      },
      {
        q: "Are there hidden fees?",
        a: "No. The rate and fee are shown upfront and fixed when you approve.",
      },
      {
        q: "Is there volume pricing?",
        a: "Yes. Pricing is tailored to your markets, rails and monthly volume. Large FX and stablecoin tickets can be quoted by the OTC desk.",
      },
      {
        q: "Do stablecoin conversions cost more?",
        a: "USDC and USDT conversions are quoted like any other currency pair, with the rate and fee shown before you confirm.",
      },
    ],
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Contact",
        "/contact",
      ],
      [
        "Blog",
        "/blog",
      ],
    ],
    seo: {
      title: "Pricing: how ElementPay rates and fees work",
      description: "ElementPay shows the exchange rate and fee before every payment. No intermediary deductions. Volume pricing for businesses and OTC quotes for large trades.",
    },
  },
  "/security-and-compliance": {
    slug: "security-and-compliance",
    path: "/security-and-compliance",
    group: "Company",
    name: "How we protect your money",
    title: "How we protect your money.",
    lede: "Verification before anyone goes live, monitoring on every payment, licensed partners holding funds, and security built into every layer.",
    inShort: "Verification before anyone goes live, monitoring on every payment, licensed partners holding funds, and security built into every layer.",
    specs: [
      [
        "Verification",
        "Every business customer",
      ],
      [
        "Monitoring",
        "Transaction screening",
      ],
      [
        "Banking",
        "Licensed partners",
      ],
      [
        "Not a bank",
        "Partner institutions",
      ],
    ],
    features: [
      [
        "Audit logging",
        "Every API request is logged immutably, built for compliance and security review.",
      ],
      [
        "Talk to sales",
        "Walk through coverage, pricing and verification with our team.",
      ],
      [
        "See the platform",
        "Explore products for payouts, FX, accounts and stablecoins.",
      ],
      [
        "Read the docs",
        "Developer guides live at docs.elementpay.net.",
      ],
    ],
    faqs: [
      {
        q: "Is ElementPay a bank?",
        a: "No. ElementPay is a financial technology company. Banking services are provided by licensed partner institutions.",
      },
      {
        q: "How does ElementPay verify businesses?",
        a: "Every business completes verification of its registration, directors, beneficial owners and use case before going live.",
      },
    ],
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Contact",
        "/contact",
      ],
      [
        "Blog",
        "/blog",
      ],
    ],
    seo: {
      title: "Security and compliance: how ElementPay protects your money",
      description: "How ElementPay verifies businesses, monitors transactions, works with licensed banking partners and protects data.",
    },
  },
  "/careers": {
    slug: "careers",
    path: "/careers",
    group: "Company",
    name: "Careers at ElementPay: build payment infrastruct",
    title: "Careers at ElementPay: build payment infrastructure for Africa.",
    lede: "Join ElementPay and build cross-border and stablecoin payment infrastructure for businesses across Africa. See how we work and send us your application.",
    inShort: "Join ElementPay and build cross-border and stablecoin payment infrastructure for businesses across Africa. See how we work and send us your application.",
    specs: [
      [
        "Focus",
        "Africa payments",
      ],
      [
        "Stack",
        "Rails and stablecoins",
      ],
      [
        "Teams",
        "Product, eng, ops",
      ],
      [
        "Apply",
        "Contact us",
      ],
    ],
    features: [
      [
        "Talk to sales",
        "Walk through coverage, pricing and verification with our team.",
      ],
      [
        "See the platform",
        "Explore products for payouts, FX, accounts and stablecoins.",
      ],
      [
        "Read the docs",
        "Developer guides live at docs.elementpay.net.",
      ],
    ],
    faqs: [] as const,
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Contact",
        "/contact",
      ],
      [
        "Blog",
        "/blog",
      ],
    ],
    seo: {
      title: "Careers at ElementPay: build payment infrastructure for Africa",
      description: "Join ElementPay and build cross-border and stablecoin payment infrastructure for businesses across Africa. See how we work and send us your application.",
    },
  },
  "/glossary": {
    slug: "glossary",
    path: "/glossary",
    group: "Resources",
    name: "payments glossary",
    title: "The payments glossary.",
    lede: "Plain definitions of the terms that come up when moving money across emerging markets: mobile money, bank rails, FX and stablecoins.",
    inShort: "Plain definitions of the terms that come up when moving money across emerging markets: mobile money, bank rails, FX and stablecoins.",
    specs: [
      [
        "Topics",
        "Mobile money, FX, stablecoins",
      ],
      [
        "Audience",
        "Finance and ops",
      ],
      [
        "Style",
        "Plain language",
      ],
      [
        "Updates",
        "As rails change",
      ],
    ],
    features: [
      [
        "Talk to sales",
        "Walk through coverage, pricing and verification with our team.",
      ],
      [
        "See the platform",
        "Explore products for payouts, FX, accounts and stablecoins.",
      ],
      [
        "Read the docs",
        "Developer guides live at docs.elementpay.net.",
      ],
    ],
    faqs: [] as const,
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Contact",
        "/contact",
      ],
      [
        "Blog",
        "/blog",
      ],
    ],
    seo: {
      title: "Payments glossary: mobile money, FX and stablecoin terms explained",
      description: "Plain definitions of M-Pesa, PesaLink, CFA franc, SWIFT, correspondent banks, off-ramps, USDC, USDT and other cross-border payment terms.",
    },
  },
  "/exchange-rates": {
    slug: "exchange-rates",
    path: "/exchange-rates",
    group: "Resources",
    name: "Exchange rates to Africa",
    title: "Exchange rates to Africa.",
    lede: "Indicative rates from USD, EUR, GBP and USDC to 15 African currencies. Your exact rate is locked in a quote before you confirm.",
    inShort: "Indicative rates from USD, EUR, GBP and USDC to 15 African currencies. Your exact rate is locked in a quote before you confirm.",
    specs: [
      [
        "From",
        "USD, EUR, GBP, USDC",
      ],
      [
        "To",
        "African currencies",
      ],
      [
        "Type",
        "Indicative",
      ],
      [
        "Confirm",
        "Live quote in product",
      ],
    ],
    features: [
      [
        "Talk to sales",
        "Walk through coverage, pricing and verification with our team.",
      ],
      [
        "See the platform",
        "Explore products for payouts, FX, accounts and stablecoins.",
      ],
      [
        "Read the docs",
        "Developer guides live at docs.elementpay.net.",
      ],
    ],
    faqs: [
      {
        q: "Are these live exchange rates?",
        a: "No. Rates on this page are indicative and updated periodically. Your exact rate is shown in a quote before you confirm each payment.",
      },
      {
        q: "What is the USD to KES rate today?",
        a: "As an indication, 1 USD is about 129 KES and 1 USDC is about 129 KES (October 2026). Get a quote for your exact rate.",
      },
      {
        q: "Why is USDC priced like USD?",
        a: "USDC is a dollar stablecoin designed to hold a one-to-one value with the US dollar, so ElementPay quotes it against local currencies like USD.",
      },
    ],
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Contact",
        "/contact",
      ],
      [
        "Blog",
        "/blog",
      ],
    ],
    seo: {
      title: "Exchange rates: USD, EUR, GBP and USDC to African currencies",
      description: "Indicative exchange rates from USD, EUR, GBP and USDC to KES, NGN, GHS, ZAR, XOF, XAF and 9 more African currencies.",
    },
  },
  "/stablecoin-payments-africa": {
    slug: "stablecoin-payments-africa",
    path: "/stablecoin-payments-africa",
    group: "Resources",
    name: "Stablecoin payments across Africa",
    title: "Stablecoin payments across Africa.",
    lede: "Move USDC and USDT into and out of 10+ African countries through one integration. Pay suppliers and staff in local currency on mobile money or bank, collect from customers and settle in stablecoins.",
    inShort: "Move USDC and USDT into and out of 10+ African countries through one integration. Pay suppliers and staff in local currency on mobile money or bank, collect from customers and settle in stablecoins.",
    specs: [
      [
        "Stablecoins",
        "USDC and USDT",
      ],
      [
        "Countries",
        "20",
      ],
      [
        "Rails",
        "Mobile money and bank",
      ],
      [
        "Guides",
        "Country by country",
      ],
    ],
    features: [
      [
        "Payouts",
        "Local currency to M-Pesa, MTN MoMo, Airtel Money, Orange Money, Wave and banks.",
      ],
      [
        "Collections",
        "Collect in local currency and settle into USDC or USDT.",
      ],
      [
        "Treasury",
        "Hold stablecoins and convert only when you pay, with rates locked upfront.",
      ],
      [
        "Payroll",
        "Pay teams across the continent in one run.",
      ],
    ],
    faqs: [
      {
        q: "Which African countries support stablecoin payments with ElementPay?",
        a: "10+ countries: Kenya, Uganda, Tanzania, Rwanda, Nigeria, Ghana, South Africa, Zambia, Malawi and Botswana in Africa, plus Argentina and Colombia. More corridors are rolling out.",
      },
      {
        q: "Which stablecoins?",
        a: "USDC and USDT.",
      },
      {
        q: "Do recipients need a wallet?",
        a: "No. They receive local currency on mobile money or in a bank account.",
      },
      {
        q: "Is it for businesses only?",
        a: "Yes. ElementPay serves businesses and every account is verified.",
      },
    ],
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Contact",
        "/contact",
      ],
      [
        "Blog",
        "/blog",
      ],
    ],
    seo: {
      title: "Stablecoin payments in Africa: USDC and USDT payouts and collections i",
      description: "Stablecoin payments across Africa for businesses. Pay out and collect in 10+ African countries from USDC and USDT, delivered to mobile money and bank accounts.",
    },
    steps: [
      [
        "Integrate once",
        "One API and dashboard for every country.",
      ],
      [
        "Fund in USDC or USDT",
        "On supported chains, or from your balance.",
      ],
      [
        "Pay or collect locally",
        "On the rail each country uses most.",
      ],
      [
        "Reconcile",
        "Webhooks and references for every payment.",
      ],
    ],
  },
  "/status": {
    slug: "status",
    path: "/status",
    group: "Resources",
    name: "ElementPay system status: live uptime for every ",
    title: "ElementPay system status: live uptime for every rail.",
    lede: "Live status and 90-day uptime for M-Pesa, MTN MoMo, Airtel Money, Orange Money, Wave, bank rails, USDC and USDT settlement and the ElementPay API.",
    inShort: "Live status and 90-day uptime for M-Pesa, MTN MoMo, Airtel Money, Orange Money, Wave, bank rails, USDC and USDT settlement and the ElementPay API.",
    specs: [
      [
        "Scope",
        "Rails and API",
      ],
      [
        "Updates",
        "Operational notices",
      ],
      [
        "Support",
        "Contact sales",
      ],
      [
        "Docs",
        "docs.elementpay.net",
      ],
    ],
    features: [
      [
        "Talk to sales",
        "Walk through coverage, pricing and verification with our team.",
      ],
      [
        "See the platform",
        "Explore products for payouts, FX, accounts and stablecoins.",
      ],
      [
        "Read the docs",
        "Developer guides live at docs.elementpay.net.",
      ],
    ],
    faqs: [] as const,
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Contact",
        "/contact",
      ],
      [
        "Blog",
        "/blog",
      ],
    ],
    seo: {
      title: "ElementPay system status: live uptime for every rail",
      description: "Live status and 90-day uptime for M-Pesa, MTN MoMo, Airtel Money, Orange Money, Wave, bank rails, USDC and USDT settlement and the ElementPay API.",
    },
  },
  "/why-elementpay": {
    slug: "why-elementpay",
    path: "/why-elementpay",
    group: "Company",
    name: "Why ElementPay",
    title: "Built for teams that need control.",
    lede: "One platform to collect, pay out, convert and hold money across Africa and 30 currencies, with pricing shown upfront, a status on every payment and approvals you set.",
    inShort: "ElementPay replaces a chain of correspondent banks with one balance, one API and one dashboard for mobile money, banks and stablecoins.",
    specs: [
      [
        "Integration",
        "One platform",
      ],
      [
        "Pricing",
        "Shown upfront",
      ],
      [
        "Traceability",
        "Status and reference",
      ],
      [
        "Approvals",
        "Roles you set",
      ],
    ],
    features: [
      [
        "One integration",
        "Collect, pay out, convert and hold balances across 10+ African countries and 30 currencies, including USDC and USDT.",
      ],
      [
        "Pricing shown upfront",
        "See the rate and fee before you confirm. No intermediary deductions on the way.",
      ],
      [
        "Every payment traceable",
        "A status and your own reference on every payout and collection for reconciliation.",
      ],
      [
        "Approvals built in",
        "Roles and approval policies so finance stays in control as volume grows.",
      ],
    ],
    faqs: [
      {
        q: "How is ElementPay different from SWIFT wire?",
        a: "ElementPay routes through local rails (mobile money and banks) and stablecoins instead of a chain of correspondent banks. You see the rate and fee before you confirm, and every payment has a status and reference.",
      },
      {
        q: "Is ElementPay a bank?",
        a: "No. ElementPay is not a bank. Banking services are provided by licensed partner institutions. Every customer goes through business verification.",
      },
      {
        q: "Which rails and stablecoins are supported?",
        a: "Payouts to mobile money and banks in 10+ African countries, accounts in 30 currencies, and USDC and USDT on- and off-ramps.",
      },
    ],
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Pricing",
        "/pricing",
      ],
      [
        "Security",
        "/security-and-compliance",
      ],
      [
        "Contact",
        "/contact",
      ],
    ],
    seo: {
      title: "Why ElementPay: one platform for cross-border payments, with control",
      description: "Why businesses choose ElementPay: one integration for mobile money, banks and stablecoins, pricing shown upfront, every payment traceable, and approvals built in.",
    },
  },
  "/about": {
    slug: "about",
    path: "/about",
    group: "Company",
    name: "About us",
    title: "Connecting emerging-market money to the world.",
    lede: "Billions of people pay and get paid on mobile money and local banks. ElementPay builds the rails that connect those networks to each other, to 30 global currencies and to digital dollars like USDC and USDT.",
    inShort: "ElementPay is cross-border and stablecoin payment infrastructure for businesses, with a focus on Africa.",
    specs: [
      [
        "Payout countries",
        "10+ in Africa",
      ],
      [
        "Account currencies",
        "30",
      ],
      [
        "Stablecoins",
        "USDC and USDT",
      ],
      [
        "Offices",
        "Nairobi and Delaware",
      ],
    ],
    features: [
      [
        "Built for businesses",
        "Payouts, collections, FX, accounts and stablecoin ramps for finance teams and platforms.",
      ],
      [
        "Local rails",
        "M-Pesa, MTN MoMo, Airtel Money, Orange Money, Wave, Moov and bank transfers across Africa.",
      ],
      [
        "Digital dollars",
        "USDC and USDT sit on the same balance sheet as fiat currencies.",
      ],
      [
        "Verified customers",
        "Every customer goes through business verification. ElementPay is not a bank.",
      ],
    ],
    faqs: [
      {
        q: "Where is ElementPay based?",
        a: "ElementPay has an office at One Africa Place, Nairobi, Kenya, and Elementpay Inc. in Wilmington, Delaware, US.",
      },
      {
        q: "Who is ElementPay for?",
        a: "Businesses that need to collect, pay out, convert or hold money across Africa and global currencies, including fintechs, platforms, remittance companies and growing companies.",
      },
    ],
    related: [
      [
        "Why ElementPay",
        "/why-elementpay",
      ],
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Careers",
        "/careers",
      ],
      [
        "Contact",
        "/contact",
      ],
    ],
    seo: {
      title: "About ElementPay: payment rails for emerging markets",
      description: "ElementPay connects mobile money and local banks in 10+ African countries to 30 global currencies and to USDC and USDT.",
    },
  },
  "/help": {
    slug: "help",
    path: "/help",
    group: "Resources",
    name: "Help centre",
    title: "How can we help?",
    lede: "Answers on payouts, accounts, stablecoins and verification, for finance teams, developers and operators.",
    inShort: "Start with coverage and the glossary, or talk to sales if you need a walkthrough of payouts, accounts or stablecoin ramps.",
    specs: [
      [
        "Topics",
        "Payouts, FX, stablecoins",
      ],
      [
        "Audience",
        "Finance and ops",
      ],
      [
        "Docs",
        "docs.elementpay.net",
      ],
      [
        "Support",
        "Talk to sales",
      ],
    ],
    features: [
      [
        "Payouts",
        "How to send to mobile money and banks in 10+ African countries.",
      ],
      [
        "Accounts and FX",
        "Opening currency accounts and converting between 30 currencies and stablecoins.",
      ],
      [
        "Stablecoins",
        "Funding and settling with USDC and USDT.",
      ],
      [
        "Verification",
        "What business verification involves before you go live.",
      ],
    ],
    faqs: [
      {
        q: "Where are developer docs?",
        a: "API guides and tutorials live at https://docs.elementpay.net/.",
      },
      {
        q: "How do I talk to a human?",
        a: "Use the contact form on /contact. Tell us your company and what you need.",
      },
      {
        q: "How do I see which countries you support?",
        a: "Open the coverage page for the full list of payout countries, rails and account currencies.",
      },
    ],
    related: [
      [
        "Coverage",
        "/coverage",
      ],
      [
        "Glossary",
        "/glossary",
      ],
      [
        "Status",
        "/status",
      ],
      [
        "Contact",
        "/contact",
      ],
    ],
    seo: {
      title: "Help centre: payouts, accounts, stablecoins and verification",
      description: "Answers on payouts to 10+ African countries, accounts in 30 currencies, USDC and USDT, and business verification.",
    },
  },
  "/press": {
    slug: "press",
    path: "/press",
    group: "Company",
    name: "Press",
    title: "Newsroom and media kit.",
    lede: "Press releases, company facts and media contacts for ElementPay.",
    inShort: "ElementPay builds cross-border and stablecoin payment infrastructure for businesses across Africa.",
    specs: [
      [
        "Focus",
        "Africa payments",
      ],
      [
        "Products",
        "Mboka and ElementPay",
      ],
      [
        "Stablecoins",
        "USDC and USDT",
      ],
      [
        "Contact",
        "Press via contact",
      ],
    ],
    features: [
      [
        "Company facts",
        "10+ African payout countries, 30 account currencies, USDC and USDT.",
      ],
      [
        "Brand",
        "Mboka is the business app on ElementPay rails.",
      ],
      [
        "Media requests",
        "Use the contact form and mark your message as press.",
      ],
      [
        "Blog",
        "Product and corridor explainers on the ElementPay blog.",
      ],
    ],
    faqs: [] as const,
    related: [
      [
        "About",
        "/about",
      ],
      [
        "Blog",
        "/blog",
      ],
      [
        "Contact",
        "/contact",
      ],
    ],
    seo: {
      title: "Newsroom: ElementPay press releases and media kit",
      description: "ElementPay press releases, company facts, brand assets and media contacts.",
    },
  },
  "/coverage": {
    slug: "coverage",
    path: "/coverage",
    group: "Resources",
    name: "Coverage",
    title: "Payment coverage across Africa and 30 currencies.",
    lede: "Every country, currency and payment rail ElementPay supports: mobile money and bank payouts in 10+ African countries, business accounts in 30 currencies, funded in fiat, USDC or USDT.",
    inShort: "Payouts to 10+ African countries on mobile money and bank rails, plus business accounts in 30 currencies including USDC and USDT.",
    specs: [
      [
        "Payout countries",
        "20",
      ],
      [
        "Account currencies",
        "30",
      ],
      [
        "Stablecoins",
        "USDC and USDT",
      ],
      [
        "Funding",
        "Fiat or stablecoins",
      ],
    ],
    features: [
      [
        "Country guides",
        "Send-money and stablecoin pages for each payout market.",
      ],
      [
        "Currency accounts",
        "Open a business account page for each supported currency.",
      ],
      [
        "Rails",
        "M-Pesa, MTN MoMo, Airtel Money, Orange Money, Wave, Moov and banks.",
      ],
      [
        "Corridors",
        "Send-money-from pages for common origin and destination pairs.",
      ],
    ],
    faqs: [
      {
        q: "How many African countries can I pay out to?",
        a: "10+ African countries on mobile money and bank rails.",
      },
      {
        q: "How many account currencies are available?",
        a: "30 account currencies, with USDC and USDT on the same balance sheet.",
      },
    ],
    related: [
      [
        "Stablecoin payments in Africa",
        "/stablecoin-payments-africa",
      ],
      [
        "Exchange rates",
        "/exchange-rates",
      ],
      [
        "Payments",
        "/payments",
      ],
      [
        "Contact",
        "/contact",
      ],
    ],
    seo: {
      title: "Payment coverage: payouts in 10+ African countries, accounts in 30 currencies",
      description: "Every country, currency and payment rail ElementPay supports: mobile money and bank payouts in 10+ African countries, business accounts in 30 currencies, funded in fiat, USDC or USDT.",
    },
  },
};

export const MARKETING_PAGES: Record<string, MarketingPageData> = {
  ...CORE_MARKETING_PAGES,
  ...FOOTER_PAGES,
};

export const ALL_MARKETING_PAGES: MarketingPageData[] = [
  ...Object.values(SOLUTIONS),
  ...Object.values(MARKETING_PAGES),
];

export function getMarketingPage(path: string): MarketingPageData | undefined {
  return MARKETING_PAGES[path] ?? Object.values(SOLUTIONS).find((p) => p.path === path);
}
