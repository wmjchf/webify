import React from "react";
import { IUser } from "../../../service/public";
import { PlaceholderImage } from "../../PlaceholderImage";
import { DEFAULT_AVATAR } from "../../../constant/url";

interface IItem {
  data: IUser;
}
export const Item: React.FC<IItem> = (props) => {
  const { data } = props;
  return <div className="flex items-center gap-4">
    <PlaceholderImage src={data.picture_url||DEFAULT_AVATAR} alt="" width={50} height={50} className="w-[50px] h-[50px] rounded-full"></PlaceholderImage>
    <div className="flex flex-col gap-2">
      <span className="font-bold">{data.nickname}</span>
    </div>
  </div>;
}
