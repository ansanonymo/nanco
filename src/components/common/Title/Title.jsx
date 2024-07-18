import LineImage from "@/asset/lines/line.webp";
import Image from "next/image";
export default function Title({ children }) {
  let words = children;
  if (!children || !children.trim() || words.split(" ").length !== 2) {
    words = "Please_Give_Two_Word_With Space";
  }
  const [wordOne, wordTwo] = words.split(" ");
  return (
    <div className="my-16 text-center text-4xl text-muted flex flex-col justify-center items-center gap-2 font-medium">
      <h1 className="uppercase">
        {wordOne} <span className="text-primary">{wordTwo}</span>
      </h1>
      <Image
        height={500}
        width={500}
        src={LineImage}
        alt="line"
        className="w-60 h-auto"
      />
    </div>
  );
}
