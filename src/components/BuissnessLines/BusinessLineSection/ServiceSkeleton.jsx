import style from "./skeleton.module.css";

export default function ServiceSkeleton() {
  return (
    <div className="w-full max-w-[408px] border py-6 flex flex-col justify-center items-center gap-y-5 ">
      <div className={"bg-black size-16 " + style["skeletonanimation"]}></div>

      <div className={"w-40 h-6 bg-black " + style["skeletonanimation"]}></div>
    </div>
  );
}
