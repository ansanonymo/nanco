import React from "react";
import bg from "../../../asset/Contact/bg.jpg";
import DetailsBox from "./DetailsBox";
import Form from "./Form";

export default function HomeContact() {
  return (
    <div className=" mx-auto relative container mt-28">
      <div
        className="bg-center bg-cover z-0 pb-32 pt-12 relative "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className=" absolute top-0 left-0 w-full h-full bg-white -z-40 opacity-80"></div>
        <div className="container lg:flex-row flex md:flex-row flex-col justify-between ">
          <div className="title text-3xl font-bold text-primary">
            CALL US OR FILL THE FORM
          </div>
          <div className="desc pt-5 text-sm lg:w-[60%] flex text-slate lg:text-xl justify-center place-items-center">
            <div>
              We are the world class engineering manufacturer providing the
              highest quality products, services and solutions to our customers.
            </div>
          </div>
        </div>
      </div>
      <div className="container -translate-y-32 gap-8 grid lg:grid-cols-[30%,70%]  grid-cols-1 justify-center place-items-center">
        <DetailsBox />
        <Form />
      </div>
    </div>
  );
}
