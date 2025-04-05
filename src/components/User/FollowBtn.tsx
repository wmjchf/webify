"use client";

import { WalletLogin } from "../Login/WalletLogin";

import { IUser } from "../../service/public";
import { Button } from "@heroui/react";
import { followOperate } from "../../service/follow";
import { useEffect, useRef, useState } from "react";
import { ConfirmModal, IConfirmModalRef } from "../ConfirmModal";

interface IFollowBtn {
  user: IUser | null;
  followUserUid: number;
  isFollowing: boolean;
}

export const FollowBtn: React.FC<IFollowBtn> = (props) => {
  const { user, followUserUid, isFollowing } = props;
  const [text, setText] = useState(isFollowing ? "Following" : "Follow");
  const [iisFollowing, setIisFollowing] = useState(isFollowing);
  const confirmModalRef = useRef<IConfirmModalRef>(null);
  const [laoding, setLoading] = useState(false);

  const handleFollow = async () => {
    !iisFollowing && setLoading(true);
    await followOperate({
      followUserUid,
      status: iisFollowing ? 0 : 1,
    });
    setIisFollowing(!iisFollowing);
    !iisFollowing && setLoading(false);
  };

  useEffect(() => {
    setText(iisFollowing ? "Following" : "Follow");
  }, [iisFollowing]);

  return (
    <>
      <ConfirmModal
        ref={confirmModalRef}
        title="Unfollow"
        onConfirm={handleFollow}
        content="Are you sure you want to unfollow this user?"
      ></ConfirmModal>
      <WalletLogin user={user}>
        {(onClick) => {
          return (
            <Button
              isLoading={laoding}
              className="rounded-full font-bold"
              onPress={() => {
                if (onClick) {
                  onClick();
                } else {
                  if (iisFollowing) {
                    confirmModalRef.current?.open();
                  } else {
                    handleFollow();
                  }
                }
              }}
              onMouseEnter={() => {
                if (iisFollowing) {
                  setText("Unfollow");
                }
              }}
              onMouseLeave={() => {
                if (iisFollowing) {
                  setText("Following");
                }
              }}
            >
              {text}
            </Button>
          );
        }}
      </WalletLogin>
    </>
  );
};
