import "@rainbow-me/rainbowkit/styles.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import PagesTopLoader from "nextjs-toploader";
import { HeroUIProvider } from "@heroui/react";
import { WalletProvider } from "../../rainbowkit/WalletProvider";
import { StoreProvider } from "../../components/BackTop/StoreProvider";

import { fetcherCurrentUser } from "../../function/user";
import "../../styles/globals.css";
import "../../styles/iconfont.css";
import "../../styles/mixins.scss";
import { fetcherHome } from "../../function/common";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "webify - Making quality content visible,where sharing creates value",
  keywords: [
    "web3",
    "news",
    "web3 social",
    "social",
    "share",
    "value",
    "webify",
  ],
  description:
    "webify does not create content, but we excel at discovering,curating, and sharing valuable information, ensuring it reaches awider audience.",
};

async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const { user, token, uid } = await fetcherCurrentUser();
  const { articleSource, articleType } = await fetcherHome();

  return (
    <html lang="en">
      <body>
        <StoreProvider
          commonState={{
            token,
            user,
            uid,
            articleSource,
            articleType,
          }}
        >
          <HeroUIProvider>
            <NextIntlClientProvider messages={messages}>
              <WalletProvider>{children}</WalletProvider>
            </NextIntlClientProvider>
          </HeroUIProvider>
        </StoreProvider>

        <PagesTopLoader />
      </body>
    </html>
  );
}

export default RootLayout;
