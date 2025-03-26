import { PostList } from "../../../../components/PostList";
import { fetcherUserAllList } from "../../../../function/list";
import { fetcherUserPostList } from "../../../../function/post";

async function Page() {
  const { article } = await fetcherUserPostList();
 const allCollectList = await fetcherUserAllList("collect");
 const allLaterList = await fetcherUserAllList("later");
  return <PostList data={article} apiType="share" allCollectList={allCollectList} allLaterList={allLaterList}></PostList>;
}

export default Page;
