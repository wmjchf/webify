import styles from "./index.module.scss";
import classNames from "classnames";

import { Nav } from "./components/Nav";

import { User } from "./components/User";
import { cookies } from "next/headers";
import { redirect } from "../../../i18n/routing";

async function Page({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
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
  if (token) {
    const resultJSON = await fetch(
      "http://ffdf-120-234-128-190.ngrok-free.app/user/info/detail",
      {
        headers: {
          Authorization: token,
        },
      }
    );
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
