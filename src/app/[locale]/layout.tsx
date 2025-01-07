import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Header } from "../../components/Header";
import { WalletProvider } from "../../rainbowkit/WalletProvider";
import { Content } from "../../components/Content";
import "../../styles/globals.css";
import "../../styles/iconfont.css";

async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang="en">
      <body>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <WalletProvider>
              <Header></Header>
              <Content>{children}</Content>
            </WalletProvider>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
