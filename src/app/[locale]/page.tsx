// import { useTranslations } from "next-intl";
import { NewsItem } from "../../components/NewItem";
import { FilterPage } from "../../components/FilterPage";
import { NewsList } from "./components/NewsList";
import styles from "./index.module.scss";

async function Page() {
  // const t = useTranslations("home");

  const resultJSON = await fetch(
    "http://da64-120-234-128-190.ngrok-free.app/article/index/page?pageSizes=10&currentPage=1"
  );
  const result = await resultJSON.json();
  const data = result.data.rows;
  const total = result.data.count;
  return (
    <div className={styles.page}>
      <FilterPage></FilterPage>
      <div className="py-2"></div>
      <NewsList data={data} total={total}></NewsList>
    </div>
  );
}

export default Page;
