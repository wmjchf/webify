import classNames from "classnames";
import styles from "./index.module.scss";
import { Button } from "@nextui-org/react";
import { ConnectWallet } from "../ConnectWallet";
import { useTranslations } from "next-intl";

export const WalletLogin = () => {
  const t = useTranslations("home");
  return (
    <div className={classNames(styles.wallet_login)}>
      <ConnectWallet>
        {(openConnectModal) => {
          return (
            <Button
              aria-label="wallet"
              color="danger"
              size="sm"
              onPress={openConnectModal}
            >
              {t("ConnectWallet")}
            </Button>
          );
        }}
      </ConnectWallet>
    </div>
  );
};
