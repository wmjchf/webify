"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@nextui-org/react";
import classNames from "classnames";
import styles from "./index.module.scss";
import { collectShareNews, deleteCollection } from "../../../../service/news";
interface ICollectionProps {
  newsId: string;
  typeId: string;
}
export const Collection: React.FC<ICollectionProps> = (props) => {
  const { newsId, typeId } = props;

  const [isCollect, setIsCollect] = useState(false);

  useEffect(() => {
    const historyCollectionStr = localStorage.getItem("historyCollection");

    let historyCollection =
      historyCollectionStr && JSON.parse(historyCollectionStr);

    setIsCollect(!!(historyCollection && historyCollection[newsId]));
  }, []);

  const collectNews = async () => {
    let result = null;
    if (isCollect) {
      result = await deleteCollection(typeId, newsId);
      if (result.code === 200) {
        const historyCollectionStr = localStorage.getItem("historyCollection");
        let historyCollection =
          historyCollectionStr && JSON.parse(historyCollectionStr);
        if (historyCollection) {
          historyCollection[newsId] = false;
        } else {
          historyCollection = {
            [newsId]: false,
          };
        }
        localStorage.setItem(
          "historyCollection",
          JSON.stringify(historyCollection)
        );
        setIsCollect(false);
      }
    } else {
      result = await collectShareNews(typeId, newsId);
      if (result.code === 200) {
        const historyCollectionStr = localStorage.getItem("historyCollection");
        let historyCollection =
          historyCollectionStr && JSON.parse(historyCollectionStr);
        if (historyCollection) {
          historyCollection[newsId] = true;
        } else {
          historyCollection = {
            [newsId]: true,
          };
        }
        localStorage.setItem(
          "historyCollection",
          JSON.stringify(historyCollection)
        );
        setIsCollect(true);
      }
    }
  };

  return (
    <Button
      radius="full"
      size="sm"
      variant="light"
      className={classNames(styles.collection)}
      onPress={collectNews}
    >
      <span>{isCollect ? "unCollection" : "Collection"}</span>
    </Button>
  );
};
