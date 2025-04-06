import React from "react";
import classNames from "classnames";
import { Link } from "../../i18n/routing";
import styles from "./index.module.scss";

interface IIconItem {
  icon: string;
  title: string;
  isSelected?: boolean;
  href: string;
  onCLick?: () => void;
  target?: string;
}

export const IconItem: React.FC<IIconItem> = (props) => {
  const { icon, title, isSelected = false, href, target } = props;

  return (
    <Link
      target={target}
      href={props.onCLick ? "" : href}
      onClick={(event) => {
        if (props.onCLick) {
          event.preventDefault();
          props.onCLick();
        }
      }}
    >
      <div
        className={classNames(
          styles.icon_item,
          // isSelected && styles.active,
          "flex items-center gap-3 cursor-pointer rounded-md px-5 hover:bg-[#FFF0F5]",
          {
            "!bg-[#f31260]": isSelected,
            "!text-white": isSelected,
            "text-gray-900": !isSelected,
          }
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
