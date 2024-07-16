import React from "react";
import Title from "./../../common/Title/Title";
import Journy from "./Journy";

export default function OurJourny() {
  return (
    <div className="w-full">
      <Title>Our Journey</Title>
      <div className="container -mt-14">
        <Journy
          side={"left"}
          title={"1975"}
          desc={
            "A team of 30 engineers from Shapoorji Pallonji  Group landed in Oman to construct the Qasr Al Alam Palace for His Majesty of Oman"
          }
        />
        <Journy
          side={"right"}
          title={"1985"}
          desc={
            "OSCO was established with an Omani soul & Values of Shapoorji Pallonji Group"
          }
        />
        <Journy
          side={"left"}
          title={"1985"}
          desc={
            "A team of 30 engineers from Shapoorji Pallonji  Group landed in Oman to construct the Qasr Al Alam Palace for His Majesty of Oman"
          }
        />
      </div>
    </div>
  );
}
