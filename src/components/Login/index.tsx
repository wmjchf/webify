"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { useDisconnect } from "wagmi";
import styles from "./index.module.scss";
import { WalletLogin } from "./WalletLogin";

import { useCommonStore } from "../../store/common";

import { DEFAULT_AVATAR } from "../../constant/url";

import Link from "next/link";

interface ILogin {}
export const Login: React.FC<ILogin> = (props) => {
  const { logout, token, user } = useCommonStore();
  const { disconnect } = useDisconnect({
    mutation: {
      onSuccess() {
        logout();
      },
    },
  });

  return (
    <>
      {token ? (
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
            >
              <Link href={`/profile/${user?.id}`}> Profile</Link>
            </DropdownItem>
            <DropdownItem
              key="setting"
              startContent={<i className={"iconfont icon-shezhi text-5xl"} />}
            >
              <Link href={`/setting`}>Setting</Link>
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
        <WalletLogin />
      )}
    </>
  );
};
