export type GlossaryTerm = {
  id: string;
  term: string;
  definition: string;
  relatedHref: string;
};

// Grouped by first letter, matching the design's A-Z layout. Related-link
// targets point at pages that actually exist on this site — two design
// links (Wave -> Senegal, SWIFT -> an unbuilt comparison page) were
// redirected since their original targets don't exist here.
export const GLOSSARY: ReadonlyArray<readonly [string, GlossaryTerm[]]> = [
  ["A", [
    { id: "ach", term: "ACH", definition: "Automated Clearing House: the US network for batch electronic bank transfers, used for payroll, bills and business payments in USD.", relatedHref: "/open-a-usd-account" },
  ]],
  ["B", [
    { id: "bceao", term: "BCEAO", definition: "Central Bank of West African States. It issues the West African CFA franc (XOF) for eight WAEMU countries.", relatedHref: "/open-a-xof-account" },
    { id: "beac", term: "BEAC", definition: "Bank of Central African States. It issues the Central African CFA franc (XAF) for six CEMAC countries.", relatedHref: "/open-a-xaf-account" },
  ]],
  ["C", [
    { id: "cfa-franc", term: "CFA franc (XOF and XAF)", definition: "Two separate currencies, the West African CFA franc (XOF) and the Central African CFA franc (XAF), each pegged to the euro at 655.957 francs per euro. They are not interchangeable.", relatedHref: "/blog/cfa-franc-xof-xaf" },
    { id: "collection", term: "Collection", definition: "Receiving a payment from a customer or partner, for example by mobile money, bank transfer or a payment link.", relatedHref: "/for-global-merchants" },
    { id: "correspondent-bank", term: "Correspondent bank", definition: "A bank that holds accounts for other banks and processes payments on their behalf, often in a foreign currency. International wires may pass through one or more correspondents.", relatedHref: "/blog/correspondent-banking-explained" },
  ]],
  ["D", [
    { id: "de-risking", term: "De-risking", definition: "When banks end relationships with clients or regions they consider high risk, rather than managing that risk. It has reduced correspondent banking links with many smaller markets.", relatedHref: "/blog/correspondent-banking-explained" },
  ]],
  ["E", [
    { id: "eft", term: "EFT", definition: "Electronic funds transfer. In South Africa, EFT is the standard way to pay into a bank account.", relatedHref: "/send-money-to-south-africa" },
  ]],
  ["F", [
    { id: "faster-payments", term: "Faster Payments", definition: "The UK real-time payment scheme for GBP transfers between bank accounts, available 24/7.", relatedHref: "/open-a-gbp-account" },
  ]],
  ["I", [
    { id: "iban", term: "IBAN", definition: "International Bank Account Number: a standard format that identifies a bank account across borders, used throughout Europe and in many other countries.", relatedHref: "/open-a-eur-account" },
  ]],
  ["K", [
    { id: "kyb", term: "KYB", definition: "Know your business: verifying a company’s registration, directors, beneficial owners and activities before it can use a financial service.", relatedHref: "/security-and-compliance" },
  ]],
  ["M", [
    { id: "mid-market-rate", term: "Mid-market rate", definition: "The midpoint between the buy and sell prices of two currencies on global markets. Providers add a margin or fee on top.", relatedHref: "/pricing" },
    { id: "mobile-money", term: "Mobile money", definition: "A store of value linked to a mobile phone number, run by a telecom operator or licensed provider, used to pay, send and receive money without a bank account.", relatedHref: "/payments" },
    { id: "m-pesa", term: "M-Pesa", definition: "The mobile money service launched by Safaricom in Kenya in 2007. Vodacom also runs M-Pesa in Tanzania, DR Congo and Mozambique.", relatedHref: "/send-money-to-kenya" },
    { id: "mtn-momo", term: "MTN MoMo", definition: "MTN Group’s mobile money service, used in Uganda, Ghana, Rwanda, Cameroon, Côte d’Ivoire, Benin, Zambia and other markets.", relatedHref: "/send-money-to-ghana" },
  ]],
  ["N", [
    { id: "nostro-account", term: "Nostro account", definition: "An account a bank holds in a foreign currency at another bank, used to send and receive payments in that currency. Pre-funding nostro accounts ties up capital.", relatedHref: "/for-remittance-companies" },
  ]],
  ["O", [
    { id: "off-ramp", term: "Off-ramp", definition: "Converting digital assets such as USDC or USDT into local currency, ideally paid straight to a bank account or mobile money wallet.", relatedHref: "/stablecoins" },
    { id: "on-ramp", term: "On-ramp", definition: "Converting local currency into digital assets such as USDC or USDT.", relatedHref: "/stablecoins" },
    { id: "otc-desk", term: "OTC desk", definition: "An over-the-counter desk where a trader quotes large currency or stablecoin trades directly, instead of executing on a public order book.", relatedHref: "/otc-desk" },
  ]],
  ["P", [
    { id: "paybill-and-till-numbers", term: "Paybill and Till numbers", definition: "M-Pesa business numbers in Kenya. Paybill is used for bill and account payments; Till (Buy Goods) is used for purchases from merchants.", relatedHref: "/send-money-to-kenya" },
    { id: "pesalink", term: "PesaLink", definition: "A real-time interbank transfer service in Kenya that lets participating banks send money between each other.", relatedHref: "/send-money-to-kenya" },
    { id: "payout", term: "Payout", definition: "Sending money from your balance to a recipient, such as a supplier, employee or customer, on their mobile money wallet or bank account.", relatedHref: "/payments" },
  ]],
  ["R", [
    { id: "rate-lock", term: "Rate lock", definition: "Holding an exchange rate quote for a fixed period so the amount the recipient gets does not change while you approve.", relatedHref: "/settlement-and-fx" },
  ]],
  ["S", [
    { id: "sepa", term: "SEPA", definition: "Single Euro Payments Area: the scheme for euro bank transfers across the EU and other European countries. SEPA Instant settles in seconds.", relatedHref: "/open-a-eur-account" },
    { id: "settlement", term: "Settlement", definition: "The point at which funds actually move and a payment becomes final.", relatedHref: "/settlement-and-fx" },
    { id: "sort-code", term: "Sort code", definition: "A six-digit number that identifies a UK bank branch. Used with an account number for GBP payments.", relatedHref: "/open-a-gbp-account" },
    { id: "stablecoin", term: "Stablecoin", definition: "A digital token designed to hold a stable value, usually one-to-one with a currency such as the US dollar. USDC and USDT are the most widely used.", relatedHref: "/stablecoins" },
    { id: "swift", term: "SWIFT", definition: "The messaging network banks use to send international payment instructions. A SWIFT payment often relies on correspondent banks to move the funds.", relatedHref: "/blog/correspondent-banking-explained" },
  ]],
  ["U", [
    { id: "usdc", term: "USDC", definition: "A US dollar stablecoin issued by Circle.", relatedHref: "/usdc-to-kenya" },
    { id: "usdt", term: "USDT", definition: "A US dollar stablecoin issued by Tether.", relatedHref: "/usdt-to-nigeria" },
  ]],
  ["W", [
    { id: "wave", term: "Wave", definition: "A mobile money service operating in Senegal, Côte d’Ivoire and other West African countries.", relatedHref: "/mobile-money-api" },
    { id: "webhook", term: "Webhook", definition: "A message a platform sends to your server when an event happens, such as a payout being settled.", relatedHref: "/payments-api" },
  ]],
];

export const GLOSSARY_LETTERS = GLOSSARY.map(([letter]) => letter);
