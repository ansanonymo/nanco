import Image from "next/image";
import Title from "../common/Title/Title";

import client1 from "@/asset/clients/client-1.png";
import client2 from "@/asset/clients/client-2.png";
import client3 from "@/asset/clients/client-3.jpg";
import client4 from "@/asset/clients/client-4.png";
import client5 from "@/asset/clients/client-5.jpeg";

const defaultImages = [client1, client2, client3, client4, client5];

export default function KeyCilents({ images: imagesProps }) {
  const images =
    imagesProps && imagesProps.length ? imagesProps : defaultImages;

  return (
    <>
      <Title>Our Clients</Title>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-[4px] relative border-white items-center">
          <div className="absolute w-full h-full pointer-events-none border-white border-2 left-0 top-0"></div>
          {images.map((imgSrc) => {
            return <ClientLogoImage src={imgSrc} />;
          })}
        </div>
      </div>
    </>
  );
}

function ClientLogoImage({ src }) {
  return (
    <div className="border w-full h-full flex items-center justify-center p-8">
      <div className="size-56 md:size-80 justify-center items-center flex">
        <div className="relative cursor-pointer group overflow-hidden  h-ful w-full ">
          <div className="relative w-full h-full duration-300 group-hover:-translate-y-[100%] flex justify-center item ">
            <div className="w-full h-full justify-center items-center flex">
              <Image
                src={src}
                height={500}
                width={500}
                className="w-40 h-auto object-contain"
                alt="logo"
              />
            </div>
            <div className="absolute flex justify-center items-center w-full h-[100%]  top-[100%] left-0">
              <Image
                src={src}
                height={500}
                width={500}
                className="w-40 h-auto object-contain"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
