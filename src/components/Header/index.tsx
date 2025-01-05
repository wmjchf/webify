import classNames from "classnames";
import styles from "./index.module.scss";

export const Header = () => {
  return (
    <div
      className={classNames(
        styles.header,
        "w-full h-14 px-2.5 justify-between"
      )}
    >
      <div className={classNames(styles.left, "h-full")}></div>
      <div className={styles.middle}></div>
      <div className={styles.right}></div>
    </div>
  );
};
