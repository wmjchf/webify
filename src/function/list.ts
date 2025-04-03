import { cookies } from "next/headers";
import { BASE_URL } from "../constant/url";

export const fetcherUserList = async (type: string) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const str = new URLSearchParams({
    page: "1",
    pageSize: "10",
  }).toString();
  if (!token) {
    return {
      article: [],
    };
  }
  const searchParams = `?${str}`;
  const resultJSON = await fetch(
    `${BASE_URL}/userAdmin/${type}/list${searchParams}`,
    {
      method: "GET",
      cache: "no-cache",
      headers: {
        Authorization: token as string,
      },
    }
  );

  const result = await resultJSON.json();

  const { list } = result.data;

  return { article: list };
};

export interface IAllCollect {
  target_id: number;
  is_like?: number;
  article_id?: number;
  follow_user_id?: number;
}
export const fetcherUserAllList = async (type: string) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return [];
  }
  const resultJSON = await fetch(`${BASE_URL}/userAdmin/${type}/getAll`, {
    method: "GET",
    cache: "no-cache",
    headers: {
      Authorization: token as string,
    },
  });
  const result = await resultJSON.json();

  return result.data;
};
