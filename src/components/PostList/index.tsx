"use client";

import React, { useRef, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { NewsItem } from "../NewItem";
import { getArticleList, IArticle } from "../../service/public";

interface IPostList {
  data: IArticle[];
}
export const PostList: React.FC<IPostList> = (props) => {
  const { data } = props;

  const pageRef = useRef(1);
  const listRef = useRef<IArticle[]>(data);
  const [list, setList] = useState<IArticle[]>(data);
  const [hasMore, setHasMore] = useState(data.length === 10);

  const articleTypeIdRef = useRef<string>("0");
  const sourceTypeIdIdRef = useRef<string>("0");

  const handleGetList = async () => {
    pageRef.current += 1;

    const result = await getArticleList({
      articleTypeId: articleTypeIdRef.current,
      sourceTypeId: sourceTypeIdIdRef.current,
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

  const reset = () => {
    pageRef.current = 0;
    setHasMore(true);
    listRef.current = [];
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={list.length}
        hasMore={hasMore}
        loader={<></>}
        next={() => {
          handleGetList();
        }}
        endMessage={
          <p className="text-center pt-4 pb-3 text-neutral-300">
            Yay! You have seen it all
          </p>
        }
      >
        {list.map((item) => {
          return <NewsItem key={item.id} data={item}></NewsItem>;
        })}
      </InfiniteScroll>
    </div>
  );
};
