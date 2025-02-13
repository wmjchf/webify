// import { useTranslations } from "next-intl";
import { NewsItem } from "../../../components/NewItem";
import { NewsList } from "../components/NewsList";
import { BASE_URL } from "../../../constant/url";
import { cookies } from "next/headers";
import styles from "./index.module.scss";

async function Page() {
  // const t = useTranslations("home");
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  let data = null;
  let total = 0;
  if (token) {
    const resultJSON = await fetch(
      `${BASE_URL}/article/history/page?pageSizes=10&currentPage=1`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    const result = await resultJSON.json();
    data = result.data.rows;
    total = result.data.count;
  }

  return (
    <div className={styles.page}>
      <NewsList data={data} total={total}></NewsList>
    </div>
  );
}

export default Page;
