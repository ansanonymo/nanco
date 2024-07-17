import BreadCrumbLine from "./BreadCrumbLine";

export default function BreadCrumb({ path, title, pageName }) {
  const pathArr = path.split("/");
  const lastPart = pathArr.pop();

  const fullPath = (
    <>
      <span className="text-[#00ddff]">{pathArr.join("/")} / </span> {lastPart}
    </>
  );
  return (
    <div className="container gap-10 lg:pb-0 bg-no-repeat pb-14  flex flex-col lg:flex-row lg:justify-between lg:gap-0 items-center">
      <div>
        <h1 className="md:text-5xl lg:text-6xl text-4xl font-semibold text-white">
          {pageName ? pageName : "Please Give Page Name"}
        </h1>
        <div className="bg-primary hidden w-80 h-[90px] text-lg lg:flex flex-col gap-6 mt-7">
          <BreadCrumbLine />

          <p className="md:text-lg lg:text-xl pl-10 -mt-2 text-white text-nowrap whitespace-nowrap ">
            {title
              ? title
              : "This section name is " + pageName + ". Plase scroll"}
          </p>
        </div>
      </div>
      <div className="text-white relative">
        <div className="w-[30px] hidden lg:block aspect-square absolute bg-white right-0 top-0 -translate-y-20">
          <div className="w-full h-full bg-primary -translate-x-1/3 -translate-y-1/3"></div>
        </div>
        {fullPath}
      </div>
    </div>
  );
}
