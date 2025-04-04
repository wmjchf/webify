import { BASE_URL } from "../constant/url";

export const fetcherSearch = async (q: string, typeId: string) => {
  //
  const str = new URLSearchParams({
    page: "1",
    pageSize: "10",
    q,
    typeId,
  }).toString();
  const searchParams = `?${str}`;
  const resultJSON = await fetch(
    `${BASE_URL}/public/page/search${searchParams}`,
    {
      cache: "no-cache",
    }
  );
  const result = await resultJSON.json();

  const { articleList } = result.data;
  return { article: articleList };
};
