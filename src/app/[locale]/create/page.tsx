import styles from "./index.module.scss";
import classNames from "classnames";
import { ShareLink } from "./components/ShareLink";

function Page() {
  return (
    <div className={styles.page}>
      <div className={classNames(styles.title)}>
        <span className={"font-bold px-4"}>Share Link</span>
      </div>
      <div className={classNames(styles.content, "px-4")}>
        <ShareLink></ShareLink>
      </div>
    </div>
  );
}

export default Page;
