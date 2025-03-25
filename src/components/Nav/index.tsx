"use client";

import React from "react";

import classNames from "classnames";
import { Link, usePathname } from "../../i18n/routing";
import { Button } from "@heroui/react";

export const Nav = () => {
  const path = usePathname();

  return (
    <div className={classNames("flex items-center gap-2")}>
      <Link href={"/my/share"}>
        <Button
          radius="full"
          size="sm"
          variant={"flat"}
          className={classNames(
            path === "/my/share" ? "bg-[#f31260] text-white" : "bg-transparent"
          )}
        >
          <span className="text-sm font-semibold">Share Link</span>
        </Button>
      </Link>
      <Link href={"/my/collect"}>
        <Button
          radius="full"
          size="sm"
          variant={"flat"}
          className={classNames(
            path === "/my/collect"
              ? "bg-[#f31260] text-white"
              : "bg-transparent"
          )}
        >
          <span className="text-sm font-semibold">Collection</span>
        </Button>
      </Link>

      <Link href={"/my/later"}>
        <Button
          radius="full"
          size="sm"
          variant={"flat"}
          className={classNames(
            path === "/my/later" ? "bg-[#f31260] text-white" : "bg-transparent"
          )}
        >
          <span className="text-sm font-semibold">Read Later</span>
        </Button>
      </Link>

      <Link href={"/my/history"}>
        <Button
          radius="full"
          size="sm"
          variant={"flat"}
          className={classNames(
            path === "/my/history"
              ? "bg-[#f31260] text-white"
              : "bg-transparent"
          )}
        >
          <span className="text-sm font-semibold">History</span>
        </Button>
      </Link>
    </div>
  );
};
