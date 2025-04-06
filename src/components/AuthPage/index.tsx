import React from "react";

import { cookies } from "next/headers";

import { redirect } from "next/navigation";

interface IAuthPage {
  children: React.ReactNode;
  locale: string;
}
export const AuthPage: React.FC<IAuthPage> = (props) => {
  const { children, locale } = props;
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    redirect(`/${locale}/home`);
  }
  return <>{children}</>;
};
