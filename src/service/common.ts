import { fetcher } from "../utils/request";

export const getUrlInfo = (url: string) => {
  return fetcher<{ title: string; description: string; image: string }>(
    "/general/lib/getUrlInfo",
    {
      method: "POST",
      body: JSON.stringify({ url }),
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
