"use client";

import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import { IconItem } from "../../IconItem";
import { Divider } from "@heroui/react";
import { usePathname } from "../../../i18n/routing";
import { Collapse } from "../Collapse";
import { AuthClientComponent } from "../../AuthClientComponent";
import Link from "next/link";
import Image from "next/image";

interface INav {
  token?: string;
}

export const Nav: React.FC<INav> = (props) => {
  const { token } = props;
  const path = usePathname();
  return (
    <div
      className={classNames(
        styles.nav,
        "h-[calc(100vh-56px)] bg-white flex flex-col justify-between fixed top-14 left-0 z-10"
      )}
    >
      <div className={classNames(styles.nav_common, "p-3")}>
        <div>
          <IconItem
            icon="icon-home"
            title="Home"
            isSelected={path === "/"}
            href={"/"}
          ></IconItem>
          <IconItem
            icon="icon-dingyue"
            title="Subscribe"
            isSelected={path === "/subscribe"}
            href={"/subscribe"}
          ></IconItem>
          {/* <IconItem icon="icon-privilege" title="Privilege"></IconItem>
          <IconItem icon="icon-photo" title="Photo"></IconItem> */}
        </div>
        <div className="py-3">
          <Divider></Divider>
        </div>
        {/* <div>
          <IconItem
            icon="icon-guanyuwomen"
            title="About us"
            isSelected={path === "/about"}
            href={"/about"}
          ></IconItem>
        </div> */}
        <AuthClientComponent token={token}>
          <div>
            <Collapse title="MY">
              <IconItem
                icon="icon-fenxiang"
                title="Share Link"
                isSelected={path === "/my/share"}
                href={"/my/share"}
              ></IconItem>

              <IconItem
                icon="icon-shoucangjia"
                title="Collection"
                isSelected={path === "/my/collect"}
                href={"/my/collect"}
              ></IconItem>
              <IconItem
                icon="icon-shaohouyuedu"
                title="Read Later"
                isSelected={path === "/my/later"}
                href={"/my/later"}
              ></IconItem>
              <IconItem
                icon="icon-lishijilu"
                title="History"
                isSelected={path === "/my/history"}
                href={"/my/history"}
              ></IconItem>

              {/* <div className="py-3">
              <Divider></Divider>
            </div> */}
              {/* <IconItem
              icon="icon-wodeguanzhu"
              title="Following"
              isSelected={path === "/following"}
              href={"/following"}
            ></IconItem>
            <IconItem
              icon="icon-beiguanzhu"
              title="Fan"
              isSelected={path === "/fans"}
              href={"/fans"}
            ></IconItem> */}
            </Collapse>
          </div>
        </AuthClientComponent>
      </div>
      <div className="flex items-center justify-center w-full h-[60px] gap-8">
        <Link href="https://x.com/webifydao" target="_blank">
          <Image
            src="/image/social/x.svg"
            alt="x"
            width={20}
            height={20}
          ></Image>
        </Link>
        <Link href="https://t.me/webifyDao" target="_blank">
          <Image
            src="/image/social/telegram.svg"
            alt="telegram"
            width={20}
            height={20}
          ></Image>
        </Link>
        <Link href="https://discord.gg/Q87B4nWg7v" target="_blank">
          <Image
            src="/image/social/discord.svg"
            alt="discord"
            width={20}
            height={20}
          ></Image>
        </Link>
      </div>
    </div>
  );
};
