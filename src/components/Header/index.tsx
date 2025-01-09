"use client";

import classNames from "classnames";
import Image from "next/image";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

import { Link, useRouter } from "../../i18n/routing";

import { WalletLogin } from "../Login/WalletLogin";
import styles from "./index.module.scss";
// import { ConnectWallet } from "../Login/ConnectWallet";

export const Header = () => {
  const { push } = useRouter();
  return (
    <div
      id="header"
      className={classNames(
        styles.header,
        "flex w-full h-14 px-2.5 justify-between"
      )}
    >
      <div
        className={classNames(
          styles.left,
          "flex h-full items-center text-2xl font-bold italic"
        )}
      >
        <Image
          src="/image/header/logo.png"
          height={40}
          width={112}
          alt=""
        ></Image>
      </div>
      <div className={styles.middle}></div>
      <div className={classNames(styles.right, "flex items-center gap-2")}>
        <Link href="/create">
          <Button
            startContent={<i className="iconfont icon-tianjia"></i>}
            // size="sm"
            variant="light"
          >
            Share
          </Button>
        </Link>

        {/* <WalletLogin></WalletLogin> */}
        <Dropdown>
          <DropdownTrigger>
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              size="sm"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Dropdown menu with icons" variant="faded">
            <DropdownItem
              key="profile"
              startContent={<i className={"iconfont icon-Profile text-5xl"} />}
              onPress={() => {
                push("/profile");
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
            >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {/* <EmailLogin></EmailLogin> */}
      </div>
    </div>
  );
};
