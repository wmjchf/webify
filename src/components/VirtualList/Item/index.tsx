import React from "react";
import classNames from "classnames";

export interface IVirtualItemData {
  id: string | number;
}

type IVirtualItemProps = {
  children?: React.ReactNode;
  itemSize: number;
  index: number | string;
  className?: string;
  style?: React.CSSProperties;
};

const Item = (props: IVirtualItemProps): React.ReactElement => {
  const { children, index, className, style } = props;

  const prefixCls = "ui-virtual-item";
  const classes = classNames(prefixCls);

  return (
    <div
      className={classNames(classes, className)}
      style={{
        ...style,
      }}
      id={`${index}`}
    >
      {children}
    </div>
  );
};

export { Item };
