import styles from "./index.module.scss";
import classNames from "classnames";
import { ShareLink } from "./components/ShareLink";
import { fetcherHome } from "../../../function/common";

async function Page() {
  const { articleType } = await fetcherHome();
  return (
    <div>
      <div>
        <span className={"text-[30px] font-bold px-4"}>Share Link</span>
      </div>
      <div className={classNames("px-4")}>
        <ShareLink articleType={articleType}></ShareLink>
      </div>
    </div>
  );
}

export default Page;
