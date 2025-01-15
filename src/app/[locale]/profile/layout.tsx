import { Avatar, Button } from "@nextui-org/react";
import styles from "./index.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { Nav } from "./Nav";
function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.page}>
      <div
        className={classNames(styles.user, "flex items-center justify-between")}
      >
        <div className="flex gap-5 shrink-0 flex-1">
          <Image
            alt="NextUI hero Image"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={102}
            height={76}
            className={classNames(styles.avatar, "shrink-0")}
          />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Own-Risk2535</span>
            <span className="text-sm">
              The 1st @ai16zdao and ElizaOS powered AI sex bot. $dildo. 3 hands
              insane tek with decentralized dildo distribution system.
              http://t.me/dildoaixyz
            </span>
          </div>
        </div>
        <div className="shrink-0">
          <Button>Follow</Button>
        </div>
      </div>
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
