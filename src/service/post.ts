import { fetcher } from "../utils/request";
import { IArticle } from "./public";

export const postAdd = (data: {
  title: string;
  image_url?: string;
  url: string;
  intro?: string;
  article_type_ids?: string;
}) => {
  return fetcher<{ title: string; description: string; image: string }>(
    "/userAdmin/post/add",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }
  );
};

export const getPostList = (params: {
  sort: string;
  page: number;
  pageSize: number;
}) => {
  return fetcher<{ list: IArticle[] }>("/userAdmin/post/list", {
    method: "GET",
    params,
  });
};
