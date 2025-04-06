import { cookies } from "next/headers";
import { PostList } from "../../../../../components/PostList";

import { fetcherUserAllList } from "../../../../../function/list";
import { fetcherPublicPost } from "../../../../../function/common";

async function Page() {
  const cookieStore = cookies();
  const uid = cookieStore.get("uid")?.value;
  const { article } = await fetcherPublicPost(uid as string);
  const allCollectList = await fetcherUserAllList("collect");
  const allLaterList = await fetcherUserAllList("later");
  const allLikeList = await fetcherUserAllList("like");
  return (
    <PostList
      data={article}
      apiType="share"
      allCollectList={allCollectList}
      allLaterList={allLaterList}
      allLikeList={allLikeList}
    ></PostList>
  );
}

export default Page;
