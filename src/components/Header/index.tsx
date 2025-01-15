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
  Input,
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
        "flex w-full h-14 px-2.5 justify-between fixed top-0 left-0 bg-white z-20"
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
      <div className={classNames(styles.middle, "h-full flex items-center")}>
        <Input
          label=""
          placeholder="search"
          className="rounded-full overflow-hidden border-solid border-2 border-indigo-600"
          startContent={<i className="iconfont icon-sousuo"></i>}
        />
      </div>
      <div className={classNames(styles.right, "flex items-center gap-2")}>
        <Link href="/create">
          <Button
            startContent={<i className="iconfont icon-tianjia"></i>}
            // size="sm"
            color="danger"
            variant="light"
          >
            Share
          </Button>
        </Link>

        {/* <WalletLogin></WalletLogin> */}
        <Dropdown>
          <DropdownTrigger>
            <Image
              alt="NextUI hero Image"
              src="https://nextui.org/images/hero-card-complete.jpeg"
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
