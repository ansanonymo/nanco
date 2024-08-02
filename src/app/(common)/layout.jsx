import Footer from "@/components/common/Footer/Footer";
import TopSection from "@/components/common/TopSection/TopSection";

export default function CommonLayout({ children }) {
  return (
    <>
      <TopSection />
      {children}
      <Footer />
    </>
  );
}
