import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

interface IContent {
  children?: React.ReactNode;
}

export const Content: React.FC<IContent> = (props) => {
  const { children } = props;
  return (
    <div className={classNames(styles.content)}>
      <div className={classNames(styles.left, "float-left")}></div>

      <div className={classNames(styles.right, "overflow-hidden")}>
        {children}
      </div>
    </div>
  );
};
