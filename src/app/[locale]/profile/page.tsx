import { Button } from "@nextui-org/react";
import { redirect } from "../../../i18n/routing";
function Page({ params: { locale } }: { params: { locale: string } }) {
  redirect({
    href: "profile/shareLink",
    locale,
  });
  return <></>;
}

export default Page;
