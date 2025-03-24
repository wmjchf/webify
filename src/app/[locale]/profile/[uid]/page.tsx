import classNames from "classnames";

import { Nav } from "../../../../components/Nav";
import { User } from "../../../../components/User";
import { fetcherOtherUser } from "../../../../function/common";
import Image from "next/image";
import { NoData } from "../../../../components/NoData";

async function Page({
  params: { locale, uid },
}: {
  params: { locale: string; uid: string };
}) {
  const user = await fetcherOtherUser(uid);

  return (
    <div>
      <User user={user}></User>
      <div className="flex flex-row  gap-8 py-4 pl-16">
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-[rgba(51,51,51,0.6)]">follower</span>
          <span className="font-bold text-[#333]">12</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-[rgba(51,51,51,0.6)]">fans</span>
          <span className="font-bold text-[#333]">43</span>
        </div>
      </div>
      <div className={classNames("pt-5")}>
        <div className={classNames("py-3")}>
          <NoData className="mt-20"></NoData>
        </div>
      </div>
    </div>
  );
}

export default Page;
