"use client";
import { Tab, Tabs } from "@heroui/react";
import classNames from "classnames";
import Image from "next/image";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";

interface IHeader {
  locale: string;
}
export const Header: React.FC<IHeader> = async (props) => {
  const { locale } = props;
  const pathname = usePathname();
  console.log(pathname, "rewrwrw");
  return (
    <div
      id="header"
      className={classNames(
        "flex w-full h-14 px-6 justify-center items-center fixed top-0 left-0 z-30"
      )}
    >
      <div className="flex w-full h-full max-w-[1550px] justify-between">
        <div
          className={classNames(
            "flex h-full items-center text-2xl font-bold italic"
          )}
        >
          <Image
            src="/image/header/logo.png"
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
            selectedKey={pathname}
          >
            <Tab
              key={`/${locale}/about`}
              title="About Us"
              href={`/${locale}/about`}
            />
            <Tab
              key={`/${locale}/points`}
              title="Points Tokenomics"
              href={`/${locale}/points`}
            />
            <Tab
              key={`/${locale}/join`}
              title="Join Us"
              href={`/${locale}/join`}
            />
          </Tabs>
        </div>
      </div>
    </div>
  );
};
