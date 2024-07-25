import project7 from "@/asset/project-home/mid-project-1.webp";
import project8 from "@/asset/project-home/mid-project-2.webp";
import project1 from "@/asset/project-home/project-1.webp";
import project2 from "@/asset/project-home/project-2.webp";
import project3 from "@/asset/project-home/project-3.webp";
import project4 from "@/asset/project-home/project-4.webp";
import project5 from "@/asset/project-home/project-5.webp";
import project6 from "@/asset/project-home/project-6.webp";
import ProjectSlider from "./ProjectSlider";

const projectImages = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
];

export default function ProjectCarousel() {
  return (
    <div className="container my-6">
      <ProjectSlider images={projectImages} />
    </div>
  );
}
