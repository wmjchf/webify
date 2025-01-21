"use client";

import React, { useEffect, useState } from "react";

import styles from "./index.module.scss";

import { NewsItem } from "../../../../components/NewItem";
import { getShareNewsList, INewsItem } from "../../../../service/news";

interface INewsList {
  data: INewsItem[];
  total: number;
}
export const NewsList: React.FC<INewsList> = (props) => {
  const { data, total } = props;

  const [list, setList] = useState<INewsItem[]>(data);
  useEffect(() => {
    getShareNewsList({
      pageSizes: 10,
      currentPage: 1,
    });
  }, []);
  return (
    <>
      {list.map((item) => {
        return <NewsItem key={item.id} data={item}></NewsItem>;
      })}
      {total === list.length && (
        <div className="text-center py-3">
          <span className="text-xs text-neutral-300">没有更多了</span>
        </div>
      )}
    </>
  );
};
