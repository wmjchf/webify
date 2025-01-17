// "use client";

import classNames from "classnames";
import Image from "next/image";
import { Button, Input } from "@nextui-org/react";
import { cookies } from "next/headers";
import { Link, useRouter } from "../../i18n/routing";

import styles from "./index.module.scss";

import { Login } from "../Login";
import { getUserInfo } from "../../service/user";

export const Header = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  // const user = token && (await getServerUserInfo(token));

  // console.log(user, "rewrwerw");

  return (
    <div
      id="header"
      className={classNames(
        styles.header,
        "flex w-full h-14 px-2.5 justify-between fixed top-0 left-0 bg-white z-20"
      )}
    >
      <div
        className={classNames(
          styles.left,
          "flex h-full items-center text-2xl font-bold italic"
        )}
      >
        <Image
          src="/image/header/logo.png"
          height={40}
          width={112}
          alt=""
        ></Image>
      </div>
      <div className={classNames(styles.middle, "h-full flex items-center")}>
        <Input
          label=""
          placeholder="search"
          className="rounded-full overflow-hidden border-solid border-2 border-indigo-600"
          startContent={<i className="iconfont icon-sousuo"></i>}
        />
      </div>
      <div className={classNames(styles.right, "flex items-center gap-2")}>
        <Link href="/create">
          <Button
            startContent={<i className="iconfont icon-tianjia"></i>}
            size="sm"
            color="danger"
            variant="light"
            className="rounded"
          >
            Share
          </Button>
        </Link>
        <Login token={token}></Login>

        {/* <EmailLogin></EmailLogin> */}
      </div>
    </div>
  );
};
