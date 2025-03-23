import { fetcherHomeArticle } from "../../function/common";
import { NewsList } from "../../components/NewsList";

async function Page() {
  const { article } = await fetcherHomeArticle();
  return <NewsList data={article}></NewsList>;
}

export default Page;
