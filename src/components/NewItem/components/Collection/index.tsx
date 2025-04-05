"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@heroui/react";

import { collectAdd, collectDel } from "../../../../service/collect";
import { POSTTYPE } from "../../../../constant/type";
import { IAllCollect } from "../../../../function/list";
import { WalletLogin } from "../../../Login/WalletLogin";
import { useCommonStore } from "../../../../store/common";
import { IUser } from "../../../../service/public";
interface ICollectionProps {
  articleId: string;
  allCollectList?: IAllCollect[];
}
export const Collection: React.FC<ICollectionProps> = (props) => {
  const { articleId, allCollectList = [] } = props;
  const { user } = useCommonStore();
  const [isCollect, setIsCollect] = useState(
    allCollectList.some((item) => item.target_id === Number(articleId))
  );

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsCollect(
      allCollectList.some((item) => item.target_id === Number(articleId))
    );
  }, [allCollectList]);

  const collectArticle = async () => {
    let result = null;
    setIsLoading(true);
    try {
      if (isCollect) {
        result = await collectDel({
          articleId: articleId,
          typeId: POSTTYPE.ARTICLE,
        });
        if (result.code === 200) {
          setIsCollect(false);
        }
      } else {
        result = await collectAdd({
          articleId: articleId,
          typeId: POSTTYPE.ARTICLE,
        });
        if (result.code === 200) {
          setIsCollect(true);
        }
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
                collectArticle();
              }
            }}
            isLoading={isLoading}
          >
            <span className="text-[#5C6C74]">
              {isCollect ? "unCollection" : "Collection"}
            </span>
          </Button>
        );
      }}
    </WalletLogin>
  );
};
