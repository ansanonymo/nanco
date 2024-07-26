export default function ImageCard({ imageSrc }) {
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
