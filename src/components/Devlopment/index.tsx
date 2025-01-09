import Image from "next/image";
import IconSvg from "./icon.svg";

export const Development = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-10">
      <Image src={IconSvg} width={300} height={300} alt=""></Image>
      <span className="text-sm" style={{ color: "#cdcdcd" }}>
        正在开发当中...
      </span>
    </div>
  );
};
