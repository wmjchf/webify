import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import { IconItem } from "../../IconItem";

interface INav {}

export const Nav: React.FC<INav> = (props) => {
  return (
    <div className={classNames(styles.nav)}>
      <div className={classNames(styles.nav_common, "p-3")}>
        <IconItem icon="icon-home" title="Home" isSelected={true}></IconItem>
        <IconItem icon="icon-send" title="Message"></IconItem>
        <IconItem icon="icon-privilege" title="Privilege"></IconItem>
        <IconItem icon="icon-photo" title="Photo"></IconItem>
      </div>
    </div>
  );
};
