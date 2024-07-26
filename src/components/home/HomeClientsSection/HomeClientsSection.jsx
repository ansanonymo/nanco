import Image from "next/image";
import Title from "../../common/Title/Title";
import Client2 from "./../../../asset/clients/client-2.png";
import Client3 from "./../../../asset/clients/client-3.jpg";
import Client4 from "./../../../asset/clients/client-4.png";
import Client5 from "./../../../asset/clients/client-5.jpeg";
import style from "./logos.module.css";

const images = [Client2, Client3, Client4, Client5, Client2, Client4, Client4];

const { slideanimation, parent: parentStyle } = style;
export default function HomeClientsSection() {
  return (
    <div>
      <Title>Our Clients</Title>

      <div className="container overflow-hidden">
        <div className="container group overflow-hidden">
          {/** Slide Contaier*/}
          <div
            className={
              "relative h-44 w-[1700px] overflow-hidden " + parentStyle
            }
          >
            <div
              className={`absolute h-full w-full top-0 left-[100%] ${slideanimation}`}
            >
              <Slide />
            </div>
            <div className={`h-full w-full ${slideanimation}`}>
              <Slide />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide({ left }) {
  return (
    <div className={`h-full grid gap-4 pr-4 grid-cols-7`}>
      {images.map((imgSrc) => {
        return <SlideImage src={imgSrc} key={crypto.randomUUID()} />;
      })}
    </div>
  );
}

function SlideImage({ src }) {
  return (
    <div className="flex justify-center items-center">
      <Image
        height={500}
        width={500}
        alt="alt"
        className="h-28 object-contain"
        src={src}
      />
    </div>
  );
}
