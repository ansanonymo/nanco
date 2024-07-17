import { LiaCitySolid } from "react-icons/lia";
import Title from "../../common/Title/Title";

export default function HomeServicesSection() {
  return (
    <div>
      <Title>Our Services</Title>
      <div className="container flex w-fit gap-6 flex-col md:flex-row ">
        <Card>Construction and Engineering</Card>
        <Card>Intigrated Facilities-Oman</Card>
        <Card>MEPI</Card>
      </div>
    </div>
  );
}

function Card({ children, Icon }) {
  return (
    <div className="relative w-80 md:w-60 lg:w-80 aspect-square mx-auto flex flex-col gap-3 border justify-center items-start py-20 px-8 rounded-lg shadow-xl border-gray-200 overflow-hidden group">
      <span className="text-7xl text-secondary group-hover:text-white self-start duration-500">
        {Icon ? Icon : <LiaCitySolid />}
      </span>
      <h2 className="text-[#1B1A1A] group-hover:text-white text-xl  md:text-2xl duration-500">
        {children ? children : "Please write some content"}
      </h2>
      <div className="group-hover:scale-100 scale-0 transition-all duration-500 w-[400%] translate-x-1/2 translate-y-1/2 aspect-square absolute bottom-0 right-0 bg-secondary -z-10 rounded-full"></div>
    </div>
  );
}
