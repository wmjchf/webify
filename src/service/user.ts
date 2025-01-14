import { fetcher } from "../utils/request";

export const getNonce = (address?: `0x${string}`) => {
  return fetcher<{ id: number; name: string }[]>(`/user/nonce/${address}`);
};
