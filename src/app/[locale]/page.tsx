// import { useTranslations } from "next-intl";
import { NewsItem } from "../../components/NewItem";
import { FilterPage } from "../../components/FilterPage";
import { NewsList } from "./components/NewsList";
import styles from "./index.module.scss";
import { BASE_URL } from "../../constant/url";

async function Page() {
  // const t = useTranslations("home");

  const resultJSON = await fetch(`${BASE_URL}/public/page/home`);

  const result = await resultJSON.json();

  const articleSource = result.data.articleSource;
  const articleType = result.data.articleType;
  const article = result.data.article;
  // const data = result.data.rows;
  // const total = result.data.count;
  // console.log(articleSource, articleType, article, "ewrewrew");
  return (
    <div className={styles.page}>
      <FilterPage></FilterPage>
      <div className="py-2"></div>
      {/* <NewsList data={data} total={total}></NewsList> */}
    </div>
  );
}

export default Page;
