import classNames from "classnames";
import Image from "next/image";
import { Button, Input } from "@heroui/react";
import { Link } from "../../i18n/routing";

import styles from "./index.module.scss";
import { fetcherCurrentUser } from "../../function/user";
import { Login } from "../Login";
import { WalletLogin } from "../Login/WalletLogin";
import { ShareBtn } from "./ShareBtn";

interface IHeader {}
export const Header: React.FC<IHeader> = async (props) => {
  const { user } = await fetcherCurrentUser();
  return (
    <div
      id="header"
      className={classNames(
        styles.header,
        "flex w-full h-14 px-2.5 justify-between fixed top-0 left-0 bg-white z-30"
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
      <div className={classNames(styles.middle, "h-full flex items-center")}>
        <Input
          label=""
          placeholder="search"
          // className="rounded-full overflow-hidden border-solid border-2 border-indigo-600"
          startContent={<i className="iconfont icon-sousuo"></i>}
        />
      </div>
      <div className={classNames(styles.right, "flex items-center gap-2")}>
        <ShareBtn user={user}></ShareBtn>
        <Login user={user}></Login>
        {/* <EmailLogin></EmailLogin> */}
      </div>
    </div>
  );
};
