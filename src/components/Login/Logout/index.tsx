"use client";

import React from "react";

import { useDisconnect } from "wagmi";
import { DropdownItem } from "@heroui/react";
import { useCommonStore } from "../../../store/common";

export const Logout = () => {
  const { logout } = useCommonStore();

  const { disconnect } = useDisconnect({
    mutation: {
      onSuccess() {
        logout();
      },
    },
  });
  return (
    <DropdownItem
      key="logout"
      startContent={<i className={"iconfont icon-tuichudenglu text-5xl"} />}
      onPress={() => {
        disconnect();
      }}
    >
      Log Out
    </DropdownItem>
  );
};
