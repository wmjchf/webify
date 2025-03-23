"use client";

import React from "react";

import { WalletLogin } from "./WalletLogin";

import { DropDownUser } from "./DropDownUser";
import { IUser } from "../../service/public";
import { useCommonStore } from "../../store/common";
import { DEFAULT_AVATAR } from "../../constant/url";
import { PlaceholderImage } from "../PlaceholderImage";
import Image from "next/image";

interface ILogin {
  user: IUser | null;
}
export const Login: React.FC<ILogin> = (props) => {
  const { user } = props;
  const { user: clientUser } = useCommonStore();
  const mergeUser = clientUser || user;
  if (mergeUser) {
    return (
      <DropDownUser
        user={mergeUser}
        avatar={
          <PlaceholderImage
            alt={mergeUser.nickname || "webify"}
            src={mergeUser.picture_url || DEFAULT_AVATAR}
            width={30}
            height={30}
            imgClassName="object-cover"
            className="w-[30px] h-[30px] rounded-full"
          />
          // <Image
          //   src={mergeUser.picture_url || DEFAULT_AVATAR}
          //   width={30}
          //   height={30}
          //   alt=""
          // ></Image>
        }
      ></DropDownUser>
    );
  }
  return <WalletLogin />;
};
