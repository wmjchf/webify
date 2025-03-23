import React from "react";
import Image from "next/image";
import classNames from "classnames";

interface IPlaceholderImage {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
}
export const PlaceholderImage: React.FC<IPlaceholderImage> = (props) => {
  const { width, height, className, src, alt, imgClassName } = props;

  return (
    <div
      className={classNames(
        `relative w-${width} h-${height} rounded-md overflow-hidden`,
        className
      )}
    >
      {/* <div className=""> */}
      <div
        className={`w-[${width}px] h-[${height}px] bg-slate-200 animate-pulse`}
      ></div>
      {/* </div> */}
      {src && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={classNames(
            `w-[${width}px] h-[${height}px] absolute top-0 left-0`,
            imgClassName
          )}
        ></Image>
      )}
    </div>
  );
};
