import classNames from "classnames";

import { Nav } from "../../../../components/Nav";
import { User } from "../../../../components/User";
import {
  fetcherOtherUser,
  fetcherPublicPost,
} from "../../../../function/common";
import Image from "next/image";
import { NoData } from "../../../../components/NoData";
import { PostList } from "../../../../components/PostList";
import { fetcherUserAllList } from "../../../../function/list";

async function Page({
  params: { locale, uid },
}: {
  params: { locale: string; uid: string };
}) {
  const user = await fetcherOtherUser(uid);
  const { article } = await fetcherPublicPost(uid);
  const allCollectList = await fetcherUserAllList("collect");
  const allLaterList = await fetcherUserAllList("later");
  return (
    <div>
      <User user={user}></User>
      <div className="flex flex-row  gap-8 py-4 pl-16">
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-[rgba(51,51,51,0.6)]">follower</span>
          <span className="font-bold text-[#333]">12</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-[rgba(51,51,51,0.6)]">fans</span>
          <span className="font-bold text-[#333]">43</span>
        </div>
      </div>
      <div className={classNames("pt-5")}>
        <div className={classNames("py-3")}>
          <PostList
            data={article}
            apiType="share"
            allCollectList={allCollectList}
            allLaterList={allLaterList}
            uid={uid}
          ></PostList>
        </div>
      </div>
    </div>
  );
}

export default Page;
