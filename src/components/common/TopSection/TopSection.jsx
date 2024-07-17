import BreadCrumb from "./../BreadCrumb/BreadCrumb";
import Nav from "./../Nav/Nav";

const breadData = {
  pageName: "Contact Us",
  title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  path: "Home 1 / Contact Us",
};

const imageUrl =
  "https://raw.githubusercontent.com/ansanonymo/nanco/tazri/src/asset/breadcrumb/breadcrumb.jpg";

export default function TopSection() {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="bg-center flex flex-col gap-20 pb-9"
    >
      <Nav />
      <BreadCrumb
        pageName={breadData.pageName}
        title={breadData.title}
        path={breadData.path}
      />
    </div>
  );
}
