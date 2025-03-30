"use client";

import React, { useState } from "react";

import { Button } from "@heroui/react";
import classNames from "classnames";

import { laterAdd, laterDel } from "../../../../service/later";
import { IAllCollect } from "../../../../function/list";
import { WalletLogin } from "../../../Login/WalletLogin";
import { useCommonStore } from "../../../../store/common";
import { IUser } from "../../../../service/public";
import { postDelete } from "../../../../service/post";

interface IDeletePostProps {
  articleId: string;

  onDelete?: () => void;
}

export const DeletePost: React.FC<IDeletePostProps> = (props) => {
  const { articleId, onDelete } = props;
  const { user } = useCommonStore();

  const [isLoading, setIsLoading] = useState(false);

  const deletePost = async () => {
    let result = null;
    setIsLoading(true);
    try {
      result = await postDelete(`${articleId}`);
      if (result.code === 200) {
        onDelete && onDelete();
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <WalletLogin user={user as IUser}>
      {(onClick) => {
        return (
          <Button
            radius="full"
            size="sm"
            variant="light"
            onPress={() => {
              if (onClick) {
                onClick();
              } else {
                deletePost();
              }
            }}
            isLoading={isLoading}
          >
            <span className="text-[#5C6C74]">Delete</span>
          </Button>
        );
      }}
    </WalletLogin>
  );
};
