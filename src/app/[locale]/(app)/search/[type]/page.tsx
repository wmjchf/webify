import { fetcherSearch } from "../../../../../function/search";
import { fetcherUserAllList } from "../../../../../function/list";
import { PostList } from "../PostList";
import { UserList } from "../UserList";

const Page = async ({
  searchParams,
  params,
}: {
  searchParams: { [key: string]: string };
  params: { type: string };
}) => {
  const type = params.type;
  const { article, user } = await fetcherSearch(searchParams.q, type);
  const allCollectList = await fetcherUserAllList("collect");
  const allLaterList = await fetcherUserAllList("later");
  const allLikeList = await fetcherUserAllList("like");
  const allFollowList = await fetcherUserAllList("follow");

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
  if (type === "2") {
    return (
      <UserList
        allFollowList={allFollowList}
        data={user}
        q={searchParams.q}
      ></UserList>
    );
  }
};

export default Page;
