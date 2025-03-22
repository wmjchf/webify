// import { useTranslations } from "next-intl";
import { NewsItem } from "../../components/NewItem";
import { FilterPage } from "../../components/FilterPage";
import { NewsList } from "./components/NewsList";
import styles from "./index.module.scss";
import { BASE_URL } from "../../constant/url";
import { Filter } from "../../components/Filter";
import { IArticleSource, IArticleType } from "../../service/public";

async function Page() {
  // const t = useTranslations("home");

  const resultJSON = await fetch(`${BASE_URL}/public/page/home`);

  const result = await resultJSON.json();

  const article = result.data.article;

  return (
    <div className="h-full">
      <FilterPage></FilterPage>
      <NewsList data={article}></NewsList>
    </div>
  );
}

export default Page;
