"use clinet";
import classNames from "classnames";
import styles from "./index.module.scss";
import { Button } from "@nextui-org/react";
import { ConnectWallet } from "../ConnectWallet";

import { useTranslations } from "next-intl";
import { useAccount } from "wagmi";

interface IWalletLogin {
  onClick?: () => void;
}
export const WalletLogin: React.FC<IWalletLogin> = (props) => {
  const { onClick } = props;
  const t = useTranslations("home");

  const { isConnected } = useAccount();

  return (
    <div className={classNames(styles.wallet_login)}>
      {isConnected ? (
        <Button
          aria-label="wallet"
          color="danger"
          size="sm"
          className="rounded"
          onPress={onClick}
        >
          {t("ConnectWallet")}
        </Button>
      ) : (
        <ConnectWallet>
          {(openConnectModal) => {
            return (
              <Button
                aria-label="wallet"
                color="danger"
                size="sm"
                className="rounded"
                onPress={openConnectModal}
              >
                {t("ConnectWallet")}
              </Button>
            );
          }}
        </ConnectWallet>
      )}
    </div>
  );
};
