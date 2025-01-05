import classNames from "classnames";
import styles from "./index.module.scss";

export const Header = () => {
  return <div className={classNames(styles.header, "bg-black w-full")}></div>;
};
