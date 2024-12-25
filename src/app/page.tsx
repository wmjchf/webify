import { Demo } from "../components/Demo";
import { ConfirmWallet } from "../components/Login/ConfirmWallet";
import { ConnectWallet } from "../components/Login/ConnectWallet";
function Page() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: 12,
      }}
    >
      <ConnectWallet>11</ConnectWallet>
      <ConfirmWallet></ConfirmWallet>
      <Demo></Demo>
    </div>
  );
}

export default Page;
