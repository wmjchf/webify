"use client";
import { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Image,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import classNames from "classnames";
import { createShareNews } from "../../../../../service/news";

import styles from "./index.module.scss";
import { useCommonStore } from "../../../../../store/common";

interface IShareLink {}
export const animals = [
  { key: "solana", label: "solana" },
  { key: "ethereum", label: "ethereum" },
  { key: "elephant", label: "Elephant" },
];
export const ShareLink: React.FC<IShareLink> = (props) => {
  const [errors, setErrors] = useState({});

  const { getTypeList, typeList } = useCommonStore();
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [isVideo, setIsVideo] = useState(0);
  const [videoUrl, setVideoUrl] = useState("");
  const [articleTypeIds, setArticleTypeIds] = useState("");
  useEffect(() => {
    getTypeList();
  }, []);

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

    const result = createShareNews({
      title,
      imageUrl: "https://nextui.org/images/hero-card-complete.jpeg",
      isVideo,
      videoUrl,
      url,
      intro,
      articleTypeIds,
    });

    console.log(result, "rewrwerw");
  };
  return (
    <Form
      className="w-full max-w-2xl flex flex-col gap-3 py-4"
      validationErrors={errors}
      onSubmit={onSubmit}
    >
      <Input
        label="Link URL"
        name="url"
        radius={"md"}
        isRequired
        onChange={(event) => {
          setUrl(event.target.value);
        }}
      />
      <div className="py-4"></div>
      <Input
        label="Title"
        name="title"
        labelPlacement="outside"
        placeholder="parse title"
        isRequired
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <div className="py-1"></div>
      <Textarea
        label="Description"
        name="intro"
        labelPlacement="outside"
        placeholder="parse description"
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
        {typeList &&
          typeList.map((animal) => (
            <SelectItem key={animal.id} value={animal.id}>
              {animal.name}
            </SelectItem>
          ))}
      </Select>
      {/* <div className="flex flex-col">
        <span className="mb-3">Image</span>
        <Image
          alt="NextUI hero Image"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={300}
        />
      </div> */}

      <div className="py-2"></div>
      <Button type="submit" color="danger" className="rounded">
        Share
      </Button>
    </Form>
  );
};
