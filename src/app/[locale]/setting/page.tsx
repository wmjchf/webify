"use client";
import styles from "./index.module.scss";
import classNames from "classnames";
import { DisplayName } from "./DisplayName";
import { EditAvatar } from "./EditAvatar";
import { EditDescription } from "./EditDescription";

function Page() {
  return (
    <div className={styles.page}>
      <div className={classNames(styles.title)}>
        <span className={"font-bold px-4"}>Setting</span>
      </div>
      <div className={classNames(styles.content, "px-4")}>
        <DisplayName></DisplayName>
        <EditDescription></EditDescription>
        <EditAvatar></EditAvatar>
      </div>
    </div>
  );
}

export default Page;
