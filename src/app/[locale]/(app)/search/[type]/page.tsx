import { fetcherSearch } from "../../../../../function/search";
import { fetcherUserAllList } from "../../../../../function/list";
import { PostList } from "../PostList";

const Page = async ({
  searchParams,
  params,
}: {
  searchParams: { [key: string]: string };
  params: { type: string };
}) => {
  const type = params.type;
  const { article } = await fetcherSearch(searchParams.q, type);
  const allCollectList = await fetcherUserAllList("collect");
  const allLaterList = await fetcherUserAllList("later");
  const allLikeList = await fetcherUserAllList("like");

  if (type === "1") {
    return (
      <PostList
        data={article}
        q={searchParams.q}
        allCollectList={allCollectList}
        allLaterList={allLaterList}
        allLikeList={allLikeList}
      ></PostList>
    );
  }
};

export default Page;
