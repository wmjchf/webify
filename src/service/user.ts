import { fetcher } from "../utils/request";

export const getNonce = (address: `0x${string}`) => {
  return fetcher<string>(`/user/info/nonce/${address}`, {
    method: "POST",
  });
};

type LOGIN_TYPE = 1 | 2; // 1钱包登录 2邮箱登录

interface ILoginParams {
  loginType: LOGIN_TYPE;
  signature: string;
  message: string;
  nonce: string;
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

interface IUpdateUserParams {
  nickname?: string;
  email?: string;
  pictureUrl?: string;
  bio?: string;
  twitter?: string;
  facebook?: string;
  password?: string;
}
export const updateUser = (data: IUpdateUserParams) => {
  return fetcher<string>(`/user/info/update`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
};

export interface IUser {
  bio?: string;
  email?: string;
  facebook?: string;
  fansCount?: string;

  followCount?: string;
  nickname?: string;
  pictureUrl?: string;
  walletAddress?: string;
}
export const getUserInfo = (userId?: string) => {
  return fetcher<IUser>(
    userId ? `/user/info/detail/{userId}` : `/user/info/detail`
  );
};

// export const getServerUserInfo = (token: string) => {
//   const headers = {};

//   token && Object.assign(headers, { Authorization: token });

//   return fetcher<IUser>(
//     `http://c135-120-234-128-190.ngrok-free.app/user/info/detail`,
//     {
//       headers,
//     },
//     true
//   );
// };
