import { cookies } from "next/headers";
import { IUser } from "../service/user";
import { BASE_URL } from "../constant/url";

export const fetcherCurrentUser = async () => {
  const cookieStore = cookies();
  const userId = cookieStore.get("userId")?.value;
  const token = cookieStore.get("token")?.value;
  let user: IUser | null = null;
  if (userId) {
    try {
      const str = new URLSearchParams({ userId }).toString();

      const resultJSON = await fetch(
        `${BASE_URL}/public/user/getUserInfo?${str}`,
        {
          method: "GET",
        }
      );
      const result = await resultJSON.json();
      user = result.data;
    } catch (error) {}
  }
  return { user, userId, token };
};
