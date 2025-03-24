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
          key="user"
          className="hover:!border-transparent hover:!bg-transparent"
          // startContent={<i className={"iconfont icon-Profile text-5xl"} />}
        >
          <div className="flex items-center justify-center gap-8">
            <div className="flex flex-col items-center justify-center gap-1 text-[rgba(51,51,51,0.6)] hover:text-[#f31260]">
              <span>23</span>
              <span>follower</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 text-[rgba(51,51,51,0.6)] hover:text-[#f31260]">
              <span>34</span>
              <span>fans</span>
            </div>
          </div>
        </DropdownItem>
        <DropdownItem
          key="profile"
          className="hover:!border-transparent hover:!bg-transparent hover:!bg-[#FFF0F5]"
          startContent={<i className={"iconfont icon-Profile text-5xl"} />}
        >
          <Link href={`/my/shareLink`} className="text-[rgba(51,51,51,0.8)]">
            Profile
          </Link>
        </DropdownItem>
        <DropdownItem
          key="setting"
          className="hover:!border-transparent hover:!bg-transparent hover:!bg-[#FFF0F5]"
          startContent={<i className={"iconfont icon-shezhi text-5xl"} />}
        >
          <Link href={`/setting`} className="text-[rgba(51,51,51,0.8)]">
            Setting
          </Link>
        </DropdownItem>
        <DropdownItem
          key="logout"
          className="hover:!border-transparent hover:!bg-transparent hover:!bg-[#FFF0F5] hover:!outline-0"
          startContent={<i className={"iconfont icon-tuichudenglu text-5xl"} />}
          onPress={() => {
            disconnect();
          }}
        >
          <span className="text-[rgba(51,51,51,0.8)]">Log Out</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
