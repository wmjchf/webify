"use client";

import React, { useEffect } from "react";
import classNames from "classnames";
import { Select, SelectItem } from "@nextui-org/react";
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
  const { getSourceList, sourceList, getTypeList, typeList } = useCommonStore();
  useEffect(() => {
    getSourceList();
    getTypeList();
  }, []);
  return (
    <div className={classNames(styles.filterPage, "flex gap-2")}>
      {/* <Filter title="color" data={animals}></Filter>
      <Filter title="tag" data={animals1}></Filter>
      <Filter title="source" data={animals2}></Filter> */}
      <Select
        className="max-w-xs rounded-full overflow-hidden"
        placeholder="Choose Type"
      >
        <SelectItem key={-1}>全部</SelectItem>
        {sourceList &&
          sourceList.map((animal) => (
            <SelectItem key={animal.id}>{animal.name}</SelectItem>
          ))}
      </Select>
      <Select
        className="max-w-xs rounded-full overflow-hidden"
        placeholder="Choose Source"
      >
        <SelectItem key={-1}>全部</SelectItem>
        {typeList &&
          typeList.map((animal) => (
            <SelectItem key={animal.id}>{animal.name}</SelectItem>
          ))}
      </Select>
      <Select
        className="max-w-xs rounded-full overflow-hidden"
        placeholder="Choose Tag"
      >
        {animals.map((animal) => (
          <SelectItem key={animal.value}>{animal.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};
