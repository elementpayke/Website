import Link from "next/link";
import type { LegalDoc } from "./types";

export const ELECTRONIC_CONSENT: LegalDoc = {
  title: "Electronic Communications Consent Agreement",
  eyebrow: "ElementPay · Version 1.0 · Effective 15th October 2026",
  lede: "How ElementPay delivers disclosures, notices and records to you electronically, and how to request paper copies.",
  sections: [
    {
      heading: "1. Agreement to Receive Electronic Communications",
      blocks: [
        {
          type: "p",
          children: (
            <>
              This Electronic Communications Consent Agreement (&quot;Agreement&quot;) is entered into between
              ElementPay (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), its liquidity providers and payment
              service partners (&quot;Partners&quot;), and the individual or entity accessing or using
              ElementPay&apos;s products and services (&quot;you&quot; or &quot;your&quot;).
            </>
          ),
        },
        {
          type: "p",
          children:
            "By using any ElementPay product or service, you agree that all communications related to your account or relationship with ElementPay (“Communications”) may be provided electronically. Communications include disclosures, agreements, notices, policies, fee schedules, order confirmations, statements, transaction records, compliance requests, updates, and any other information provided in connection with your account.",
        },
        {
          type: "p",
          children:
            "If you access or use ElementPay on behalf of a business or organization, you confirm that you have the authority to accept this Agreement on its behalf. Your consent remains effective until you revoke it under Section 9.",
        },
        {
          type: "p",
          children:
            "ElementPay delivers its services through digital channels and relies on electronic delivery to communicate important information. By consenting, you confirm that you can access, receive, and retain electronic Communications, and that you accept the use of electronic signatures and electronic records in connection with your ElementPay account.",
        },
        {
          type: "p",
          children:
            "If you do not consent to electronic delivery, you cannot open or maintain an account with ElementPay. If you withdraw your consent later, ElementPay may suspend or close your account as permitted by law.",
        },
      ],
    },
    {
      heading: "2. Methods of Electronic Delivery",
      blocks: [
        {
          type: "p",
          children:
            "Communications may be delivered to you by ElementPay, or by our Partners through ElementPay, through one or more of these channels:",
        },
        {
          type: "ul",
          items: [
            "The ElementPay website at www.elementpay.net",
            "The ElementPay dashboard and developer console",
            "Mboka and any hosted checkout or payment link",
            "Email sent to the address registered on your account",
            "SMS or messaging applications sent to the number registered on your account",
            "API responses and webhook notifications sent to the endpoints you configure",
          ],
        },
        {
          type: "p",
          children:
            "If a Communication is not delivered through one of these channels, we will tell you how to access it. Where applicable law requires a specific Communication to be delivered in paper form, we will deliver it in paper form regardless of this consent.",
        },
      ],
    },
    {
      heading: "3. When a Communication Is Delivered",
      blocks: [
        {
          type: "p",
          children:
            "A Communication is delivered when we send it to the email address or phone number on your account, when we post it to your dashboard, or when we transmit it to your configured webhook endpoint. You are responsible for monitoring these channels. A Communication is valid and effective on delivery, whether or not you open it.",
        },
      ],
    },
    {
      heading: "4. Technology Requirements",
      blocks: [
        { type: "p", children: "To access and store electronic Communications, you must have:" },
        {
          type: "ul",
          items: [
            "A computer, smartphone, or tablet with a supported operating system",
            "Reliable internet access",
            "A current web browser, such as Chrome, Firefox, Safari, or Edge",
            "Sufficient storage to retain records",
            "An active and valid email address",
            "Software that can open PDF documents",
            "For API clients, a working webhook endpoint if you elect to receive notifications that way",
          ],
        },
        {
          type: "p",
          children:
            "These requirements may change. If a change is material, we will notify you. We may ask you to confirm that you can open and retain electronic documents before you complete your consent.",
        },
      ],
    },
    {
      heading: "5. Keeping Your Contact Details Updated",
      blocks: [
        {
          type: "p",
          children:
            "You are responsible for keeping your contact information, including your email address, phone number, and webhook endpoints, accurate and current. ElementPay is not liable for missed Communications caused by outdated or incorrect details.",
        },
        {
          type: "p",
          children: (
            <>
              You can update your information in the account settings of your ElementPay dashboard, or by contacting
              us at the details in Section 13.
            </>
          ),
        },
      ],
    },
    {
      heading: "6. Requesting Paper Copies",
      blocks: [
        {
          type: "p",
          children:
            "You may request a paper copy of any Communication previously provided electronically by contacting us at the details in Section 13. You may also print copies yourself for your records. We may charge a reasonable fee for paper copies, which we will disclose before we send them.",
        },
      ],
    },
    {
      heading: "7. Electronic Signatures and Records",
      blocks: [
        {
          type: "p",
          children:
            "You agree that your electronic signature, including a click-to-accept action, a typed name, a one-time passcode confirmation, or an API-authenticated instruction, has the same legal effect as a handwritten signature. You agree that electronic records of your agreements, orders, and instructions are valid and enforceable, and that we may retain them in electronic form.",
        },
        {
          type: "p",
          children:
            "This Section applies to the extent permitted by the Kenya Information and Communications Act (Cap. 411A) and other applicable law.",
        },
      ],
    },
    {
      heading: "8. Legal Effect of Electronic Communications",
      blocks: [
        {
          type: "p",
          children:
            "All Communications provided electronically or in paper form are treated as legally valid and as provided in writing for all applicable legal and regulatory purposes.",
        },
      ],
    },
    {
      heading: "9. Revoking Electronic Consent",
      blocks: [
        {
          type: "p",
          children:
            "You may revoke your consent to electronic Communications at any time by written notice to the contact details in Section 13. If you revoke consent, ElementPay may be unable to continue offering account services. In that case, we will assist with account closure and deliver any remaining funds and required disclosures to you in paper form where applicable.",
        },
        {
          type: "p",
          children:
            "Revocation does not affect the validity of Communications delivered or agreements signed electronically before revocation takes effect.",
        },
      ],
    },
    {
      heading: "10. Privacy and Data Protection",
      blocks: [
        {
          type: "p",
          children: (
            <>
              We process the personal data used to deliver Communications in line with the Data Protection Act,
              2019 and our <Link href="/privacy-policy">Privacy Policy</Link>. We use your contact details only to operate
              your account, meet legal and regulatory obligations, and deliver the Communications described in this
              Agreement.
            </>
          ),
        },
      ],
    },
    {
      heading: "11. Changes to This Agreement",
      blocks: [
        {
          type: "p",
          children:
            "We may update this Agreement. We will notify you of material changes through the channels in Section 2. Continued use of ElementPay after the effective date of a change means you accept the updated Agreement.",
        },
      ],
    },
    {
      heading: "12. Customer Due Diligence Disclosure",
      blocks: [
        {
          type: "p",
          children:
            "Kenyan law, including the Proceeds of Crime and Anti-Money Laundering Act, 2009 and the Prevention of Terrorism Act, 2012, requires financial service providers and their partners to verify the identity of customers to help prevent money laundering and the financing of terrorism. Before opening an account, and from time to time afterward, you will be asked to provide identifying information about yourself or your business and about the individuals who own or control it.",
        },
        {
          type: "p",
          children:
            "This information may include your full name, residential or business address, date of birth, national ID or passport number, Kenya Revenue Authority PIN or other tax identification number, and other information reasonably required by ElementPay to complete verification.",
        },
        {
          type: "p",
          children:
            "We may also request supporting documents, such as a valid government-issued photo ID or passport. For business accounts, requested documents may include the certificate of incorporation, CR12 or equivalent company records, tax registration, operating licenses, and information on directors, shareholders, beneficial owners, authorised signatories, and controlling persons.",
        },
        {
          type: "p",
          children: "We may share this information with our Partners where required to provide the service or to meet legal obligations.",
        },
      ],
    },
    {
      heading: "13. Contact",
      blocks: [
        {
          type: "p",
          children: (
            <>
              ElementPay Registered office: AfricaWorks, Mpaka Rd, Nairobi CBD, Kenya
              <br />
              Postal address: P.O. Box 419, 00800 Westlands, Nairobi
              <br />
              Email: <a href="mailto:info@elementpay.net">info@elementpay.net</a>
              <br />
              Website: <a href="https://www.elementpay.net">www.elementpay.net</a>
            </>
          ),
        },
      ],
    },
    {
      heading: "14. Governing Law",
      blocks: [
        {
          type: "p",
          children:
            "This Agreement is governed by the laws of Kenya, regardless of where you are located or incorporated. It applies to all customers, including businesses outside Kenya. Where a mandatory law of your country requires a different form of electronic or paper delivery, that law applies to that extent only.",
        },
      ],
    },
  ],
};
