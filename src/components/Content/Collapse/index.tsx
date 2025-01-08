"use client";

import React, { useState } from "react";
import classNames from "classnames";
import downSvg from "./image/down.svg";
import styles from "./index.module.scss";
import Image from "next/image";

interface ICollapse {
  children?: React.ReactNode;
  title: string;
}

export const Collapse: React.FC<ICollapse> = (props) => {
  const { title, children } = props;

  const [reserve, setReserve] = useState(false);

  return (
    <div className={classNames(styles.collapse)}>
      <div
        className={classNames(
          styles.collapse_title,
          "flex items-center justify-between px-4 cursor-pointer rounded-md"
        )}
        onClick={() => {
          setReserve(!reserve);
        }}
      >
        <span>{title}</span>
        <Image
          src={downSvg}
          width={20}
          height={20}
          alt=""
          className={classNames(styles.arrow, reserve && styles.reserve)}
        ></Image>
      </div>
      <div
        className={classNames(
          styles.collapse_content,
          reserve ? styles.close : styles.open
        )}
      >
        {children}
      </div>
    </div>
  );
};
