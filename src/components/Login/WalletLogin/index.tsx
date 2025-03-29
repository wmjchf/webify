"use client";

import { useRef } from "react";
import { WalletConnect } from "../WalletConnect";
import { ConfirmWallet, IConfirmWalletRef } from "../ConfirmWallet";
import { useCommonStore } from "../../../store/common";
import { IUser } from "../../../service/public";

interface IWalletLogin {
  onClick?: () => void;
  children?: (onClick?: () => void) => React.ReactNode;
  user: IUser | null;
}
export const WalletLogin: React.FC<IWalletLogin> = (props) => {
  const { user: clientUser } = useCommonStore();
  const { children, user } = props;
  const confirmWalletRef = useRef<IConfirmWalletRef>(null);
  const mergeUser = clientUser || user;

  if (mergeUser) {
    return children && children();
  }
  return (
    <>
      <WalletConnect
        onClick={() => {
          if (!mergeUser) {
            confirmWalletRef.current?.open && confirmWalletRef.current?.open();
          }
        }}
      >
        {children}
      </WalletConnect>
      <ConfirmWallet ref={confirmWalletRef}></ConfirmWallet>
    </>
  );
};
