import Link from "next/link";
import type { LegalDoc } from "./types";

export const TERMS_AND_CONDITIONS: LegalDoc = {
  title: "ElementPay Terms and Conditions",
  eyebrow: "Last updated 26 October 2026",
  lede: "These Terms and Conditions form a binding agreement between you and ElementPay, governing your use of the ElementPay website, dashboard, APIs, Mboka and related services.",
  intro: (
    <>
      These Terms and Conditions (&quot;Terms&quot;) form a legally binding agreement between you
      (&quot;you&quot;, &quot;your&quot;, &quot;Client&quot;) and ElementPay (&quot;we&quot;, &quot;our&quot;,
      &quot;us&quot;). They govern your access to and use of the ElementPay website, dashboard, APIs, Mboka, and
      all related services (the &quot;Platform&quot;).
      <br />
      <br />
      ElementPay is a financial technology company. ElementPay is not a bank and does not hold client funds.
      <br />
      <br />
      By creating an account or using the Platform, you agree to these Terms. If you do not agree, you must stop
      using the Platform.
    </>
  ),
  sections: [
    {
      heading: "1. What These Terms Cover",
      blocks: [
        { type: "p", children: "These Terms govern:" },
        {
          type: "ul",
          items: [
            "onboarding and verification",
            "account creation and local-currency accounts",
            "funding, settlement and withdrawals",
            "API access and Mboka",
            "stablecoin services",
            "cross-border payouts",
            "merchant collections and checkout",
            "compliance obligations",
            "tax responsibilities",
            "security and unauthorised activity",
            "fees and limits",
            "data protection",
            "dispute resolution and governing law",
            "website and intellectual property usage",
          ],
        },
        {
          type: "p",
          children:
            "These Terms are not the Fee Schedule or any separate written agreement you enter into with us. The Fee Schedule is issued as a separate PDF. If a separate signed agreement conflicts with these Terms, the signed agreement prevails for that Client.",
        },
      ],
    },
    {
      heading: "2. ElementPay's Role and Partner Model",
      blocks: [
        { type: "p", children: "ElementPay provides:" },
        {
          type: "ul",
          items: [
            "technology infrastructure",
            "client dashboards",
            "payment routing and orchestration technology",
            "onboarding workflow",
            "identity and business verification tooling",
            "risk, fraud and compliance screening technology",
            "stablecoin-based settlement rails",
            "API and checkout integrations",
            "integrations with licensed banking and payment partners",
          ],
        },
        {
          type: "p",
          children:
            "Regulated payment services, including collection, conversion, settlement and payout, are executed by licensed banking, payment service provider and digital asset partners. ElementPay routes each transaction to one or more of these partners.",
        },
        {
          type: "p",
          children:
            "ElementPay does not hold, custody or pool Client funds. Funds move through the licensed partner selected for the transaction. ElementPay is not liable for obligations that legally belong to these licensed partners.",
        },
      ],
    },
    {
      heading: "3. Eligibility",
      blocks: [
        { type: "p", children: "To open and maintain an ElementPay account, you must:" },
        {
          type: "ul",
          items: [
            "be a legally registered business, or a duly authorised representative of one",
            "be at least 18 years old, if you are an individual acting for that business",
            "be located in, or incorporated in, a jurisdiction we support",
            "pass all identity, business verification and compliance checks, sanctions included",
            "provide truthful, complete and current information",
            "agree to ongoing monitoring under applicable laws",
          ],
        },
        { type: "p", children: "ElementPay may request additional information, suspend access or decline service at its discretion." },
      ],
    },
    {
      heading: "4. Verification and Compliance Requirements",
      blocks: [
        {
          type: "p",
          children:
            "ElementPay and its partners are required by law to collect information under applicable anti-money laundering, counter-terrorist financing, sanctions and financial crime laws, including the laws of Kenya and of each corridor in which you transact. These include the Proceeds of Crime and Anti-Money Laundering Act, KYC and KYB requirements, sanctions screening and travel rule obligations where applicable.",
        },
        { type: "p", children: "You authorise ElementPay and its partners to:" },
        {
          type: "ul",
          items: [
            "verify your identity, ownership and control",
            "run sanctions, adverse media and politically exposed person checks",
            "perform risk-based transaction monitoring",
            "request source of funds, source of wealth, contracts, invoices and supporting trade documents",
            "pause, hold or refuse transactions for compliance reasons",
            "share information with partners and regulators where the law requires",
          ],
        },
        { type: "p", children: "If you fail to provide required information, services may be limited or terminated." },
      ],
    },
    {
      heading: "5. Accounts and Products",
      blocks: [
        { type: "p", children: "Your ElementPay account (“Account”) gives you access to the products enabled for you, which may include:" },
        {
          type: "ul",
          items: [
            "Mboka, the ElementPay B2B product, including accounts in local currencies such as KES and NGN",
            "API access for collections, conversions and payouts",
            "stablecoin settlement",
            "cross-border payouts",
            "hosted checkout and merchant collections",
          ],
        },
        {
          type: "p",
          children:
            "Product availability depends on your verification status, your corridor, your risk profile and partner coverage. Balances shown in your Account are records of amounts held with or owed by the relevant licensed partner. They are not deposits with ElementPay and are not insured by any deposit protection scheme unless a partner states otherwise in writing.",
        },
      ],
    },
    {
      heading: "6. Funding and Settlement",
      blocks: [
        { type: "p", children: "You may fund a transaction using:" },
        { type: "ul", items: ["bank transfer", "mobile money", "stablecoin deposit", "other methods supported on the Platform"] },
        { type: "p", children: "Funding methods may be restricted based on risk assessment, corridor rules or partner requirements." },
        {
          type: "p",
          children:
            "You must not use third-party accounts, anonymous sources of funds or funds that are not your own, unless we have approved this in writing. Settlement timing depends on the corridor, the partner, compliance review and the receiving institution.",
        },
      ],
    },
    {
      heading: "7. Using Your Account",
      blocks: [
        { type: "p", children: "You may initiate:" },
        { type: "ul", items: ["collections", "conversions", "local and cross-border payouts", "stablecoin transfers", "API requests through the credentials issued to you"] },
        {
          type: "p",
          children:
            "You are responsible for the accuracy of all payment instructions, including beneficiary names, account numbers, wallet addresses and networks. An instruction sent to the wrong beneficiary, or to the wrong wallet address or network, may not be recoverable. Many transactions are irreversible once submitted. Where we or our partners can attempt a recall, we do so on a reasonable-efforts basis and do not guarantee the result.",
        },
      ],
    },
    {
      heading: "8. Prohibited Use",
      blocks: [
        { type: "p", children: "You may not use ElementPay to:" },
        {
          type: "ul",
          items: [
            "commit fraud, scams or unauthorised transactions",
            "move funds in a way that conceals their origin",
            "bypass sanctions, trade restrictions or export controls",
            "transact on behalf of third parties without our approval",
            "engage in illegal digital asset activity",
            "operate unlicensed money transmission or exchange business",
            "split, structure or disguise transactions to avoid limits or monitoring",
            "violate any applicable law",
          ],
        },
        { type: "p", children: "You may not use ElementPay for any of the following businesses or activities:" },
        {
          type: "ul",
          items: [
            "illicit drugs and controlled substances",
            "human trafficking and exploitation",
            "arms, ammunition and explosives",
            "counterfeit goods",
            "pyramid, Ponzi and other fraudulent investment schemes",
            "adult content and services",
            "child exploitation",
            "unlicensed pharmaceuticals and pharmacies",
            "darknet marketplaces",
            "tobacco and vape products in restricted jurisdictions",
            "unlicensed financial services, including unlicensed forex, investment and gambling operators",
            "stolen goods and warehousing of stolen goods",
            "shell entities with no genuine trade activity",
            "trade in goods or services that are illegal in the sender's, the recipient's or any intermediate jurisdiction",
          ],
        },
        {
          type: "p",
          children: "Any prohibited use may result in immediate account closure, withholding of affected transactions, and reporting to the competent authorities.",
        },
      ],
    },
    {
      heading: "9. Sanctions and Restricted Jurisdictions",
      blocks: [
        {
          type: "p",
          children:
            "We do not provide services to, or process transactions with, any person, entity or jurisdiction subject to sanctions or trade restrictions imposed by the United Nations, the European Union, the United States (including the Office of Foreign Assets Control), the United Kingdom, Canada, the Republic of Kenya, or any other applicable authority.",
        },
        { type: "p", children: "By using our services, you represent and warrant that you are not:" },
        {
          type: "ul",
          items: [
            "located in, ordinarily resident in, or organised under the laws of a sanctioned country or territory",
            "identified on any sanctions list published by the authorities above",
            "owned or controlled by, or acting for the benefit of, any sanctioned person or entity",
          ],
        },
        {
          type: "p",
          children:
            "We may terminate any relationship or reject, hold or reverse any transaction immediately if we determine that continuing would breach sanctions laws or expose ElementPay or its partners to regulatory or reputational risk. We maintain a list of unsupported countries, which we may update at any time.",
        },
      ],
    },
    {
      heading: "10. Stablecoin Services",
      blocks: [
        { type: "p", children: "Stablecoin features may include:" },
        {
          type: "ul",
          items: [
            "receiving stablecoins",
            "sending stablecoins",
            "converting between stablecoins and fiat currencies",
            "using stablecoins for cross-border settlement and payouts",
          ],
        },
        {
          type: "p",
          children:
            "Stablecoin availability, custody model and conversion depend on partner integrations and on the laws of each jurisdiction. Digital asset values may fluctuate, and a stablecoin may lose its peg. Blockchain transactions are irreversible. Network congestion, fees, forks and outages are outside our control. Stablecoin services are not insured and may not be available in certain jurisdictions.",
        },
        {
          type: "p",
          children:
            "You are responsible for sending digital assets only to the wallet address and network we specify. Assets sent to a wrong address, a wrong network or an unsupported asset may be permanently lost.",
        },
      ],
    },
    {
      heading: "11. Cross-Border Payouts",
      blocks: [
        { type: "p", children: "Cross-border payouts are executed by licensed partners and may include:" },
        { type: "ul", items: ["bank transfers", "mobile money payouts", "wallet-to-wallet payouts", "stablecoin payouts"] },
        {
          type: "p",
          children:
            "Processing times vary by corridor, partner, compliance review and receiving institution. Exchange rates are quoted at the time of the transaction and may differ from rates published elsewhere. Intermediary and receiving institutions may apply their own charges. Payout rails may be unavailable on public holidays, during partner maintenance or where a corridor is suspended.",
        },
      ],
    },
    {
      heading: "12. Merchant Collections and Checkout",
      blocks: [
        { type: "p", children: "If you use ElementPay checkout or collection services:" },
        {
          type: "ul",
          items: [
            "settlement timing depends on the collection method and the partner involved",
            "reserves or rolling holds may be required",
            "you must provide documentation on your business and your customers when we ask",
            "prohibited business categories apply",
            "you are responsible for the goods and services you sell and for disputes with your customers",
            "you are responsible for reversals, chargebacks and dispute costs charged by a partner or payment network",
          ],
        },
        { type: "p", children: "We may delay or withhold settlement where we suspect fraud, where a partner requires it, or where a compliance review is open." },
      ],
    },
    {
      heading: "13. Fees and Limits",
      blocks: [
        { type: "p", children: "Fees may apply to:" },
        {
          type: "ul",
          items: ["collections", "foreign exchange conversion", "settlement", "stablecoin conversion", "cross-border and local payouts", "API usage", "account services"],
        },
        {
          type: "p",
          children:
            "Fees are set out in the ElementPay Fee Schedule, and are disclosed before you authorise a transaction. Fees are exclusive of applicable taxes unless stated otherwise. We may set transaction, daily and monthly limits based on risk, verification level, corridor or partner requirements, and we may change them on notice where the law and our partners allow.",
        },
      ],
    },
    {
      heading: "14. Taxes: Client Responsibility",
      blocks: [
        { type: "p", children: "You are solely responsible for determining, reporting and paying:" },
        {
          type: "ul",
          items: [
            "income, corporate and withholding taxes",
            "value added tax, excise duty and similar indirect taxes",
            "capital gains and digital asset taxes",
            "customs duties and other cross-border trade taxes",
            "any other tax arising from your use of the Platform",
          ],
        },
        {
          type: "p",
          children:
            "ElementPay does not calculate taxes for you, withhold or remit taxes on your behalf, or provide tax advice. Statements and transaction records we provide do not shift tax liability away from you. Where a tax authority requires information or reporting, you authorise ElementPay to comply.",
        },
      ],
    },
    {
      heading: "15. Security and Unauthorised Transactions",
      blocks: [
        { type: "p", children: "You must:" },
        {
          type: "ul",
          items: [
            "keep your login credentials, API keys and signing keys secure",
            "limit access to authorised personnel and remove access when a person leaves your business",
            "keep your contact and business information current, and tell us promptly of any change",
            "notify ElementPay immediately of any unauthorised activity or suspected compromise",
          ],
        },
        {
          type: "p",
          children:
            "You are responsible for all activity carried out with your credentials and API keys until you notify us and we have had a reasonable time to act. ElementPay may recover losses caused by your negligence, credential sharing or failure to secure your systems.",
        },
      ],
    },
    {
      heading: "16. Error Resolution",
      blocks: [
        {
          type: "p",
          children: (
            <>
              If you believe an error has occurred, contact ElementPay support at{" "}
              <a href="mailto:info@elementpay.net">info@elementpay.net</a> as soon as possible and provide the
              transaction reference and any documents we request. We will investigate promptly. Where an error
              involves a bank, mobile money operator or other partner, resolution depends on that partner&apos;s
              rules and timelines, and we will pass on your claim and keep you informed.
            </>
          ),
        },
      ],
    },
    {
      heading: "17. Data Protection and Privacy",
      blocks: [
        {
          type: "p",
          children:
            "We process personal data in line with the Kenya Data Protection Act, 2019 and other applicable data protection laws. We collect and use personal data to verify identity, run compliance checks, process transactions, prevent fraud and meet legal obligations. We share data with partners, service providers and authorities where this is needed for those purposes or required by law.",
        },
        {
          type: "p",
          children: (
            <>
              You confirm that you have a lawful basis, and where needed the consent, to give us personal data about
              your directors, owners, staff and customers. Our <Link href="/privacy-policy">Privacy Policy</Link> sets out
              how we handle personal data, your rights, and how to contact us about them.
            </>
          ),
        },
      ],
    },
    {
      heading: "18. Suspension or Termination",
      blocks: [
        { type: "p", children: "ElementPay may suspend or terminate your access, or hold or reject transactions, if:" },
        {
          type: "ul",
          items: [
            "required by law or by a court or regulator",
            "we detect suspicious or fraudulent activity",
            "verification cannot be completed or information proves false",
            "prohibited activity is detected",
            "a licensed partner requires it",
            "your activity creates operational, legal or reputational risk",
            "you breach these Terms",
          ],
        },
        {
          type: "p",
          children:
            "You may close your Account at any time once all obligations, pending transactions and fees are settled. Clauses that by their nature should survive termination, including taxes, limitation of liability, governing law and intellectual property, survive.",
        },
      ],
    },
    {
      heading: "19. Intellectual Property",
      blocks: [
        {
          type: "p",
          children:
            "All content, trademarks, designs, APIs, documentation and software on the Platform are owned by ElementPay or its licensors. We grant you a limited, revocable, non-exclusive, non-transferable licence to use the Platform for your own business purposes under these Terms. You may not copy, modify, distribute, sell, sublicense or reverse engineer any part of the Platform, or use the ElementPay name or marks without our written consent.",
        },
      ],
    },
    {
      heading: "20. Website Content, Third-Party Links and Disclaimers",
      blocks: [
        {
          type: "p",
          children:
            "Website content is provided for information only and is not financial, legal or tax advice. ElementPay does not guarantee that it is accurate, complete or current. Links to third-party websites are not an endorsement. ElementPay has no control over third-party content and is not responsible for it.",
        },
      ],
    },
    {
      heading: "21. No Warranties",
      blocks: [
        {
          type: "p",
          children:
            "THE PLATFORM IS PROVIDED “AS IS” AND “AS AVAILABLE”. TO THE MAXIMUM EXTENT PERMITTED BY LAW, ELEMENTPAY DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. ELEMENTPAY DOES NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT ANY CORRIDOR OR PAYOUT RAIL WILL BE AVAILABLE AT ANY GIVEN TIME.",
        },
      ],
    },
    {
      heading: "22. Limitation of Liability",
      blocks: [
        { type: "p", children: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, ELEMENTPAY IS NOT LIABLE FOR:" },
        {
          type: "ul",
          items: [
            "indirect, incidental, special or consequential damages",
            "loss of profits, revenue, data or business",
            "delays, outages or system failures",
            "acts, errors or omissions of licensed partners, banks, mobile money operators and blockchain networks",
            "inaccurate information provided by third parties or by you",
            "unauthorised access not caused by ElementPay's negligence",
            "losses from instructions you gave incorrectly",
          ],
        },
        {
          type: "p",
          children:
            "Where ElementPay is found liable despite the above, its total liability to you is limited to the fees you paid ElementPay in the three months before the event giving rise to the claim. Nothing in these Terms excludes liability that cannot be excluded by law.",
        },
      ],
    },
    {
      heading: "23. Governing Law and Dispute Resolution",
      blocks: [
        { type: "p", children: "These Terms are governed by the laws of the Republic of Kenya." },
        {
          type: "p",
          children:
            "The parties will first try to settle any dispute through good-faith negotiation for 30 days after written notice. If the dispute is not settled, it is referred to binding arbitration in Nairobi, Kenya, under the arbitration rules of the Nairobi Centre for International Arbitration, before a single arbitrator. The language of the arbitration is English. Either party may seek urgent interim relief from the courts of Kenya. To the extent the law permits, disputes are resolved individually and not as class or representative actions.",
        },
      ],
    },
    {
      heading: "24. Changes to These Terms",
      blocks: [
        {
          type: "p",
          children:
            "ElementPay may update these Terms to reflect regulatory changes, new features, partner requirements and business changes. Updates take effect when posted on the website, or on a later date stated in the update. For material changes we will notify Clients by email or through the dashboard. Continued use of the Platform after the effective date is acceptance of the updated Terms.",
        },
      ],
    },
    {
      heading: "25. Contact Information",
      blocks: [
        { type: "p", children: "ElementPay One Africa Place, 5th Floor, Waiyaki Way, Nairobi, Kenya" },
        {
          type: "p",
          children: (
            <>
              Email: <a href="mailto:info@elementpay.net">info@elementpay.net</a> &middot; Website:{" "}
              <a href="https://www.elementpay.net">elementpay.net</a>
            </>
          ),
        },
      ],
    },
  ],
};
