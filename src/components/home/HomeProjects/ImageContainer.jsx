import big1 from "../../../asset/project-home/mid-project-1.webp";
import big2 from "../../../asset/project-home/mid-project-2.webp";
import project1 from "../../../asset/project-home/project-1.webp";
import project2 from "../../../asset/project-home/project-2.webp";
import project3 from "../../../asset/project-home/project-3.webp";
import project5 from "../../../asset/project-home/project-5.webp";
import project6 from "../../../asset/project-home/project-6.webp";
import project4 from "@/asset/project-home/project-4.webp";

import SmallImage from "./SmallImage";
export default function ImageContainer() {
  return (
    <div className=" lg:py-20 md:py-12 gap-3 grid grid-flow-dense lg:grid-cols-3 grid-cols-2 justify-center place-items-center ">
      <div className=" flex flex-col justify-center place-items-center h-full gap-3">
        <SmallImage image={project1} />
        <SmallImage image={project2} />
        <SmallImage image={project3} />
      </div>
      <div className=" flex flex-col justify-center place-items-center h-full lg:h-[calc(100%+10%)] gap-3">
        <SmallImage image={project4} big={true} />
        <SmallImage image={big2} big={true} />
      </div>
      <div className="grid grid-cols-2 lg:flex lg:flex-col md:flex md:flex-col  justify-center place-items-center h-full gap-3 col-span-2 md:col-span-1 lg:col-span-1 w-full">
        <SmallImage image={big1} />
        <SmallImage image={project5} />
        <SmallImage image={project6} />
      </div>
    </div>
  );
}
