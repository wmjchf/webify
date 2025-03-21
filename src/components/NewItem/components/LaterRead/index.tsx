"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@heroui/react";
import classNames from "classnames";
import styles from "./index.module.scss";
import { deleteReadLater, readLater } from "../../../../service/news";

interface ILaterReadProps {
  newsId: string;
  typeId: string;
}

export const LaterRead: React.FC<ILaterReadProps> = (props) => {
  const { newsId, typeId } = props;

  const [isReadLater, setIsReadLater] = useState(false);

  useEffect(() => {
    const historyCollectionStr = localStorage.getItem("historyReadLater");

    let historyReadLater =
      historyCollectionStr && JSON.parse(historyCollectionStr);

    setIsReadLater(!!(historyReadLater && historyReadLater[newsId]));
  }, []);

  const readNews = async () => {
    let result = null;
    if (isReadLater) {
      result = await deleteReadLater(typeId, newsId);
      if (result.code === 200) {
        const historyReadLaterStr = localStorage.getItem("historyReadLater");
        let historyReadLater =
          historyReadLaterStr && JSON.parse(historyReadLaterStr);
        if (historyReadLater) {
          historyReadLater[newsId] = false;
        } else {
          historyReadLater = {
            [newsId]: false,
          };
        }
        localStorage.setItem(
          "historyReadLater",
          JSON.stringify(historyReadLater)
        );
        setIsReadLater(false);
      }
    } else {
      result = await readLater(typeId, newsId);
      if (result.code === 200) {
        const historyReadLaterStr = localStorage.getItem("historyReadLater");
        let historyReadLater =
          historyReadLaterStr && JSON.parse(historyReadLaterStr);
        if (historyReadLater) {
          historyReadLater[newsId] = true;
        } else {
          historyReadLater = {
            [newsId]: true,
          };
        }
        localStorage.setItem(
          "historyReadLater",
          JSON.stringify(historyReadLater)
        );
        setIsReadLater(true);
      }
    }
  };
  return (
    <Button
      radius="full"
      size="sm"
      variant="light"
      className={classNames(styles.laterRead)}
      onPress={readNews}
    >
      <span>{isReadLater ? "unRead Later" : "Read Later"}</span>
    </Button>
  );
};
