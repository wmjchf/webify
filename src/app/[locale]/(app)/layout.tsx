import { Content } from "../../../components/Content";
import { FollowModal } from "../../../components/FollowModal";
import { Header } from "../../../components/Header";
import { ConfirmWallet } from "../../../components/Login/ConfirmWallet";
import { fetcherUserAllList } from "../../../function/list";

const Layout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  const allFollowList = await fetcherUserAllList("follow");
  return (
    <>
      <Header locale={locale}></Header>
      <Content>{children}</Content>
      <ConfirmWallet></ConfirmWallet>
      <FollowModal allFollowList={allFollowList}></FollowModal>
    </>
  );
};

export default Layout;
