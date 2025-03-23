import { PostList } from "../../../../components/PostList";
import { fetcherUserPostList } from "../../../../function/post";

async function Page({ params: { type } }: { params: { type: string } }) {
  const { article } = await fetcherUserPostList();

  return <PostList data={article}></PostList>;
}

export default Page;
