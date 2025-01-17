"use client";

import React, { useState } from "react";

import styles from "./index.module.scss";

import { NewsItem } from "../../../../components/NewItem";

interface INews {
  id: number;
}
interface INewsList {
  data: INews[];
}
export const NewsList: React.FC<INewsList> = (props) => {
  const { data } = props;
  const [list, setList] = useState<INews[]>(data);
  return (
    <>
      {list.map((item) => {
        return <NewsItem key={item.id}></NewsItem>;
      })}
    </>
  );
};
