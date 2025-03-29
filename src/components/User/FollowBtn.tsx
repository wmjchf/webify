"use client";

import { WalletLogin } from "../Login/WalletLogin";

import { IUser } from "../../service/public";
import { Button } from "@heroui/react";

interface IFollowBtn {
  user: IUser | null;
}

export const FollowBtn: React.FC<IFollowBtn> = (props) => {
  const { user } = props;
  return (
    <WalletLogin user={user}>
      {(onClick) => {
        return (
          <Button
            onPress={() => {
              if (onClick) {
                onClick();
              } else {
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
