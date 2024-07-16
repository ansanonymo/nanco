import Hero from "../components/home/Hero/Hero";
import HomeClientsSection from "../components/home/clients/HomeClientsSection";
import HomeServicesSection from "../components/home/services/HomeServicesSection";
import ProjectCouter from "../components/projectCounter/ProjectCounter";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectCouter />
      <HomeClientsSection />
      <HomeServicesSection />
    </>
  );
}
