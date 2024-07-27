import React from "react";

export default function SmallImage({ image,big }) {
  return (
    <div
      className={`w-full ${big?"lg:max-h-[40rem] max-h-full" :"lg:max-h-64  md:max-h-64"} max-h-64  h-full relative overflow-hidden rounded-xl  first:col-span-2 lg:first:col-span-1 group`}
    >
      <div className="textBox title flex justify-start lg:pl-8 absolute w-full transition h-full top-0 left-0 bg-gradient-to-b from-transparent to-black  opacity-0 hover:opacity-100 duration-1000 z-10">
        <div className=" absolute bottom-0 p-3 md:bottom-11 md:p-4 lg:bottom-11 lg:p-0 ">
          <h1 className="text-white font-semibold text-lg md:text-xl lg:text-2xl">
            Lorem ipsum dolor
          </h1>
          <p className="text-white text-sm md:text-sm lg:text-sm">
            Lorem ipsum dolor sit amet, consectetur{" "}
          </p>
        </div>
      </div>
      <img
        src={image}
        alt=""
        className="group-hover:scale-110 duration-700 object-cover w-full h-full "
      />
    </div>
  );
}
