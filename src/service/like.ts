import { fetcher } from "../utils/request";

export const likeAdd = (data: {
  articleId: string;
  typeId: number;
  isLike: number;
}) => {
  return fetcher<boolean>("/userAdmin/like/add", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
};
