import { fetcher } from "../utils/request";

export const getList = () => {
  return fetcher<{ id: number; name: string }[]>("/list");
};
