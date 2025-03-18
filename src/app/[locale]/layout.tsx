import "@rainbow-me/rainbowkit/styles.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import PagesTopLoader from "nextjs-toploader";
import { cookies } from "next/headers";
import { Providers } from "./providers";
import { Header } from "../../components/Header";
import { WalletProvider } from "../../rainbowkit/WalletProvider";
import { StoreProvider } from "../../components/StoreProvider";
import { Content } from "../../components/Content";

import { BASE_URL } from "../../constant/url";
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
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  let user = null;
  if (token) {
    const resultJSON = await fetch(`${BASE_URL}/user/info/detail`, {
      headers: {
        Authorization: token,
      },
    });

    const result = await resultJSON.json();
    user = result.data;
  }
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
