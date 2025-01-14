import React from "react";
import classNames from "classnames";
import { Nav } from "./Nav";
import styles from "./index.module.scss";
import { BackTop } from "../BackTop";

interface IContent {
  children?: React.ReactNode;
}

export const Content: React.FC<IContent> = (props) => {
  const { children } = props;
  return (
    <div className={classNames(styles.content, "pt-14")}>
      <div className={classNames(styles.left, "float-left")}>
        <Nav></Nav>
      </div>

      <div className={classNames(styles.right, "overflow-hidden")}>
        <div
          className={classNames(
            styles.right_main,
            "px-6 py-3 flex justify-center"
          )}
          id="rightMain"
        >
          <div className="w-full max-w-screen-lg">{children}</div>
        </div>
      </div>
      <BackTop></BackTop>
    </div>
  );
};
