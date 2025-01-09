"use client";

import React from "react";
import classNames from "classnames";
import { Select, SelectItem } from "@nextui-org/react";
import styles from "./index.module.scss";

interface IFilterPage {}
export const animals = [
  { key: "solana", label: "solana" },
  { key: "ethereum", label: "ethereum" },
  { key: "elephant", label: "Elephant" },
];
export const FilterPage: React.FC<IFilterPage> = (props) => {
  return (
    <div className={classNames(styles.filterPage, "flex gap-2")}>
      <Select className="max-w-xs" label="Source" placeholder="Choose Source">
        {animals.map((animal) => (
          <SelectItem key={animal.key}>{animal.label}</SelectItem>
        ))}
      </Select>
      <Select className="max-w-xs" label="Tag" placeholder="Choose Tag">
        {animals.map((animal) => (
          <SelectItem key={animal.key}>{animal.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};
