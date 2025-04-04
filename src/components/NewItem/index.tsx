"use client";

import React from "react";
import classNames from "classnames";
import { PlaceholderImage } from "../PlaceholderImage";
import styles from "./index.module.scss";
import { Share } from "./components/Share";
import { Collection } from "./components/Collection";
import { LaterRead } from "./components/LaterRead";
import { Vote } from "./components/Vote";
import { createHistory, INewsItem } from "../../service/news";
import { timeAgo } from "../../utils/time";
import { DEFAULT_AVATAR } from "../../constant/url";
import { useRouter } from "../../i18n/routing";
import { IArticle } from "../../service/public";
import Image from "next/image";
import { useCommonStore } from "../../store/common";
import { IAllCollect } from "../../function/list";
import { historyAdd } from "../../service/hostory";
import { DeletePost } from "./components/Delete";

interface INewsItemPramas {
  data: IArticle;
  allCollectList?: IAllCollect[];
  allLaterList?: IAllCollect[];
  onDelete?: () => void;
  allLikeList?: IAllCollect[];
}

export const NewsItem: React.FC<INewsItemPramas> = (props) => {
  const { data, allCollectList, allLaterList, onDelete, allLikeList } = props;
  const router = useRouter();
  const { user } = useCommonStore();
  const readNews = async () => {
    window.open(data.url);
    try {
      await historyAdd({
        articleId: data.article_id.toString(),
        typeId: "1",
      });
    } catch (error) {}
  };

  return (
    <div onClick={readNews}>
      <div
        className={classNames(
          styles.newsItem,
          "flex px-1 py-2 gap-3 cursor-pointer rounded-md"
        )}
      >
        <div className={classNames(styles.left, "w-[102px] h-[76px] shrink-0")}>
          <PlaceholderImage
            alt={data.title}
            src={data.image_url}
            width={102}
            height={76}
            imgClassName="object-cover"
            className="w-[102px] h-[76px] rounded-md"
          />
        </div>
        <div className={classNames(styles.right, "flex flex-col gap-3")}>
          <div className={classNames(styles.one, "flex items-center gap-2")}>
            <div
              className={classNames(styles.avatar, "flex items-center gap-2")}
              onClick={(event) => {
                event.stopPropagation();

                if (user?.uid === data.from_id_info?.uid) {
                  router.push(`/my/share`);
                } else {
                  router.push(`/profile/${data?.from_id_info?.uid}`);
                }
              }}
            >
              <Image
                src={data?.from_id_info?.picture_url || DEFAULT_AVATAR}
                alt=""
                width={50}
                height={50}
                className="rounded-full overflow-hidden"
              />
              <span className="text-xs font-semibold">
                {data?.from_id_info?.nickname}
              </span>
            </div>
            <span className={classNames(styles.dot)}></span>
            <span className={classNames(styles.time, "text-xs")}>
              {timeAgo(data.created)}
            </span>
          </div>
          <div className={"flex flex-col gap-2"}>
            <span className="text-base font-semibold">{data.title}</span>
            <span className="text-sm text-black-50 text-sm/6">
              {data.intro}
            </span>
          </div>
          <div className={classNames(styles.three, "flex items-center gap-2")}>
            <Vote
              likeCount={data.like_count}
              articleId={`${data.article_id}`}
              allLikeList={allLikeList}
            ></Vote>
            <Share></Share>
            <Collection
              articleId={`${data.article_id}`}
              allCollectList={allCollectList}
            ></Collection>
            <LaterRead
              articleId={`${data.article_id}`}
              allLaterList={allLaterList}
            ></LaterRead>
            {onDelete && (
              <DeletePost
                articleId={`${data.article_id}`}
                onDelete={onDelete}
              ></DeletePost>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
