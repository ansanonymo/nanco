import React from "react";
import Title from "../../common/Title/Title";
import ImageContainer from "./ImageContainer";

export default function HomeProjects() {
  return (
    <div className=" w-full overflow-x-hidden">
      <div className="container overflow-x-hidden">
        {/* <Title
                  first={"PRESTIGIOUS "}
                  last={"PROJECTS"}
              /> */}
        <Title>PRESTIGIOUS PROJECTS</Title>
        <div className="flex justify-center text-xl text-center pb-12 text-darkShade">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </div>
        <ImageContainer />
      </div>
    </div>
  );
}
