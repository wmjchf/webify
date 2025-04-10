import React from "react";
import Image from "next/image";

import { Back } from "./Back";

const Page = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Back></Back>
          <div className="flex items-center gap-2">
            <Image
              src={
                "http://webify-img.oss-cn-hongkong.aliyuncs.com/1960b7c50a5.jpg"
              }
              width={30}
              height={30}
              alt=""
              className="rounded-full cursor-pointer"
            ></Image>
            <span className="text-sm font-semibold">dogwang</span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Page;
