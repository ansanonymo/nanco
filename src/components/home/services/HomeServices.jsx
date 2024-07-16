import { LiaCitySolid } from "react-icons/lia";
import Title from "../../common/Title";

export default function HomeServices() {
  return (
    <div>
      <Title>Our Services</Title>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-3">
        <Card>Construction and Engineering</Card>
        <Card>Construction and Engineering</Card>
        <Card>Construction and Engineering</Card>
        <Card>Construction and Engineering</Card>
      </div>
    </div>
  );
}

function Card({ children, Icon }) {
  return (
    <div className="max-w-[300px] mx-auto flex flex-col gap-3 border justify-center items-center py-20 px-8 rounded-lg shadow-xl border-gray-200">
      <span className="text-7xl text-secondary self-start">
        {Icon ? Icon : <LiaCitySolid />}
      </span>
      <h2 className="text-[#1B1A1A] text-2xl">
        {children ? children : "Please write some content"}
      </h2>
    </div>
  );
}
