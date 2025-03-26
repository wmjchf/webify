import { fetcherHome, fetcherHomeArticle } from "../../function/common";
import { HomeList } from "../../components/HomeList";
import { fetcherUserAllCollectList } from "../../function/collect";
import { NewsItem } from "../../components/NewItem";

async function Page() {
  const { article } = await fetcherHomeArticle();

  const { articleSource, articleType } = await fetcherHome();
  const allCollectList = await fetcherUserAllCollectList();

  return (
    <HomeList
      data={article}
      articleSource={articleSource}
      articleType={articleType}
      allCollectList={allCollectList}
    ></HomeList>
  );
}

export default Page;
