import "@rainbow-me/rainbowkit/styles.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import PagesTopLoader from "nextjs-toploader";
import { HeroUIProvider } from "@heroui/react";
import { Header } from "../../components/Header";
import { WalletProvider } from "../../rainbowkit/WalletProvider";
import { StoreProvider } from "../../components/BackTop/StoreProvider";
import { Content } from "../../components/Content";
import { fetcherCurrentUser } from "../../function/user";
import "../../styles/globals.css";
import "../../styles/iconfont.css";
import "../../styles/mixins.scss";
import { fetcherHome } from "../../function/common";
import { ConfirmWallet } from "../../components/Login/ConfirmWallet";
import { FollowModal } from "../../components/FollowModal";
import { fetcherUserAllList } from "../../function/list";

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
  const allFollowList = await fetcherUserAllList("follow");
  // const allCollectList = await fetcherUserAllList("collect");
  // const allLaterList = await fetcherUserAllList("later");
  // const allLikeList = await fetcherUserAllList("like");

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
              <WalletProvider>
                <Header></Header>
                <Content>{children}</Content>
                <ConfirmWallet></ConfirmWallet>
                <FollowModal allFollowList={allFollowList}></FollowModal>
              </WalletProvider>
            </NextIntlClientProvider>
          </HeroUIProvider>
        </StoreProvider>

        <PagesTopLoader />
      </body>
    </html>
  );
}

export default RootLayout;
