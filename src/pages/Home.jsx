import Hero from "../components/home/Hero/Hero";
import HomeClientsSection from "../components/home/HomeClientsSection/HomeClientsSection";
import HomeServicesSection from "../components/home/services/HomeServicesSection";
import ProjectCouter from "../components/projectCounter/ProjectCounter";
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
    </>
  );
}
