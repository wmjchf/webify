import styles from "./index.module.scss";
import classNames from "classnames";

import { Nav } from "./components/Nav";

import { User } from "./components/User";
function Page({ children }: { children: React.ReactNode }) {
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
