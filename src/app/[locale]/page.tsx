// import { useTranslations } from "next-intl";
import { NewsItem } from "../../components/NewItem";

import styles from "./index.module.scss";

function Page() {
  // const t = useTranslations("home");
  return (
    <div className={styles.page}>
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
