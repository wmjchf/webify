// /userAdmin/later/add
import { fetcher } from "../utils/request";
import { IArticle } from "./public";

export const laterAdd = (data: { targetId: string; typeId: string }) => {
  return fetcher<boolean>("/userAdmin/later/add", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
};

export const laterDel = (data: { targetId: string; typeId: string }) => {
  return fetcher<boolean>("/userAdmin/later/delete", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
};

export const getLaterList = (params: {
  sort: string;
  page: number;
  pageSize: number;
}) => {
  return fetcher<{ list: IArticle[] }>("/userAdmin/later/list", {
    method: "GET",
    params,
  });
};
