import "@rainbow-me/rainbowkit/styles.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import PagesTopLoader from "nextjs-toploader";
import { cookies } from "next/headers";
import { Providers } from "./providers";
import { Header } from "../../components/Header";
import { WalletProvider } from "../../rainbowkit/WalletProvider";
import { StoreProvider } from "../../components/client/StoreProvider";
import { Content } from "../../components/Content";

import { BASE_URL, DEFAULT_AVATAR } from "../../constant/url";
import "../../styles/globals.css";
import "../../styles/iconfont.css";
import styles from "./index.module.scss";
import { fetcherUser } from "../../function/user";
import { IUser } from "../../service/user";

async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const { user, token } = await fetcherUser();
  return (
    <html lang="en">
      <body>
        <StoreProvider commonState={{ token, user }}>
          <Providers>
            <NextIntlClientProvider messages={messages}>
              <WalletProvider>
                <Header></Header>
                <Content>{children}</Content>
              </WalletProvider>
            </NextIntlClientProvider>
          </Providers>
        </StoreProvider>

        <PagesTopLoader />
      </body>
    </html>
  );
}

export default RootLayout;
