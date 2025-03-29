"use client";

import Link from "next/link";
import { WalletLogin } from "../Login/WalletLogin";

import { IUser } from "../../service/public";
import { Button } from "@heroui/react";
import { useRouter } from "../../i18n/routing";

interface ShareBtn {
  user: IUser | null;
}

export const ShareBtn: React.FC<ShareBtn> = (props) => {
  const { user } = props;
  const router = useRouter();
  return (
    <WalletLogin user={user}>
      {(onClick) => {
        return (
          <Button
            startContent={<i className="iconfont icon-tianjia"></i>}
            size="sm"
            color="danger"
            variant="light"
            className="rounded"
            onPress={() => {
              if (onClick) {
                onClick();
              } else {
                router.push("/create");
              }
            }}
          >
            Share
          </Button>
        );
      }}
    </WalletLogin>
  );
};
