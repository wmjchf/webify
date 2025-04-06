"use client";

import React from "react";

import classNames from "classnames";

import { Button } from "@heroui/react";
import { Link, usePathname } from "../../../../i18n/routing";
import { useSearchParams } from "next/navigation";

interface INav {}
export const Nav: React.FC<INav> = (props) => {
  const path = usePathname();
  const searchParams = useSearchParams();
  return (
    <div className={classNames("flex items-center gap-2 py-4")}>
      <Link href={`/search/1?q=${searchParams.get("q")}`}>
        <Button
          radius="full"
          size="sm"
          variant={"flat"}
          className={classNames(
            path.includes("/search/1")
              ? "bg-[#f31260] text-white"
              : "bg-transparent"
          )}
        >
          <span className="text-sm font-semibold">Posts</span>
        </Button>
      </Link>

      <Link href={`/search/2?q=${searchParams.get("q")}`}>
        <Button
          radius="full"
          size="sm"
          variant={"flat"}
          className={classNames(
            path.includes("/search/2")
              ? "bg-[#f31260] text-white"
              : "bg-transparent"
          )}
        >
          <span className="text-sm font-semibold">People</span>
        </Button>
      </Link>
    </div>
  );
};
