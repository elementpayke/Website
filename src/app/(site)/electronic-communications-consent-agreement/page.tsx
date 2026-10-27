import type { Metadata } from "next";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import LegalDocLayout from "@/components/legal/LegalDocLayout";
import { ELECTRONIC_CONSENT } from "@/lib/legal/electronicConsent";

const title = "Electronic Communications Consent Agreement";
const description =
  "How ElementPay delivers disclosures, notices and records to you electronically, and how to request paper copies.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/electronic-communications-consent-agreement" },
  openGraph: {
    title: `${title} | ElementPay`,
    description,
    url: "/electronic-communications-consent-agreement",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `${title} | ElementPay`, description },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <>
      <div style={{ position: "sticky", top: 0, zIndex: 30 }}>
        <EPNav active="Company" />
      </div>
      <LegalDocLayout doc={ELECTRONIC_CONSENT} updated="Last updated 15th October 2026." />
      <EPFooter />
    </>
  );
}
