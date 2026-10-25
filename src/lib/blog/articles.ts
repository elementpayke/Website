export type BlogBodyBlock =
  | readonly ["h", string]
  | readonly ["p", string]
  | readonly ["ul", readonly string[]];

export type Article = {
  slug: string;
  cat: string;
  flag: string;
  date: string;
  read: string;
  title: string;
  desc: string;
  tags: readonly string[];
  body: readonly BlogBodyBlock[];
};

export const ARTICLES: readonly Article[] = [
  {
    slug: "usdt-to-mpesa-for-business",
    cat: "Stablecoins",
    flag: "ke",
    date: "Oct 21, 2026",
    read: "6 min",
    title: "How businesses convert USDT to M-Pesa in Kenya",
    desc: "A step-by-step guide for companies that hold USDT or USDC and need to pay suppliers, staff or partners on M-Pesa in Kenyan shillings.",
    tags: ["USDT", "M-Pesa", "Kenya", "Off-ramp"],
    body: [
      ["h", "Why companies hold USDT and pay in KES"],
      [
        "p",
        "Many exporters, platforms and remote-first companies receive revenue in USDT or USDC. Their suppliers, contractors and staff in Kenya are paid in shillings, most often on M-Pesa. The finance task is moving value from one to the other without a long chain of transfers.",
      ],
      ["h", "The steps"],
      [
        "ul",
        [
          "Deposit USDT or USDC to your business balance on a supported network.",
          "Create a payout to an M-Pesa phone number or a Kenyan bank account.",
          "Review the KES amount, rate and fee before you confirm.",
          "Track the payout by status and your own reference.",
        ],
      ],
      ["h", "What to check first"],
      [
        "ul",
        [
          "The recipient’s M-Pesa registered name matches the phone number.",
          "Your provider verifies your business and screens payments.",
          "You get a status and reference for reconciliation.",
        ],
      ],
      ["h", "How ElementPay handles it"],
      [
        "p",
        "ElementPay converts USDT and USDC to KES and pays M-Pesa wallets, PesaLink bank transfers and Kenyan bank accounts from one balance. Businesses can send one payment or a bulk file, with approvals before release.",
      ],
      ["h", "Frequently asked questions"],
      ["h", "Can a business pay M-Pesa wallets from USDT?"],
      [
        "p",
        "Yes. A licensed off-ramp provider converts USDT to KES and pays the M-Pesa wallet. With ElementPay, the KES amount and fee are shown before you confirm.",
      ],
      ["h", "Do recipients need a crypto wallet?"],
      ["p", "No. Recipients receive Kenyan shillings in their M-Pesa wallet or bank account."],
      ["h", "Can we pay many M-Pesa wallets at once?"],
      ["p", "Yes, through a bulk payout file or the API."],
    ],
  },
  {
    slug: "usdc-vs-usdt-for-business",
    cat: "Stablecoins",
    flag: "us",
    date: "Oct 20, 2026",
    read: "5 min",
    title: "USDC vs USDT for business payments in Africa",
    desc: "The practical differences between USDC and USDT for companies that settle, hold or pay out in stablecoins across African markets.",
    tags: ["USDC", "USDT", "Treasury", "Stablecoins"],
    body: [
      ["h", "Two dollar stablecoins"],
      [
        "p",
        "USDC and USDT are tokens designed to hold a value of one US dollar. Businesses use them to receive payment from abroad, hold dollar value and settle with partners without waiting on bank cut-off times.",
      ],
      ["h", "How they differ"],
      [
        "ul",
        [
          "Issuer: USDC is issued by Circle, USDT by Tether.",
          "Reporting: each issuer publishes its own reserve attestations.",
          "Networks: both run on several blockchains; availability differs by network.",
          "Counterparties: some partners prefer one over the other.",
        ],
      ],
      ["h", "What finance teams should decide"],
      [
        "ul",
        [
          "Which stablecoins you accept from customers.",
          "Which networks you support for deposits.",
          "Who can approve conversions and payouts.",
          "How stablecoin movements are reconciled with your ledger.",
        ],
      ],
      ["h", "Using both with ElementPay"],
      [
        "p",
        "ElementPay lets verified businesses fund payouts from USDC or USDT and convert to local currency for mobile money and bank accounts in 20 African countries, with the rate shown before you confirm.",
      ],
      ["h", "Frequently asked questions"],
      ["h", "What is the difference between USDC and USDT?"],
      [
        "p",
        "Both are US dollar stablecoins. USDC is issued by Circle and USDT by Tether. They differ in issuer, reserve reporting and how widely each is used on different networks.",
      ],
      ["h", "Which stablecoin is used more in Africa?"],
      [
        "p",
        "USDT is widely used in peer-to-peer and trading markets; USDC is common with regulated fintechs and global platforms. Many businesses accept both.",
      ],
      ["h", "Can ElementPay pay out from both?"],
      ["p", "Yes. ElementPay supports funding and off-ramps from USDC and USDT."],
    ],
  },
  {
    slug: "b2b-stablecoin-payments-guide",
    cat: "Stablecoins",
    flag: "ng",
    date: "Oct 18, 2026",
    read: "7 min",
    title: "B2B stablecoin payments: a guide for finance teams",
    desc: "How companies use USDC and USDT to pay suppliers and partners across borders, and the controls finance teams need in place.",
    tags: ["B2B", "Stablecoin payments", "Suppliers", "Treasury"],
    body: [
      ["h", "Where stablecoins fit in B2B payments"],
      [
        "p",
        "For many companies, stablecoins are a settlement layer rather than an end currency. A buyer funds in USDC or USDT, and the supplier receives naira, cedis, shillings or yuan in a bank account.",
      ],
      ["h", "Common use cases"],
      [
        "ul",
        [
          "Importers paying suppliers in China or the UAE.",
          "Platforms settling with sellers in several countries.",
          "Exporters receiving dollar value from buyers abroad.",
          "Treasury teams holding dollar value alongside local currency.",
        ],
      ],
      ["h", "Controls to put in place"],
      [
        "ul",
        [
          "Business verification on every counterparty.",
          "Approval rules for conversions and payouts.",
          "Rates and fees shown before confirmation.",
          "A reference on every payment for reconciliation.",
        ],
      ],
      ["h", "How ElementPay supports B2B stablecoin payments"],
      [
        "p",
        "ElementPay combines USDC and USDT ramps with business accounts in 30 currencies and payouts in 20 African countries, so finance teams manage stablecoin and fiat payments on one platform.",
      ],
      ["h", "Frequently asked questions"],
      ["h", "What are B2B stablecoin payments?"],
      [
        "p",
        "Payments between businesses that use stablecoins such as USDC or USDT to move value, often converted to local currency at either end.",
      ],
      ["h", "Are B2B stablecoin payments legal?"],
      [
        "p",
        "Rules vary by country. Work with a provider that verifies businesses and operates with licensed partners in the markets you pay.",
      ],
      ["h", "Does the supplier need to accept crypto?"],
      ["p", "No. The supplier can receive local currency in a bank account or mobile money wallet."],
    ],
  },
  {
    slug: "choose-payment-gateway-africa",
    cat: "Guides",
    flag: "gh",
    date: "Oct 16, 2026",
    read: "6 min",
    title: "How to choose a payment gateway for Africa: a checklist",
    desc: "What to compare when choosing a payment gateway for African markets: payment methods, coverage, settlement currencies, pricing visibility and controls.",
    tags: ["Payment gateway", "Africa", "Collections", "Checklist"],
    body: [
      ["h", "Start with how your customers pay"],
      [
        "p",
        "A gateway is only as useful as the payment methods it supports in your markets. In Kenya that means M-Pesa; in Ghana MTN MoMo and Telecel Cash; in Nigeria bank transfer; across francophone West Africa Orange Money, Wave and Moov Money.",
      ],
      ["h", "The checklist"],
      [
        "ul",
        [
          "Countries and payment methods covered.",
          "Settlement currencies, including USD and stablecoins.",
          "Pricing shown before each transaction.",
          "Payouts as well as collections, from the same balance.",
          "Status updates and webhooks for reconciliation.",
          "Business verification and licensed partners.",
        ],
      ],
      ["h", "One gateway or several"],
      [
        "p",
        "Many businesses end up stitching together a provider per country. A single gateway that covers several markets reduces integrations, contracts and reconciliation work.",
      ],
      ["h", "Where ElementPay fits"],
      [
        "p",
        "ElementPay provides collections and payouts across mobile money and bank rails in 20 African countries, settles into local currency, USD, USDC or USDT, and shows the rate and fee upfront.",
      ],
      ["h", "Frequently asked questions"],
      ["h", "What is a payment gateway for Africa?"],
      [
        "p",
        "A service that lets a business accept payments from customers in African markets, usually by mobile money, bank transfer and cards, and settle the funds.",
      ],
      ["h", "Which payment methods matter most in Africa?"],
      [
        "p",
        "It depends on the country. Mobile money dominates in East and West Africa; bank transfer is central in Nigeria and South Africa.",
      ],
      ["h", "Can I settle in USD or stablecoins?"],
      ["p", "Some gateways allow it. ElementPay settles into local currency, USD, USDC or USDT."],
    ],
  },
  {
    slug: "paying-and-collecting-in-ghana",
    cat: "Markets",
    flag: "gh",
    date: "Oct 15, 2026",
    read: "5 min",
    title: "Paying and collecting in Ghana: MTN MoMo, Telecel Cash and bank",
    desc: "A business guide to moving money in Ghana: which mobile money networks and bank rails to use, and how to fund GHS payouts from abroad or from stablecoins.",
    tags: ["Ghana", "GHS", "MTN MoMo", "Telecel Cash"],
    body: [
      ["h", "How Ghana moves money"],
      [
        "p",
        "Mobile money is central to everyday payments in Ghana. MTN MoMo is the largest network, alongside Telecel Cash and AT Money. Bank transfers run on the national GhIPSS infrastructure.",
      ],
      ["h", "Choosing the rail"],
      [
        "ul",
        [
          "Mobile money for individuals, agents and small suppliers.",
          "Bank transfer for larger suppliers and payroll.",
          "Check the recipient’s registered name before sending.",
        ],
      ],
      ["h", "Funding GHS payouts"],
      [
        "p",
        "Businesses can fund Ghana payouts in USD, GBP, EUR, CAD or CNY, or from a USDC or USDT balance. The rate and fee are shown before you confirm.",
      ],
      ["h", "Collecting in Ghana"],
      [
        "p",
        "Customers can pay by mobile money and the funds settle into your ElementPay balance in GHS, USD or stablecoins.",
      ],
      ["h", "Frequently asked questions"],
      ["h", "How do businesses pay recipients in Ghana?"],
      [
        "p",
        "Most payouts go to mobile money wallets on MTN MoMo, Telecel Cash or AT Money, or to Ghanaian bank accounts.",
      ],
      ["h", "Can we fund Ghana payouts with stablecoins?"],
      ["p", "Yes. ElementPay converts USDC or USDT to GHS and pays mobile money or bank accounts."],
      ["h", "Can foreign businesses pay into Ghana?"],
      ["p", "Yes, subject to business verification."],
    ],
  },
  {
    slug: "multi-country-payroll-africa",
    cat: "Guides",
    flag: "za",
    date: "Oct 14, 2026",
    read: "6 min",
    title: "Running payroll across several African countries",
    desc: "How companies pay employees and contractors in Kenya, Nigeria, Ghana, South Africa and other markets from one balance, on mobile money and bank.",
    tags: ["Payroll", "Contractors", "Bulk payouts", "Africa"],
    body: [
      ["h", "The multi-country problem"],
      [
        "p",
        "A company with staff in five African countries often juggles five bank relationships, five currencies and different payment habits. Some staff prefer mobile money; others need bank transfers.",
      ],
      ["h", "A simpler setup"],
      [
        "ul",
        [
          "One balance funded in USD, EUR, GBP or stablecoins.",
          "One bulk file covering every country.",
          "Mobile money or bank per recipient.",
          "Approval before release and a status for each person.",
        ],
      ],
      ["h", "What to prepare"],
      [
        "ul",
        [
          "Recipient names matching their wallet or bank account.",
          "Local currency amounts, or USD amounts to convert.",
          "Your payroll reference for reconciliation.",
        ],
      ],
      ["h", "How ElementPay helps"],
      [
        "p",
        "ElementPay pays recipients in 20 African countries from one balance, by file or API, with the rate shown before you confirm and approvals built in.",
      ],
      ["h", "Frequently asked questions"],
      ["h", "How do companies pay staff in several African countries?"],
      [
        "p",
        "By funding one balance and sending a bulk payout that delivers local currency to each person’s mobile money wallet or bank account.",
      ],
      ["h", "Can payroll be funded in stablecoins?"],
      ["p", "Yes. ElementPay accepts USDC and USDT funding; employees receive local currency."],
      ["h", "Can we require approval before payroll is released?"],
      ["p", "Yes. Approval rules let a second person release each batch."],
    ],
  },
  {
    slug: "what-is-a-mobile-money-api",
    cat: "Guides",
    flag: "ug",
    date: "Oct 13, 2026",
    read: "5 min",
    title: "What is a mobile money API?",
    desc: "A plain explanation of mobile money APIs: what they do, who uses them, and what to look for when you need to pay out to or collect from wallets across Africa.",
    tags: ["Mobile money API", "M-Pesa", "MTN MoMo", "Developers"],
    body: [
      ["h", "Mobile money, programmatically"],
      [
        "p",
        "Mobile money lets people hold and send money with a phone number. A mobile money API lets your software do the same: create a payout to a phone number, request a payment, and receive a status update.",
      ],
      ["h", "Typical operations"],
      [
        "ul",
        [
          "Payout: send money to a wallet.",
          "Collection: request payment from a wallet.",
          "Status: receive updates by webhook.",
          "Name check: confirm the wallet holder before sending, where supported.",
        ],
      ],
      ["h", "Direct or through an aggregator"],
      [
        "p",
        "Connecting to each network directly means separate contracts and integrations per country. An aggregator gives one integration across networks and countries.",
      ],
      ["h", "ElementPay’s approach"],
      [
        "p",
        "ElementPay connects to mobile money networks including M-Pesa, MTN MoMo, Airtel Money, Orange Money and Wave across 20 African countries, alongside bank rails and USDC and USDT, through one platform and API.",
      ],
      ["h", "Frequently asked questions"],
      ["h", "What is a mobile money API?"],
      [
        "p",
        "A set of endpoints that lets software send money to, and request money from, mobile money wallets such as M-Pesa and MTN MoMo.",
      ],
      ["h", "Do I need a separate API for each network?"],
      ["p", "Not with an aggregator. ElementPay covers many networks across 20 countries through one integration."],
      ["h", "Who uses mobile money APIs?"],
      ["p", "Fintechs, marketplaces, payroll providers, lenders, NGOs and any business paying or collecting from wallets."],
    ],
  },
  {
    slug: "pay-suppliers-in-nigeria-from-abroad",
    cat: "Markets",
    flag: "ng",
    date: "Oct 12, 2026",
    read: "5 min",
    title: "How to pay suppliers in Nigeria from abroad",
    desc: "A guide for foreign businesses paying Nigerian suppliers in naira: bank payouts, funding in USD, GBP, CNY or stablecoins, and what to check before sending.",
    tags: ["Nigeria", "NGN", "Suppliers", "Bank payouts"],
    body: [
      ["h", "Nigeria runs on bank transfers"],
      [
        "p",
        "Most business payments in Nigeria go bank to bank over the national instant payment infrastructure. Suppliers usually expect naira in their Nigerian bank account.",
      ],
      ["h", "Steps to pay a Nigerian supplier"],
      [
        "ul",
        [
          "Add the supplier’s bank details and confirm the account name.",
          "Fund in USD, GBP, EUR, CNY or USDC and USDT.",
          "Review the NGN amount, rate and fee before you confirm.",
          "Track the payment with your invoice reference.",
        ],
      ],
      ["h", "Common pitfalls"],
      [
        "ul",
        [
          "Account names that don’t match the invoice.",
          "Unclear agreement on who bears the FX cost.",
          "No reference on the payment, which slows reconciliation.",
        ],
      ],
      ["h", "Using ElementPay"],
      [
        "p",
        "ElementPay pays Nigerian bank accounts in NGN from one balance funded in fiat or stablecoins, with the rate shown upfront and a status on every payment.",
      ],
      ["h", "Frequently asked questions"],
      ["h", "How do I pay a supplier in Nigeria from the UK or US?"],
      [
        "p",
        "Fund a business balance in GBP, USD or stablecoins and pay NGN to the supplier’s Nigerian bank account.",
      ],
      ["h", "Can I pay Nigerian suppliers with USDT?"],
      ["p", "Yes. ElementPay converts USDT or USDC to NGN and pays the supplier’s bank account."],
      ["h", "What details do I need?"],
      ["p", "The supplier’s bank name, account number and account name, and your invoice reference."],
    ],
  },
  {
    slug: "send-money-uk-to-kenya",
    cat: "Guides",
    flag: "ke",
    date: "Oct 9, 2026",
    read: "6 min",
    title: "How to send money from the UK to Kenya: M-Pesa, bank and stablecoin options",
    desc: "A practical guide for businesses paying recipients in Kenya, from M-Pesa wallets and PesaLink bank transfers to USDC-funded payouts.",
    tags: ["Kenya", "M-Pesa", "GBP to KES", "USDC"],
    body: [
      ["h", "Kenya runs on mobile money"],
      [
        "p",
        "M-Pesa, launched by Safaricom in 2007, is the default way most Kenyans pay and get paid. For a business sending from the UK, delivering straight to an M-Pesa wallet usually means the recipient can use the funds immediately, without visiting a bank.",
      ],
      ["h", "Your three main options"],
      [
        "ul",
        [
          "M-Pesa wallet: paid to a phone number in KES, usually.",
          "Bank account via PesaLink: real-time transfers between Kenyan banks, useful for suppliers and payroll.",
          "Paybill and Till numbers: pay businesses that collect through M-Pesa.",
        ],
      ],
      ["h", "What to check before you send"],
      [
        "p",
        "Confirm the recipient's registered name matches the phone number, agree whether the sender or the recipient pays the fee, and lock the GBP to KES rate before you confirm. With ElementPay the rate and fee are shown upfront and the KES amount is fixed once you approve.",
      ],
      ["h", "Funding with stablecoins"],
      [
        "p",
        "Teams that hold USDC or USDT can fund Kenyan payouts directly. ElementPay converts the stablecoin to KES and delivers to M-Pesa or a bank account, so treasury does not need to move funds through a correspondent bank first.",
      ],
      ["h", "How long it takes"],
      [
        "p",
        "A traditional SWIFT wire from London to Nairobi can take two to five business days and may pass through intermediary banks that deduct fees. Mobile money payouts on local rails typically settle, including at weekends.",
      ],
    ],
  },
  {
    slug: "stablecoin-off-ramps-africa",
    cat: "Stablecoins",
    flag: "ng",
    date: "Sep 30, 2026",
    read: "5 min",
    title: "Stablecoin off-ramps in Africa: turning USDC and USDT into mobile money",
    desc: "How businesses convert dollar stablecoins into local currency on M-Pesa, MTN MoMo and bank accounts.",
    tags: ["USDC", "USDT", "Off-ramp", "Mobile money"],
    body: [
      ["h", "Why stablecoins matter for African payments"],
      [
        "p",
        "Dollar stablecoins such as USDC and USDT let businesses hold and move dollars on public blockchains at any hour. Freelancers, exporters and platforms increasingly receive them from international clients. The hard part is the last step: turning those dollars into money people can spend locally.",
      ],
      ["h", "What an off-ramp does"],
      [
        "p",
        "An off-ramp sells the stablecoin, converts the proceeds into local currency and pays it out on a local rail. In much of Africa that rail is mobile money, so a good off-ramp ends with a balance on a phone.",
      ],
      ["h", "Things to compare"],
      [
        "ul",
        [
          "The rate: the KES, NGN or GHS amount you actually receive per USDC.",
          "Destinations: which mobile money networks and banks are supported in each country.",
          "Speed and hours: whether payouts run at weekends.",
          "Compliance: how the sender and recipient are verified.",
        ],
      ],
      ["h", "Off-ramping with ElementPay"],
      [
        "p",
        "Businesses use the ElementPay API to send USDC or USDT and pay out to mobile money or bank accounts in 20 African countries. Teams can also use the ElementPay dApp for on- and off-ramping: connect a company wallet, enter a destination, see the local amount and sign.",
      ],
      ["h", "On-ramps work the other way"],
      [
        "p",
        "The same rails run in reverse. Collect in local currency on mobile money or bank transfer and settle into USDC, which suits platforms that pay suppliers or contractors abroad in stablecoins.",
      ],
    ],
  },
  {
    slug: "mobile-money-west-africa",
    cat: "Markets",
    flag: "sn",
    date: "Sep 18, 2026",
    read: "5 min",
    title: "Mobile money in West Africa: Orange Money, MTN MoMo, Wave and Moov",
    desc: "Which mobile money networks matter in Senegal, Côte d'Ivoire, Benin, Togo, Burkina Faso, Mali and Ghana, and what a shared XOF balance means for treasury.",
    tags: ["West Africa", "Orange Money", "Wave", "XOF"],
    body: [
      ["h", "A multi-network region"],
      [
        "p",
        "Unlike Kenya, where one wallet dominates, most West African markets have several large mobile money networks. A payout strategy has to reach each recipient on the network they already use.",
      ],
      ["h", "Country by country"],
      [
        "ul",
        [
          "Senegal: Orange Money, Wave and Free Money.",
          "Côte d'Ivoire: Orange Money, MTN MoMo, Moov Money and Wave.",
          "Benin: MTN MoMo and Moov Money.",
          "Togo: Moov Money and Mixx by Yas.",
          "Burkina Faso and Mali: Orange Money and Moov Money.",
          "Ghana: MTN MoMo, Telecel Cash and AT Money.",
        ],
      ],
      ["h", "One currency across eight countries"],
      [
        "p",
        "Senegal, Côte d'Ivoire, Benin, Togo, Burkina Faso, Mali, Niger and Guinea-Bissau share the West African CFA franc (XOF). That simplifies treasury: a single XOF balance can hold value across several markets without converting currency at every border.",
      ],
      ["h", "What's live today"],
      [
        "p",
        "ElementPay issues business bank accounts in XOF, so you can collect and hold CFA francs, or fund a balance from USDC, ahead of paying anyone out. Mobile money payouts are live in Ghana today. Country-level payout rails for Senegal, Côte d'Ivoire, Benin, Togo, Burkina Faso and Mali are rolling out — check current coverage before you route a payment to a specific network in those markets.",
      ],
    ],
  },
  {
    slug: "correspondent-banking-explained",
    cat: "Guides",
    flag: "gh",
    date: "Sep 4, 2026",
    read: "6 min",
    title: "Why do cross-border payments to Africa take days? Correspondent banking explained",
    desc: "What happens between your bank and the recipient, where the time and fees go, and how local rails change the picture.",
    tags: ["SWIFT", "Correspondent banking", "Cross-border"],
    body: [
      ["h", "The chain behind a wire"],
      [
        "p",
        "When a bank sends an international wire, it often has no direct relationship with the recipient's bank. The payment passes along a chain of correspondent banks, each holding an account with the next, until it reaches its destination.",
      ],
      ["h", "Where the time and cost go"],
      [
        "ul",
        [
          "Each bank in the chain may hold the payment for compliance checks.",
          "Intermediaries can deduct fees, so the recipient gets less than was sent.",
          "Most banks process wires only on business days and before cut-off times.",
          "Conversion may happen at a rate the sender does not see in advance.",
        ],
      ],
      ["h", "Fewer correspondents in Africa"],
      [
        "p",
        "Over the past decade many global banks cut correspondent relationships with smaller markets, a trend often called de-risking. For businesses in many African countries this has meant longer chains and slower payments.",
      ],
      ["h", "The local-rail alternative"],
      [
        "p",
        "Networks like ElementPay hold liquidity locally and pay out on domestic rails such as mobile money, PesaLink or local bank transfer. The cross-border step becomes a movement of balances inside the network, sometimes settled in stablecoins, so the recipient is paid and the fee is known before you send.",
      ],
    ],
  },
  {
    slug: "cfa-franc-xof-xaf",
    cat: "Markets",
    flag: "cm",
    date: "Aug 21, 2026",
    read: "4 min",
    title: "XOF and XAF: a business guide to the CFA franc zones",
    desc: "Two currencies, one euro peg. Who uses which, what the peg means for pricing, and how to hold both.",
    tags: ["XOF", "XAF", "CFA franc", "EUR"],
    body: [
      ["h", "Two currencies, one peg"],
      [
        "p",
        "The West African CFA franc (XOF) and the Central African CFA franc (XAF) are separate currencies issued by two central banks, the BCEAO and the BEAC. Both are pegged to the euro at the same fixed rate: 655.957 francs per euro.",
      ],
      ["h", "Who uses which"],
      [
        "ul",
        [
          "XOF: Benin, Burkina Faso, Côte d'Ivoire, Guinea-Bissau, Mali, Niger, Senegal and Togo.",
          "XAF: Cameroon, Central African Republic, Chad, Republic of the Congo, Equatorial Guinea and Gabon.",
        ],
      ],
      [
        "p",
        "Despite the shared peg, XOF and XAF are not interchangeable. A payment from Dakar to Douala still involves a conversion.",
      ],
      ["h", "What the peg means for businesses"],
      [
        "p",
        "Because both francs are fixed to the euro, EUR conversions are predictable, which helps when pricing contracts with European partners. Conversions to USD or USDC still move with the EUR/USD rate.",
      ],
      ["h", "Holding CFA francs with ElementPay"],
      [
        "p",
        "ElementPay issues bank accounts in both XOF and XAF, alongside 28 other currencies, so businesses can collect and hold CFA francs even ahead of a payout. Mobile money payout rails into specific XOF and XAF markets, including Cameroon, are rolling out — check current coverage before you route a payment to a particular country.",
      ],
    ],
  },
  {
    slug: "mass-payouts-mobile-money",
    cat: "Product",
    flag: "ug",
    date: "Aug 7, 2026",
    read: "5 min",
    title: "Mass payouts to mobile money: a guide for platforms and marketplaces",
    desc: "How to structure payout files, choose between API and dashboard, fund the run and handle failed lines.",
    tags: ["Bulk payouts", "Marketplaces", "Mobile money"],
    body: [
      ["h", "The payout problem"],
      [
        "p",
        "Platforms that pay sellers, drivers, creators or field staff across Africa face the same problem: thousands of recipients, several countries and a different preferred rail for each person.",
      ],
      ["h", "Build a payout file that works"],
      [
        "ul",
        [
          "Store phone numbers in international format, with the country code.",
          "Record each recipient's preferred network or bank.",
          "Validate names against the account before the first payout.",
          "Use a unique reference for every line so you can reconcile.",
        ],
      ],
      ["h", "API or file"],
      [
        "p",
        "High-volume platforms usually send payouts through the API as earnings are released. Operations teams often prefer uploading a file in the dashboard and routing it for approval. ElementPay supports both, with the same reporting.",
      ],
      ["h", "Funding the run"],
      [
        "p",
        "Fund a single balance in USD, EUR or a stablecoin such as USDC, and ElementPay converts to each local currency at payout. You do not need a pre-funded account in each country.",
      ],
      ["h", "Handling failures"],
      [
        "p",
        "Every payout returns a status by webhook. Failed lines, such as a closed wallet, return to your balance and can be retried once the details are corrected.",
      ],
    ],
  },
  {
    slug: "paying-suppliers-china-from-africa",
    cat: "Markets",
    flag: "cn",
    date: "Jul 24, 2026",
    read: "4 min",
    title: "Paying suppliers in China from Nigeria, Ghana and Kenya",
    desc: "How importers pay factories in CNY without long waits, with rate locks, stablecoin funding and the OTC desk for large orders.",
    tags: ["China", "CNY", "Importers", "NGN"],
    body: [
      ["h", "A major trade corridor"],
      [
        "p",
        "China is one of the largest trading partners for many African economies. Importers paying factories in Guangzhou, Shenzhen or Yiwu need a dependable way to send CNY or USD without long delays.",
      ],
      ["h", "Common pain points"],
      [
        "ul",
        [
          "Access to dollars can be limited in some local markets.",
          "Wires to China can take several days and arrive short after intermediary fees.",
          "Rates move between the invoice date and the payment date.",
        ],
      ],
      ["h", "A faster route"],
      [
        "p",
        "An importer holds funds in NGN, GHS or KES, converts to CNY at a quote locked before confirming, and pays the supplier's bank account in China. Businesses that hold USDC or USDT can fund the payment from their stablecoin balance instead.",
      ],
      ["h", "Large orders"],
      [
        "p",
        "For larger tickets, the OTC desk gives a firm quote from a named trader, held for 60 seconds and settled the same day.",
      ],
    ],
  },
  {
    slug: "agentic-payments-policies",
    cat: "Product",
    flag: "us",
    date: "Jul 10, 2026",
    read: "4 min",
    title: "Agentic payments: how to let AI agents pay within your rules",
    desc: "Budgets, allow-lists, approval thresholds and audit trails for software that moves money.",
    tags: ["AI agents", "Policies", "API"],
    body: [
      ["h", "Software that spends money"],
      [
        "p",
        "AI agents are starting to book freight, buy supplies and pay contractors on behalf of businesses. Giving software access to money needs the controls you would give a new employee, applied automatically.",
      ],
      ["h", "The controls that matter"],
      [
        "ul",
        [
          "Budgets: a spending limit per agent, per day or per month.",
          "Allow-lists: the payees an agent may pay.",
          "Approval thresholds: payments above a set amount wait for a person.",
          "Audit trail: a record of every action, with the agent's stated reason.",
        ],
      ],
      ["h", "Local currency at the end"],
      [
        "p",
        "The payee does not need to know an agent was involved. An agent's payment arrives as KES on M-Pesa, NGN in a bank account or USDC in a wallet, like any other payout.",
      ],
      ["h", "Getting started"],
      [
        "p",
        "Agents use the same API as your developers. Create a scoped key for each agent, attach a policy, and every request is checked against it before money moves.",
      ],
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export const CATEGORIES = ["All", "Guides", "Stablecoins", "Markets", "Product"] as const;
