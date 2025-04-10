"use client";

import React, { useEffect, useRef, useState } from "react";

import { Button } from "@heroui/react";
import classNames from "classnames";

import ShangCai from "./shangcai.svg";
import ShangCai_hover from "./shangcai_hover.svg";
import ShangCai_whie from "./shangcai_white.svg";
import XiaCai from "./xiacai.svg";
import XiaCai_white from "./xiacai_white.svg";
import XiaCai_hover from "./xiacai_hover.svg";

import XiaCai_yes from "./xiacai_yes.svg";
import ShangCai_yes from "./shangcai_yes.svg";

import Image from "next/image";
import { WalletLogin } from "../../../Login/WalletLogin";
import { IUser } from "../../../../service/public";
import { useCommonStore } from "../../../../store/common";
import { likeAdd } from "../../../../service/like";
import { IAllCollect } from "../../../../function/list";
interface IVote {
  articleId: string;
  likeCount: number;
  dislikeCount: number;
  allLikeList?: IAllCollect[];
}
export const Vote: React.FC<IVote> = (props) => {
  const { user } = useCommonStore();
  const { articleId, likeCount, allLikeList = [], dislikeCount } = props;

  const [ilikeCount, setILikeCount] = useState(likeCount);
  const [idislikeCount, setIDislikeCount] = useState(dislikeCount);
  const [likeHover, setLikeHover] = useState(false);
  const loadingRef = useRef<boolean>(false);
  const [loading,setIsLoading] = useState(false);
  const [dislikeHover, setDislikeHover] = useState(false);
  const [likeStatus, setLikeStatus] = useState(
    allLikeList.find((item) => item.article_id === Number(articleId))
      ?.is_like || 0
  );
  useEffect(() => {
    setLikeStatus(
      allLikeList.find((item) => item.article_id === Number(articleId))
        ?.is_like || 0
    );
  }, [allLikeList]);
  return (
    <WalletLogin user={user as IUser}>
      {(onClick) => {
        return (
          <Button
            radius="full"
            size="sm"
            isLoading={loading}
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
                  src={
                    likeStatus !== 0
                      ? likeStatus === 1
                        ? ShangCai_yes
                        : ShangCai_whie
                      : likeHover
                      ? ShangCai_hover
                      : ShangCai
                  }
                  width={15}
                  height={15}
                  alt=""
                  onClick={(event) => {
                    
                    if (onClick) {
                      onClick();
                    } else {
                      if (likeStatus === 1) {
                        return;
                      }
                      if(loadingRef.current){
                        return;
                      }
                      setIsLoading(true);
                      loadingRef.current = true;
                      likeAdd({
                        articleId,
                        typeId: 1,
                        isLike: 1,
                      }).then(() => {
                        setLikeStatus(1);
                        setILikeCount(ilikeCount + 1);
                        likeStatus === -1 &&
                          setIDislikeCount(idislikeCount - 1);
                      }).finally(()=>{
                        setIsLoading(false);
                        loadingRef.current = false;
                      })
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
                  src={
                    likeStatus !== 0
                      ? likeStatus === -1
                        ? XiaCai_yes
                        : XiaCai_white
                      : dislikeHover
                      ? XiaCai_hover
                      : XiaCai
                  }
                  width={15}
                  height={15}
                  alt=""
                  onClick={(event) => {
                    
                    if (onClick) {
                      onClick();
                    } else {
                      if (likeStatus === -1) {
                        return;
                      }
                      if(loadingRef.current){
                        return;
                      }
                      setIsLoading(true);
                      loadingRef.current = true;
                      likeAdd({
                        articleId,
                        typeId: 1,
                        isLike: -1,
                      }).then(() => {
                        setLikeStatus(-1);
                        likeStatus === 1 && setILikeCount(ilikeCount - 1);
                        setIDislikeCount(idislikeCount + 1);
                      }).finally(()=>{
                        setIsLoading(false);
                      loadingRef.current = false;
                      })
                    }
                  }}
                ></Image>
              </div>
            }
            className={classNames({
              ["bg-red-500"]: likeStatus === 1,
              ["text-white"]: likeStatus === 1 || likeStatus === -1,
              ["bg-[#6a5cff]"]: likeStatus === -1,
            })}
          >
            <span className="font-medium">
              {ilikeCount - idislikeCount > 0
                ? ilikeCount - idislikeCount
                : "Vote"}
            </span>
          </Button>
        );
      }}
    </WalletLogin>
  );
};
