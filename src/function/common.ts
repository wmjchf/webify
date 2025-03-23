import { BASE_URL } from "../constant/url";

export const fetcherHome = async () => {
  const resultJSON = await fetch(`${BASE_URL}/public/page/home`);
  const result = await resultJSON.json();
  const { articleSource, articleType, article } = result.data;
  return { articleSource, articleType, article };
};

export const fetcherHomeArticle = async () => {
  const str = new URLSearchParams({
    sourceTypeId: "0",
    articleTypeId: "0",
    page: "1",
    pageSize: "10",
  }).toString();
  const searchParams = `?${str}`;
  const resultJSON = await fetch(
    `${BASE_URL}/public/page/home/getArticleList${searchParams}`
  );
  const result = await resultJSON.json();
  const { article } = result.data;
  return { article };
};
