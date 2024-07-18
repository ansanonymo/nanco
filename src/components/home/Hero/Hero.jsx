import HeroContent from "./HeroContent";
import NextSlider from "./NextSlider";

const ChairmanImage =
  "https://raw.githubusercontent.com/ansanonymo/nanco/master/src/asset/tom_eating.jpg";

const images = [
  "https://raw.githubusercontent.com/ansanonymo/nanco/master/src/asset/slide/slide-1.webp",
  "https://raw.githubusercontent.com/ansanonymo/nanco/master/src/asset/slide/slide-2.webp",
  "https://raw.githubusercontent.com/ansanonymo/nanco/master/src/asset/slide/slide-3.webp",
  "https://raw.githubusercontent.com/ansanonymo/nanco/master/src/asset/slide/slide-4.webp",
];

export default function Hero() {
  return (
    <div className=" relative h-[350px] md:h-[600px] flex flex-col">
      <div className="h-full">
        <NextSlider images={images} />
      </div>
      <div className="absolute mt-6 md:mt-0 left-1/2 -translate-x-1/2  z-10 flex h-full justify-center lg:justify-between lg:flex-row container pointer-events-none flex-col pr-11 items-center ">
        <HeroContent />
        <ImageCard imageSrc={ChairmanImage} />
      </div>
    </div>
  );
}

function ImageCard({ imageSrc }) {
  return (
    <div className="hidden lg:flex pointer-events-auto relative translate-y-20 lg:translate-y-56 self-end  w-full max-w-[250px] text-white gap-4  bg-primary rounded-lg flex-col items-center pb-8">
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
