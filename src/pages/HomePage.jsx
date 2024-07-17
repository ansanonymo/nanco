import Footer from "../components/common/Footer/Footer";
import Hero from "../components/home/Hero/Hero";
import HomeAbout from "../components/home/HomeAbout/HomeAbout";
import HomeClientsSection from "../components/home/HomeClientsSection/HomeClientsSection";
import HomeContact from "../components/home/HomeContact/HomeContact";
import HomeOurJourny from "../components/home/HomeOurJourny/HomeOurJourny";
import HomeProjects from "../components/home/HomeProjects/HomeProjects";
import ProjectCouter from "../components/home/ProjectCounter/ProjectCounter";
import HomeServicesSection from "../components/home/services/HomeServicesSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectCouter />
      <HomeServicesSection />
      <HomeAbout />
      <HomeProjects />
      <HomeClientsSection />
      <HomeOurJourny />
      <HomeContact />
      <Footer />
    </>
  );
}
