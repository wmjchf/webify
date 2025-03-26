import { fetcherHome, fetcherHomeArticle } from "../../function/common";
import { HomeList } from "../../components/HomeList";
import { fetcherUserAllList } from "../../function/list";
import { NewsItem } from "../../components/NewItem";

async function Page() {
  const { article } = await fetcherHomeArticle();

  const { articleSource, articleType } = await fetcherHome();
  const allCollectList = await fetcherUserAllList("collect");
  const allLaterList = await fetcherUserAllList("later");

  return (
    <HomeList
      data={article}
      articleSource={articleSource}
      articleType={articleType}
      allLaterList={allLaterList}
      allCollectList={allCollectList}
    ></HomeList>
  );
}

export default Page;
