"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@heroui/react";
import classNames from "classnames";
import styles from "./index.module.scss";
import { deleteReadLater, readLater } from "../../../../service/news";
import { laterAdd, laterDel } from "../../../../service/later";
import { IAllCollect } from "../../../../function/list";

interface ILaterReadProps {
  articleId: string;
  allLaterList?: IAllCollect[];
  apiType?: string;
}

export const LaterRead: React.FC<ILaterReadProps> = (props) => {
  const { articleId,allLaterList = [],apiType } = props;

  const [isReadLater, setIsReadLater] = useState( allLaterList.some((item) => item.target_id === Number(articleId)) ||
  apiType === "later");

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const historyCollectionStr = localStorage.getItem("historyReadLater");

    let historyReadLater =
      historyCollectionStr && JSON.parse(historyCollectionStr);

    setIsReadLater(!!(historyReadLater && historyReadLater[articleId]));
  }, []);

  const readNews = async () => {
    let result = null;
    setIsLoading(true);
    try {
      if (isReadLater) {
        result = await laterDel({ targetId:articleId, typeId: "1" });
        if (result.code === 200) {
          const historyReadLaterStr = localStorage.getItem("historyReadLater");
          let historyReadLater =
            historyReadLaterStr && JSON.parse(historyReadLaterStr);
          if (historyReadLater) {
            historyReadLater[articleId] = false;
          } else {
            historyReadLater = {
              [articleId]: false,
            };
          }
          localStorage.setItem(
            "historyReadLater",
            JSON.stringify(historyReadLater)
          );
          setIsReadLater(false);
        }
      } else {
        result = await laterAdd({ targetId:articleId, typeId: "1" });
        if (result.code === 200) {
          const historyReadLaterStr = localStorage.getItem("historyReadLater");
          let historyReadLater =
            historyReadLaterStr && JSON.parse(historyReadLaterStr);
          if (historyReadLater) {
            historyReadLater[articleId] = true;
          } else {
            historyReadLater = {
              [articleId]: true,
            };
          }
          localStorage.setItem(
            "historyReadLater",
            JSON.stringify(historyReadLater)
          );
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
