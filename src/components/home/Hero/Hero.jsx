import "swiper/css";
import SlideImageTwo from "./../../../asset/slide/slide-1.webp";
import SlideImageThree from "./../../../asset/slide/slide-2.webp";
import SlideImageFour from "./../../../asset/slide/slide-3.webp";
import SlideImageOne from "./../../../asset/slide/slide-4.webp";
import Slider from "./Slider";

const images = [SlideImageOne, SlideImageTwo, SlideImageThree, SlideImageFour];

export default function Hero() {
  return (
    <div className="relative h-screen max-h-[750px] bg-black">
      <Slider images={images} />
    </div>
  );
}
