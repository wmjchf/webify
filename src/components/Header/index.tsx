import classNames from "classnames";
import Image from "next/image";

import styles from "./index.module.scss";
import { fetcherCurrentUser } from "../../function/user";
import { Login } from "../Login";
import { WalletLogin } from "../Login/WalletLogin";
import { ShareBtn } from "./ShareBtn";
import { InputSearch } from "./InputSearch";

interface IHeader {}
export const Header: React.FC<IHeader> = async (props) => {
  const { user } = await fetcherCurrentUser();
  return (
    <div
      id="header"
      className={classNames(
        styles.header,
        "flex w-full h-14 px-6 justify-between fixed top-0 left-0 bg-white z-30 border-b border-gray-200"
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
          width={216}
          alt=""
        ></Image>
      </div>
      <div className={classNames(styles.middle, "h-full flex items-center")}>
        <InputSearch></InputSearch>
      </div>
      <div className={classNames(styles.right, "flex items-center gap-2")}>
        <ShareBtn user={user}></ShareBtn>
        <Login user={user}></Login>
        {/* <EmailLogin></EmailLogin> */}
      </div>
    </div>
  );
};
