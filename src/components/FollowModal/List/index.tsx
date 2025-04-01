"use client";
import React, { useEffect, useRef, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { Item } from "./Item";

import { NoData } from "../../NoData";
import { followList } from "../../../service/follow";
import { IUser } from "../../../service/public";

interface IList {
  type: '1'|'2';
}
export const List: React.FC<IList> = (props) => {
  const { type } = props;

  const pageRef = useRef(0);
  const listRef = useRef<IUser[]>([]);
  const [list, setList] = useState<IUser[] | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const handleGetList = async () => {
    pageRef.current += 1;
    const result = await followList({
      page: pageRef.current,
      pageSize: 10,
      typeId:type
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

  useEffect(() => {
    handleGetList();
  }, []);

  return (
    <div className="h-full" id={type}>
      {list?.length === 0 ? (
        <div className="h-[calc(100%-50px)]">
          <NoData></NoData>
        </div>
      ) : (
        <InfiniteScroll
          dataLength={list?.length || 0}
          hasMore={hasMore}
          scrollableTarget={type}
          loader={<></>}
          next={() => {
            handleGetList();
          }}
        >
          {list?.map((item) => {
            return <Item key={item.uid} data={item}></Item>;
          })}
        </InfiniteScroll>
      )}
    </div>
  );
};
