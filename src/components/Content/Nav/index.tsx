"use client";

import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import { IconItem } from "../../IconItem";
import { Divider } from "@nextui-org/react";
import { usePathname } from "../../../i18n/routing";
import { Collapse } from "../Collapse";

interface INav {}

export const Nav: React.FC<INav> = (props) => {
  const path = usePathname();
  return (
    <div
      className={classNames(
        styles.nav,
        "h-full bg-white fixed top-14 left-0 z-10"
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
        <div>
          <Collapse title="MY">
            <IconItem
              icon="icon-shaohouyuedu"
              title="Read later"
              isSelected={path === "/readLater"}
              href={"/readLater"}
            ></IconItem>
            <IconItem
              icon="icon-shoucangjia"
              title="Collection"
              isSelected={path === "/collection"}
              href={"/collection"}
            ></IconItem>
            <IconItem
              icon="icon-lishijilu"
              title="History"
              isSelected={path === "/history"}
              href={"/history"}
            ></IconItem>
            <IconItem
              icon="icon-dianzan"
              title="Favorite"
              isSelected={path === "/favorite"}
              href={"/favorite"}
            ></IconItem>
            <div className="py-3">
              <Divider></Divider>
            </div>
            <IconItem
              icon="icon-fenxiang"
              title="Share"
              isSelected={path === "/share"}
              href={"/share"}
            ></IconItem>
            <IconItem
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
            ></IconItem>
          </Collapse>
        </div>
      </div>
    </div>
  );
};
