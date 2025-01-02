import "@rainbow-me/rainbowkit/styles.css";
import { Header } from "../components/Header";
import { WalletProvider } from "../rainbowkit/WalletProvider";
import "../styles/globals.css";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          <Header></Header>
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}

export default RootLayout;
