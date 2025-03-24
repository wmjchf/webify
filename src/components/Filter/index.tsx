"use client";

import classNames from "classnames";
import React, { useState } from "react";
import styles from "./index.module.scss";
import { Button, Chip } from "@heroui/react";

interface IItem {
  value: string;
  label: string;
}

interface IFilter {
  data: IItem[];
  title?: string;
  className?: string;
  onChange?: (value: string) => void;
}

export const Filter: React.FC<IFilter> = (props) => {
  const { data, title, className, onChange } = props;

  const [value, setValue] = useState<string>("0");

  return (
    <div className={classNames("flex flex-row", className)}>
      <div
        className={classNames(
          "shrink-0 h-[28px]  px-3 mr-4 box-border hover:text-red-500 relative text-sm cursor-pointer flex justify-center items-center rounded-full",
          {
            "text-[#f31260]": value === "0",
            "bg-red-100": value === "0",
            "border-[#f31260]": value === "0",
            border: value === "0",
            "text-gray-900": value !== "0",
          }
        )}
        onClick={() => {
          setValue("0");
          onChange && onChange("0");
        }}
      >
        {title}
      </div>
      <div className="flex flex-1 flex-row shrink-0 gap-5 flex-wrap">
        {data.map((item) => {
          return (
            <div
              className={classNames(
                "flex justify-center box-border items-center text-sm cursor-pointer hover:text-red-500 h-[28px] px-3 rounded-full",
                {
                  "text-[#f31260]": value === item.value,
                  "bg-red-100": value === item.value,
                  "text-gray-900": value !== item.value,
                  "border-[#f31260]": value === item.value,
                  border: value === item.value,
                }
              )}
              key={item.value}
              onClick={() => {
                setValue(item.value);
                onChange && onChange(item.value);
              }}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
