import BreadCrumb from "./../BreadCrumb/BreadCrumb";

const breadData = {
  pageName: "Contact Us",
  title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  path: [
    {
      name: "/about",
      link: "#",
    },
    {
      name: "/md",
      link: "#",
    },
    {
      name: "/test",
      link: "#",
    },
  ],
};

const imageUrl =
  "https://raw.githubusercontent.com/ansanonymo/nanco/tazri/src/asset/breadcrumb/breadcrumb.jpg";

export default function TopSection() {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="bg-center flex flex-col bg-no-repeat bg-cover gap-20 h-96 lg:h-[450px] justify-center items-center"
    >
      <BreadCrumb
        pageName={breadData.pageName}
        title={breadData.title}
        path={breadData.path}
      />
    </div>
  );
}
