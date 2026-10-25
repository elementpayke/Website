import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import Newsletter from "@/components/blog/Newsletter";

export default function BlogLayout({ children }: LayoutProps<"/blog">) {
  return (
    <>
      <div style={{ position: "sticky", top: 0, zIndex: 30 }}>
        <EPNav active="Resources" />
      </div>
      {children}
      <Newsletter />
      <EPFooter />
    </>
  );
}
