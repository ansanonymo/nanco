import MDMassageContainer from "../components/About/MDMassage/MDMassageContainer";
import Footer from "./../components/common/Footer/Footer";
import Nav from "./../components/common/Nav/Nav";
import TopSection from "./../components/common/TopSection/TopSection";
import HomeServicesSection from "./../components/home/HomeServicesSection/HomeServicesSection";

export default function OtherPage() {
  return (
    <>
      <Nav />
      <TopSection />
      <MDMassageContainer />
      <HomeServicesSection />
      <Footer />
    </>
  );
}
