import { cookies } from "next/headers";
import { BASE_URL } from "../constant/url";

export const fetcherHomeFeed = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return { article: [] };
  }
  const str = new URLSearchParams({
    page: "1",
    pageSize: "10",
  }).toString();
  const searchParams = `?${str}`;
  const resultJSON = await fetch(
    `${BASE_URL}/userAdmin/page/home/getFeedList${searchParams}`,
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
