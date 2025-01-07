import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import { IconItem } from "../../IconItem";
import { Divider } from "@nextui-org/react";
import { Collapse } from "../Collapse";

interface INav {}

export const Nav: React.FC<INav> = (props) => {
  return (
    <div className={classNames(styles.nav)}>
      <div className={classNames(styles.nav_common, "p-3")}>
        <div>
          <IconItem icon="icon-home" title="Home" isSelected={true}></IconItem>
          <IconItem icon="icon-send" title="Message"></IconItem>
          <IconItem icon="icon-privilege" title="Privilege"></IconItem>
          <IconItem icon="icon-photo" title="Photo"></IconItem>
        </div>
        <div className="py-3">
          <Divider></Divider>
        </div>
        <div>
          <Collapse title="RESOURCE">
            <IconItem icon="icon-photo" title="Photo"></IconItem>
          </Collapse>
          <div className="py-3">
            <Divider></Divider>
          </div>
          <Collapse title="COMMUNITIES">
            <IconItem icon="icon-home" title="Home"></IconItem>
            <IconItem icon="icon-send" title="Message"></IconItem>
            <IconItem icon="icon-privilege" title="Privilege"></IconItem>
          </Collapse>
        </div>
      </div>
    </div>
  );
};
