import styles from "./index.module.scss";
import classNames from "classnames";
import { DisplayName } from "./DisplayName";
import { EditAvatar } from "./EditAvatar";
import { EditDescription } from "./EditDescription";
import { AuthPage } from "../../../../components/AuthPage";

function Page({ params: { locale } }: { params: { locale: string } }) {
  return (
    <AuthPage locale={locale}>
      <div>
        <div>
          <span className={"font-bold text-[30px] px-4"}>Setting</span>
        </div>
        <div className={classNames("px-4")}>
          <DisplayName></DisplayName>
          <EditDescription></EditDescription>
          <EditAvatar></EditAvatar>
        </div>
      </div>
    </AuthPage>
  );
}

export default Page;
