"use client";

import React from "react";
import classNames from "classnames";
import { Select, SelectItem } from "@heroui/react";
import { useCommonStore } from "../../store/common";

interface IFilterPage {
  className?: string;
  onSourceChange?: (id: string) => void;
  onTypeChange?: (id: string) => void;
}

export const FilterPage: React.FC<IFilterPage> = (props) => {
  const { className, onSourceChange, onTypeChange } = props;
  const { articleSource, articleType } = useCommonStore();

  return (
    <div className={classNames("flex gap-2", className)}>
      {
        <Select
          className="max-w-xs rounded-full overflow-hidden"
          placeholder="Choose Source"
          onChange={(event) => {
            onSourceChange && onSourceChange(event.target.value);
          }}
        >
          {articleSource?.map((item) => {
            return <SelectItem key={item.id}>{item.name}</SelectItem>;
          })}
        </Select>
      }
      {
        <Select
          className="max-w-xs rounded-full overflow-hidden"
          placeholder="Choose Type"
          onChange={(event) => {
            onTypeChange && onTypeChange(event.target.value);
          }}
        >
          {articleType?.map((item) => {
            return <SelectItem key={item.id}>{item.name}</SelectItem>;
          })}
        </Select>
      }
    </div>
  );
};
