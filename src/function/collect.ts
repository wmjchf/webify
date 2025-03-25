import { cookies } from "next/headers";
import { BASE_URL } from "../constant/url";

export const fetcherUserCollectList = async () => {
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
    `${BASE_URL}/userAdmin/collect/list${searchParams}`,
    {
      method: "GET",
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
}
export const fetcherUserAllCollectList = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return [];
  }
  const resultJSON = await fetch(`${BASE_URL}/userAdmin/collect/getAll`, {
    method: "GET",
    headers: {
      Authorization: token as string,
    },
  });
  const result = await resultJSON.json();

  return result.data;
};
