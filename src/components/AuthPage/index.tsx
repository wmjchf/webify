import React from "react";

import { cookies } from "next/headers";

import { redirect } from "next/navigation";

interface IAuthPage {
  children: React.ReactNode;
}
export const AuthPage: React.FC<IAuthPage> = (props) => {
  const { children } = props;
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    redirect("/");
  }
  return <>{children}</>;
};
