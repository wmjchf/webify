import styles from "./index.module.scss";
import classNames from "classnames";
import { ShareLink } from "./components/ShareLink";

function Page() {
  return (
    <div>
      <div>
        <span className={"text-[30px]font-bold px-4"}>Share Link</span>
      </div>
      <div className={classNames("px-4")}>
        <ShareLink></ShareLink>
      </div>
    </div>
  );
}

export default Page;
