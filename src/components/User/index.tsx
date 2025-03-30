"use client";

import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import classNames from "classnames";

import { Button } from "@heroui/react";
import { IUser } from "../../service/public";
import { handleFollow } from "../../service/user";
import { DEFAULT_AVATAR } from "../../constant/url";
import { useCommonStore } from "../../store/common";
import { PlaceholderImage } from "../PlaceholderImage";
import { WalletLogin } from "../Login/WalletLogin";
import { FollowBtn } from "./FollowBtn";

interface IUserProps {
  user: IUser | null;
  isMy?: boolean;
}
export const User: React.FC<IUserProps> = (props) => {
  const { user: ServerUser, isMy = false } = props;
  const { user: clientUser } = useCommonStore();
  const user = isMy ? clientUser || ServerUser : ServerUser;
  const doFollow = async () => {
    const result = await handleFollow({
      typeId: 1,
      followUserId: user?.uid as number,
      status: 1,
    });
  };

  return (
    <>
      <div
        className={classNames(
          styles.user,
          "flex items-center justify-between gap-2 mb-2"
        )}
      >
        <div className="flex gap-5 shrink-0 flex-1">
          <PlaceholderImage
            alt={user?.nickname || "webify"}
            src={user?.picture_url || DEFAULT_AVATAR}
            width={40}
            height={40}
            imgClassName="object-cover"
            className="w-[40px] h-[40px] rounded-full shrink-0 relative top-2"
          />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">{user?.nickname}</span>
            <span className="text-sm">
              {user?.bio || "比较懒，还没有简介。"}
            </span>
          </div>
        </div>
        <div className="shrink-0">
          {!isMy && (
            <FollowBtn
              user={clientUser as IUser}
              followUserId={ServerUser?.uid as number}
            ></FollowBtn>
          )}
        </div>
      </div>
      <div className="flex flex-row  gap-8 py-4 pl-16">
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-[rgba(51,51,51,0.6)]">follower</span>
          <span className="font-bold text-[#333]">
            {user?.followers_count || 0}
          </span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-[rgba(51,51,51,0.6)]">fans</span>
          <span className="font-bold text-[#333]">
            {user?.following_count || 0}
          </span>
        </div>
      </div>
    </>
  );
};
