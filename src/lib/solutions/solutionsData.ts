/**
 * Solution pages, as defined in the design (Solutions.dc.html). Generated
 * from the design data; edit the copy here, keep the shape.
 */
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

type Flagged = readonly [flag: string, name: string, detail: string];

export type Solution = {
  slug: SolutionSlug;
  path: string;
  n: string;
  short: string;
  t: string;
  l: string;
  flowT: string;
  fund: readonly string[];
  fromL: string;
  toL: string;
  from: readonly Flagged[];
  core: ReadonlyArray<readonly [string, string]>;
  to: readonly Flagged[];
  uses: ReadonlyArray<readonly [string, string]>;
  dayIntro: string;
  day: ReadonlyArray<readonly [time: string, flag: string, event: string]>;
  stack: readonly string[];
};

/** Product cards in each solution’s "Built with" row. */
export const STACK_PRODUCTS: Record<
  string,
  readonly [name: string, detail: string]
> = {
  payments: ["Payments", "Payouts in 20 African countries"],
  fx: ["Settlement & FX", "Convert"],
  accounts: ["Accounts", "30 currencies"],
  otc: ["OTC desk", "Large-ticket FX"],
  agentic: ["Agentic payments", "Policies for AI agents"],
  assets: ["Stablecoins", "USDC and USDT ramps"],
  dashboard: ["Merchant dashboard", "Collections and approvals"],
  api: ["ElementPay API", "One API for every rail"],
  dapp: ["ElementPay dApp", "Off-ramp stablecoins"],
};

export const SOLUTIONS: Record<SolutionSlug, Solution> = {
  fi: {
    slug: "fi",
    path: "/for-financial-institutions",
    n: "Financial institutions",
    short: "your institution",
    t: "Payments infrastructure for banks, MFIs and PSPs.",
    l: "Offer collections, payouts and cross-border transfers under your own brand. We run the rails, compliance and liquidity, in fiat and stablecoins.",
    flowT: "Your brand on our rails.",
    fund: ["USD", "EUR", "USDC"],
    fromL: "YOUR CUSTOMERS",
    toL: "THEIR RECIPIENTS",
    from: [
      ["gb", "Retail customers", "Your app or branch"],
      ["ae", "Corporate clients", "Treasury desk"],
      ["us", "Partner banks", "Correspondent-free inflows"],
    ],
    core: [
      ["Model", "White-label"],
      ["Liquidity", "OTC desk"],
      ["Reporting", "Regulator-ready"],
    ],
    to: [
      ["ke", "Kenya", "M-Pesa, PesaLink"],
      ["ng", "Nigeria", "Bank transfer"],
      ["gh", "Ghana", "MTN MoMo, Bank"],
      ["cm", "Cameroon", "MTN MoMo, Orange"],
    ],
    uses: [
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
    dayIntro: "How a mid-sized PSP runs cross-border flows for its customers.",
    day: [
      [
        "07:30",
        "ae",
        "Treasury tops up the USD balance with 500,000 USDC from the OTC desk.",
      ],
      [
        "09:00",
        "gb",
        "Customer transfers from London start arriving through your app.",
      ],
      ["09:01", "ke", "First payouts land on M-Pesa in Nairobi."],
      [
        "13:00",
        "ng",
        "Corporate batch of 240 bank payouts to Nigeria settles.",
      ],
      ["18:00", "eu", "Daily reconciliation file exported for your regulator."],
    ],
    stack: ["payments", "otc", "api"],
  },
  merchants: {
    slug: "merchants",
    path: "/for-global-merchants",
    n: "Global merchants",
    short: "collections",
    t: "Accept emerging-market payment methods from anywhere.",
    l: "Customers pay with M-Pesa, MTN MoMo, Orange Money or local bank transfer. You settle in USD, EUR, GBP or USDC.",
    flowT: "Local checkout, global settlement.",
    fund: ["USD", "EUR", "GBP", "USDC"],
    fromL: "CUSTOMERS PAY WITH",
    toL: "YOU SETTLE IN",
    from: [
      ["ke", "M-Pesa", "Kenya"],
      ["gh", "MTN MoMo", "Ghana"],
      ["sn", "Wave", "Senegal"],
      ["ng", "Bank transfer", "Nigeria"],
    ],
    core: [
      ["Checkout", "Hosted or API"],
      ["Conversion", "At collection"],
      ["Refunds", "To the same rail"],
    ],
    to: [
      ["us", "USD", "ACH and SWIFT"],
      ["eu", "EUR", "SEPA"],
      ["gb", "GBP", "Faster Payments"],
      ["us", "USDC", "Wallet or balance"],
    ],
    uses: [
      ["Digital services", "Subscriptions and top-ups paid on mobile money."],
      ["Gaming and app stores", "In-app purchases in local currency."],
      [
        "Travel and ticketing",
        "Bookings paid locally, settled in your currency.",
      ],
    ],
    dayIntro: "A streaming service collecting across four markets.",
    day: [
      [
        "06:00",
        "ke",
        "Monthly renewals start charging M-Pesa wallets in Kenya.",
      ],
      ["08:30", "gh", "New sign-ups in Accra pay with MTN MoMo at checkout."],
      [
        "12:00",
        "ng",
        "Bank transfer payments in Nigeria reconcile automatically.",
      ],
      ["16:00", "sn", "A refund is returned to a Wave wallet in Dakar."],
      ["23:59", "us", "The day settles to your USD account and USDC balance."],
    ],
    stack: ["payments", "fx", "accounts"],
  },
  traders: {
    slug: "traders",
    path: "/for-cross-border-traders",
    n: "Cross-border traders",
    short: "trade",
    t: "FX and settlement for importers and exporters.",
    l: "Collect from buyers locally, hold dollars or USDT between shipments and pay suppliers abroad without waiting on SWIFT.",
    flowT: "From buyer to supplier, without the wait.",
    fund: ["NGN", "GHS", "KES", "USDT"],
    fromL: "COLLECT FROM BUYERS",
    toL: "PAY SUPPLIERS",
    from: [
      ["ug", "Buyers in Kampala", "MTN MoMo"],
      ["ng", "Distributors in Lagos", "Bank transfer"],
      ["ke", "Retailers in Nairobi", "M-Pesa Till"],
    ],
    core: [
      ["Rates", "Locked per shipment"],
      ["Hold", "USD, USDT or local"],
      ["Large tickets", "OTC desk"],
    ],
    to: [
      ["cn", "Guangzhou", "Bank · CNY"],
      ["ae", "Dubai", "Bank · AED"],
      ["tr", "Istanbul", "Bank · USD"],
      ["in", "Mumbai", "Bank · USD"],
    ],
    uses: [
      ["Supplier payments", "Pay factories in China, the Gulf and beyond."],
      ["Local collections", "Receive from buyers on mobile money and bank."],
      ["Rate locks", "Fix the rate for each shipment before you pay."],
    ],
    dayIntro: "An electronics importer paying a factory in Guangzhou.",
    day: [
      [
        "08:00",
        "ug",
        "Buyers in Kampala pay for last week’s delivery on MTN MoMo.",
      ],
      ["10:00", "ug", "UGX balance converts to USDT at a locked rate."],
      [
        "10:05",
        "cn",
        "Supplier in Guangzhou is paid in CNY to their bank account.",
      ],
      ["10:06", "cn", "Proof of payment PDF shared with the supplier on chat."],
      ["15:00", "ae", "Freight forwarder in Dubai paid in AED."],
    ],
    stack: ["fx", "otc", "accounts"],
  },
  platforms: {
    slug: "platforms",
    path: "/for-platforms-and-marketplaces",
    n: "Platforms & marketplaces",
    short: "payouts",
    t: "Mass payouts and collections at scale.",
    l: "Pay thousands of sellers, drivers or creators on the rail each one prefers, funded from a single USD or USDC balance.",
    flowT: "One balance, thousands of payouts.",
    fund: ["USD", "EUR", "USDC", "USDT"],
    fromL: "YOUR PLATFORM",
    toL: "YOUR SELLERS",
    from: [
      ["us", "Marketplace balance", "USD or USDC"],
      ["eu", "EU buyers", "SEPA collections"],
      ["gb", "UK buyers", "Faster Payments"],
    ],
    core: [
      ["Run size", "Thousands per file"],
      ["Splits", "Escrow and splits"],
      ["Failures", "Returned to balance"],
    ],
    to: [
      ["ke", "Sellers in Kenya", "M-Pesa"],
      ["ng", "Creators in Nigeria", "Bank"],
      ["ci", "Drivers in Abidjan", "Wave, Orange Money"],
      ["za", "Merchants in Johannesburg", "Bank EFT"],
    ],
    uses: [
      [
        "Seller and creator payouts",
        "Weekly runs or instant on-demand cash-out.",
      ],
      ["Driver earnings", "Pay out after every shift to mobile money."],
      ["Split payments", "Divide collections between parties, with escrow."],
    ],
    dayIntro: "A creator marketplace’s weekly payout run.",
    day: [
      [
        "09:00",
        "us",
        "Finance uploads the weekly earnings file: 1,284 creators.",
      ],
      ["09:02", "us", "Run approved. Funded from the USDC balance."],
      ["09:03", "ke", "612 creators in Kenya paid on M-Pesa."],
      ["09:05", "ng", "418 creators in Nigeria paid by bank transfer."],
      ["09:20", "ci", "Three failed lines returned to balance with reasons."],
    ],
    stack: ["payments", "api", "dashboard"],
  },
  smes: {
    slug: "smes",
    path: "/for-growing-businesses",
    n: "Growing businesses",
    short: "your business",
    t: "An all-in-one finance tool for SMEs.",
    l: "Collect from customers, pay staff and suppliers, and keep every currency, including digital dollars, in one place with Mboka.",
    flowT: "Run the whole business from one balance.",
    fund: ["KES", "USD", "USDC"],
    fromL: "MONEY IN",
    toL: "MONEY OUT",
    from: [
      ["ke", "Customers", "M-Pesa, Paybill"],
      ["gb", "Overseas clients", "GBP account"],
      ["us", "Freelance income", "USDC"],
    ],
    core: [
      ["App", "Mboka"],
      ["Accounts", "30 currencies"],
      ["Cards", "Virtual and physical"],
    ],
    to: [
      ["ke", "Staff payroll", "M-Pesa"],
      ["ug", "Supplier in Kampala", "MTN MoMo"],
      ["cn", "Stock from Shenzhen", "Bank · CNY"],
      ["ke", "Rent and bills", "Bank"],
    ],
    uses: [
      [
        "Payroll across countries",
        "Pay your team in Kenya and Uganda in one run.",
      ],
      ["Supplier payments", "Pay locally on mobile money or abroad by bank."],
      ["Invoices and links", "Send links customers can pay on their phones."],
    ],
    dayIntro: "A design studio in Nairobi with clients in London.",
    day: [
      ["08:00", "gb", "London client pays an invoice into the GBP account."],
      ["08:01", "ke", "GBP converts to KES at a quote shown upfront."],
      ["11:00", "ug", "Freelancer in Kampala paid on MTN MoMo."],
      ["17:00", "us", "A US client pays 1,200 USDC for a project."],
      ["17:30", "ke", "Monthly payroll for 12 staff goes out on M-Pesa."],
    ],
    stack: ["accounts", "payments", "dashboard"],
  },
  wallets: {
    slug: "wallets",
    path: "/for-fintechs-and-wallets",
    n: "Fintechs & wallets",
    short: "your app",
    t: "Cash-in and cash-out for every user.",
    l: "Add mobile money and bank on- and off-ramps, plus USDC balances, to your app without building telco integrations.",
    flowT: "Every ramp your users need.",
    fund: ["USD", "USDC", "USDT"],
    fromL: "USERS TOP UP FROM",
    toL: "USERS CASH OUT TO",
    from: [
      ["ke", "M-Pesa", "Kenya"],
      ["gh", "MTN MoMo", "Ghana"],
      ["tz", "Airtel Money", "Tanzania"],
    ],
    core: [
      ["Integration", "One API"],
      ["Balances", "USD, USDC, local"],
      ["Delivery", "Seconds"],
    ],
    to: [
      ["ke", "M-Pesa", "Kenya"],
      ["ng", "Bank", "Nigeria"],
      ["sn", "Wave", "Senegal"],
      ["us", "USDC", "External wallet"],
    ],
    uses: [
      [
        "Cash-out to mobile money",
        "Users withdraw to M-Pesa, MTN MoMo, Airtel and more.",
      ],
      ["Dollar savings", "Offer USD and USDC balances to protect savings."],
      ["Remittance features", "Let users send home to 20 African countries."],
    ],
    dayIntro: "A savings app adding dollar balances for users.",
    day: [
      ["07:00", "ke", "A user tops up KES 5,000 from M-Pesa."],
      ["07:01", "us", "The app converts it to USDC for a dollar savings goal."],
      ["12:30", "gh", "Another user cashes out to MTN MoMo in Accra."],
      ["19:00", "ng", "A business pays a supplier’s Nigerian bank account."],
      ["22:00", "sn", "A payout goes to a Wave wallet in Dakar."],
    ],
    stack: ["api", "assets", "payments"],
  },
  remit: {
    slug: "remit",
    path: "/for-remittance-companies",
    n: "Remittance companies",
    short: "remittance",
    t: "Deliver to mobile money in every corridor.",
    l: "Fund once, in fiat or USDC, and pay out to phones and bank accounts in 20 African countries without pre-funding a bank in each.",
    flowT: "Every corridor from one float.",
    fund: ["GBP", "USD", "EUR", "USDC"],
    fromL: "SENDERS IN",
    toL: "FAMILIES IN",
    from: [
      ["gb", "United Kingdom", "GBP"],
      ["us", "United States", "USD"],
      ["de", "Germany", "EUR"],
      ["ae", "UAE", "AED"],
    ],
    core: [
      ["Float", "One balance"],
      ["Pre-funding", "Not per country"],
      ["Hours", "Including weekends"],
    ],
    to: [
      ["ke", "Kenya", "M-Pesa"],
      ["ng", "Nigeria", "Bank"],
      ["gh", "Ghana", "MTN MoMo"],
      ["ug", "Uganda", "Airtel Money"],
    ],
    uses: [
      [
        "Diaspora corridors",
        "UK to Kenya, US to Nigeria, UAE to Uganda and more.",
      ],
      ["No nostro accounts", "Fund a single balance, in fiat or USDC."],
      ["Weekend delivery", "Payouts run every day of the week."],
    ],
    dayIntro: "A Saturday for a UK remittance company.",
    day: [
      ["08:00", "gb", "Weekend float topped up with 250,000 USDC."],
      ["09:15", "ke", "First transfer of the day lands on M-Pesa."],
      [
        "12:00",
        "ng",
        "Bank payouts to Nigeria keep settling over the weekend.",
      ],
      ["15:00", "gh", "A family in Kumasi receives GHS on MTN MoMo."],
      ["21:00", "ug", "Webhooks confirm 3,200 deliveries for the day."],
    ],
    stack: ["payments", "assets", "fx"],
  },
  ngos: {
    slug: "ngos",
    path: "/for-ngos-and-aid",
    n: "NGOs & aid",
    short: "programmes",
    t: "Disburse to beneficiaries on their phones.",
    l: "Send cash transfers and stipends to mobile money wallets in bulk, with a full audit trail for donors. Fund from EUR, USD or USDC.",
    flowT: "From donor funds to a phone.",
    fund: ["EUR", "USD", "USDC"],
    fromL: "FUNDED BY",
    toL: "DISBURSED TO",
    from: [
      ["eu", "EU donors", "EUR grant"],
      ["us", "US foundation", "USD"],
      ["ch", "Geneva HQ", "CHF account"],
    ],
    core: [
      ["Payouts", "Bulk to mobile money"],
      ["Approvals", "Multi-step"],
      ["Reporting", "Donor-ready"],
    ],
    to: [
      ["ke", "Turkana, Kenya", "M-Pesa"],
      ["ug", "Gulu, Uganda", "MTN MoMo"],
      ["mw", "Lilongwe, Malawi", "Airtel Money"],
      ["cd", "Goma, DR Congo", "M-Pesa"],
    ],
    uses: [
      ["Cash transfer programmes", "Reach thousands of households in one run."],
      [
        "Field staff stipends",
        "Pay enumerators and health workers in remote areas.",
      ],
      ["Donor reporting", "Exports for every disbursement, by programme."],
    ],
    dayIntro: "A cash transfer programme across three countries.",
    day: [
      ["08:00", "ch", "Programme lead approves the monthly disbursement."],
      ["08:05", "ke", "3,120 households in Turkana paid on M-Pesa."],
      ["08:20", "ug", "Stipends for 140 field staff paid on MTN MoMo."],
      ["09:00", "mw", "Second tranche in Malawi delivered on Airtel Money."],
      ["17:00", "eu", "Donor report exported with every transaction."],
    ],
    stack: ["dashboard", "payments", "accounts"],
  },
  ai: {
    slug: "ai",
    path: "/for-ai-agents",
    n: "AI agents",
    short: "agents",
    t: "Programmable payments for software.",
    l: "Give agents a budget and policies. They pay within your rules, and recipients get local currency on mobile money, bank or USDC.",
    flowT: "Agents spend. Policies decide.",
    fund: ["USD", "USDC"],
    fromL: "YOUR AGENTS",
    toL: "GET PAID",
    from: [
      ["us", "Procurement agent", "Budget $5,000 / mo"],
      ["us", "Freight agent", "Allow-list only"],
      ["us", "Contractor agent", "Pays by usage"],
    ],
    core: [
      ["Policies", "Budgets, allow-lists"],
      ["Approvals", "Over threshold"],
      ["Audit", "Every action"],
    ],
    to: [
      ["ke", "Freight in Mombasa", "M-Pesa Till"],
      ["ng", "Supplies in Lagos", "Bank"],
      ["gh", "Packaging in Accra", "MTN MoMo"],
      ["us", "Contractors", "USDC"],
    ],
    uses: [
      ["Procurement agents", "Buy supplies within a monthly budget."],
      ["Usage-based payouts", "Pay contractors as work is completed."],
      ["Treasury sweeps", "Rebalance currencies on a schedule."],
    ],
    dayIntro: "An operations team running three agents.",
    day: [
      ["06:00", "us", "Treasury agent sweeps excess KES into USDC."],
      ["09:10", "ke", "Freight agent pays a Mombasa trucker on M-Pesa Till."],
      [
        "11:40",
        "ng",
        "Procurement agent pays an allow-listed supplier in Lagos.",
      ],
      ["14:00", "ke", "A $3,400 request is held for human approval."],
      ["14:03", "us", "Ops lead approves from the dashboard."],
    ],
    stack: ["agentic", "api", "assets"],
  },
};

export const SOLUTION_LIST = Object.values(SOLUTIONS);
