"use client";
import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import classNames from "classnames";
import { DEFAULT_AVATAR } from "../../../../../../constant/url";
import { Button } from "@heroui/react";

import { handleFollow, IUser } from "../../../../../../service/user";
import { useCommonStore } from "../../../../../../store/common";

interface IUserProps {
  user: IUser;
}
export const User: React.FC<IUserProps> = (props) => {
  const { user } = props;
  // const { user: clientUser } = useCommonStore();

  const merge = user;

  const doFollow = async () => {
    const result = await handleFollow({
      typeId: 1,
      followUserId: user.id,
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
        <Image
          alt="NextUI hero Image"
          src={merge?.pictureUrl || DEFAULT_AVATAR}
          width={102}
          height={76}
          className={classNames(styles.avatar, "shrink-0")}
        />
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{merge?.nickname}</span>
          <span className="text-sm">{user?.bio}</span>
        </div>
      </div>
      <div className="shrink-0">
        <Button>Follow</Button>
      </div>
    </div>
  );
};
