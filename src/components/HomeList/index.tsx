"use client";
import React, { useRef, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { NewsItem } from "../NewItem";
import {
  getArticleList,
  IArticle,
  IArticleSource,
  IArticleType,
} from "../../service/public";
import { FilterPage } from "../FilterPage";
import { Filter } from "../Filter";
import { useCommonStore } from "../../store/common";
import { IAllCollect } from "../../function/list";
import { NoData } from "../NoData";

interface IHomeList {
  data: IArticle[];
  articleSource: IArticleSource[];
  articleType: IArticleType[];
  allCollectList: IAllCollect[];
  allLaterList: IAllCollect[];
}
export const HomeList: React.FC<IHomeList> = (props) => {
  const { data, articleSource, articleType, allCollectList, allLaterList } =
    props;

  const pageRef = useRef(1);
  const listRef = useRef<IArticle[]>(data);
  const [list, setList] = useState<IArticle[]>(data);
  const [hasMore, setHasMore] = useState(true);
  const articleTypeIdRef = useRef<string>("0");
  const sourceTypeIdIdRef = useRef<string>("0");
  const [articleTypeId, setArticleTypeId] = useState<string>("0");
  const [sourceTypeId, setSourceTypeId] = useState<string>("0");

  const handleGetList = async () => {
    pageRef.current += 1;
    const result = await getArticleList({
      articleTypeId: articleTypeIdRef.current,
      sourceTypeId: sourceTypeIdIdRef.current,
      page: pageRef.current,
      pageSize: 10,
    });
    if (result.code === 200) {
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
      <Filter
        value={sourceTypeId}
        title="全部来源"
        data={[
          ...articleSource.map((item) => ({
            value: `${item.id}`,
            label: item.name,
          })),
        ]}
        className="mt-4 mb-7"
        onChange={(value) => {
          sourceTypeIdIdRef.current = value;
          setSourceTypeId(value);
          reset();
          handleGetList();
        }}
      ></Filter>
      <Filter
        value={articleTypeId}
        title="全部类型"
        data={[
          ...articleType.map((item) => ({
            value: `${item.id}`,
            label: item.name,
          })),
        ]}
        className="mb-7"
        onChange={(value) => {
          articleTypeIdRef.current = value;
          setArticleTypeId(value);
          reset();
          handleGetList();
        }}
      ></Filter>
      {
        data.length === 0 ?<div className="h-[calc(100vh-210px)]">
          <NoData></NoData>
        </div>:<InfiniteScroll
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
              allCollectList={allCollectList}
              allLaterList={allLaterList}
            ></NewsItem>
          );
        })}
      </InfiniteScroll>
      }
    </div>
  );
};
