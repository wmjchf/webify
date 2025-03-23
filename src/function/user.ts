import { cookies } from "next/headers";
import { BASE_URL } from "../constant/url";
import { IUser } from "../service/public";

export const fetcherCurrentUser = async () => {
  const cookieStore = cookies();
  const uid = cookieStore.get("uid")?.value;
  const token = cookieStore.get("token")?.value;
  let user: IUser | null = null;
  if (uid) {
    try {
      const str = new URLSearchParams({ uid }).toString();

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
  return { user, uid, token };
};
