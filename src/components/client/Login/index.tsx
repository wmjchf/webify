import classNames from "classnames";
import Image from "next/image";
import React from "react";

import styles from "./index.module.scss";
import { WalletLogin } from "./WalletLogin";

import { BASE_URL, DEFAULT_AVATAR } from "../../../constant/url";

import { cookies } from "next/headers";

import { DropDownUser } from "./DropDownUser";
import { IUser } from "../../../service/user";
import { fetcherUser } from "../../../function/user";

interface ILogin {}
export const Login: React.FC<ILogin> = async (props) => {
  const { user, token } = await fetcherUser();
  if (token) {
    return (
      <DropDownUser
        user={user}
        avatar={
          <Image
            alt="NextUI hero Image"
            src={(user as IUser)?.pictureUrl || DEFAULT_AVATAR}
            width={102}
            height={76}
            className={classNames(styles.avatar)}
          />
        }
      ></DropDownUser>
    );
  }
  return <WalletLogin />;
};
