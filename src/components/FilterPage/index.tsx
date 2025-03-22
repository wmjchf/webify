"use client";

import React from "react";
import classNames from "classnames";
import { Select, SelectItem } from "@heroui/react";
import { useCommonStore } from "../../store/common";
import styles from "./index.module.scss";

interface IFilterPage {}

export const FilterPage: React.FC<IFilterPage> = () => {
  const { articleSource, articleType } = useCommonStore();

  return (
    <div className={classNames(styles.filterPage, "flex gap-2")}>
      {articleSource && (
        <Select
          className="max-w-xs rounded-full overflow-hidden"
          placeholder="Choose Type"
        >
          {articleSource?.map((item) => {
            return <SelectItem key={item.id}>{item.name}</SelectItem>;
          })}
        </Select>
      )}
      {articleType && (
        <Select
          className="max-w-xs rounded-full overflow-hidden"
          placeholder="Choose Source"
        >
          {articleType?.map((item) => {
            return <SelectItem key={item.id}>{item.name}</SelectItem>;
          })}
        </Select>
      )}
    </div>
  );
};
