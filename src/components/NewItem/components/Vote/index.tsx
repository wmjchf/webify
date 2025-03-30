import React, { useState } from "react";

import { Button } from "@heroui/react";
import classNames from "classnames";

import ShangCai from "./shangcai.svg";
import ShangCai_hover from "./shangcai_hover.svg";
import XiaCai from "./xiacai.svg";
import XiaCai_hover from "./xiacai_hover.svg";

import styles from "./index.module.scss";
import Image from "next/image";
import { WalletLogin } from "../../../Login/WalletLogin";
import { IUser } from "../../../../service/public";
import { useCommonStore } from "../../../../store/common";
import { likeAdd } from "../../../../service/like";
interface IVote {
  articleId: string;
  likeCount: number;
}
export const Vote: React.FC<IVote> = (props) => {
  const { user } = useCommonStore();
  const { articleId, likeCount } = props;
  const [ilikeCount, setILikeCount] = useState(likeCount);
  const [likeHover, setLikeHover] = useState(false);
  const [dislikeHover, setDislikeHover] = useState(false);

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
            className={classNames(styles.collection)}
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
