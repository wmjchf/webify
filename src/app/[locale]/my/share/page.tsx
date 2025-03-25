import { PostList } from "../../../../components/PostList";
import { fetcherUserPostList } from "../../../../function/post";

async function Page() {
  const { article } = await fetcherUserPostList();

  return <PostList data={article} apiType="share"></PostList>;
}

export default Page;
