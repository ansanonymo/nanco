import Hero from "../components/home/Hero/Hero";
import HomeClientsSection from "../components/home/HomeClientsSection/HomeClientsSection";
import ProjectCouter from "../components/home/ProjectCounter/ProjectCounter";
import HomeServicesSection from "../components/home/services/HomeServicesSection";
import Footer from "./../components/common/Footer/Footer";
import HomeOurJourny from "./../components/home/HomeOurJourny/HomeOurJourny";
import HomeProjects from "./../components/home/HomeProjects/HomeProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectCouter />
      <HomeProjects />
      <HomeServicesSection />
      <HomeClientsSection />
      <HomeOurJourny />
      <Footer />
    </>
  );
}
