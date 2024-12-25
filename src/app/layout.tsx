import "@rainbow-me/rainbowkit/styles.css";
import { WalletProvider } from "../rainbowkit/WalletProvider";
import "../styles/global.css";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
}

export default RootLayout;
