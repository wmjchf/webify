import classNames from "classnames";
import styles from "./index.module.scss";
import { EmailLogin } from "../Login/EmailLogin";
import { WalletLogin } from "../Login/WalletLogin";
import Image from "next/image";
// import { ConnectWallet } from "../Login/ConnectWallet";

export const Header = () => {
  return (
    <div
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
        {/* <Button color="primary">Connect Wallet</Button> */}
        <WalletLogin></WalletLogin>
        <EmailLogin></EmailLogin>
      </div>
    </div>
  );
};
