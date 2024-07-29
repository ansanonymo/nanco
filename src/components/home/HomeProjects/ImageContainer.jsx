import problem1 from "@/asset/project-home/problem-1.webp";
import problem2 from "@/asset/project-home/problem-2.webp";
import problem3 from "@/asset/project-home/problem-3.webp";
import problem4 from "@/asset/project-home/problem-4.jpg";
import problem5 from "@/asset/project-home/problem-5.jpg";
import problem6 from "@/asset/project-home/problem-6.jpg";
import problem7 from "@/asset/project-home/problem-7.jpg";
import problem8 from "@/asset/project-home/problem-8.jpg";

import SmallImage from "./SmallImage";
export default function ImageContainer() {
  return (
    <div className=" lg:py-20 md:py-12 gap-3 grid grid-flow-dense lg:grid-cols-3 grid-cols-2 justify-center place-items-center ">
      <div className=" flex flex-col justify-center place-items-center h-full gap-3 w-full">
        <SmallImage image={problem1} />
        <SmallImage image={problem2} />
        <SmallImage image={problem3} />
      </div>
      <div className=" flex flex-col justify-center place-items-center h-full lg:h-[calc(100%+10%)] gap-3">
        <SmallImage image={problem4} big={true} />
        <SmallImage image={problem5} big={true} />
      </div>
      <div className="grid grid-cols-2 lg:flex lg:flex-col justify-center place-items-center h-full gap-3 col-span-2 lg:col-span-1 w-full">
        <SmallImage image={problem6} />
        <SmallImage image={problem7} />
        <SmallImage image={problem8} />
      </div>
    </div>
  );
}
