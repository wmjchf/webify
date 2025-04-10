"use client";
import { useRouter } from "next/navigation";

export const Back = () => {
  const router = useRouter();
  return (
    <div
      className="w-[32px] h-[32px] bg-gray-300 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-400"
      onClick={() => router.back()}
    >
      <i className="iconfont icon-fanhui"></i>
    </div>
  );
};
