// import NextSlider from "@/components/home/Hero/NextSlider";

import KeyCilents from "@/components/KeyClients/KeyClients";
import Nav from "@/components/common/Nav/Nav";
import Hero from "@/components/home/Hero/Hero";
import ProjectCouter from "@/components/home/ProjectCounter/ProjectCounter";
// import HomeClientsSection from "@/components/home/HomeClientsSection/HomeClientsSection";

import client1 from "@/asset/clients/client-1.png";
import client2 from "@/asset/clients/client-2.png";
import client3 from "@/asset/clients/client-3.jpg";
import client4 from "@/asset/clients/client-4.png";
import client5 from "@/asset/clients/client-5.jpeg";
import HomeClientsSection from "@/components/home/HomeClientsSection/HomeClientsSection";

const imagesForClientPage = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client2,
  client3,
];

const images = [
  "https://raw.githubusercontent.com/ansanonymo/nanco/master/src/asset/slide/slide-1.webp",
  "https://raw.githubusercontent.com/ansanonymo/nanco/master/src/asset/slide/slide-2.webp",
  "https://raw.githubusercontent.com/ansanonymo/nanco/master/src/asset/slide/slide-3.webp",
  "https://raw.githubusercontent.com/ansanonymo/nanco/master/src/asset/slide/slide-4.webp",
];

export default function Home() {
  return (
    <>
      <Nav />
      {/* <NextSlider images={images} /> */}
      <Hero />
      {/* <HomeClientsSection /> */}
      <ProjectCouter />
      <KeyCilents images={imagesForClientPage} />
      <HomeClientsSection />
    </>
  );
}
