import Footer from "../components/common/Footer";
import Contact from "../components/home/Contact";
import HomeAbout from "../components/home/HomeAbout";
import OurJourny from "../components/home/OurJourny";
import Projects from "../components/home/Projects";

export default function Home() {
  return <>
    <Projects/>
    <OurJourny />
    <HomeAbout/>
    <Contact/>
  <Footer/>
  </>;
}
