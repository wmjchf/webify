import { fetcher } from "../utils/request";
import { IUser } from "./public";

export const followAdd = (data: { followUserId: number; status: number }) => {
  return fetcher<boolean>("/userAdmin/follow/add", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
};

export const followList = (params: { page: number; pageSize: number }) => {
  return fetcher<{ list: IUser[] }>("/userAdmin/follow/list", {
    method: "GET",
    params,
  });
};
