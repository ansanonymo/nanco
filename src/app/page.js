// import NextSlider from "@/components/home/Hero/NextSlider";

import KeyCilents from "@/components/KeyClients/KeyClients";
import Nav from "@/components/common/Nav/Nav";
import Hero from "@/components/home/Hero/Hero";
import ProjectCouter from "@/components/home/ProjectCounter/ProjectCounter";
// import HomeClientsSection from "@/components/home/HomeClientsSection/HomeClientsSection";

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
      <KeyCilents />
    </>
  );
}
