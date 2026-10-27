import Link from "next/link";
import type { LegalDoc } from "./types";

export const SERVICE_AGREEMENT: LegalDoc = {
  title: "ElementPay Service Agreement",
  eyebrow: "Current as of 15th October, 2026",
  lede: "Terms for the ElementPay API, Mboka, Mboka Checkout and local-currency accounts.",
  intro: (
    <>
      This Service Agreement (the <strong>Agreement</strong>) governs the use of the ElementPay services by the
      business that accepts it (the <strong>Customer</strong>). <strong>ElementPay</strong> means the provider of
      the services described in this Agreement.
    </>
  ),
  sections: [
    {
      heading: "1. Definitions",
      blocks: [
        { type: "p", children: "In this Agreement:" },
        {
          type: "ul",
          items: [
            <>
              <strong>Account</strong> means a local-currency or foreign-currency account made available to the
              Customer through a Partner and shown in the Customer&apos;s Mboka dashboard.
            </>,
            <>
              <strong>API</strong> means the ElementPay application programming interface, sandbox, webhooks and
              related documentation.
            </>,
            <>
              <strong>API Credentials</strong> means the keys, tokens, secrets and signing keys issued to the
              Customer for the API.
            </>,
            <>
              <strong>Applicable Law</strong> means all laws, regulations, licence conditions and regulator
              directions that apply to a party or to a Transaction, including Kenyan anti-money laundering,
              counter-terrorism financing, data protection and payments law.
            </>,
            <>
              <strong>Beneficiary</strong> means the person that receives funds under an Order.
            </>,
            <>
              <strong>Business Day</strong> means a day other than a Saturday, Sunday or public holiday in Kenya.
            </>,
            <>
              <strong>Checkout</strong> means Mboka Checkout, the hosted, link-based payment page through which the
              Customer collects payment for its own orders.
            </>,
            <>
              <strong>Customer Data</strong> means data the Customer or its Beneficiaries provide to ElementPay,
              including KYB records, Order details and payer details.
            </>,
            <>
              <strong>Fee Schedule</strong> means the separate fee document ElementPay issues to the Customer, as
              updated under clause 10.
            </>,
            <>
              <strong>Mboka</strong> means ElementPay&apos;s business platform, including its dashboard, Accounts,
              payouts, collections and Checkout.
            </>,
            <>
              <strong>Order</strong> means an instruction to ElementPay to collect, convert, route or pay out funds,
              placed through the API or Mboka.
            </>,
            <>
              <strong>Order Form</strong> means the separate document ElementPay issues to the Customer, signed or
              accepted electronically, that lists the Services, Supported Corridors, limits and Settlement Assets
              the Customer may use.
            </>,
            <>
              <strong>Partner</strong> means a bank, payment service provider, mobile money operator, liquidity
              provider or other third party that ElementPay uses to deliver a Service.
            </>,
            <>
              <strong>Platform</strong> means the ElementPay aggregator, Mboka, Checkout and the API together.
            </>,
            <>
              <strong>Prohibited Activities</strong> means the activities listed in Schedule 1.
            </>,
            <>
              <strong>Quote</strong> means a price for an Order, including exchange rate and fees, issued through
              the Platform.
            </>,
            <>
              <strong>Sanctions</strong> means economic or financial sanctions or trade embargoes imposed by the
              United Nations, the European Union, the United Kingdom, the United States, Kenya or any other
              authority that applies to a party or to a Transaction.
            </>,
            <>
              <strong>Services</strong> means the services described in clause 3 and listed in the Order Form.
            </>,
            <>
              <strong>Settlement Asset</strong> means USDC, USDT or another stablecoin listed in the Order Form.
            </>,
            <>
              <strong>Supported Corridor</strong> means a sending and receiving country and currency pair listed in
              the Order Form.
            </>,
            <>
              <strong>Transaction</strong> means any collection, conversion, transfer or payout carried out under an
              Order.
            </>,
            <>
              <strong>Depeg Event</strong> means a Settlement Asset trading, or being redeemable, materially below
              its stated peg, as determined by ElementPay acting reasonably.
            </>,
          ],
        },
      ],
    },
    {
      heading: "2. Structure and Precedence",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "2.1",
              children:
                "This Agreement consists of the clauses below, the Schedules, the Order Form, the Fee Schedule and the API documentation.",
            },
            {
              n: "2.2",
              children:
                "If documents conflict, the Order Form governs on Services, Supported Corridors, limits and Settlement Assets. The Fee Schedule governs on fees. This Agreement governs on everything else. The API documentation governs only on technical integration.",
            },
            {
              n: "2.3",
              children:
                "ElementPay delivers the Fee Schedule to the Customer as a separate document. It is part of this Agreement from the date ElementPay delivers it. Fees are not stated in the body of this Agreement.",
            },
            {
              n: "2.4",
              children:
                "The Customer accepts this Agreement by signing it, by accepting it electronically, or by placing its first Order, whichever happens first.",
            },
          ],
        },
      ],
    },
    {
      heading: "3. Services",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "3.1",
              children: "ElementPay provides the following Services to the extent listed in the Order Form:",
            },
          ],
        },
        {
          type: "ul",
          items: [
            <>
              <strong>API access</strong> for creating Quotes and Orders, collecting and paying out funds, receiving
              status updates and webhooks, and retrieving reconciliation data, including a sandbox for testing.
            </>,
            <>
              <strong>Mboka</strong>, including the business dashboard, payouts, collections, reporting and user
              management.
            </>,
            <>
              <strong>Accounts</strong> in local and foreign currencies, such as KES and NGN, made available through
              Partners.
            </>,
            <>
              <strong>Checkout</strong>, for collecting payment from the Customer&apos;s own payers through hosted
              payment links.
            </>,
            <>
              <strong>Conversion</strong> between fiat currency and a Settlement Asset in support of an Order.
            </>,
            <>Any other service ElementPay lists in the Order Form.</>,
          ],
        },
        {
          type: "clauses",
          items: [
            {
              n: "3.2",
              children:
                "The Customer may use a Service or Supported Corridor only if the Order Form lists it as live. ElementPay may offer a service or corridor on a pilot basis. A pilot service is provided as is, with the limits and conditions stated in the Order Form.",
            },
            {
              n: "3.3",
              children:
                "ElementPay may add Services and Supported Corridors by updating the Order Form. It may remove a Service or Supported Corridor on 30 days' notice, or sooner where clause 4.3, clause 11 or Applicable Law requires.",
            },
            {
              n: "3.4",
              children:
                "The Order Form may set per-Transaction, daily and monthly limits. ElementPay may reduce a limit on notice where required by risk, compliance or Partner capacity.",
            },
            {
              n: "3.5",
              children:
                "This Agreement is non-exclusive. Unless the Order Form states a minimum volume, the Customer has no minimum volume commitment.",
            },
          ],
        },
      ],
    },
    {
      heading: "4. Role of ElementPay and Partners",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "4.1",
              children: (
                <>
                  <strong>Orchestration.</strong> ElementPay operates technology that routes Orders to Partners for
                  collection, conversion and payout. ElementPay may select, change or add Partners and routes at its
                  discretion, provided the Order Form&apos;s Supported Corridors stay available.
                </>
              ),
            },
            {
              n: "4.2",
              children: (
                <>
                  <strong>No custody.</strong> ElementPay does not hold Customer funds. It is not a bank and does
                  not take deposits. Funds in transit, and balances in an Account, are held by the relevant Partner
                  under that Partner&apos;s terms. Balances in an Account are not deposits with ElementPay and are
                  not covered by any deposit insurance scheme unless the Partner states otherwise in writing.
                </>
              ),
            },
            {
              n: "4.3",
              children: (
                <>
                  <strong>Licensed Partners.</strong> ElementPay provides the Services under arrangements with
                  licensed Partners. Each regulated activity is carried out by a Partner that holds the licence or
                  authorisation for it. ElementPay is not required to name a Partner to the Customer. The Customer
                  agrees to the Partner terms ElementPay makes available to it where a Partner requires flow-down
                  terms, and to provide any information a Partner requires to meet its legal obligations.
                </>
              ),
            },
            {
              n: "4.4",
              children: (
                <>
                  <strong>Customer as principal.</strong> The Customer acts for its own account and on its own
                  behalf. ElementPay is not the Customer&apos;s agent, adviser or fiduciary and gives no tax, legal
                  or investment advice.
                </>
              ),
            },
            {
              n: "4.5",
              children: (
                <>
                  <strong>Settlement Asset risk.</strong> The Customer accepts that a Settlement Asset may lose
                  value, lose liquidity, or be affected by network, issuer or regulatory events. On a Depeg Event, or
                  on a direction from a Partner or regulator, ElementPay may, without liability: (a) suspend Orders
                  that use the affected Settlement Asset; (b) remove the Settlement Asset from the Order Form; or (c)
                  continue to process Orders at the prevailing market rate.
                </>
              ),
            },
            {
              n: "4.6",
              children: (
                <>
                  <strong>Wrong destination.</strong> ElementPay is not liable for a Transaction sent to an
                  incorrect, incompatible or compromised wallet address, bank account or mobile money number that
                  the Customer or its Beneficiary supplied.
                </>
              ),
            },
            {
              n: "4.7",
              children: (
                <>
                  <strong>Partner failure.</strong> ElementPay is not liable for a late, failed or reversed
                  Transaction caused by a Partner, a payment rail, a mobile money operator, a bank or a blockchain
                  network. ElementPay will use reasonable efforts to help the Customer pursue recovery from the
                  party at fault.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      heading: "5. Onboarding and Eligibility",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "5.1",
              children: (
                <>
                  <strong>KYB.</strong> Before using any Service, the Customer must complete ElementPay&apos;s
                  know-your-business process. The Customer will provide certified incorporation documents, directors
                  and beneficial owners, source of funds and source of wealth, a description of its business and
                  counterparties, and expected volumes and corridors. ElementPay may request further documents at
                  any time.
                </>
              ),
            },
            {
              n: "5.2",
              children: (
                <>
                  <strong>Customer representations.</strong> The Customer represents and warrants on signing, and
                  each time it places an Order, that:
                </>
              ),
            },
          ],
        },
        {
          type: "ul",
          items: [
            "it is duly incorporated and has power and authority to enter into and perform this Agreement;",
            "it holds every licence, registration and approval its own business needs;",
            "neither it, nor any director, beneficial owner or Beneficiary, is the target of Sanctions;",
            "the information it has given ElementPay is complete and accurate; and",
            "it does not carry on any Prohibited Activity.",
          ],
        },
        {
          type: "clauses",
          items: [
            {
              n: "5.3",
              children: (
                <>
                  <strong>Acceptance.</strong> ElementPay and its Partners may accept, reject, limit or condition any
                  Customer or Order at their discretion. Where Applicable Law prohibits it, ElementPay will not
                  disclose the reason.
                </>
              ),
            },
            {
              n: "5.4",
              children: (
                <>
                  <strong>Updates and re-verification.</strong> The Customer will notify ElementPay within 5
                  Business Days of a change to its ownership, directors, business activity, licences or contact
                  details. The Customer will cooperate with periodic re-verification and answer information requests
                  within 5 Business Days, or sooner where a Partner or regulator sets a shorter deadline.
                </>
              ),
            },
            {
              n: "5.5",
              children: (
                <>
                  <strong>Authorised users.</strong> The Customer will name an administrator for Mboka and is
                  responsible for every user the administrator adds. ElementPay may treat any instruction made with
                  valid API Credentials or from a Mboka user login as an instruction of the Customer.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      heading: "6. Accounts and Use of the Services",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "6.1",
              children:
                "An Account is subject to the onboarding requirements of the Partner that provides it. ElementPay does not guarantee that a Partner will open or keep an Account.",
            },
            {
              n: "6.2",
              children:
                "The Customer will use the Services for its own business only. The Customer will not offer money transmission, remittance, digital asset exchange or custody services to third parties through the Services, and will not use an Account to hold or move third-party funds, unless the Order Form expressly permits it and ElementPay has completed additional due diligence on the Customer's own clients.",
            },
            {
              n: "6.3",
              children:
                "A Partner may close or restrict a dormant or inactive Account. ElementPay will give the Customer notice where the Partner allows it.",
            },
            {
              n: "6.4",
              children: (
                <>
                  <strong>Checkout.</strong> When the Customer uses Checkout, the Customer is solely responsible for
                  its goods and services, its contract with its payers, its refunds to payers, and its compliance
                  with consumer protection law. ElementPay is not a party to the contract between the Customer and
                  its payers. The Customer will describe itself and its goods accurately on the Checkout page.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      heading: "7. Orders and Quotes",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "7.1",
              children: "The Customer places Orders through the API or Mboka in the form ElementPay requires.",
            },
            {
              n: "7.2",
              children: (
                <>
                  <strong>Quotes.</strong> A Quote states the amounts, exchange rate, fees and expiry time. A Quote
                  is binding on ElementPay and the Customer if the Customer accepts it before it expires and funds
                  the Order as required. After expiry, the Customer must request a new Quote.
                </>
              ),
            },
            {
              n: "7.3",
              children: (
                <>
                  <strong>Order details.</strong> The Customer will give complete and accurate Beneficiary details,
                  including name, account, wallet or mobile money number, amount, currency and purpose of payment.
                  Where ElementPay asks, the Customer will also give the underlying trade documentation, such as the
                  commercial invoice, purchase order, contract or bill of lading, within 2 Business Days.
                </>
              ),
            },
            {
              n: "7.4",
              children: (
                <>
                  <strong>Funding.</strong> ElementPay executes an Order only after cleared funds arrive in the
                  currency and amount the Order states. If funding is short, late or from a party other than the
                  Customer, ElementPay may re-quote, reject, cancel or return the funds.
                </>
              ),
            },
            {
              n: "7.5",
              children: (
                <>
                  <strong>Irrevocability.</strong> An Order cannot be cancelled once ElementPay or a Partner has
                  executed it or released a payout. On request, ElementPay will use reasonable efforts to recall a
                  Transaction, without any guarantee of recovery.
                </>
              ),
            },
            {
              n: "7.6",
              children: (
                <>
                  <strong>Returns.</strong> If a Transaction cannot be delivered, ElementPay will return the funds
                  net of fees and Partner costs. A return may settle at a rate different from the Quote, and the
                  Customer bears the exchange rate difference.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      heading: "8. Settlement and Payout",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "8.1",
              children: (
                <>
                  <strong>Timing.</strong> Settlement times shown in the Platform are estimates. Actual timing
                  depends on Partners, local payment rails, bank cut-off times, mobile money operator availability
                  and blockchain confirmation. ElementPay does not guarantee a settlement time unless the Order Form
                  states a service level.
                </>
              ),
            },
            {
              n: "8.2",
              children: (
                <>
                  <strong>Net amounts.</strong> Amounts payable to the Customer or a Beneficiary are net of fees,
                  Partner charges and any tax that Applicable Law requires ElementPay or a Partner to withhold.
                </>
              ),
            },
            {
              n: "8.3",
              children: (
                <>
                  <strong>Finality of on-chain transfers.</strong> A Settlement Asset transfer is final once the
                  relevant network confirms it. ElementPay cannot reverse it.
                </>
              ),
            },
            {
              n: "8.4",
              children: (
                <>
                  <strong>Reconciliation.</strong> ElementPay makes Transaction records and reconciliation data
                  available through the API and Mboka. The Customer will review them and report any discrepancy
                  under clause 13.
                </>
              ),
            },
            {
              n: "8.5",
              children: (
                <>
                  <strong>Set-off.</strong> ElementPay may set off any amount the Customer owes it against any
                  amount ElementPay owes the Customer under this Agreement.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      heading: "9. API Access and Security",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "9.1",
              children: (
                <>
                  <strong>Licence.</strong> ElementPay grants the Customer a non-exclusive, non-transferable,
                  non-sublicensable, revocable licence to use the API for its own business during the Term.
                </>
              ),
            },
            {
              n: "9.2",
              children: (
                <>
                  <strong>API Credentials.</strong> The Customer will keep API Credentials secret and secure, will
                  not share them with anyone not authorised to use them, and will revoke and replace them
                  immediately if it suspects compromise. The Customer will notify ElementPay within 24 hours of a
                  suspected compromise. The Customer is responsible for every action taken with its API Credentials,
                  including through a third-party integration it authorises.
                </>
              ),
            },
            {
              n: "9.3",
              children: (
                <>
                  <strong>Signing and verification.</strong> The Customer will implement the request signing and
                  webhook signature verification described in the API documentation.
                </>
              ),
            },
            {
              n: "9.4",
              children: (
                <>
                  <strong>Restrictions.</strong> The Customer will not: (a) reverse engineer or attempt to extract
                  source code from the Platform; (b) interfere with or disrupt the Platform or exceed documented
                  rate limits; (c) use the API to build a competing aggregator or routing service; (d) resell or
                  sublicense API access; or (e) introduce malware or other harmful code.
                </>
              ),
            },
            {
              n: "9.5",
              children: (
                <>
                  <strong>Sandbox.</strong> The sandbox is for testing with test data only. It moves no real funds
                  and carries no service level.
                </>
              ),
            },
            {
              n: "9.6",
              children: (
                <>
                  <strong>API changes.</strong> ElementPay may update the API. It will give 60 days&apos; notice of
                  a change that breaks existing integrations, except where a security risk or Applicable Law
                  requires a faster change.
                </>
              ),
            },
            {
              n: "9.7",
              children: (
                <>
                  <strong>Security incidents.</strong> Each party will notify the other without undue delay, and
                  within 48 hours, after becoming aware of a security incident that affects the Services or Customer
                  Data. The Customer is responsible for the security of its own systems.
                </>
              ),
            },
            {
              n: "9.8",
              children: (
                <>
                  <strong>Suspension of credentials.</strong> ElementPay may suspend, limit or revoke API
                  Credentials, or API access, where it reasonably suspects a security, fraud or compliance risk.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      heading: "10. Fees",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "10.1",
              children:
                "The Customer will pay the fees in the Fee Schedule. ElementPay delivers the Fee Schedule separately from this Agreement, and the Fee Schedule is not restated here.",
            },
            {
              n: "10.2",
              children:
                "Each Quote shows the fees and exchange rate that apply to that Order before the Customer accepts it. The exchange rate may include a margin described in the Fee Schedule.",
            },
            {
              n: "10.3",
              children: (
                <>
                  <strong>Changes.</strong> ElementPay may update the Fee Schedule on 30 days&apos; written notice.
                  An update does not change a Quote the Customer has already accepted. If the Customer objects to an
                  update, it may terminate this Agreement under clause 20.3 before the update takes effect.
                  Otherwise the updated Fee Schedule applies from its effective date.
                </>
              ),
            },
            {
              n: "10.4",
              children: (
                <>
                  <strong>Collection.</strong> ElementPay may deduct fees from Transaction proceeds. Fees it does
                  not deduct are payable within 14 days of invoice. Overdue amounts bear interest at [1]% per month
                  until paid.
                </>
              ),
            },
            {
              n: "10.5",
              children: (
                <>
                  <strong>Taxes.</strong> Fees exclude VAT and other taxes. The Customer will pay all taxes that
                  apply to its use of the Services. If Applicable Law requires the Customer to withhold tax from a
                  payment to ElementPay, the Customer will increase the payment so that ElementPay receives the
                  amount it would have received without the withholding.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      heading: "11. Compliance, Sanctions and Monitoring",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "11.1",
              children: (
                <>
                  <strong>Programmes.</strong> ElementPay and its Partners maintain anti-money laundering,
                  counter-terrorism financing, sanctions and anti-bribery controls. The Customer will maintain
                  controls of its own that fit the size and risk of its business.
                </>
              ),
            },
            {
              n: "11.2",
              children: (
                <>
                  <strong>Screening and monitoring.</strong> ElementPay and its Partners may screen the Customer,
                  its directors, beneficial owners, payers, Beneficiaries and counterparties against Sanctions lists
                  and adverse media. They may monitor Transactions, including with blockchain analytics, and apply
                  risk-based controls to Transactions that involve high-risk jurisdictions or unusual patterns.
                </>
              ),
            },
            {
              n: "11.3",
              children: (
                <>
                  <strong>Reporting.</strong> ElementPay and its Partners may report to the Financial Reporting
                  Centre, the Central Bank of Kenya, the Capital Markets Authority, law enforcement and any other
                  authority that Applicable Law names. Where Applicable Law prohibits disclosure, they will not tell
                  the Customer that a report was made.
                </>
              ),
            },
            {
              n: "11.4",
              children: (
                <>
                  <strong>Cooperation.</strong> The Customer will give ElementPay, on request, the information and
                  documents it needs on source of funds, purpose of payment, the underlying trade, and
                  counterparties. The Customer will answer within the time clause 5.4 sets.
                </>
              ),
            },
            {
              n: "11.5",
              children: (
                <>
                  <strong>Transfer information.</strong> For a transfer of a Settlement Asset, the Customer will
                  provide the originator and Beneficiary information that Applicable Law requires to travel with the
                  transfer.
                </>
              ),
            },
            {
              n: "11.6",
              children: (
                <>
                  <strong>Holds and blocks.</strong> ElementPay may block, freeze, delay, reject, return or reverse
                  a Transaction, or restrict an Account or API access, where: (a) Applicable Law, Sanctions or a
                  regulator requires it; (b) a Partner requires it; or (c) ElementPay reasonably suspects fraud,
                  financial crime, a Prohibited Activity or a breach of this Agreement. ElementPay may act without
                  prior notice where notice would breach Applicable Law or prejudice an investigation.
                </>
              ),
            },
            {
              n: "11.7",
              children: (
                <>
                  <strong>Bribery.</strong> Neither party will offer, give, request or accept a bribe or improper
                  payment in connection with this Agreement.
                </>
              ),
            },
            {
              n: "11.8",
              children: (
                <>
                  <strong>Records.</strong> ElementPay will keep records of the Customer&apos;s identification,
                  Transactions and compliance checks for at least the period Applicable Law requires, including
                  after this Agreement ends.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      heading: "12. Prohibited Use",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "12.1",
              children:
                "The Customer will not use the Services, and will not allow anyone else to use them, for a Prohibited Activity.",
            },
            {
              n: "12.2",
              children:
                "ElementPay may update Schedule 1 on 30 days' notice, or immediately where Applicable Law, a Partner or a regulator requires it.",
            },
            {
              n: "12.3",
              children: "The Customer is responsible for its own clients, payers and Beneficiaries complying with this clause 12.",
            },
            {
              n: "12.4",
              children:
                "The Customer will notify ElementPay immediately on becoming aware of a Prohibited Activity or a breach of clause 11 or this clause 12 connected with the Services.",
            },
            {
              n: "12.5",
              children:
                "A breach of this clause 12 entitles ElementPay to suspend the Services at once under clause 21 and to terminate this Agreement under clause 20.4.",
            },
          ],
        },
      ],
    },
    {
      heading: "13. Errors, Refunds and Disputes",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "13.1",
              children: (
                <>
                  <strong>Reporting.</strong> The Customer will report an unauthorised or incorrect Transaction to
                  ElementPay without delay, and in any case within 30 days after the Transaction appears in the
                  Customer&apos;s Mboka account or API data. After 30 days the Transaction is treated as accepted,
                  except where the claim is for fraud or for an error made by ElementPay.
                </>
              ),
            },
            {
              n: "13.2",
              children: (
                <>
                  <strong>Investigation.</strong> ElementPay will acknowledge a report within 2 Business Days and
                  respond on its findings within 10 Business Days of receiving all the information it needs. A
                  Partner investigation may take longer.
                </>
              ),
            },
            {
              n: "13.3",
              children: (
                <>
                  <strong>ElementPay errors.</strong> If ElementPay makes an error, it will correct it and, where
                  the error causes loss, its liability is subject to clause 18.
                </>
              ),
            },
            {
              n: "13.4",
              children: (
                <>
                  <strong>Customer errors.</strong> If the Customer gives wrong Beneficiary or payment details,
                  ElementPay will help to recall the Transaction at the Customer&apos;s cost, without guaranteeing
                  recovery.
                </>
              ),
            },
            {
              n: "13.5",
              children: (
                <>
                  <strong>Checkout refunds.</strong> The Customer is responsible for refunds to its payers. It may
                  start a refund through Mboka, subject to available funds and Partner support. A refund may settle
                  at a different exchange rate from the original payment.
                </>
              ),
            },
            {
              n: "13.6",
              children: (
                <>
                  <strong>Reversals.</strong> The Customer bears any reversal, recall or return that a payer&apos;s
                  bank, a mobile money operator or another payment institution initiates. ElementPay may debit or
                  set off the amount under clause 8.5.
                </>
              ),
            },
            {
              n: "13.7",
              children: (
                <>
                  <strong>Third-party disputes.</strong> A dispute between the Customer and its payers,
                  Beneficiaries or other counterparties is the Customer&apos;s to resolve.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      heading: "14. Data Protection",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "14.1",
              children:
                "Each party will comply with the Data Protection Act, 2019 of Kenya and any other data protection law that applies to it.",
            },
            {
              n: "14.2",
              children: (
                <>
                  <strong>Roles.</strong> For personal data of the Customer&apos;s payers and Beneficiaries that
                  ElementPay processes to deliver the Services, the Customer is the data controller and ElementPay
                  is the data processor and will process the data only on the Customer&apos;s documented
                  instructions. For KYB, anti-money laundering, fraud prevention and legal compliance, ElementPay
                  acts as an independent data controller.
                </>
              ),
            },
            {
              n: "14.3",
              children: (
                <>
                  <strong>Customer warranty.</strong> The Customer warrants that it has a lawful basis and has given
                  every notice needed to disclose personal data to ElementPay and its Partners, including for
                  transfers outside Kenya.
                </>
              ),
            },
            {
              n: "14.4",
              children: (
                <>
                  <strong>Sharing.</strong> ElementPay may share Customer Data with Partners, KYC and sanctions
                  screening providers, blockchain analytics providers, auditors, advisers and authorities, to the
                  extent needed to deliver the Services, meet Applicable Law and manage risk.
                </>
              ),
            },
            {
              n: "14.5",
              children: (
                <>
                  <strong>Transfers.</strong> ElementPay may transfer Customer Data to countries where its Partners
                  operate, with the safeguards that Applicable Law requires.
                </>
              ),
            },
            {
              n: "14.6",
              children: (
                <>
                  <strong>Security.</strong> ElementPay will keep appropriate technical and organisational measures
                  to protect Customer Data, and will notify the Customer of a personal data breach under clause 9.7.
                </>
              ),
            },
            {
              n: "14.7",
              children: (
                <>
                  <strong>Retention.</strong> ElementPay will keep personal data only as long as it needs it for the
                  Services or as Applicable Law requires. ElementPay&apos;s privacy policy, published at{" "}
                  <Link href="/privacy-policy">elementpay.net</Link>, applies to its own use of personal data as a
                  controller.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      heading: "15. Confidentiality",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "15.1",
              children: (
                <>
                  <strong>Confidential Information</strong> means non-public information that one party gives the
                  other in connection with this Agreement and that is marked confidential or that a reasonable
                  person would treat as confidential. It includes API Credentials, the API documentation, the Fee
                  Schedule, Partner arrangements and pricing.
                </>
              ),
            },
            {
              n: "15.2",
              children:
                "The receiving party will use Confidential Information only to perform or enforce this Agreement, will protect it with at least reasonable care, and will disclose it only to its personnel, advisers and, in ElementPay's case, Partners, who need to know it and who are bound by confidentiality duties.",
            },
            {
              n: "15.3",
              children:
                "This clause does not apply to information that is public without breach, was lawfully known to the receiving party, is independently developed, or is lawfully received from a third party. A party may disclose Confidential Information where Applicable Law, a court or a regulator requires it, after giving the other party notice where the law allows.",
            },
            {
              n: "15.4",
              children: "This clause continues for 5 years after this Agreement ends.",
            },
          ],
        },
      ],
    },
    {
      heading: "16. Availability, Support and Intellectual Property",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "16.1",
              children: (
                <>
                  <strong>Availability.</strong> ElementPay will use reasonable efforts to keep the Platform
                  available at all times. Planned maintenance and events outside ElementPay&apos;s control are
                  excluded. ElementPay gives no uptime commitment unless the Order Form states one.
                </>
              ),
            },
            {
              n: "16.2",
              children: (
                <>
                  <strong>Support.</strong> The Customer can contact ElementPay support at{" "}
                  <a href="mailto:info@elementpay.net">info@elementpay.net</a> during Business Days, [8:00 to 17:00]
                  East Africa Time.
                </>
              ),
            },
            {
              n: "16.3",
              children: (
                <>
                  <strong>Ownership.</strong> ElementPay and its licensors own the Platform, the API, the
                  documentation and the ElementPay marks. The Customer owns Customer Data and grants ElementPay a
                  licence to use it to provide the Services and to meet Applicable Law.
                </>
              ),
            },
            {
              n: "16.4",
              children: (
                <>
                  <strong>Marks.</strong> Neither party will use the other&apos;s name or marks in marketing without
                  the other&apos;s written consent.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      heading: "17. Warranties and Disclaimers",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "17.1",
              children:
                "Each party warrants that it has authority to enter into this Agreement and that doing so does not breach any other agreement binding on it.",
            },
            {
              n: "17.2",
              children: "ElementPay will provide the Services with reasonable skill and care.",
            },
            {
              n: "17.3",
              children:
                "Except as this Agreement states, ElementPay provides the Services as they are and as available. ElementPay does not warrant that the Services will be uninterrupted or error free, that any settlement time will be met, that a Settlement Asset will hold its value, that any Partner will perform, or that regulators will treat a Settlement Asset or a Service in any particular way. Where Applicable Law allows, ElementPay excludes all implied warranties and conditions.",
            },
          ],
        },
      ],
    },
    {
      heading: "18. Limitation of Liability",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "18.1",
              children:
                "Nothing in this Agreement limits liability for fraud, death or personal injury, or any liability that Applicable Law does not allow a party to limit.",
            },
            {
              n: "18.2",
              children:
                "To the extent Applicable Law allows, ElementPay is not liable for loss that arises from: (a) the Customer's breach of this Agreement or Applicable Law; (b) a hold, block, freeze or return under clause 11.6; (c) a Partner failure under clause 4.7; (d) a blockchain or network failure; (e) a change in value of a Settlement Asset, or a Depeg Event; (f) misuse or compromise of API Credentials; (g) an event under clause 22.4; or (h) any indirect or consequential loss, or any loss of profit, revenue, business or goodwill, whether or not foreseeable.",
            },
            {
              n: "18.3",
              children: (
                <>
                  <strong>Cap.</strong> ElementPay&apos;s total liability to the Customer under or in connection
                  with this Agreement, in any 12-month period, will not exceed the greater of (a) the fees the
                  Customer paid ElementPay in the 12 months before the event that first gave rise to the claim and
                  (b) [USD 10,000].
                </>
              ),
            },
            {
              n: "18.4",
              children: "The cap in clause 18.3 does not apply to the Customer's obligation to pay fees or to its indemnity under clause 19.1.",
            },
          ],
        },
      ],
    },
    {
      heading: "19. Indemnity",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "19.1",
              children:
                "The Customer will indemnify ElementPay, its affiliates, officers, employees and Partners against all losses, liabilities, claims, fines and reasonable legal costs that arise from: (a) the Customer's breach of this Agreement or Applicable Law; (b) a Prohibited Activity; (c) misuse of the Customer's API Credentials; (d) inaccurate information the Customer or its Beneficiaries supplied; or (e) a claim by a payer, Beneficiary or other third party about the Customer's goods, services or Orders.",
            },
            {
              n: "19.2",
              children:
                "ElementPay will indemnify the Customer against a third-party claim that the Platform, used as this Agreement permits, infringes that third party's intellectual property rights.",
            },
            {
              n: "19.3",
              children:
                "The indemnified party will notify the other promptly of a claim, let the other party control the defence and settlement, and give reasonable help at the indemnifying party's cost. The indemnifying party will not settle a claim in a way that admits fault for the indemnified party without its consent.",
            },
          ],
        },
      ],
    },
    {
      heading: "20. Term and Termination",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "20.1",
              children: (
                <>
                  <strong>Term.</strong> This Agreement starts on the date the Customer accepts it under clause 2.4
                  and continues until terminated under this clause 20 (the <strong>Term</strong>).
                </>
              ),
            },
            {
              n: "20.2",
              children: (
                <>
                  <strong>Convenience.</strong> Either party may terminate this Agreement on 30 days&apos; written
                  notice.
                </>
              ),
            },
            {
              n: "20.3",
              children: (
                <>
                  <strong>Fee update.</strong> The Customer may terminate by written notice under clause 10.3.
                  Termination takes effect on the date the updated Fee Schedule would have taken effect.
                </>
              ),
            },
            {
              n: "20.4",
              children: (
                <>
                  <strong>Cause.</strong> Either party may terminate this Agreement immediately by written notice if
                  the other party: (a) commits a material breach that it does not remedy within 10 Business Days of
                  notice; or (b) becomes insolvent, enters liquidation or administration, or ceases business.
                  ElementPay may also terminate immediately if the Customer breaches clause 5, 11 or 12, if a
                  Partner or regulator requires it, or if ElementPay loses Partner coverage for the Services the
                  Customer uses.
                </>
              ),
            },
            {
              n: "20.5",
              children: (
                <>
                  <strong>Effect.</strong> On termination: (a) API access and Checkout links end; (b) ElementPay
                  will complete or return Orders in progress under this Agreement; (c) the Customer will pay all
                  fees accrued; (d) a Partner may close the Customer&apos;s Accounts under its own terms; (e) the
                  Customer will download its Transaction data within 30 days; and (f) clauses 7.5, 8, 10, 11.8, 13 to
                  15, 18, 19, 20.5, 22 and 23 continue in force.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      heading: "21. Suspension",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "21.1",
              children:
                "ElementPay may suspend all or part of the Services, or any Account, immediately where: (a) the Customer breaches this Agreement; (b) Applicable Law, a regulator or a Partner requires it; (c) ElementPay reasonably suspects fraud, a security risk or a Prohibited Activity; (d) a Depeg Event occurs or ElementPay loses Partner coverage for a Service; (e) the Customer has not completed KYB or re-verification; or (f) fees remain overdue 5 Business Days after notice.",
            },
            {
              n: "21.2",
              children:
                "ElementPay will tell the Customer of a suspension as soon as reasonably practicable, unless Applicable Law prohibits it, and will lift the suspension when the cause is resolved.",
            },
            {
              n: "21.3",
              children: "A suspension does not release the Customer from its obligations, and clause 18 applies to ElementPay's liability for it.",
            },
          ],
        },
      ],
    },
    {
      heading: "22. Notices and General",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "22.1",
              children: (
                <>
                  <strong>Notices.</strong> Notices under this Agreement must be in writing. A notice to ElementPay
                  goes to <a href="mailto:info@elementpay.net">info@elementpay.net</a>, with a copy to the business
                  address published on elementpay.net. A notice to the Customer goes to the email address in the
                  Order Form. An email notice takes effect when sent on a Business Day before 17:00 East Africa
                  Time, and otherwise on the next Business Day. ElementPay may send operational notices through
                  Mboka.
                </>
              ),
            },
            {
              n: "22.2",
              children: (
                <>
                  <strong>Amendments.</strong> This Agreement may be amended only in a document that both parties
                  sign or accept electronically. The exceptions are the updates that clauses 3.3, 9.6, 10.3 and 12.2
                  allow ElementPay to make on the notice they state.
                </>
              ),
            },
            {
              n: "22.3",
              children: (
                <>
                  <strong>Assignment.</strong> The Customer may not assign or transfer this Agreement without
                  ElementPay&apos;s written consent. ElementPay may assign it to an affiliate or to a successor to
                  its business on notice to the Customer.
                </>
              ),
            },
            {
              n: "22.4",
              children: (
                <>
                  <strong>Force majeure.</strong> Neither party is liable for a failure or delay caused by an event
                  beyond its reasonable control, including natural disaster, war, strike, power or internet failure,
                  a Partner or payment rail outage, blockchain failure, a change in law, or regulator action. The
                  affected party will notify the other and take reasonable steps to limit the effect.
                </>
              ),
            },
            {
              n: "22.5",
              children: (
                <>
                  <strong>General.</strong> This Agreement is the entire agreement between the parties on its
                  subject and replaces all earlier agreements and understandings on it. If a provision is
                  unenforceable, the rest continues. A failure to enforce a right is not a waiver of it. The parties
                  are independent contractors and nothing in this Agreement creates a partnership or agency. Only
                  the parties may enforce this Agreement, except that ElementPay&apos;s affiliates and Partners may
                  enforce clauses 18 and 19. The parties may sign in counterparts and electronically.
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      heading: "23. Governing Law and Disputes",
      blocks: [
        {
          type: "clauses",
          items: [
            {
              n: "23.1",
              children: "This Agreement and any dispute arising from it are governed by the laws of Kenya.",
            },
            {
              n: "23.2",
              children:
                "The parties will first try to resolve a dispute through senior representatives for 15 Business Days after one party gives written notice of it.",
            },
            {
              n: "23.3",
              children:
                "A dispute not resolved under clause 23.2 will be finally settled by arbitration administered by the Nairobi Centre for International Arbitration under its rules. The seat is Nairobi, the language is English, and there will be one arbitrator.",
            },
            {
              n: "23.4",
              children: "Either party may ask the courts of Kenya for urgent interim relief, and for enforcement of an arbitral award.",
            },
          ],
        },
      ],
    },
    {
      heading: "Schedule 1: Prohibited Activities",
      blocks: [
        {
          type: "p",
          children: (
            <>
              <strong>Part A. Prohibited.</strong> The Customer will not use the Services for, or for anyone engaged
              in:
            </>
          ),
        },
        {
          type: "ul",
          items: [
            "unlawful or abusive activity, fraud, or identity misuse;",
            "money laundering, terrorist financing or proliferation financing;",
            "dealing with a person, entity or jurisdiction that is the target of Sanctions, or evading Sanctions;",
            "trade-based money laundering, including over-invoicing, under-invoicing, multiple invoicing, phantom shipments and falsified trade documentation;",
            "unlicensed money transmission, remittance, currency exchange or digital asset exchange or custody services provided to third parties;",
            "cryptocurrency mixers, tumblers and other tools built to hide the source of funds;",
            "Ponzi and pyramid schemes, unlicensed investment schemes and multi-level marketing;",
            "unlawful gambling and unlawful prediction markets;",
            "narcotics, drug paraphernalia and substances designed to mimic illegal drugs;",
            "weapons, munitions and dual-use goods that need an export licence the Customer does not hold;",
            "adult content and services;",
            "counterfeit, stolen or unauthorised goods, and intellectual property infringement;",
            "human trafficking, illegal wildlife trade and other unlawful trade; and",
            "any activity ElementPay or a Partner reasonably believes carries elevated financial, legal or reputational risk, or breaches a Partner's rules or a payment network's rules.",
          ],
        },
        {
          type: "p",
          children: (
            <>
              <strong>Part B. Prior written approval needed.</strong> The Customer will not use the Services for the
              following unless ElementPay has approved it in writing after due diligence: virtual asset service
              providers and money services businesses; precious metals and stones; charities and non-profit
              organisations; businesses owned or controlled by politically exposed persons; and cash-intensive
              businesses.
            </>
          ),
        },
      ],
    },
    {
      heading: "Schedule 2: Fee Schedule",
      blocks: [
        {
          type: "p",
          children:
            "ElementPay delivers the Fee Schedule to the Customer as a separate PDF before the Customer accepts this Agreement. The Customer confirms receipt of the Fee Schedule by accepting this Agreement.",
        },
      ],
    },
  ],
};
