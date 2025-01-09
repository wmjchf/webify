import { Avatar, Button } from "@nextui-org/react";
import styles from "./index.module.scss";
import classNames from "classnames";
import { Link } from "../../../i18n/routing";
import { Nav } from "./Nav";
function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.page}>
      <div className={classNames(styles.user, "flex items-center gap-3 px-4")}>
        <Avatar
          isBordered
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
        <span className="text-lg font-semibold">Own-Risk2535</span>
      </div>
      <div className={classNames(styles.router, "pt-4")}>
        <Nav></Nav>
        <div className={classNames(styles.router_content, "py-3")}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Page;
