import Footer from "../components/common/Footer/Footer";
import Hero from "../components/home/Hero/Hero";
import HomeServicesSection from "../components/home/HomeServicesSection/HomeServicesSection";
import HomeClientsSection from "../components/home/clients/HomeClientsSection";
import ProjectCouter from "../components/projectCounter/ProjectCounter";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectCouter />
      <HomeClientsSection />
      <HomeServicesSection />
      <Footer />
    </>
  );
}
