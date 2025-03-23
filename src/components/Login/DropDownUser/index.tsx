"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";

import React from "react";
import { useDisconnect } from "wagmi";
import { IUser } from "../../../service/public";
import { useCommonStore } from "../../../store/common";
import { Link } from "../../../i18n/routing";

interface IDropDownUser {
  user?: IUser | null;
  avatar?: React.ReactNode;
}
export const DropDownUser: React.FC<IDropDownUser> = (props) => {
  const { user, avatar } = props;
  const { logout } = useCommonStore();

  const { disconnect } = useDisconnect({
    mutation: {
      onSuccess() {
        logout();
      },
    },
  });
  return (
    <Dropdown>
      <DropdownTrigger>
        <div>{avatar}</div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with icons" variant="faded">
        <DropdownItem
          key="profile"
          startContent={<i className={"iconfont icon-Profile text-5xl"} />}
        >
          <Link href={`/my/shareLink`} className="text-black">
            Profile
          </Link>
        </DropdownItem>
        <DropdownItem
          key="setting"
          startContent={<i className={"iconfont icon-shezhi text-5xl"} />}
        >
          <Link href={`/setting`} className="text-black">
            Setting
          </Link>
        </DropdownItem>
        <DropdownItem
          key="logout"
          startContent={<i className={"iconfont icon-tuichudenglu text-5xl"} />}
          onPress={() => {
            disconnect();
          }}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
