import { PostList } from "../../../../components/PostList";
import { fetcherUserCollectList } from "../../../../function/collect";

async function Page() {
  const { article } = await fetcherUserCollectList();

  return <PostList data={article} apiType="collect"></PostList>;
}

export default Page;
