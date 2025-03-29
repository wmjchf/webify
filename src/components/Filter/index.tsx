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
  value?: string;
  multiple?: boolean;
}

export const Filter: React.FC<IFilter> = (props) => {
  const { data, title, className, onChange, value, multiple } = props;

  return (
    <div className={classNames("flex flex-row", className)}>
      {title && (
        <div
          className={classNames(
            "shrink-0 h-[28px]  px-3 mr-4 box-border hover:text-red-500 relative text-sm cursor-pointer flex justify-center items-center rounded-full",
            {
              "text-[#f31260]": value?.includes("0"),
              "bg-red-100": value?.includes("0"),
              "border-[#f31260]": value?.includes("0"),
              border: true,
              "text-gray-900": !value?.includes("0"),
            }
          )}
          onClick={() => {
            if (value?.includes("0")) {
              const newValue = value
                .split(",")
                .filter((item) => item !== "0")
                .join(",");
              onChange && onChange(newValue);
            } else {
              const newValue = multiple ? (value ? `${value},0` : "0") : "0";
              onChange && onChange(newValue);
            }
          }}
        >
          {title}
        </div>
      )}

      <div className="flex flex-1 flex-row shrink-0 gap-5 flex-wrap">
        {data.map((item) => {
          return (
            <div
              className={classNames(
                "flex justify-center box-border items-center text-sm cursor-pointer hover:text-red-500 h-[28px] px-3 rounded-full",
                {
                  "text-[#f31260]": value?.includes(item.value),
                  "bg-red-100": value?.includes(item.value),
                  "text-gray-900": !value?.includes(item.value),
                  "border-[#f31260]": value?.includes(item.value),
                  border: true
                }
              )}
              key={item.value}
              onClick={() => {
                if (value?.includes(item.value)) {
                  const newValue = value
                    .split(",")
                    .filter((child) => child !== item.value)
                    .join(",");
                  onChange && onChange(newValue);
                } else {
                  const newValue = multiple
                    ? value
                      ? `${value},${item.value}`
                      : item.value
                    : item.value;
                  onChange && onChange(newValue);
                }
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
