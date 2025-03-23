"use client";
import React, { useState } from "react";
import { GetProp, Upload, UploadProps } from "antd";
import { uploadFile } from "../../../service/common";
import Image from "next/image";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

interface UploadImageProps {
  onChanged?: (url: string) => void;
}
export const UploadImage: React.FC<UploadImageProps> = (props) => {
  const { onChanged } = props;
  const [imageUrl, setImageUrl] = useState("");

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
      className="w-[204px] h-[152px]"
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="preview"
          width={204}
          height={152}
          className="object-cover rounded-md"
        />
      ) : (
        <div className="w-[204px] h-[152px] border border-dashed border-gray-300 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">
          <Image src="/image/image.svg" width={50} height={50} alt=""></Image>
        </div>
      )}
    </Upload>
  );
};
