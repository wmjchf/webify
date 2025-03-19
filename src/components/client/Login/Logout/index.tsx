"use client";

import React from "react";
import { useCommonStore } from "../../../../store/common";
import { useDisconnect } from "wagmi";
import { DropdownItem } from "@nextui-org/react";

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
