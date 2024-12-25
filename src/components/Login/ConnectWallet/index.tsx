"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import classNames from "classnames";

interface IConnectWallet {
  children?: React.ReactNode;
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
            return (
              <div
                className={classNames("w-full", className)}
                onClick={openConnectModal}
              >
                {children}
              </div>
            );
          }

          if (chain.unsupported) {
            return (
              <div className={classNames("w-full", className)}>{children}</div>
            );
          }

          if (account.address) {
            return <></>;
            // return <div className="w-full">{children}</div>;
          }
        }}
      </ConnectButton.Custom>
    </>
  );
};
