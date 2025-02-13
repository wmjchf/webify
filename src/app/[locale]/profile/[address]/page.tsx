import { redirect } from "../../../../i18n/routing";
function Page({
  params: { locale, address },
}: {
  params: { locale: string; address: string };
}) {
  redirect({
    href: `${address}/shareLink`,
    locale,
  });
  return <></>;
}

export default Page;
