"use client";

import React, { useEffect } from "react";
import classNames from "classnames";
import { Select, SelectItem } from "@heroui/react";
import styles from "./index.module.scss";
import { Filter } from "../Filter";
import { useCommonStore } from "../../store/common";

interface IFilterPage {}
export const animals = [
  { value: "solana", label: "solana" },
  { value: "ethereum", label: "ethereum" },
  { value: "elephant", label: "Elephant" },
];
export const animals1 = [
  { value: "solana", label: "solana" },
  { value: "ethereum", label: "ethereum" },
  { value: "elephant", label: "Elephant" },
  { value: "sui", label: "sui" },
  { value: "bsc", label: "bsc" },
  { value: "base", label: "base" },
  { value: "flame", label: "flame" },
  { value: "focai", label: "focai" },
];
export const animals2 = [
  { value: "flame", label: "flame" },
  { value: "ethereum", label: "ethereum" },
  { value: "elephant", label: "Elephant" },
];
//flex flex-col gap-4
export const FilterPage: React.FC<IFilterPage> = (props) => {
  const { sourceList, typeList } = useCommonStore();

  return (
    <div className={classNames(styles.filterPage, "flex gap-2")}>
      {/* <Select
        className="max-w-xs rounded-full overflow-hidden"
        placeholder="Choose Type"
        items={sourceList?.map((item) => {
          return {
            value: item.id,
            label: item.name,
          };
        })}
      >
        {(source) => <SelectItem key={source.value}>{source.label}</SelectItem>}
      </Select> */}
      {/* <Select
        className="max-w-xs rounded-full overflow-hidden"
        placeholder="Choose Source"
        items={typeList?.map((item) => {
          return {
            value: item.id,
            label: item.name,
          };
        })}
      >
        {(type) => <SelectItem key={type.value}>{type.label}</SelectItem>}
      </Select> */}
      {/* <Select
        className="max-w-xs rounded-full overflow-hidden"
        placeholder="Choose Tag"
      >
        {animals.map((animal) => (
          <SelectItem key={animal.value}>{animal.label}</SelectItem>
        ))}
      </Select> */}
    </div>
  );
};
