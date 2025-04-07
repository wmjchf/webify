import { Button } from "@heroui/react";
import { Link } from "../../../../i18n/routing";

const Page = () => {
  return (
    <div className="flex justify-center h-screen overflow-auto">
      <div className="w-full max-w-[1550px] flex flex-col justify-center h-screen">
        <div className="ml-12 flex flex-col px-2 text-4xl tracking-tighter text-balance font-bold max-sm:px-3 sm:text-2xl lg:text-4xl xl:text-5xl">
          <span>Points Tokenomics </span>
        </div>
        <div className="ml-16 w-full max-w-[1200px] flex flex-col gap-4 mt-8">
          <span className="text-base">
            Webify points to make every interaction more valuable
          </span>
          <span className="text-base">
            At Webify, we believe that every view, comment and like deserves to
            be seen and rewarded.
          </span>
          <span className="text-base">
            A new point system is coming online to encourage every user to
            actively participate in the interaction. Whether you're a thoughtful
            commenter, a nuanced viewer, or a communicator who loves to share,
            you'll find value in Webify.
          </span>
          <span className="text-base">
            By accumulating points, you can not only enhance your personal
            influence, unlock exclusive badges, participate in community
            activities, but also have the opportunity to exchange digital assets
            in the future, join the governance proposal, and truly build the
            Web3 content ecosystem.
          </span>
          <span className="text-base">
            Join Webify now and make every interaction shine.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
