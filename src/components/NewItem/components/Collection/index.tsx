"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@heroui/react";

import { collectAdd, collectDel } from "../../../../service/collect";
import { POSTTYPE } from "../../../../constant/type";
interface ICollectionProps {
  articleId: string;
}
export const Collection: React.FC<ICollectionProps> = (props) => {
  const { articleId } = props;

  const [isCollect, setIsCollect] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const historyCollectionStr = localStorage.getItem("historyCollection");

    let historyCollection =
      historyCollectionStr && JSON.parse(historyCollectionStr);

    setIsCollect(!!(historyCollection && historyCollection[articleId]));
  }, []);

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
          const historyCollectionStr =
            localStorage.getItem("historyCollection");
          let historyCollection =
            historyCollectionStr && JSON.parse(historyCollectionStr);
          if (historyCollection) {
            historyCollection[articleId] = false;
          } else {
            historyCollection = {
              [articleId]: false,
            };
          }
          localStorage.setItem(
            "historyCollection",
            JSON.stringify(historyCollection)
          );
          setIsCollect(false);
        }
      } else {
        result = await collectAdd({
          articleId: articleId,
          typeId: POSTTYPE.ARTICLE,
        });
        if (result.code === 200) {
          const historyCollectionStr =
            localStorage.getItem("historyCollection");
          let historyCollection =
            historyCollectionStr && JSON.parse(historyCollectionStr);
          if (historyCollection) {
            historyCollection[articleId] = true;
          } else {
            historyCollection = {
              [articleId]: true,
            };
          }
          localStorage.setItem(
            "historyCollection",
            JSON.stringify(historyCollection)
          );
          setIsCollect(true);
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
      onPress={collectArticle}
      isLoading={isLoading}
    >
      <span className="text-[rgb(92, 108, 116)]">
        {isCollect ? "unCollection" : "Collection"}
      </span>
    </Button>
  );
};
