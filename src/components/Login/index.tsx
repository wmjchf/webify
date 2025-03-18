"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import classNames from "classnames";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styles from "./index.module.scss";
import { WalletLogin } from "./WalletLogin";
import { ConfirmWallet, IConfirmWalletRef } from "./ConfirmWallet";
import { useDisconnect } from "wagmi";
import { useCommonStore } from "../../store/common";
import { useRouter } from "../../i18n/routing";
import { DEFAULT_AVATAR } from "../../constant/url";
import { IUser } from "../../service/user";

interface ILogin {
  token?: string;
  user?: IUser;
}
export const Login: React.FC<ILogin> = (props) => {
  const { token, user } = props;
  const { push } = useRouter();
  const { logout, token: localToken, setUserInfo } = useCommonStore();
  const confirmWalletRef = useRef<IConfirmWalletRef>(null);
  const { disconnect } = useDisconnect({
    mutation: {
      onSuccess() {
        logout();
      },
    },
  });

  useEffect(() => {
    setUserInfo(user || null);
  }, []);

  const mergeToken = token || localToken;

  return (
    <>
      {mergeToken ? (
        <Dropdown>
          <DropdownTrigger>
            <Image
              alt="NextUI hero Image"
              src={user?.pictureUrl || DEFAULT_AVATAR}
              width={102}
              height={76}
              className={classNames(styles.avatar)}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Dropdown menu with icons" variant="faded">
            <DropdownItem
              key="profile"
              startContent={<i className={"iconfont icon-Profile text-5xl"} />}
              onPress={() => {
                push(`/profile/${user?.id}`);
              }}
            >
              Profile
            </DropdownItem>
            <DropdownItem
              key="setting"
              startContent={<i className={"iconfont icon-shezhi text-5xl"} />}
              onPress={() => {
                push("/setting");
              }}
            >
              Setting
            </DropdownItem>
            <DropdownItem
              key="logout"
              startContent={
                <i className={"iconfont icon-tuichudenglu text-5xl"} />
              }
              onPress={() => {
                disconnect();
              }}
            >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <>
          <WalletLogin
            onClick={() => {
              confirmWalletRef.current?.open &&
                confirmWalletRef.current?.open();
            }}
          ></WalletLogin>
          <ConfirmWallet ref={confirmWalletRef}></ConfirmWallet>
        </>
      )}
    </>
  );
};
