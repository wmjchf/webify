import classNames from "classnames";
import { ShareLink } from "./components/ShareLink";
import { fetcherHome } from "../../../../function/common";
import { AuthPage } from "../../../../components/AuthPage";

async function Page({ params: { locale } }: { params: { locale: string } }) {
  const { articleType } = await fetcherHome();
  return (
    <AuthPage locale={locale}>
      <div>
        <div>
          <span className={"text-[30px] font-bold px-4"}>Share Link</span>
        </div>
        <div className={classNames("px-4")}>
          <ShareLink articleType={articleType}></ShareLink>
        </div>
      </div>
    </AuthPage>
  );
}

export default Page;
