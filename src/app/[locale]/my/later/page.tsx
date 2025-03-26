import { PostList } from "../../../../components/PostList";
import { fetcherUserAllList, fetcherUserList } from "../../../../function/list";

async function Page() {
  const { article } = await fetcherUserList("later");
const allCollectList = await fetcherUserAllList("collect");
 const allLaterList = await fetcherUserAllList("later");
  return <PostList data={article} apiType="later" allCollectList={allCollectList} allLaterList={allLaterList}></PostList>;
}

export default Page;
