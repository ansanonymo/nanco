import Hero from "../components/home/Hero/Hero";
import HomeClientsSection from "../components/home/clients/HomeClientsSection";
import HomeServices from "../components/home/services/HomeServices";
import ProjectCouter from "../components/projectCounter/ProjectCounter";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectCouter />
      <HomeClientsSection />
      <HomeServices />
    </>
  );
}
