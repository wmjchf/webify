"use client";
import React, { useEffect, useState } from "react";
import { GetProp, Upload, UploadProps } from "antd";
import { uploadFile } from "../../../service/common";
import Image from "next/image";
import classNames from "classnames";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

interface UploadImageProps {
  onChanged?: (url: string) => void;
  width?: number;
  height?: number;
  className?: string;
  src?: string;
}
export const UploadImage: React.FC<UploadImageProps> = (props) => {
  const { onChanged, width, height, className, src = "" } = props;
  const [imageUrl, setImageUrl] = useState(src);

  const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const beforeUpload = async (file: FileType) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      return;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    getBase64(file, (url: string) => {
      setImageUrl(url);
      uploadFile(formData).then((result) => {
        if (result.code === 200) {
          onChanged && onChanged(result.data.url);
        }
      });
    });

    return false;
  };

  return (
    <Upload
      showUploadList={false}
      beforeUpload={beforeUpload}
      className={className}
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="preview"
          width={width}
          height={height}
          className={classNames("object-cover", className)}
        />
      ) : (
        <div
          className={classNames(
            `border border-dashed border-gray-300 bg-gray-100 flex items-center justify-center text-gray-400`,
            className
          )}
        >
          <Image src="/image/image.svg" width={50} height={50} alt=""></Image>
        </div>
      )}
    </Upload>
  );
};
