"use client";

import React, { useEffect, useRef, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import { getSearchList, IArticle, IUser } from "../../../../service/public";
import { IAllCollect } from "../../../../function/list";
import { NoData } from "../../../../components/NoData";
import { Item } from "../../../../components/FollowModal/List/Item";

interface IUserList {
  data: IUser[];
  allFollowList: IAllCollect[];
  q: string;
}
export const UserList: React.FC<IUserList> = (props) => {
  const { data, q, allFollowList } = props;
  const pageRef = useRef(1);
  const listRef = useRef<IUser[]>(data);
  const [list, setList] = useState<IUser[]>(data);
  const [hasMore, setHasMore] = useState(data.length === 10);

  useEffect(() => {
    listRef.current = data;
    setList(data);
  }, [data]);

  const handleGetList = async () => {
    pageRef.current += 1;
    let result: IResponse<{ userList?: IUser[] }> | null = null;

    result = await getSearchList({
      page: pageRef.current,
      pageSize: 10,
      typeId: "1",
      q,
    });
    if (result?.code === 200) {
      const newList = [...listRef.current, ...(result.data.userList || [])];
      setList(newList);
      listRef.current = newList;
      if ((result.data.userList || []).length < 10) {
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
              <Item
                allFollowList={allFollowList}
                key={item.uid}
                data={item}
              ></Item>
            );
          })}
        </InfiniteScroll>
      )}
    </div>
  );
};
