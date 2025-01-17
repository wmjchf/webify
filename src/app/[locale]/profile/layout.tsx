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
  // let result = null;
  // if (token) {
  //   const data = await fetch(
  //     "http://c135-120-234-128-190.ngrok-free.app/user/info/detail",
  //     {
  //       headers: {
  //         Authorization: token,
  //       },
  //     }
  //   );

  //   console.log(data, "rewrwer");
  // }

  return (
    <div className={styles.page}>
      <User></User>
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
