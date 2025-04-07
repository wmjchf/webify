"use client";
import { Input } from "@heroui/react";
import React, { useRef } from "react";
import PagesTopLoader from "nextjs-toploader";
// import { useRouter } from "../../i18n/routing";
import { useRouter } from "nextjs-toploader/app";

interface IInputSearch {
  locale: string;
}
export const InputSearch: React.FC<IInputSearch> = (props) => {
  const { locale } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  return (
    <div className={"h-full flex items-center"}>
      <Input
        autoComplete="off"
        ref={inputRef}
        label=""
        placeholder="search"
        // className="rounded-full overflow-hidden border-solid border-2 border-indigo-600"
        startContent={<i className="iconfont icon-sousuo"></i>}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            router.push(`/${locale}/search/1?q=${inputRef.current?.value}`);
          }
        }}
      />
    </div>
  );
};
