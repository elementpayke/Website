import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import DesignJsonLd from "@/components/design/DesignJsonLd";
import StatusBoard from "@/components/status/StatusBoard";
import { designHead, designMetadata } from "@/lib/design/pages";

// Design: Status.dc.html.
export const metadata = designMetadata(designHead("/status"));

export default function StatusPage() {
  return (
    <>
      <DesignJsonLd url="/status" />
      <div style={{ position: "sticky", top: 0, zIndex: 30 }}>
        <EPNav active="Resources" />
      </div>
      <StatusBoard>
        <EPFooter />
      </StatusBoard>
    </>
  );
}
