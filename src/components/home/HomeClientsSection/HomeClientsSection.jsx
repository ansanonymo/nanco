import Title from "../../common/Title";
import Client2 from "./../../../asset/clients/client-2.png";
import Client3 from "./../../../asset/clients/client-3.jpg";
import Client4 from "./../../../asset/clients/client-4.png";
import Client5 from "./../../../asset/clients/client-5.jpeg";
import style from "./logos.module.css";

const images = [Client2, Client3, Client4, Client5, Client2, Client4];

const { logodiv, logocontainer } = style;
export default function HomeClientsSection() {
  return (
    <div>
      <Title>Our Clients</Title>
      <div
        className={
          "my-5 whitespace-nowrap overflow-hidden container" +
          " " +
          logocontainer
        }
      >
        <ImgSlide allImage={images} />
        <ImgSlide allImage={images} />
      </div>
    </div>
  );
}

function ImgSlide({ allImage }) {
  return (
    <div className={"inline-block w-full" + " " + logodiv}>
      <div className="w-full flex gap-7 h-20 justify-around">
        {allImage.map((imgSrc) => {
          return (
            <div key={crypto.randomUUID()}>
              <img src={imgSrc} alt="logo" className="h-16" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
