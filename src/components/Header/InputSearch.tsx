"use client";
import { Input } from "@heroui/react";
import { useRef } from "react";
import { useRouter } from "../../i18n/routing";

export const InputSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  return (
    <div className={"h-full flex items-center"}>
      <Input
        ref={inputRef}
        label=""
        placeholder="search"
        // className="rounded-full overflow-hidden border-solid border-2 border-indigo-600"
        startContent={<i className="iconfont icon-sousuo"></i>}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            router.push(`/search/1?q=${inputRef.current?.value}`);
          }
        }}
      />
    </div>
  );
};
