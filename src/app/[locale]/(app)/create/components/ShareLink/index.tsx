"use client";
import { useEffect, useState } from "react";
import { Form, Input, Button, Textarea } from "@heroui/react";
import { useDebounceCallback } from "usehooks-ts";
import { message } from "antd";

import { getUrlInfo } from "../../../../../../service/common";
import { UploadImage } from "../../../../../../components/BackTop/UploadImage";
import { postAdd } from "../../../../../../service/post";
import { Filter } from "../../../../../../components/Filter";
import { IArticleType } from "../../../../../../service/public";
import { useRouter } from "../../../../../../i18n/routing";

interface IShareLink {
  articleType: IArticleType[];
}

export const ShareLink: React.FC<IShareLink> = (props) => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { articleType } = props;

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [articleTypeIds, setArticleTypeIds] = useState<string>();

  const onSubmit = async (event: any) => {
    try {
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
      setLoading(true);
      const result = await postAdd({
        title,
        image_url: imageUrl,

        url,
        intro,
        article_type_ids: articleTypeIds,
      });
      if (result.code === 200) {
        router.replace("/my/share");
      }
    } catch (error) {
    } finally {
      setLoading(false);
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
        minRows={2}
        onChange={(event) => {
          setIntro(event.target.value);
        }}
      />
      <div className="pb-1"></div>
      <div>
        <span className="text-base">Tags</span>
      </div>
      <Filter
        data={articleType.map((item) => {
          return {
            value: item.id.toString(),
            label: item.name,
          };
        })}
        multiple
        className="h-[28px] mb-2"
        value={articleTypeIds}
        onChange={(v) => {
          setArticleTypeIds(v);
        }}
      ></Filter>

      <div className="flex flex-col">
        <div className="mb-3">
          <span className="text-[#111813]">Image</span>
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
      <Button
        type="submit"
        color="danger"
        className="rounded"
        isLoading={loading}
      >
        Share
      </Button>
    </Form>
  );
};
