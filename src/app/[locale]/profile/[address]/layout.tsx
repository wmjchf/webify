import styles from "./index.module.scss";
import classNames from "classnames";

import { Nav } from "./components/Nav";
import { BASE_URL } from "../../../../constant/url";
import { User } from "./components/User";
import { cookies } from "next/headers";
import { redirect } from "../../../../i18n/routing";

async function Page({
  children,
  params: { locale, address },
}: {
  children: React.ReactNode;
  params: { locale: string; address: string };
}) {
  console.log(address, "erwrewrewrewrewrwe");
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    redirect({
      href: "/",
      locale,
    });
    return;
  }
  let user = null;
  if (address) {
    const resultJSON = await fetch(`${BASE_URL}/user/info/detail/${address}`);
    const result = await resultJSON.json();
    user = result.data;
  } else if (token) {
    const resultJSON = await fetch(`${BASE_URL}/user/info/detail`, {
      headers: {
        Authorization: token,
      },
    });
    const result = await resultJSON.json();
    user = result.data;
  }

  return (
    <div className={styles.page}>
      <User user={user}></User>
      <div className={classNames(styles.router, "pt-5")}>
        <Nav></Nav>
        <div className={classNames(styles.router_content, "py-3")}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Page;
