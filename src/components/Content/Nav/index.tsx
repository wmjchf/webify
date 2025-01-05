import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

interface INav {}

export const Nav: React.FC<INav> = (props) => {
  return (
    <div className={classNames(styles.nav)}>
      <div className={styles.nav_common}>
        <div></div>
      </div>
    </div>
  );
};
