"use client";
import { Input } from "@heroui/react";

export const Comment = () => {
  return (
    <div className="mt-4">
      <Input
        autoComplete="off"
        label=""
        className="rounded-full"
        placeholder="Add a comment"
        // className="rounded-full overflow-hidden border-solid border-2 border-indigo-600"
        // startContent={<i className="iconfont icon-sousuo"></i>}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            // router.push(`/${locale}/search/1?q=${inputRef.current?.value}`);
          }
        }}
      />
    </div>
  );
};
