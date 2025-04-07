"use client";
import { Tab, Tabs } from "@heroui/react";
import classNames from "classnames";
import Image from "next/image";
import styles from "./index.module.scss";

interface IHeader {}
export const Header: React.FC<IHeader> = async (props) => {
  return (
    <div
      id="header"
      className={classNames(
        "flex w-full h-14 px-2.5 justify-center items-center fixed top-0 left-0 z-30"
      )}
    >
      <div className="flex w-full h-full max-w-[1550px] justify-between">
        <div
          className={classNames(
            "flex h-full items-center text-2xl font-bold italic"
          )}
        >
          <Image
            src="/image/header/logo.svg"
            height={40}
            width={128}
            alt=""
          ></Image>
        </div>
        <div className={classNames("flex h-full")}>
          <Tabs
            aria-label="Tabs variants"
            variant={"underlined"}
            className={styles.tabs}
          >
            <Tab key="about" title="About Us" onClick={() => {}} />
            <Tab key="Points Tokenomics" title="Points Tokenomics" />
            <Tab key="join" title="Join Us" />
          </Tabs>
        </div>
      </div>
    </div>
  );
};
