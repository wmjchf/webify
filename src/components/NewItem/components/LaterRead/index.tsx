"use client";

import React, { useState } from "react";

import { Button } from "@heroui/react";
import classNames from "classnames";
import styles from "./index.module.scss";
import { laterAdd, laterDel } from "../../../../service/later";
import { IAllCollect } from "../../../../function/list";

interface ILaterReadProps {
  articleId: string;
  allLaterList?: IAllCollect[];
}

export const LaterRead: React.FC<ILaterReadProps> = (props) => {
  const { articleId,allLaterList = [] } = props;
  const [isReadLater, setIsReadLater] = useState(allLaterList.some((item) => item.target_id === Number(articleId)));

  const [isLoading, setIsLoading] = useState(false);
  

  const readNews = async () => {
    let result = null;
    setIsLoading(true);
    try {
      if (isReadLater) {
        result = await laterDel({ targetId:articleId, typeId: "1" });
        if (result.code === 200) {
          setIsReadLater(false);
        }
      } else {
        result = await laterAdd({ targetId:articleId, typeId: "1" });
        if (result.code === 200) {
          setIsReadLater(true);
        }
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      radius="full"
      size="sm"
      variant="light"
      className={classNames(styles.laterRead)}
      onPress={readNews}
      isLoading={isLoading}
    >
      <span>{isReadLater ? "unRead Later" : "Read Later"}</span>
    </Button>
  );
};
