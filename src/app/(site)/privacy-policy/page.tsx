import type { Metadata } from "next";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import LegalDocLayout from "@/components/legal/LegalDocLayout";
import { PRIVACY_POLICY } from "@/lib/legal/privacyPolicy";

const title = "Privacy Policy";
const description =
  "How ElementPay collects, uses, shares and protects personal data across elementpay.net, our APIs, Mboka and ElementPay Merchant.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: { title: `${title} | ElementPay`, description, url: "/privacy-policy", type: "website" },
  twitter: { card: "summary_large_image", title: `${title} | ElementPay`, description },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <>
      <div style={{ position: "sticky", top: 0, zIndex: 30 }}>
        <EPNav active="Company" />
      </div>
      <LegalDocLayout doc={PRIVACY_POLICY} updated="Last updated 26 October 2026." />
      <EPFooter />
    </>
  );
}
