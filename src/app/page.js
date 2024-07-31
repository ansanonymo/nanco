// import NextSlider from "@/components/home/Hero/NextSlider";

import Nav from "@/components/common/Nav/Nav";
import Hero from "@/components/home/Hero/Hero";
import ProjectCouter from "@/components/home/ProjectCounter/ProjectCounter";

import client1 from "@/asset/clients/client-1.png";
import client2 from "@/asset/clients/client-2.png";
import client3 from "@/asset/clients/client-3.jpg";
import client4 from "@/asset/clients/client-4.png";
import client5 from "@/asset/clients/client-5.jpeg";
import ProjectSkeleton from "@/components/BuissnessLines/BusinessLineSection/ProjectSkeleton";
import ServiceSkeleton from "@/components/BuissnessLines/BusinessLineSection/ServiceSkeleton";
import HomeDynamicClientsSection from "@/components/home/HomeDynamicClientsSection/HomeDynamicClientsSection";
import HomeProjects from "@/components/home/HomeProjects/HomeProjects";

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
      <h2 className="my-5 text-5xl text-center">Project Skeleton</h2>
      <div className="container my-7 flex flex-row flex-wrap gap-4">
        <ProjectSkeleton />
        <ProjectSkeleton />
        <ProjectSkeleton />
      </div>

      <h2 className="my-5 text-5xl text-center">Service Skeleton</h2>
      <div className="container flex flex-wrap gap-3">
        <ServiceSkeleton />
        <ServiceSkeleton />
        <ServiceSkeleton />
      </div>
      <HomeDynamicClientsSection />
      <HomeProjects />
    </>
  );
}
