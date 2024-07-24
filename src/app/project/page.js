import Footer from "@/components/common/Footer/Footer";
import TopSection from "@/components/common/TopSection/TopSection";
import ProjectDescription from "@/components/project/ProjectDescription";
import ProjectDetails from "@/components/project/ProjectDetails";

// project details
const data = {
  "Compilation Date": "May 2019",
  Clients: "Quantum LTD.,",
  Location: "Nebraska Omaha, USA",
  Category: "Commercial",
  Budget: "$16 Million",
};

export default function ProjectPage() {
  return (
    <>
      <TopSection />
      <ProjectDetails data={data} />
      <ProjectDescription />
      <Footer />
    </>
  );
}
