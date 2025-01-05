import Image from "next/image";
import { useTranslations } from "next-intl";
import { Demo } from "../../components/Demo";
import { ConfirmWallet } from "../../components/Login/ConfirmWallet";
import { ConnectWallet } from "../../components/Login/ConnectWallet";
function Page() {
  const t = useTranslations("home");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: 12,
      }}
    >
      <span>{t("welcome")}</span>
      <Image src="/image/ai17z.png" alt="" width={500} height={100}></Image>
      <ConnectWallet>12</ConnectWallet>
      <ConfirmWallet></ConfirmWallet>
      <Demo></Demo>
    </div>
  );
}

export default Page;
