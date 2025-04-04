"use client";

import React, { useRef, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import { getSearchList, IArticle } from "../../../service/public";
import { IAllCollect } from "../../../function/list";
import { NoData } from "../../../components/NoData";
import { NewsItem } from "../../../components/NewItem";

interface IPostList {
  data: IArticle[];

  allCollectList: IAllCollect[];
  allLaterList: IAllCollect[];
  q: string;
  allLikeList: IAllCollect[];
}
export const PostList: React.FC<IPostList> = (props) => {
  const { data, allCollectList, allLaterList, q, allLikeList } = props;
  const pageRef = useRef(1);
  const listRef = useRef<IArticle[]>(data);
  const [list, setList] = useState<IArticle[]>(data);
  const [hasMore, setHasMore] = useState(data.length === 10);

  const handleGetList = async () => {
    pageRef.current += 1;
    let result: IResponse<{ articleList: IArticle[] }> | null = null;

    result = await getSearchList({
      page: pageRef.current,
      pageSize: 10,
      typeId: "1",
      q,
    });
    if (result?.code === 200) {
      const newList = [...listRef.current, ...result.data.articleList];
      setList(newList);
      listRef.current = newList;
      if (result.data.articleList.length < 10) {
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
        >
          {list.map((item) => {
            return (
              <NewsItem
                allCollectList={allCollectList}
                allLaterList={allLaterList}
                allLikeList={allLikeList}
                key={item.article_id}
                data={item}
              ></NewsItem>
            );
          })}
        </InfiniteScroll>
      )}
    </div>
  );
};
