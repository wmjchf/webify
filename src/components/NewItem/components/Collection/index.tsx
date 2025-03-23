"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@heroui/react";

import { collectAdd, collectDel } from "../../../../service/collect";
interface ICollectionProps {
  article_id: string;
}
export const Collection: React.FC<ICollectionProps> = (props) => {
  const { article_id } = props;

  const [isCollect, setIsCollect] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const historyCollectionStr = localStorage.getItem("historyCollection");

    let historyCollection =
      historyCollectionStr && JSON.parse(historyCollectionStr);

    setIsCollect(!!(historyCollection && historyCollection[article_id]));
  }, []);

  const collectArticle = async () => {
    let result = null;
    setIsLoading(true);
    try {
      if (isCollect) {
        result = await collectDel({
          article_id: article_id,
        });
        if (result.code === 200) {
          const historyCollectionStr =
            localStorage.getItem("historyCollection");
          let historyCollection =
            historyCollectionStr && JSON.parse(historyCollectionStr);
          if (historyCollection) {
            historyCollection[article_id] = false;
          } else {
            historyCollection = {
              [article_id]: false,
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
          article_id: article_id,
        });
        if (result.code === 200) {
          const historyCollectionStr =
            localStorage.getItem("historyCollection");
          let historyCollection =
            historyCollectionStr && JSON.parse(historyCollectionStr);
          if (historyCollection) {
            historyCollection[article_id] = true;
          } else {
            historyCollection = {
              [article_id]: true,
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
