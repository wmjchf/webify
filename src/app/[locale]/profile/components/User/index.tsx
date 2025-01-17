"use client";
import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import classNames from "classnames";
import { DEFAULT_AVATAR } from "../../../../../constant/url";
import { Button } from "@nextui-org/react";
import { useCommonStore } from "../../../../../store/common";

export const User = () => {
  const { user } = useCommonStore();

  return (
    <div
      className={classNames(styles.user, "flex items-center justify-between")}
    >
      <div className="flex gap-5 shrink-0 flex-1">
        <Image
          alt="NextUI hero Image"
          src={user?.pictureUrl || DEFAULT_AVATAR}
          width={102}
          height={76}
          className={classNames(styles.avatar, "shrink-0")}
        />
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{user?.nickname}</span>
          <span className="text-sm">{user?.bio}</span>
        </div>
      </div>
      <div className="shrink-0">
        <Button>Follow</Button>
      </div>
    </div>
  );
};
