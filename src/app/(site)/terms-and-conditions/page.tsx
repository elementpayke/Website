import type { Metadata } from "next";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import LegalDocLayout from "@/components/legal/LegalDocLayout";
import { TERMS_AND_CONDITIONS } from "@/lib/legal/termsAndConditions";

const title = "Terms and Conditions";
const description =
  "The binding agreement governing your use of the ElementPay website, dashboard, APIs, Mboka and related services.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: { title: `${title} | ElementPay`, description, url: "/terms-and-conditions", type: "website" },
  twitter: { card: "summary_large_image", title: `${title} | ElementPay`, description },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <>
      <div style={{ position: "sticky", top: 0, zIndex: 30 }}>
        <EPNav active="Company" />
      </div>
      <LegalDocLayout doc={TERMS_AND_CONDITIONS} updated="Last updated 26 October 2026." />
      <EPFooter />
    </>
  );
}
