"use client";

import classNames from "classnames";
import React, { useState } from "react";
import styles from "./index.module.scss";
import { Button, Chip } from "@nextui-org/react";

interface IItem {
  value: string;
  label: string;
}

interface IFilter {
  data: IItem[];
  title?: string;
}

export const Filter: React.FC<IFilter> = (props) => {
  const { data, title } = props;

  const [value, setValue] = useState<string[]>([]);

  return (
    <div className={classNames(styles.filter, "flex gap-5 items-center")}>
      {/* <span className={classNames(styles.title, "text-sm")}>{title}</span> */}
      <Chip color="danger" variant="dot">
        {title}
      </Chip>
      <div className={classNames("flex gap-1 items-center", styles.content)}>
        <Button
          radius="full"
          size="sm"
          onPress={() => {
            setValue([]);
          }}
          variant={value.length != 0 ? "light" : "solid"}
          color={value.length != 0 ? "secondary" : "danger"}
        >
          <span
            className={classNames(
              value.length != 0 && styles.custom,
              "text-sm"
            )}
          >
            all
          </span>
        </Button>
        {data.map((item) => {
          return (
            // <div
            //   className={classNames(
            //     styles.item,
            //     value.includes(item.value) && "text-blue-600",
            //     "text-sm cursor-pointer hover:text-blue-600"
            //   )}
            //   key={item.value}
            //   onClick={() => {
            //     const newSet = new Set([...value, item.value]);
            //   }}
            // >
            //   <span>{item.label}</span>
            // </div>
            <Button
              onPress={() => {
                // const exist = value.find((v) => v === item.value);
                // if (mult) {
                //   if (exist) {
                //     setValue(value.filter((v) => v !== item.value));
                //   } else {
                //     setValue([...value, item.value]);
                //   }
                // } else {
                //   setValue([item.value]);
                // }
                setValue([item.value]);
              }}
              radius="full"
              size="sm"
              variant={!value.includes(item.value) ? "light" : "solid"}
              key={item.value}
              color={!value.includes(item.value) ? "default" : "danger"}
            >
              <span
                className={classNames(
                  !value.includes(item.value) && styles.custom,
                  "text-sm"
                )}
              >
                {item.label}
              </span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
