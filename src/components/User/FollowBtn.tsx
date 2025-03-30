"use client";

import { WalletLogin } from "../Login/WalletLogin";

import { IUser } from "../../service/public";
import { Button } from "@heroui/react";
import { followAdd } from "../../service/follow";

interface IFollowBtn {
  user: IUser | null;
  followUserId: number;
}

export const FollowBtn: React.FC<IFollowBtn> = (props) => {
  const { user, followUserId } = props;
  const handleFollow = async () => {
    const result = await followAdd({
      followUserId: followUserId,
      status: 1,
    });
  };
  return (
    <WalletLogin user={user}>
      {(onClick) => {
        return (
          <Button
            className="rounded-full font-bold"
            onPress={() => {
              if (onClick) {
                onClick();
              } else {
                handleFollow();
              }
            }}
          >
            Follow
          </Button>
        );
      }}
    </WalletLogin>
  );
};
