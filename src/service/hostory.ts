
import { fetcher } from "../utils/request";
import { IArticle } from "./public";

export const historyAdd = (data: { articleId: string; typeId: string }) => {
  return fetcher<boolean>("/userAdmin/history/add", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
};

export const historyDel = (data: { articleId: string; typeId: string }) => {
  return fetcher<boolean>("/userAdmin/history/delete", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
};

export const getHistoryList = (params: {
  sort: string;
  page: number;
  pageSize: number;
}) => {
  return fetcher<{ list: IArticle[] }>("/userAdmin/history/list", {
    method: "GET",
    params,
  });
};
