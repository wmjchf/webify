import React from "react";

import { cookies } from "next/headers";

interface IAuthPage {
  children: React.ReactNode;
}
export const AuthServerComponent: React.FC<IAuthPage> = (props) => {
  const { children } = props;
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return;
  }
  return <>{children}</>;
};
