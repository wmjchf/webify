import { fetcher } from "../utils/request";

export const getNonce = (address: `0x${string}`) => {
  return fetcher<string>(`/user/info/nonce/${address}`, {
    method: "POST",
  });
};

export const getWalletSignatureContent = () => {
  return fetcher<{ message: string; nonce: string }>(
    `/public/login/getWalletSignatureContent`,
    {
      method: "GET",
    }
  );
};

type LOGIN_TYPE = 1 | 2; // 1钱包登录 2邮箱登录

interface ILoginParams {
  // loginType: LOGIN_TYPE;
  signature: string;
  message: string;
  walletAddress: string;
}

export const login = (data: ILoginParams) => {
  return fetcher<{ token: string; uid: number }>(`/public/login/walletLogin`, {
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
  picture_url?: string;
  bio?: string;
  twitter?: string;
  facebook?: string;
}
export const updateUser = (data: IUpdateUserParams) => {
  return fetcher<string>(`/userAdmin/user/updateUserInfo`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
};

interface IHandleFollowParams {
  typeId: number;
  followUserId: number;
  status: number;
}
export const handleFollow = (data: IHandleFollowParams) => {
  return fetcher<{ id: number; name: string }[]>(`/user/info/follow/create`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
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
