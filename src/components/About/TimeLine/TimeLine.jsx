import img1 from "@/asset/TimeLine/project-1.webp";
import img2 from "@/asset/TimeLine/project-2.webp";
import img3 from "@/asset/TimeLine/project-3.webp";
import img4 from "@/asset/TimeLine/project-4.webp";
import img5 from "@/asset/TimeLine/project-5.webp";
import img6 from "@/asset/TimeLine/project-6.webp";
import TimeLineProject from "./TimeLineProject";

const images = [img1, img2, img3, img4, img5, img6];

const defaultData = [
  {
    heading: "THE FIRST DESTINATIONS",
    years: "1999-2002",
    description:
      "Our Lord which in which I was born in the city of Oakland which lies in the state of California.",
    img: img1,
  },
  {
    heading: "THE FIRST STEPS",
    years: "1999-2002",
    description:
      "Our Lord which in which I was born in the city of Oakland which lies in the state of California.",
    img: img2,
  },
  {
    heading: "START OF STORY",
    years: "1999-2002",
    description:
      "Our Lord which in which I was born in the city of Oakland which lies in the state of California.",
    img: img3,
  },
  {
    heading: "UNIQUE SUPER Building",
    years: "1999-2002",
    description:
      "Our Lord which in which I was born in the city of Oakland which lies in the state of California.",
    img: img4,
  },
  {
    heading: "THE FIRST STEPS",
    years: "1999-2002",
    description:
      "Our Lord which in which I was born in the city of Oakland which lies in the state of California.",
    img: img5,
  },
  {
    heading: "THE FIRST DESTINATIONS",
    years: "1999-2002",
    description:
      "Our Lord which in which I was born in the city of Oakland which lies in the state of California.",
    img: img6,
  },
];

export default function TimeLine({ data: propsData }) {
  const data = propsData ? propsData : defaultData;

  return (
    <div className="container my-6">
      <ul className="relative flex flex-col gap-9 py-5">
        {data.map(({ heading, description, img, years }, index) => {
          return (
            <TimeLineProject
              key={index}
              heading={heading}
              description={description}
              img={img}
              years={years}
            />
          );
        })}

        {/** middle line */}
        <li className="hidden lg:block absolute w-[2px] h-full bg-[#E4E4E4] top-0 left-1/2 translate-x-1/2"></li>
      </ul>
    </div>
  );
}
