import classNames from "classnames";

import { Nav } from "../../../components/Nav";
import { User } from "../../../components/User";

import { fetcherCurrentUser } from "../../../function/user";

async function Page({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { user } = await fetcherCurrentUser();

  return (
    <div>
      <User user={user} isCurrentUser={true}></User>
      <div className={classNames("pt-5")}>
        <Nav></Nav>
        <div className={classNames("py-3")}>{children}</div>
      </div>
    </div>
  );
}

export default Page;
