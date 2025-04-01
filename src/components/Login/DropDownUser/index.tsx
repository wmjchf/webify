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
import { PlaceholderImage } from "../../PlaceholderImage";

interface IDropDownUser {
  user?: IUser | null;
  avatar?: React.ReactNode;
}
export const DropDownUser: React.FC<IDropDownUser> = (props) => {
  const { user, avatar } = props;
  const { logout,toggleFollowModalData } = useCommonStore();

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
          className="flex items-center justify-center border-0 rounded-none hover:!bg-transparent"
        >
          <div className="flex items-center justify-center">{avatar}</div>
        </DropdownItem>
        <DropdownItem
          key="nickname"
          className="flex items-center justify-center border-0 rounded-none hover:!bg-transparent"
        >
          <div className="flex items-center justify-center">
            {user?.nickname}
          </div>
        </DropdownItem>
        <DropdownItem
          key="user"
          className="!border-[#E5E5E5] border-t-0 border-l-0 border-r-0 rounded-none hover:!bg-transparent"
        >
          <div className="flex items-center justify-center gap-8">
            <div className="flex flex-col items-center justify-center gap-1 cursor-pointer" onClick={()=>{
              toggleFollowModalData(`${user?.uid}`,'1')
            }}>
              <span className="font-bold text-[#333]">
                {user?.following_count || 0}
              </span>
              <span className="text-[rgba(51,51,51,0.6)]">following</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 cursor-pointer" onClick={()=>{
              toggleFollowModalData(`${user?.uid}`,'2')
            }}>
              <span className="font-bold text-[#333]">
                {user?.followers_count || 0}
              </span>
              <span className="text-[rgba(51,51,51,0.6)]">followers</span>
            </div>
          </div>
        </DropdownItem>
        <DropdownItem
          key="profile"
          className="hover:!border-transparent hover:!bg-transparent hover:!bg-[#FFF0F5]"
          startContent={<i className={"iconfont icon-Profile text-5xl"} />}
        >
          <Link href={`/my/share`} className="text-[rgba(51,51,51,0.8)]">
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
