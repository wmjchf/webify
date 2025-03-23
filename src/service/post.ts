import { fetcher } from "../utils/request";

export const postAdd = (data: {
  title: string;
  image_url: string;
  url: string;
  intro: string;
  article_type_ids: string;
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

export const uploadFile = (data: FormData) => {
  return fetcher<{ filename: string; url: string }>("/general/lib/uploadFile", {
    method: "POST",
    body: data,
  });
};
