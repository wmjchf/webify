"use client";

import React, { useEffect, useRef, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import styles from "./index.module.scss";

import { NewsItem } from "../NewItem";
import { getArticleList, IArticle } from "../../service/public";
// import { getShareNewsList, INewsItem } from "../";

interface INewsList {
  data: IArticle[];
  total?: number;
}
export const NewsList: React.FC<INewsList> = (props) => {
  const { data, total } = props;
  const pageRef = useRef(1);
  const listRef = useRef<IArticle[]>(data);
  const [list, setList] = useState<IArticle[]>(data);
  const [hasMore, setHasMore] = useState(true);

  const handleGetList = async () => {
    pageRef.current += 1;
    const result = await getArticleList({
      articleTypeId: 0,
      sourceTypeId: 0,
      page: pageRef.current,
      pageSize: 10,
    });
    if (result.code === 200) {
      const newList = [...listRef.current, ...result.data.article];
      setList(newList);
      listRef.current = newList;
      if (result.data.article.length < 10) {
        setHasMore(false);
      }
    }
  };

  return (
    <InfiniteScroll
      dataLength={list.length}
      hasMore={hasMore}
      loader={<></>}
      next={handleGetList}
      endMessage={
        <p className="text-center pt-4 pb-3 text-neutral-300">
          Yay! You have seen it all
        </p>
      }
    >
      {list.map((item) => {
        return <NewsItem key={item.id} data={item}></NewsItem>;
      })}
      {/* {total === list.length && (
        <div className="text-center py-3">
          <span className="text-xs text-neutral-300">没有更多了</span>
        </div>
      )} */}
    </InfiniteScroll>
  );
};
