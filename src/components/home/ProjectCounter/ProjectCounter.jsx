import { BsBuildings } from "react-icons/bs";
import { GiBrickWall } from "react-icons/gi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { PiProjectorScreenChart } from "react-icons/pi";
import { TbBuildingFactory2 } from "react-icons/tb";

export default function ProjectCouter() {
  const imgUrl = "/gear.png";
  return (
    <div className="relative container mx-auto -translate-y-1/3 lg:-translate-y-2/4 z-40">
      <div
        style={{
          backgroundImage: "url('" + imgUrl + "')",
        }}
        className="min-w-52 w-full  sm:w-[60%] md:w-[80%] lg:w-[95%] bg-[#ff5e14] text-white bg-center bg-cover bg-no-repeat mx-auto px-3"
      >
        <div className="grid gap-2 sm:gap-3 md:gap-5 lg:gap-20 py-4 sm:py-7 md:py-12  grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-fit mx-auto">
          <Counter count="20" name="Awards" Icon={HiOutlineTrophy} />
          <Counter count="900" name="Clients" Icon={PiProjectorScreenChart} />
          <Counter count="10K" name="Projects" Icon={BsBuildings} />
          <Counter count="200" name="Members" Icon={TbBuildingFactory2} />
        </div>
      </div>
    </div>
  );
}

function Counter({ Icon: PropsIcon, count, name }) {
  const Icon = PropsIcon ? PropsIcon : GiBrickWall;
  return (
    <div className="flex gap-2 sm:gap-2 md:gap-3 items-center">
      {/** icon */}
      <div className="text-3xl sm:text-2xl md:text-6xl lg:text-6xl">
        {<Icon />}
      </div>
      {/** count and text */}
      <div>
        <h2 className="text-base sm:text-lg  md:text-4xl lg:text-4xl font-bold">
          {count}+
        </h2>
        <p className="text-xs sm:text-xs md:text-lg lg:text-lg">{name}</p>
      </div>
    </div>
  );
}
