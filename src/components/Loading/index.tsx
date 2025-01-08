import React from "react";
import classNames from "classnames";

export type ILoadingProps = {
  className?: string;
  style?: React.CSSProperties;

  size?: number;
  activeColor?: string;
  noActiveColor?: string;
  loadingWidth?: number;
};

const Loading: React.FC<ILoadingProps> = (props) => {
  const {
    className,
    style = {},
    size = 24,
    activeColor = "#ff3d00",
    noActiveColor = "#fff",
    loadingWidth = 2.5,
  } = props;

  const prefixCls = "ui-loading";

  const classes = classNames(prefixCls, {
    [`${prefixCls}--default`]: true,
  });

  return (
    <span
      className={classNames(classes, className)}
      style={{
        ...style,
        borderColor: noActiveColor,
        borderBottomColor: activeColor,
        width: size,
        height: size,
        borderWidth: loadingWidth,
      }}
    ></span>
  );
};
export default Loading;
