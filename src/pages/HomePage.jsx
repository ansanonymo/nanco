import Footer from "./../components/common/Footer/Footer";
import Nav from "./../components/common/Nav/Nav";
import Hero from "./../components/home/Hero/Hero";
import HomeAbout from "./../components/home/HomeAbout/HomeAbout";
import HomeClientsSection from "./../components/home/HomeClientsSection/HomeClientsSection";
import HomeContact from "./../components/home/HomeContact/HomeContact";
import HomeOurJourny from "./../components/home/HomeOurJourny/HomeOurJourny";
import HomeProjects from "./../components/home/HomeProjects/HomeProjects";
import HomeServicesSection from "./../components/home/HomeServicesSection/HomeServicesSection";
import ProjectCounter from "./../components/home/ProjectCounter/ProjectCounter";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <ProjectCounter />
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
