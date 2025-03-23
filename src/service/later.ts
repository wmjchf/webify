// /userAdmin/later/add
import { fetcher } from "../utils/request";
import { IArticle } from "./public";

export const laterAdd = (data: { articleId: string }) => {
  return fetcher<boolean>("/userAdmin/later/add", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
};

export const getPostList = (params: {
  sort: string;
  page: number;
  pageSize: number;
}) => {
  return fetcher<IArticle[]>("/userAdmin/post/list", {
    method: "GET",
    params,
  });
};
