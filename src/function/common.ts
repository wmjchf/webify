import { BASE_URL } from "../constant/url";

export const fetcherHome = async () => {
  const resultJSON = await fetch(`${BASE_URL}/public/page/home`);
  const result = await resultJSON.json();
  const { articleSource, articleType, article } = result.data;
  return { articleSource, articleType, article };
};
