import React from "react";
import classNames from "classnames";
import { Nav } from "./Nav";
import styles from "./index.module.scss";

interface IContent {
  children?: React.ReactNode;
}

export const Content: React.FC<IContent> = (props) => {
  const { children } = props;
  return (
    <div className={classNames(styles.content)}>
      <div className={classNames(styles.left, "float-left")}>
        <Nav></Nav>
      </div>

      <div className={classNames(styles.right, "overflow-hidden")}>
        <div
          className={classNames(
            styles.right_main,
            "px-6 py-3 flex gap-lg w-full pb-xl"
          )}
        >
          <div className="w-full flex-[1] min-w-0">{children}</div>
          <div className="w-[316px] min-w-[316px]"></div>
        </div>
      </div>
    </div>
  );
};
