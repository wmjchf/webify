import { PostList } from "../../../../components/PostList";
import { fetcherUserList } from "../../../../function/list";

async function Page() {
  const { article } = await fetcherUserList("later");

  return <PostList data={article} apiType="later"></PostList>;
}

export default Page;
