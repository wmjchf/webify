"use client";
import { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import { useDebounceCallback } from "usehooks-ts";
import { createShareNews } from "../../../../../service/news";

import { useCommonStore } from "../../../../../store/common";
import { getUrlInfo } from "../../../../../service/common";
import { UploadImage } from "../../../../../components/BackTop/UploadImage";
import { postAdd } from "../../../../../service/post";
import { message } from "antd";

interface IShareLink {}
export const animals = [
  { key: "solana", label: "solana" },
  { key: "ethereum", label: "ethereum" },
  { key: "elephant", label: "Elephant" },
];
export const ShareLink: React.FC<IShareLink> = (props) => {
  const [errors, setErrors] = useState({});

  const { articleType } = useCommonStore();
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [articleTypeIds, setArticleTypeIds] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.currentTarget));

    if (!data.url) {
      setErrors({ url: "url is required" });
      return;
    }
    if (!data.title) {
      setErrors({ title: "title is required" });
      return;
    }

    if (!data.articleTypeIds) {
      setErrors({ articleTypeIds: "tags is required" });
      return;
    }

    const result = await postAdd({
      title,
      image_url: imageUrl,

      url,
      intro,
      article_type_ids: articleTypeIds,
    });
    if (result.code === 200) {
      message.success("Share Success");
    }
  };

  const handleGetUrlInfo = async (url: string) => {
    if (!url) {
      return;
    }
    const result = await getUrlInfo(url);
    if (result.code === 200) {
      setTitle(result.data.title);
      setIntro(result.data.description);
    }
  };
  const debouncedGetUrlInfo = useDebounceCallback(handleGetUrlInfo, 100);

  useEffect(() => {
    debouncedGetUrlInfo(url);
  }, [url]);
  return (
    <Form
      className="w-full max-w-2xl flex flex-col gap-3 py-4"
      validationErrors={errors}
      onSubmit={onSubmit}
    >
      <Input
        label="Link URL"
        name="url"
        labelPlacement="outside"
        placeholder="parse Link URL"
        isRequired
        onChange={(event) => {
          setUrl(event.target.value);
        }}
      />
      <div className="py-4"></div>
      <Input
        label="Title"
        name="title"
        value={title}
        labelPlacement="outside"
        placeholder="parse Title"
        isRequired
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <div className="py-1"></div>
      <Textarea
        label="Description"
        value={intro}
        name="intro"
        labelPlacement="outside"
        placeholder="parse Description"
        onChange={(event) => {
          setIntro(event.target.value);
        }}
      />
      <div className="py-1"></div>
      <Select
        className="max-w-xs"
        label="Tags"
        name="articleTypeIds"
        placeholder="Choose Tags"
        selectionMode="multiple"
        labelPlacement={"outside"}
        isRequired
        multiple
        onChange={(event) => {
          setArticleTypeIds(`,${event.target.value},`);
        }}
      >
        {articleType?.map((item) => {
          return <SelectItem key={item.id}>{item.name}</SelectItem>;
        })}
      </Select>

      <div className="flex flex-col">
        <div className="mb-3">
          <span className="text-[#111813]">Image</span>
          <span className="text-[#f31260] ml-[1px]">*</span>
        </div>
        <UploadImage
          width={204}
          height={152}
          onChanged={(url) => {
            setImageUrl(url);
          }}
          className="rounded-md w-[204px] h-[152px]"
        ></UploadImage>
      </div>

      <div className="py-2"></div>
      <Button type="submit" color="danger" className="rounded">
        Share
      </Button>
    </Form>
  );
};
