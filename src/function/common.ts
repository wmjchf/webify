import { BASE_URL } from "../constant/url";

export const fetcherHome = async () => {
  const resultJSON = await fetch(`${BASE_URL}/public/page/home`);
  const result = await resultJSON.json();
  const { sourceList, typeList, article } = result.data;
  return { sourceList, typeList, article };
};
