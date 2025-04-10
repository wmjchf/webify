"use client";

import React from "react";

import styles from "./index.module.scss";
import classNames from "classnames";

import { IUser } from "../../service/public";
import { handleFollow } from "../../service/user";
import { DEFAULT_AVATAR } from "../../constant/url";
import { useCommonStore } from "../../store/common";
import { PlaceholderImage } from "../PlaceholderImage";
import { FollowBtn } from "./FollowBtn";
import { WalletLogin } from "../Login/WalletLogin";
import { useTranslations } from "next-intl";

interface IUserProps {
  user: IUser | null;
  isMy?: boolean;
}
export const User: React.FC<IUserProps> = (props) => {
  const t = useTranslations("profile");
  const { user: ServerUser, isMy = false } = props;
  const { user: clientUser, toggleFollowModalData } = useCommonStore();
  const user = isMy ? clientUser || ServerUser : ServerUser;

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
              {user?.bio || t("defaultBio")}
            </span>
          </div>
        </div>
        <div className="shrink-0">
          {!isMy && (
            <FollowBtn
              user={clientUser as IUser}
              followUserUid={ServerUser?.uid as number}
              isFollowing={!!user?.is_followed}
            ></FollowBtn>
          )}
        </div>
      </div>
      <div className="flex flex-row  gap-8 py-4 pl-16">
        <WalletLogin user={clientUser as IUser}>
          {(onClick) => {
            return (
              <div
                className="flex items-center cursor-pointer hover:underline"
                onClick={() => {
                  if (onClick) {
                    onClick();
                  } else {
                    toggleFollowModalData(`${user?.uid}`, "1");
                  }
                }}
              >
                <span className="text-[rgba(51,51,51,0.6)]">
                  following&nbsp;&nbsp;
                </span>
                <span className="font-bold text-[#333]">
                  {user?.following_total || 0}
                </span>
              </div>
            );
          }}
        </WalletLogin>
        <WalletLogin user={clientUser as IUser}>
          {(onClick) => {
            return (
              <div
                className="flex items-center gap-2 cursor-pointer hover:underline"
                onClick={() => {
                  if (onClick) {
                    onClick();
                  } else {
                    toggleFollowModalData(`${user?.uid}`, "2");
                  }
                }}
              >
                <span className="text-[rgba(51,51,51,0.6)]">
                  followers&nbsp;&nbsp;
                </span>
                <span className="font-bold text-[#333]">
                  {user?.followers_total || 0}
                </span>
              </div>
            );
          }}
        </WalletLogin>
      </div>
    </>
  );
};
