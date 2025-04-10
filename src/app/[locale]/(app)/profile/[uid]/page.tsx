import classNames from "classnames";

import { User } from "../../../../../components/User";
import {
  fetcherOtherUser,
  fetcherPublicPost,
} from "../../../../../function/common";

import { PostList } from "../../../../../components/PostList";
import { fetcherUserAllList } from "../../../../../function/list";

async function Page({
  params: { locale, uid },
}: {
  params: { locale: string; uid: string };
}) {
  const user = await fetcherOtherUser(uid);
  const { article } = await fetcherPublicPost(uid);
  const allCollectList = await fetcherUserAllList("collect");
  const allLaterList = await fetcherUserAllList("later");
  const allLikeList = await fetcherUserAllList("like");
  return (
    <div>
      <User user={user}></User>

      <div className={classNames("pt-5")}>
        <div className={classNames("py-3")}>
          <PostList
            allLikeList={allLikeList}
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
