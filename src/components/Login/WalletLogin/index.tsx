"use client";

import { WalletConnect } from "../WalletConnect";
import { useCommonStore } from "../../../store/common";
import { IUser } from "../../../service/public";

interface IWalletLogin {
  onClick?: () => void;
  children?: (onClick?: () => void) => React.ReactNode;
  user: IUser | null;
}
export const WalletLogin: React.FC<IWalletLogin> = (props) => {
  const { user: clientUser, toggleConfirmLoginOpen } = useCommonStore();
  const { children, user } = props;

  const mergeUser = clientUser || user;

  if (mergeUser) {
    return children && children();
  }
  return (
    <>
      <WalletConnect
        onClick={() => {
          if (!mergeUser) {
            toggleConfirmLoginOpen();
          }
        }}
      >
        {children}
      </WalletConnect>
    </>
  );
};
