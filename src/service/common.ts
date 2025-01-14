import { fetcher } from "../utils/request";

export const getNonce = () => {
  return fetcher<{ id: number; name: string }[]>("/list");
};
