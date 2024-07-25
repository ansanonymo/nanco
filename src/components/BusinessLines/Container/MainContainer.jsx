import React from "react";
import ProjectContainer from "./ProjectContainer";
import WhyusContainer from "./WhyusContainer";

import SerivicesContainer from "./SerivicesContainer";

export default function MainContainer() {
  return (
    <div className="w-full p-4  min-h-72 mt-6 rounded-md ">
      <SerivicesContainer />
      <WhyusContainer />
      <ProjectContainer />
    </div>
  );
}
