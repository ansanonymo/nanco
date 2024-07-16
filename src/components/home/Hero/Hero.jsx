import "swiper/css";
import Nav from "../../common/Nav/Nav";
import SlideImageTwo from "./../../../asset/slide/slide-1.webp";
import SlideImageThree from "./../../../asset/slide/slide-2.webp";
import SlideImageFour from "./../../../asset/slide/slide-3.webp";
import SlideImageOne from "./../../../asset/slide/slide-4.webp";
import ChairmanImage from "./../../../asset/tom_eating.jpg";
import Slider from "./Slider";

const images = [SlideImageOne, SlideImageTwo, SlideImageThree, SlideImageFour];

export default function Hero() {
  return (
    <div className="relative flex flex-col">
      <Slider images={images} />
      <Nav />
      <div className="relative py-24 z-10 flex h-full justify-center lg:justify-between lg:flex-row container pointer-events-none flex-col pr-11 items-center ">
        {/* //text */}
        <HeroContent />
        {/* // img */}
        <ImageCard imageSrc={ChairmanImage} />
      </div>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="text-white capitalize flex flex-col gap-6 items-start">
      <h1 className="text-6xl font-semibold">
        Affordable roofing repair <br />
        <span className="text-secondary">services</span>
      </h1>

      <p className="text-xl">
        OUR CONSISTENT PERFORMANCE AND IMPECCABLE SERVICE DELIVERY HAVE MADE US
      </p>

      <button className="bg-primary pointer-events-auto border-2 transition-all duration-200 border-primary hover:text-white hover:border-primary hover:bg-transparent rounded-lg text-lg px-3 py-2">
        More About Us
      </button>
    </div>
  );
}

function ImageCard({ imageSrc }) {
  return (
    <div className=" pointer-events-auto relative translate-y-20 lg:translate-y-56 self-end  w-full max-w-[250px] text-white gap-4  bg-primary rounded-lg flex flex-col items-center pb-8">
      <div className="absolute top-0 translate-y-[-50%] h-40 w-40 rounded-full overflow-hidden border-4 border-primary ">
        <img className="w-full" src={imageSrc} alt="chairman image" />
      </div>

      {/* imageplace holder */}
      <div className="h-20 w-40 rounded-full overflow-hidden border-4 border-primary "></div>

      <h1 className="text-xl text-center">
        Read What <br /> chairman talk <br /> about us ?
      </h1>
      <button className="border-2 border-secondary hover:bg-transparent hover:text-secondary text-xl bg-secondary px-4 py-1 rounded-lg">
        Read
      </button>
    </div>
  );
}
