import { fetcher } from "../utils/request";

export const getNonce = (address: `0x${string}`) => {
  return fetcher<string>(`/user/info/nonce/${address}`, {
    method: "POST",
  });
};

type LOGIN_TYPE = "1" | "2"; // 1钱包登录 2邮箱登录

interface ILoginParams {
  loginType: LOGIN_TYPE;
  signature: string;
  message: string;
}

export const login = (data: ILoginParams) => {
  return fetcher<string>(`/user/info/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
};
