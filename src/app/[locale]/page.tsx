import { fetcherHome, fetcherHomeArticle } from "../../function/common";
import { HomeList } from "../../components/HomeList";

async function Page() {
  const { article } = await fetcherHomeArticle();

  const { articleSource, articleType } = await fetcherHome();

  return (
    <HomeList
      data={article}
      articleSource={articleSource}
      articleType={articleType}
    ></HomeList>
  );
}

export default Page;
