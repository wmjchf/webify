// import { useTranslations } from "next-intl";
import { NewsItem } from "../../components/NewItem";
import { FilterPage } from "../../components/FilterPage";
import { NewsList } from "./components/NewsList";
import styles from "./index.module.scss";
import { BASE_URL } from "../../constant/url";

async function Page() {
  // const t = useTranslations("home");

  const resultJSON = await fetch(
    `${BASE_URL}/article/index/page?pageSizes=10&currentPage=1`
  );

  const result = await resultJSON.json();
  const data = result.data.rows;
  const total = result.data.count;
  console.log(data, "ewrewrew");
  return (
    <div className={styles.page}>
      <FilterPage></FilterPage>
      <div className="py-2"></div>
      <NewsList data={data} total={total}></NewsList>
    </div>
  );
}

export default Page;
