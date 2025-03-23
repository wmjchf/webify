"use client";

import React from "react";
import classNames from "classnames";
import { Select, SelectItem } from "@heroui/react";
import { useCommonStore } from "../../store/common";

interface IFilterPage {
  className?: string;
}

export const FilterPage: React.FC<IFilterPage> = (props) => {
  const { className } = props;
  const { articleSource, articleType } = useCommonStore();

  return (
    <div className={classNames("flex gap-2", className)}>
      {
        <Select
          className="max-w-xs rounded-full overflow-hidden"
          placeholder="Choose Type"
        >
          {articleSource?.map((item) => {
            return <SelectItem key={item.id}>{item.name}</SelectItem>;
          })}
        </Select>
      }
      {
        <Select
          className="max-w-xs rounded-full overflow-hidden"
          placeholder="Choose Source"
        >
          {articleType?.map((item) => {
            return <SelectItem key={item.id}>{item.name}</SelectItem>;
          })}
        </Select>
      }
    </div>
  );
};
