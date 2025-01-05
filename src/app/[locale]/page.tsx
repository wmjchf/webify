import { useTranslations } from "next-intl";
import { Button } from "@nextui-org/react";

function Page() {
  const t = useTranslations("home");
  return (
    <div>
      <span>{t("welcome")}</span>
      <Button>11</Button>
    </div>
  );
}

export default Page;
