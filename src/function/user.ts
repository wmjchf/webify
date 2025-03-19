import { cookies } from "next/headers";
import { IUser } from "../service/user";
import { BASE_URL } from "../constant/url";

export const fetcherUser = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  let user: IUser | null = null;
  if (token) {
    try {
      const resultJSON = await fetch(`${BASE_URL}/user/info/detail`, {
        headers: {
          Authorization: token,
        },
      });
      const result = await resultJSON.json();
      user = result.data;
    } catch (error) {}
  }
  return { user, token };
};
