import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import Newsletter from "@/components/blog/Newsletter";

export default function BlogLayout({ children }: LayoutProps<"/blog">) {
  return (
    <>
      <EPNav active="Resources" />
      {children}
      <Newsletter />
      <EPFooter />
    </>
  );
}
