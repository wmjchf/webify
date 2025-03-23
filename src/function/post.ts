import { cookies } from "next/headers";
import { BASE_URL } from "../constant/url";

export const fetcherUserPostList = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const str = new URLSearchParams({
    page: "1",
    pageSize: "10",
    sort: "1",
  }).toString();
  const searchParams = `?${str}`;
  const resultJSON = await fetch(
    `${BASE_URL}/userAdmin/post/list${searchParams}`,
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
