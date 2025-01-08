import React from "react";
import classNames from "classnames";
import { Link } from "../../i18n/routing";
import styles from "./index.module.scss";

interface IIconItem {
  icon: string;
  title: string;
  isSelected?: boolean;
  href: string;
}

export const IconItem: React.FC<IIconItem> = (props) => {
  const { icon, title, isSelected = false, href } = props;

  return (
    <Link href={href}>
      <div
        className={classNames(
          styles.icon_item,
          isSelected && styles.active,
          "flex items-center gap-3 cursor-pointer rounded-md px-5"
        )}
      >
        <div
          className={classNames(
            styles.left,
            "flex items-center justify-center"
          )}
        >
          <i className={classNames("iconfont", icon)}></i>
        </div>
        <div className={classNames(styles.right)}>
          <span className="text-sm">{title}</span>
        </div>
      </div>
    </Link>
  );
};
