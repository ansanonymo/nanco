import React from "react";
import { BiSolidSchool } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import UpperSection from "./UpperSection";
export default function BusinessLineSection() {
  return (
    <div className="container flex flex-col md:flex-row  lg:flex-row gap-5">
      <UpperSection
        icon={<BiSolidSchool />}
        text={"Prestigius Projects"}
        key={crypto.randomUUID()}
      />
      <UpperSection
        icon={<FaRegHandshake />}
        text={"Why Us"}
        key={crypto.randomUUID()}
        isRed={true}
      />
      <UpperSection
        icon={<IoSettingsOutline />}
        text={"Core Section"}
        key={crypto.randomUUID()}
      />
    </div>
  );
}
