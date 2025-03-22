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
}

export const Filter: React.FC<IFilter> = (props) => {
  const { data, title, className } = props;

  const [value, setValue] = useState<string>();

  return (
    <div className={classNames("flex flex-row gap-4", className)}>
      <div
        className={classNames("shrink-0 relative text-sm cursor-pointer", {
          "text-red-500": !value,
        })}
        onClick={() => {
          setValue(undefined);
        }}
      >
        {title}
      </div>
      <div className="flex flex-1 flex-row shrink-0 gap-8 flex-wrap">
        {data.map((item) => {
          return (
            <div
              className={classNames(
                "flex justify-center items-center text-sm cursor-pointer hover:text-blue-500",
                {
                  "text-red-500": value === item.value,
                }
              )}
              key={item.value}
              onClick={() => {
                setValue(item.value);
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
