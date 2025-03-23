import { fetcherHomeArticle } from "../../function/common";
import { HomeList } from "../../components/HomeList";

async function Page() {
  const { article } = await fetcherHomeArticle();
  return <HomeList data={article}></HomeList>;
}

export default Page;
