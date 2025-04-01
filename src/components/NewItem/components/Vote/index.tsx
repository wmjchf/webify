"use client";

import React, { useState } from "react";

import { Button } from "@heroui/react";
import classNames from "classnames";

import ShangCai from "./shangcai.svg";
import ShangCai_hover from "./shangcai_hover.svg";
import XiaCai from "./xiacai.svg";
import XiaCai_hover from "./xiacai_hover.svg";

import Image from "next/image";
import { WalletLogin } from "../../../Login/WalletLogin";
import { IUser } from "../../../../service/public";
import { useCommonStore } from "../../../../store/common";
import { likeAdd } from "../../../../service/like";
import { IAllCollect } from "../../../../function/list";
interface IVote {
  articleId: string;
  likeCount: number;
  allLikeList?: IAllCollect[];
}
export const Vote: React.FC<IVote> = (props) => {
  const { user } = useCommonStore();
  const { articleId, likeCount, allLikeList = [] } = props;
  const [ilikeCount, setILikeCount] = useState(likeCount);
  const [likeHover, setLikeHover] = useState(false);
  const [dislikeHover, setDislikeHover] = useState(false);
  const [likeStatus, setLikeStatus] = useState(allLikeList.find((item) => item.article_id === Number(articleId))?.is_like||0)
  return (
    <WalletLogin user={user as IUser}>
      {(onClick) => {
        return (
          <Button
            radius="full"
            size="sm"
            startContent={
              <div
                onMouseEnter={() => {
                  setLikeHover(true);
                }}
                onMouseLeave={() => {
                  setLikeHover(false);
                }}
              >
                <Image
                  src={likeHover ? ShangCai_hover : ShangCai}
                  width={15}
                  height={15}
                  alt=""
                  onClick={() => {
                    if (onClick) {
                      onClick();
                    } else {
                      likeAdd({
                        articleId,
                        typeId: 1,
                        isLike: 1,
                      });
                    }
                  }}
                ></Image>
              </div>
            }
            endContent={
              <div
                onMouseEnter={() => {
                  setDislikeHover(true);
                }}
                onMouseLeave={() => {
                  setDislikeHover(false);
                }}
              >
                <Image
                  src={dislikeHover ? XiaCai_hover : XiaCai}
                  width={15}
                  height={15}
                  alt=""
                  onClick={() => {
                    if (onClick) {
                      onClick();
                    } else {
                      likeAdd({
                        articleId,
                        typeId: 1,
                        isLike: -1,
                      });
                    }
                  }}
                ></Image>
              </div>
            }
            className={classNames({
              ['bg-red-500']: likeStatus === 1,
            })}
          >
            <span className="font-medium">
              {ilikeCount ? ilikeCount : "Vote"}
            </span>
          </Button>
        );
      }}
    </WalletLogin>
  );
};
