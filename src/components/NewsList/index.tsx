"use client";

import React, { useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import styles from "./index.module.scss";

import { NewsItem } from "../NewItem";
// import { getShareNewsList, INewsItem } from "../";

interface INewsList {
  data: any[];
  total: number;
}
export const NewsList: React.FC<INewsList> = (props) => {
  const { data, total } = props;

  const [list, setList] = useState<any[]>(data);
  // useEffect(() => {
  //   getShareNewsList({
  //     pageSizes: 10,
  //     currentPage: 1,
  //   });
  // }, []);

  return (
    <InfiniteScroll
      dataLength={list.length}
      hasMore={true}
      loader={<></>}
      next={() => {}}
    >
      {list.map((item) => {
        return <NewsItem key={item.articleId} data={item}></NewsItem>;
      })}
      {/* {total === list.length && (
        <div className="text-center py-3">
          <span className="text-xs text-neutral-300">没有更多了</span>
        </div>
      )} */}
    </InfiniteScroll>
  );
};
