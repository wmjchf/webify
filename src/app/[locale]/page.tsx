// import { useTranslations } from "next-intl";
import { NewsItem } from "../../components/NewItem";
import { FilterPage } from "../../components/FilterPage";
import styles from "./index.module.scss";

function Page() {
  // const t = useTranslations("home");
  return (
    <div className={styles.page}>
      <FilterPage></FilterPage>
      <div className="py-2"></div>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
    </div>
  );
}

export default Page;
