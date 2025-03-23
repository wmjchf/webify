import classNames from "classnames";

import { Nav } from "../../../../components/Nav";
import { User } from "../../../../components/User";
import { fetcherOtherUser } from "../../../../function/common";

async function Page({
  children,
  params: { locale, uid },
}: {
  children: React.ReactNode;
  params: { locale: string; uid: string };
}) {
  const user = await fetcherOtherUser(uid);
  return (
    <div>
      <User user={user}></User>
      <div className={classNames("pt-5")}>
        <Nav></Nav>
        <div className={classNames("py-3")}>{children}</div>
      </div>
    </div>
  );
}

export default Page;
