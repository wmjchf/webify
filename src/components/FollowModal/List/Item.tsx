import React from "react";
import { IUser } from "../../../service/public";
import { PlaceholderImage } from "../../PlaceholderImage";
import { DEFAULT_AVATAR } from "../../../constant/url";
import { FollowBtn } from "../../User/FollowBtn";
import { useCommonStore } from "../../../store/common";
import { Link, useRouter } from "../../../i18n/routing";
import { IAllCollect } from "../../../function/list";
import { useTranslations } from "next-intl";

interface IItem {
  data: IUser;
  allFollowList: IAllCollect[];
}
export const Item: React.FC<IItem> = (props) => {
  const { data, allFollowList } = props;
  const t = useTranslations("profile");
  const { user } = useCommonStore();
  return (
    <div className="flex justify-between items-center gap-2 p-2 rounded-md hover:bg-gray-100">
      <Link href={`/profile/${data.uid}`} target="_blank">
        <div className="flex items-center gap-4 cursor-pointer">
          <PlaceholderImage
            src={data.picture_url || DEFAULT_AVATAR}
            alt=""
            width={50}
            height={50}
            className="w-[50px] h-[50px] rounded-full shrink-0"
          ></PlaceholderImage>
          <div className="flex flex-col gap-2">
            <span className="font-bold">{data.nickname}</span>
            <span className="text-gray-400 text-sm line-clamp-1">
              {data.bio || t("defaultBio")}
            </span>
          </div>
        </div>
      </Link>
      <div>
        <FollowBtn
          user={user as IUser}
          followUserUid={data.uid}
          isFollowing={
            !!allFollowList.find((item) => item.follow_user_id === data?.id)
          }
        ></FollowBtn>
      </div>
    </div>
  );
};
