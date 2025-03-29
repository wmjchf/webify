import { useTranslations } from "next-intl";
import { useAccount } from "wagmi";

import { ConnectWallet } from "../ConnectWallet";

interface IWalletConnect {
  onClick?: () => void;
  children?: (onClick?: () => void) => React.ReactNode;
}
export const WalletConnect: React.FC<IWalletConnect> = (props) => {
  const { onClick, children } = props;
  const t = useTranslations("home");

  const { isConnected } = useAccount();

  return (
    <div>
      {isConnected ? (
        <div onClick={onClick}>{children && children(onClick)}</div>
      ) : (
        <ConnectWallet>
          {(openConnectModal) => {
            return (
              <div
                onClick={() => {
                  console.log("open connect modal");
                }}
                data-id="open-connect-modal"
              >
                {children && children(openConnectModal)}
              </div>
            );
          }}
        </ConnectWallet>
      )}
    </div>
  );
};
