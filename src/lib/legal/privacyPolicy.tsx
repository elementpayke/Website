import type { LegalDoc } from "./types";

export const PRIVACY_POLICY: LegalDoc = {
  title: "ElementPay Privacy Agreement",
  eyebrow: "Last updated 26 October 2026",
  lede: "How ElementPay collects, uses, shares and protects personal data across elementpay.net, our APIs, Mboka and ElementPay Merchant.",
  sections: [
    {
      heading: "1. Introduction and scope",
      blocks: [
        {
          type: "p",
          children: (
            <>
              This Privacy Agreement explains how ElementPay collects, uses, shares and protects personal data when
              you use elementpay.net, our APIs, Mboka, ElementPay Merchant and any related service (the
              &quot;Services&quot;). Last updated: 26 October 2026.
            </>
          ),
        },
        {
          type: "p",
          children:
            "This Agreement applies to business customers and their authorised users, beneficiaries and payees, API integrators, prospects, and visitors to our website. By using the Services or accepting our Master Services Agreement, you confirm you have read this Agreement. Where a signed contract conflicts with this Agreement on data protection, the contract controls.",
        },
      ],
    },
    {
      heading: "2. Who we are and data controller details",
      blocks: [
        {
          type: "p",
          children:
            "ElementPay is the data controller for personal data processed through the Services. For payout and collection flows where a customer instructs us to move funds, we act as a processor for that customer's instruction data and as an independent controller for our own compliance, fraud and risk obligations.",
        },
        {
          type: "table",
          head: ["Item", "Detail"],
          rows: [
            ["Entity", "ElementPay"],
            ["Registered office", "AfricaWorks, Mpaka Rd, Nairobi CBD"],
            ["Postal address", "P.O. Box 419, 00800 Westlands"],
            ["Data protection registration", "[ODPC registration number]"],
            ["Privacy contact", "[privacy@elementpay.net]"],
          ],
        },
      ],
    },
    {
      heading: "3. Personal data we collect",
      blocks: [
        {
          type: "table",
          head: ["Category", "Examples", "Source"],
          rows: [
            [
              "Identity and KYB",
              "Name, date of birth, nationality, ID or passport details, company registration documents, directors, shareholders and ultimate beneficial owners",
              "You, registries, screening providers",
            ],
            ["Contact", "Email, phone, business address", "You"],
            ["Account and API", "Credentials, API key metadata, IP address, device and browser data, access logs", "You, your systems"],
            [
              "Transaction",
              "Order details, amounts, currency pairs, corridor, payer and beneficiary names, bank or mobile money account details, payment references, invoices and trade documents",
              "You, your counterparties, PSPs",
            ],
            ["Wallet and on-chain", "Wallet addresses, transaction hashes, stablecoin transfer history", "You, public blockchains"],
            ["Compliance", "Screening results, risk ratings, source of funds and source of wealth declarations", "Us, screening providers"],
            ["Communications", "Support tickets, emails, call notes", "You, us"],
            ["Usage", "Pages viewed, feature use, error logs", "Our systems, analytics tools"],
          ],
        },
        {
          type: "p",
          children:
            "We do not knowingly collect special categories of personal data. If a document you upload contains such data, we process it only to the extent needed to complete verification.",
        },
      ],
    },
    {
      heading: "4. How we use data and legal bases",
      blocks: [
        {
          type: "p",
          children:
            "We process personal data under the Kenya Data Protection Act, 2019 and, where applicable, the laws of the corridors we serve.",
        },
        {
          type: "table",
          head: ["Purpose", "Legal basis"],
          rows: [["Open and maintain your account; perform the MSA", "Contract"]],
        },
        {
          type: "p",
          children:
            "We do not sell personal data. We do not use personal data for automated decisions that produce legal effects on an individual without human review.",
        },
      ],
    },
    {
      heading: "5. KYC, KYB, AML and sanctions screening",
      blocks: [
        {
          type: "p",
          children:
            "We verify customers and counterparties before and during the relationship. This includes identity and beneficial ownership checks, sanctions and politically exposed person screening, adverse media review, and transaction monitoring against our AML/CFT, Sanctions and Anti-Bribery and Corruption policies.",
        },
        {
          type: "p",
          children:
            "We may decline, delay, reverse or report a transaction where a check fails or an obligation requires it. We may be prohibited from telling you that a report was made. Refusing to provide required verification data means we cannot provide the Services.",
        },
      ],
    },
    {
      heading: "6. Sharing with liquidity providers, PSPs, banks and other recipients",
      blocks: [
        {
          type: "p",
          children: "We share personal data only as needed to deliver the Services, meet legal duties, or protect our rights.",
        },
        {
          type: "table",
          head: ["Purpose", "Legal basis"],
          rows: [
            ["Route, execute and settle orders; confirm payouts and collections", "Contract"],
            ["KYC, KYB, AML/CFT, sanctions and fraud controls", "Legal obligation; legitimate interest"],
            ["Security monitoring, abuse prevention, audit", "Legitimate interest"],
            ["Support, service notices, product updates tied to your account", "Contract; legitimate interest"],
            ["Marketing to business contacts", "Consent or legitimate interest, with opt-out in every message"],
            ["Analytics and product improvement", "Legitimate interest; consent where cookies require it"],
          ],
        },
        {
          type: "table",
          head: ["Recipient", "Purpose"],
          rows: [["Liquidity providers and OTC desks", "Execute and settle orders routed by the Element Aggregator"]],
        },
        {
          type: "p",
          children:
            "Every vendor and partner that receives personal data from us is bound by a written agreement that limits use to the stated purpose and requires appropriate security. We share the minimum data each recipient needs to complete the specific order.",
        },
      ],
    },
    {
      heading: "7. Blockchain and stablecoin data",
      blocks: [
        {
          type: "p",
          children:
            "Settlement on Stellar and other networks uses public, distributed ledgers. Wallet addresses and transaction hashes written to a ledger are visible to anyone and cannot be altered or erased by us. We minimise the personal data linked to on-chain records and do not write names, ID data or invoice contents to any ledger.",
        },
        {
          type: "p",
          children:
            "Erasure and rectification rights apply to the data we hold off-chain. They cannot be applied to data already recorded on a public ledger.",
        },
      ],
    },
    {
      heading: "8. International transfers",
      blocks: [
        {
          type: "p",
          children:
            "Cross-border payments move personal data across borders by design. We transfer data outside Kenya to payout and collection partners in the destination corridor and to vendors hosted elsewhere. Before a transfer, we confirm that the recipient country provides adequate protection, that the recipient is bound by contractual safeguards, or that another basis under Part VI of the Data Protection Act applies. Transfers needed to perform a payment you instructed are made on the basis of that contract.",
        },
        {
          type: "table",
          head: ["Recipient", "Purpose"],
          rows: [
            ["Payment service providers, banks, mobile money operators", "Fiat collection and payout in the destination corridor"],
            ["KYC, KYB, sanctions and fraud screening vendors", "Verification and monitoring"],
            ["Cloud hosting, infrastructure, email and support vendors", "Operate and secure the Services"],
            ["Professional advisers, auditors, insurers", "Advice, audit and risk cover"],
            ["Regulators, courts, law enforcement, financial intelligence units", "Legal obligation or valid request"],
            ["Acquirers or investors in a corporate transaction", "Due diligence and transfer, under confidentiality"],
          ],
        },
      ],
    },
    {
      heading: "9. Retention",
      blocks: [
        {
          type: "p",
          children:
            "When a retention period ends, we delete or irreversibly anonymise the data. We may retain data longer where needed for a legal claim, regulatory inquiry or open investigation.",
        },
        {
          type: "table",
          head: ["Data", "Retention"],
          rows: [
            ["KYC, KYB and transaction records", "[7] years after the relationship ends or the transaction date, or longer where law requires"],
            ["Account and API logs", "[24] months"],
            ["Support communications", "[3] years after closure"],
            ["Marketing contacts", "Until you opt out or [24] months of inactivity"],
            ["Website analytics", "[14] months"],
          ],
        },
      ],
    },
    {
      heading: "10. Security",
      blocks: [
        {
          type: "p",
          children:
            "We protect personal data with encryption in transit and at rest, role-based access limited to staff who need it, multi-factor authentication on internal systems, API key scoping and rotation, signed-order controls for non-custodial flows, logging and monitoring, vendor due diligence, and staff confidentiality obligations.",
        },
        {
          type: "p",
          children:
            "No system is free of risk. If a breach is likely to harm your rights, we notify the Office of the Data Protection Commissioner within 72 hours of becoming aware, and notify affected individuals without undue delay.",
        },
      ],
    },
    {
      heading: "11. Your rights",
      blocks: [
        { type: "p", children: "Under the Data Protection Act, 2019 you have the right to:" },
        {
          type: "ul",
          items: [
            "be informed about how your data is used",
            "access the personal data we hold about you",
            "object to processing, including direct marketing",
            "correct inaccurate or incomplete data",
            "request deletion of data we no longer need or hold unlawfully",
            "request data portability where the law provides it",
            "withdraw consent at any time, without affecting earlier processing",
          ],
        },
        {
          type: "p",
          children:
            "Send requests to [privacy@elementpay.net]. We verify your identity, then respond within 30 days. Some rights are limited where we must keep records for AML/CFT, tax or other legal duties. If we cannot resolve a complaint, you may lodge it with the Office of the Data Protection Commissioner of Kenya.",
        },
      ],
    },
    {
      heading: "12. Cookies and analytics",
      blocks: [
        {
          type: "p",
          children:
            "We use strictly necessary cookies for sign-in and security, and optional analytics cookies to measure site and console use. Optional cookies load only after you accept them. You can change your choice in the cookie banner or in your browser settings. Blocking necessary cookies may break sign-in and checkout.",
        },
      ],
    },
    {
      heading: "13. Children, third-party sites, changes, contact",
      blocks: [
        {
          type: "p",
          children: (
            <>
              <strong>Children.</strong> The Services are for businesses and adults. We do not knowingly collect
              data from anyone under 18. If we learn we have, we delete it.
            </>
          ),
        },
        {
          type: "p",
          children: (
            <>
              <strong>Third-party sites.</strong> Links to partner or third-party sites are outside this Agreement.
              Read their privacy terms before you share data.
            </>
          ),
        },
        {
          type: "p",
          children: (
            <>
              <strong>Changes.</strong> We post updates on elementpay.net and notify account holders of material
              changes by email at least 14 days before they take effect. Continued use after that date means you
              accept the update.
            </>
          ),
        },
        {
          type: "p",
          children: (
            <>
              <strong>Contact.</strong> ElementPay, AfricaWorks, Mpaka Rd, Nairobi CBD; P.O. Box 419, 00800
              Westlands. Email: [privacy@elementpay.net].
            </>
          ),
        },
        {
          type: "p",
          children: (
            <>
              <strong>Governing law.</strong> The laws of Kenya govern this Agreement. Disputes go to the courts of
              Kenya.
            </>
          ),
        },
      ],
    },
  ],
};
