

import { fetcher } from "../utils/request";


export const followAdd = (data: { followUserId: number; status: number }) => {
  return fetcher<boolean>("/userAdmin/follow/add", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
};
