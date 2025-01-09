"use client";

import React from "react";

import styles from "./index.module.scss";
import classNames from "classnames";
import { Link, usePathname } from "../../../../i18n/routing";
import { Button } from "@nextui-org/react";

export const Nav = () => {
  const path = usePathname();
  return (
    <div className={classNames(styles.router_list, "flex items-center gap-2")}>
      <Link href={"/profile/shareLink"}>
        <Button
          radius="full"
          size="sm"
          variant={path === "/profile/shareLink" ? "flat" : "light"}
        >
          <span className="text-sm font-semibold">Share Link</span>
        </Button>
      </Link>
      <Link href={"/profile/collection"}>
        <Button
          radius="full"
          size="sm"
          variant={path === "/profile/collection" ? "flat" : "light"}
        >
          <span className="text-sm font-semibold">Collection</span>
        </Button>
      </Link>

      <Link href={"/profile/readLater"}>
        <Button
          radius="full"
          size="sm"
          variant={path === "/profile/readLater" ? "flat" : "light"}
        >
          <span className="text-sm font-semibold">Read Later</span>
        </Button>
      </Link>

      <Link href={"/profile/history"}>
        <Button
          radius="full"
          size="sm"
          variant={path === "/profile/history" ? "flat" : "light"}
        >
          <span className="text-sm font-semibold">History</span>
        </Button>
      </Link>

      <Link href={"/profile/following"}>
        <Button
          radius="full"
          size="sm"
          variant={path === "/profile/following" ? "flat" : "light"}
        >
          <span className="text-sm font-semibold">Following</span>
        </Button>
      </Link>

      <Link href={"/profile/fans"}>
        <Button
          radius="full"
          size="sm"
          variant={path === "/profile/fans" ? "flat" : "light"}
        >
          <span className="text-sm font-semibold">Fans</span>
        </Button>
      </Link>
    </div>
  );
};
