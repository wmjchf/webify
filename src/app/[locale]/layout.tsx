import "@rainbow-me/rainbowkit/styles.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Header } from "../../components/Header";
import { WalletProvider } from "../../rainbowkit/WalletProvider";
import "../../styles/globals.css";

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
        <NextIntlClientProvider messages={messages}>
          <WalletProvider>
            <Header></Header>
            {children}
          </WalletProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
