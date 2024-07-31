import Image from "next/image";

export default function Slide({ left, images }) {
  const len = images.length;

  const totalCols = `repeat(${len}, minmax(0, 1fr))`;

  return (
    <div
      style={{
        gridTemplateColumns: totalCols,
      }}
      className={`h-full grid gap-4 px-2 `}
    >
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
