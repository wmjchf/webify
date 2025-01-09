import React from "react";

import styles from "./index.module.scss";
import classNames from "classnames";

interface IListItem {
  title: string;
  desc: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const ListItem: React.FC<IListItem> = (props) => {
  const { title, desc, children, onClick } = props;

  return (
    <div
      className={classNames(
        styles.listItme,
        "flex justify-between items-center cursor-pointer py-3"
      )}
      onClick={onClick}
    >
      <div className="flex flex-col ">
        <span className={classNames(styles.title, "text-sm break-normal")}>
          {title}
        </span>
        <span className={classNames(styles.desc, "text-xs break-normal")}>
          {desc}
        </span>
      </div>
      <div className={styles.right}>
        <div
          className={classNames(
            styles.right_container,
            "flex justify-center items-center"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
