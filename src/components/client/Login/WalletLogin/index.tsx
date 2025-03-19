"use client";

import { useTranslations } from "next-intl";
import { useRef } from "react";
import { WalletConnect } from "../WalletConnect";
import { ConfirmWallet, IConfirmWalletRef } from "../ConfirmWallet";

interface IWalletLogin {
  onClick?: () => void;
}
export const WalletLogin: React.FC<IWalletLogin> = (props) => {
  const t = useTranslations("home");

  const confirmWalletRef = useRef<IConfirmWalletRef>(null);
  return (
    <>
      <WalletConnect
        onClick={() => {
          confirmWalletRef.current?.open && confirmWalletRef.current?.open();
        }}
      ></WalletConnect>
      <ConfirmWallet ref={confirmWalletRef}></ConfirmWallet>
    </>
  );
};
