import { fetcher } from "../utils/request";
import { IUser } from "./public";

export const followAdd = (data: { followUserUid: number; status: number }) => {
  return fetcher<boolean>("/userAdmin/follow/operate", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
};

export const followList = (params: {
  page: number;
  pageSize: number;
  typeId: "1" | "2";
}) => {
  return fetcher<{ list: IUser[] }>("/userAdmin/follow/list", {
    method: "GET",
    params,
  });
};
