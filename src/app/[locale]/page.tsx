// import { useTranslations } from "next-intl";
import { NewsItem } from "../../components/NewItem";
import { FilterPage } from "../../components/FilterPage";
import styles from "./index.module.scss";

function Page() {
  // const t = useTranslations("home");
  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ];
  return (
    <div className={styles.page}>
      <FilterPage></FilterPage>
      <div className="py-2"></div>
      {data.map((item) => {
        return <NewsItem key={item.id}></NewsItem>;
      })}
    </div>
  );
}

export default Page;
