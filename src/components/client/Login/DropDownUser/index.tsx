"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@nextui-org/react";
import React from "react";
import { Logout } from "../Logout";
import { IUser } from "../../../../service/user";

interface IDropDownUser {
  user?: IUser | null;
  avatar?: React.ReactNode;
}
export const DropDownUser: React.FC<IDropDownUser> = (props) => {
  const { user, avatar } = props;
  return (
    <Dropdown>
      <DropdownTrigger>{avatar}</DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with icons" variant="faded">
        <DropdownItem
          key="profile"
          startContent={<i className={"iconfont icon-Profile text-5xl"} />}
        >
          <Link href={`/profile/${user?.id}`}> Profile</Link>
        </DropdownItem>
        <DropdownItem
          key="setting"
          startContent={<i className={"iconfont icon-shezhi text-5xl"} />}
        >
          <Link href={`/setting`}>Setting</Link>
        </DropdownItem>
        <Logout></Logout>
      </DropdownMenu>
    </Dropdown>
  );
};
