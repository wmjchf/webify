import classNames from "classnames";
import Image from "next/image";
import { Button } from "@nextui-org/react";

import { Link } from "../../i18n/routing";

import { WalletLogin } from "../Login/WalletLogin";
import styles from "./index.module.scss";
// import { ConnectWallet } from "../Login/ConnectWallet";

export const Header = () => {
  return (
    <div
      id="header"
      className={classNames(
        styles.header,
        "flex w-full h-14 px-2.5 justify-between"
      )}
    >
      <div
        className={classNames(
          styles.left,
          "flex h-full items-center text-2xl font-bold italic"
        )}
      >
        <Image
          src="/image/header/logo.png"
          height={40}
          width={112}
          alt=""
        ></Image>
      </div>
      <div className={styles.middle}></div>
      <div className={classNames(styles.right, "flex items-center gap-2")}>
        <Button
          startContent={<i className="iconfont icon-tianjia"></i>}
          // size="sm"
          variant="light"
        >
          <Link href="/create">Share</Link>
        </Button>
        <WalletLogin></WalletLogin>
        {/* <EmailLogin></EmailLogin> */}
      </div>
    </div>
  );
};
