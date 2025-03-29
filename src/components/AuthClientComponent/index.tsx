"use client";
import React from "react";

import { cookies } from "next/headers";
import { useCommonStore } from "../../store/common";

interface IAuthPage {
  children: React.ReactNode;
}
export const AuthClientComponent: React.FC<IAuthPage> = (props) => {
  const { children } = props;
  const { token } = useCommonStore();
  if (!token) {
    return;
  }
  return <></>
  // return <>{children}</>;
};
