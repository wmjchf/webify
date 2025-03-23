// import { useTranslations } from "next-intl";
import { NewsItem } from "../../components/NewItem";
import { FilterPage } from "../../components/FilterPage";
import styles from "./index.module.scss";
import { BASE_URL } from "../../constant/url";
import { Filter } from "../../components/Filter";
import { IArticleSource, IArticleType } from "../../service/public";
import { fetcherHomeArticle } from "../../function/common";
import { NewsList } from "../../components/NewsList";

async function Page() {
  const { article } = await fetcherHomeArticle();
  return (
    <div className="h-full">
      <FilterPage className="mb-2"></FilterPage>
      <NewsList data={article}></NewsList>
    </div>
  );
}

export default Page;
