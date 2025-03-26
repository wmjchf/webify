import { PostList } from "../../../../components/PostList";
import { fetcherUserList } from "../../../../function/list";

async function Page() {
  const { article } = await fetcherUserList("collect");

  return <PostList data={article} apiType="collect"></PostList>;
}

export default Page;
