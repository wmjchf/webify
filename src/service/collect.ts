import { fetcher } from "../utils/request";
import { IArticle } from "./public";

export const collectAdd = (data: { article_id: string }) => {
  return fetcher<boolean>("/userAdmin/collect/add", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
};

export const collectDel = (data: { article_id: string }) => {
  return fetcher<boolean>("/userAdmin/collect/delete", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
};

export const getCollectList = (params: {
  sort: string;
  page: number;
  pageSize: number;
}) => {
  return fetcher<IArticle[]>("/userAdmin/collect/list", {
    method: "GET",
    params,
  });
};
