import { PostList } from "../../../../components/PostList";
import { fetcherUserList } from "../../../../function/list";

async function Page() {
  const { article } = await fetcherUserList("history");

  return <PostList data={article} apiType="history"></PostList>;
}

export default Page;
