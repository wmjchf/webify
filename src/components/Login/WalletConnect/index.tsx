import { Button } from "@nextui-org/react";

import { useTranslations } from "next-intl";
import { useAccount } from "wagmi";

import { ConnectWallet } from "../ConnectWallet";

interface IWalletConnect {
  onClick?: () => void;
}
export const WalletConnect: React.FC<IWalletConnect> = (props) => {
  const { onClick } = props;
  const t = useTranslations("home");

  const { isConnected } = useAccount();

  return (
    <div>
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
