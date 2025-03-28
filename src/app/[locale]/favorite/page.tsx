// import { useTranslations } from "next-intl";
import { AuthPage } from "../../../components/AuthPage";
import styles from "./index.module.scss";

async function Page() {
  // const t = useTranslations("home");
  return (
    <AuthPage>
      <div className={styles.page}></div>
    </AuthPage>
  );
}

export default Page;
