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

interface IUserProps {
  user: IUser | null;
  isCurrentUser?: boolean;
}
export const User: React.FC<IUserProps> = (props) => {
  const { user: ServerUser, isCurrentUser = false } = props;
  const { user: clientUser } = useCommonStore();
  const user = isCurrentUser ? clientUser || ServerUser : ServerUser;
  const doFollow = async () => {
    const result = await handleFollow({
      typeId: 1,
      followUserId: user?.uid as number,
      status: 1,
    });
  };

  return (
    <div
      className={classNames(
        styles.user,
        "flex items-center justify-between gap-2"
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
          <span className="text-sm">{user?.bio}</span>
        </div>
      </div>
      <div className="shrink-0">
        {!isCurrentUser && <Button>Follow</Button>}
      </div>
    </div>
  );
};
