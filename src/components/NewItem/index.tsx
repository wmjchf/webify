import React from "react";
import classNames from "classnames";
import Image from "next/image";
import styles from "./index.module.scss";
import { Avatar } from "@nextui-org/react";
import { Share } from "./components/Share";
import { Collection } from "./components/Collection";
import { LaterRead } from "./components/LaterRead";
import { Vote } from "./components/Vote";

interface INewsItem {}

export const NewsItem: React.FC<INewsItem> = (props) => {
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
          src="https://nextui.org/images/hero-card-complete.jpeg"
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
          <span className={classNames(styles.time, "text-xs")}>1d ago</span>
        </div>
        <div className={styles.two}>
          <span className="text-base font-semibold">
            Now inbox zero takes zero effort. Get fresh ideas, instant first
            drafts, and helpful writing suggestions with Grammarly. Try it for
            free today.
          </span>
        </div>
        <div className={classNames(styles.three)}>
          <Vote></Vote>
          <Share></Share>
          <Collection></Collection>
          <LaterRead></LaterRead>
        </div>
      </div>
    </div>
  );
};
