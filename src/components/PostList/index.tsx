"use client";

import React, { useRef, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { NewsItem } from "../NewItem";
import { IArticle } from "../../service/public";
import { getPostList } from "../../service/post";
import { getCollectList } from "../../service/collect";
import { NoData } from "../NoData";
import { getLaterList } from "../../service/later";

interface IPostList {
  data: IArticle[];
  apiType: string;
}
export const PostList: React.FC<IPostList> = (props) => {
  const { data, apiType } = props;
  const pageRef = useRef(1);
  const listRef = useRef<IArticle[]>(data);
  const [list, setList] = useState<IArticle[]>(data);
  const [hasMore, setHasMore] = useState(data.length === 10);

  const handleGetList = async () => {
    pageRef.current += 1;
    let result: IResponse<{ list: IArticle[] }> | null = null;
    if (apiType === "share") {
      result = await getPostList({
        sort: "1",
        page: pageRef.current,
        pageSize: 10,
      });
    }
    if (apiType === "collect") {
      result = await getCollectList({
        sort: "1",
        page: pageRef.current,
        pageSize: 10,
      });
    }

    if (apiType === "later") {
      result = await getLaterList({
        sort: "1",
        page: pageRef.current,
        pageSize: 10,
      });
    }

    if (result?.code === 200) {
      const newList = [...listRef.current, ...result.data.list];
      setList(newList);
      listRef.current = newList;
      if (result.data.list.length < 10) {
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
      {list.length === 0 ? (
        <div className="h-[calc(100vh-210px)] flex justify-center items-center">
          <NoData></NoData>
        </div>
      ) : (
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
            return (
              <NewsItem
                key={item.article_id}
                data={item}
                apiType={apiType}
              ></NewsItem>
            );
          })}
        </InfiniteScroll>
      )}
    </div>
  );
};
