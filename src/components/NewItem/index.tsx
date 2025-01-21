import React from "react";
import classNames from "classnames";
import Image from "next/image";
import styles from "./index.module.scss";
import { Avatar } from "@nextui-org/react";
import { Share } from "./components/Share";
import { Collection } from "./components/Collection";
import { LaterRead } from "./components/LaterRead";
import { Vote } from "./components/Vote";
import { INewsItem } from "../../service/news";
import { timeAgo } from "../../utils/time";

interface INewsItemPramas {
  data: INewsItem;
}

export const NewsItem: React.FC<INewsItemPramas> = (props) => {
  const { data } = props;
  return (
    <div
      className={classNames(
        styles.newsItem,
        "flex px-1 py-2 gap-3 cursor-pointer rounded-md"
      )}
    >
      <div className={classNames(styles.left, "shrink-0")}>
        <Image
          alt="NextUI hero Image"
          src={data.imageUrl}
          width={102}
          height={76}
          className="rounded-md overflow-hidden"
        />
      </div>
      <div className={classNames(styles.right, "flex flex-col gap-3")}>
        <div className={classNames(styles.one, "flex items-center gap-2")}>
          <div className={classNames(styles.avatar, "flex items-center gap-2")}>
            <Image
              src="https://nextui.org/images/hero-card-complete.jpeg"
              alt=""
              width={50}
              height={50}
              className="rounded-full overflow-hidden"
            />
            <span className="text-xs font-semibold">金色财经</span>
          </div>
          <span className={classNames(styles.dot)}></span>
          <span className={classNames(styles.time, "text-xs")}>
            {timeAgo(data.created)}
          </span>
        </div>
        <div className={styles.two}>
          <span className="text-base font-semibold">{data.title}</span>
        </div>
        <div className={classNames(styles.three, "flex items-center gap-2")}>
          <Vote></Vote>
          <Share></Share>
          <Collection></Collection>
          <LaterRead></LaterRead>
        </div>
      </div>
    </div>
  );
};
