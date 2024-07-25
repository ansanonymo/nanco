import Image from "next/image";
import { IoFootstepsOutline } from "react-icons/io5";

export default function TimeLineProject({ heading, description, img, years }) {
  return (
    <li className="md:odd:text-right group">
      <div className="flex flex-col md:group-odd:items-end md:group-even:items-start w-fit md:mx-auto lg:group-odd:-translate-x-1/2 lg:group-even:translate-x-1/2 lg:relative lg:group-even:left-11 lg:group-odd:right-11">
        {/** image */}
        <div className="min-w-52 aspect-[301/201]  w-7/12 md:w-64 lg:w-80 mb-7 relative overflow-hidden">
          <Image
            src={img}
            alt={heading}
            width={1000}
            height={1000}
            className="w-full object-cover hover:scale-110 duration-200"
          />
        </div>

        {/** content */}
        <div className="flex flex-col gap-5 md:group-even:flex-row  md:group-odd:flex-row-reverse">
          {/** icon */}
          <div className="h-fit relative">
            <div
              className="absolute hidden lg:block -z-50 top-1/2 h-[2px] bg-[#e4e4e4] -translate-y-1/2
            group-odd:w-[48px] group-odd:translate-x-full group-odd:right-0 group-even:left-0 group-even:-translate-x-full group-even:w-[44px]"
            ></div>
            <div className="size-20 text-6xl border relative flex items-center justify-center text-[#0c0a0a] shadow-lg">
              <IoFootstepsOutline />
            </div>
          </div>

          {/** text */}
          <div className="max-w-96 lg:max-w-80">
            <h3 className="text-secondary font-semibold mb-2">{years}</h3>
            <h2 className="text-[#0c0a0a] text-xl font-bold uppercase mb-4">
              {heading}
            </h2>
            <p className="text-[#6e777d]">{description}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
