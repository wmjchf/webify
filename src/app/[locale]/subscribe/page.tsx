import { AuthPage } from "../../../components/AuthPage";
import { HomeList } from "../../../components/HomeList";
import { PostList } from "../../../components/PostList";
import { fetcherUserAllList } from "../../../function/list";
import { fetcherHomeFeed } from "../../../function/post";

async function Page() {
  const { article } = await fetcherHomeFeed();
  const allCollectList = await fetcherUserAllList("collect");
  const allLaterList = await fetcherUserAllList("later");
  const allLikeList = await fetcherUserAllList("like");

  return (
    <AuthPage>
      <PostList
        data={article}
        apiType="subscribe"
        allLaterList={allLaterList}
        allCollectList={allCollectList}
        allLikeList={allLikeList}
      ></PostList>
    </AuthPage>
  );
}

export default Page;
