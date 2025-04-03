"use client";
import React from "react";

interface IAuthPage {
  children: React.ReactNode;
  token?: string;
}
export const AuthClientComponent: React.FC<IAuthPage> = (props) => {
  const { children, token } = props;

  if (!token) {
    return;
  }
  // return <></>
  return <>{children}</>;
};
