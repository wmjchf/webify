"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import classNames from "classnames";

interface IConnectWallet {
  children: (openConnectModal: () => void) => React.ReactNode;
  className?: string;
}
export const ConnectWallet: React.FC<IConnectWallet> = (props) => {
  const { children, className } = props;
  return (
    <>
      <ConnectButton.Custom>
        {({ account, chain, openConnectModal, mounted }) => {
          const ready = mounted;
          const connected = ready && account && chain;
          if (!connected) {
            return <> {children(openConnectModal)}</>;
          }

          if (chain.unsupported) {
            return <> {children(openConnectModal)}</>;
          }

          if (account.address) {
            // return <></>;
            return <> {children(openConnectModal)}</>;
            // return <div className="w-full">{children}</div>;
          }
        }}
      </ConnectButton.Custom>
    </>
  );
};
