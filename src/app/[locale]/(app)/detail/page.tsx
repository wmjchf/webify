import React from "react";
import Image from "next/image";

import { Back } from "./Back";
import classNames from "classnames";
import { Vote } from "../../../../components/NewItem/components/Vote";
import { Collection } from "../../../../components/NewItem/components/Collection";
import { LaterRead } from "../../../../components/NewItem/components/LaterRead";
import { Comment } from "./Comment";

const Page = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Back></Back>
          <div className="flex items-center gap-2">
            <Image
              src={
                "http://webify-img.oss-cn-hongkong.aliyuncs.com/1960b7c50a5.jpg"
              }
              width={30}
              height={30}
              alt=""
              className="rounded-full cursor-pointer"
            ></Image>
            <span className="text-sm font-semibold">dogwang</span>
            <span
              className={"w-[2px] h-[2px] bg-[#5c6c74] rounded-[50%]"}
            ></span>
            <span className={"text-[#5c6c74] text-xs"}>{"2h"}</span>
          </div>
        </div>
        <div>
          <i className="iconfont icon-gengduo"></i>
        </div>
      </div>
      <div className={"flex flex-col gap-2 mt-6"}>
        <span className="text-base font-semibold">
          CNBC：特朗普承认他可能将美国经济推向衰退，但不想引发萧条
        </span>
        <span className="text-sm text-black-50 text-sm/6">
          BlockBeats 消息，4 月 10 日，据 CNBC
          报道，美国总统唐纳德·特朗普希望避免通过他备受争议的关税计划将经济推入萧条。经济学家认为，萧条是当衰退变得更加严重，伴随有更高的失业率和更长时间的经济低迷时发生的。自
          1930
          年代的大萧条以来，美国通过货币政策和财政政策的进展，以及像美国联邦存款保险公司（FDIC）存款保险等项目，避免了萧条的发生。当时，失业率曾达到
          25%。
        </span>
      </div>
      <div className={classNames("flex items-center gap-2 mt-4")}>
        <Vote
          likeCount={0}
          articleId={`${0}`}
          allLikeList={[]}
          dislikeCount={0}
        ></Vote>
        {/* <Share></Share> */}
        <Collection articleId={`${0}`} allCollectList={[]}></Collection>
        <LaterRead articleId={`${0}`} allLaterList={[]}></LaterRead>
      </div>
      <Comment></Comment>
    </div>
  );
};

export default Page;
