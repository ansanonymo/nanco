import Title from "../../common/Title/Title";
import Client2 from "./../../../asset/clients/client-2.png";
import Client3 from "./../../../asset/clients/client-3.jpg";
import Client4 from "./../../../asset/clients/client-4.png";
import Client5 from "./../../../asset/clients/client-5.jpeg";
import LogoCaroselSection from "./LogoCaroselSection";
import style from "./logos.module.css";

const notDelete = [Client2, Client3, Client4, Client5];

const defaultImages = [Client2];

const { slideanimation, parent: parentStyle } = style;

export default function HomeDynamicClientsSection({ images: propImages }) {
  const images = propImages ? propImages : defaultImages;

  const displayImages = [...images];

  while (displayImages.length < 7) {
    displayImages.push(...images);
  }

  return (
    <div>
      <Title>Dynamic Clients</Title>
      <LogoCaroselSection images={displayImages} />
    </div>
  );
}
