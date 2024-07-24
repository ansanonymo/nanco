import demoImage from "@/asset/project-home/project-2.webp";
import Image from "next/image";

export default function ProjectDescription() {
  return (
    <div className="container mx-auto">
      <div className="w-full max-w-[850px] mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4">
          Family home is perfect example of high-end innovative construction.
        </h1>
        <P className="text-[#555555] text-lg">
          Across this diversity, one thing all our clients share is the trust
          they put in us to manage and deliver construction projects of the
          highest quality, on time and on budget – it’s what we’ve built our
          reputation on.
        </P>

        <P>
          From concept and building design to project and construction
          management, our flexible, multi-skilled team provides comprehensive,
          innovative, forward-thinking solutions. And as your construction
          partner, our services can even extend to helping you acquire and
          develop land to deliver one streamlined package of work, eliminating
          the headache of extra administrative steps.
        </P>

        <Image
          src={demoImage}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />

        <h2 className="text-2xl font-normal my-4">
          From humble beginnings, a proud story of growth, vision, commitment,
          inspiration and innovation. Our roots are deep, our standards are
          unmatched, our dedication is timeless.
        </h2>

        <P>
          Our clients cover a wide range of sectors including local, state,
          territory and Commonwealth governments, retail and sales, hospitality,
          commercial, health and aged care, industrial and manufacturing, civil
          works and defence, as well as medium-density residential, in the
          Northern City and South England.
        </P>

        <P>
          Focusing on medium to large-scale commercial construction projects, we
          work with both investors and developers to create landmarks that make
          an impact.
        </P>
      </div>
    </div>
  );
}

function P({ children }) {
  return <p className="text-[#555555] text-lg my-4">{children}</p>;
}
