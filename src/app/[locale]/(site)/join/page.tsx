import { Button } from "@heroui/react";
import { Link } from "../../../../i18n/routing";

const Page = () => {
  return (
    <div className="flex justify-center h-screen overflow-auto">
      <div className="w-full max-w-[1550px] flex flex-col justify-center h-screen">
        <div className="ml-12 flex flex-col px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
          <span>Come Build with Us</span>
        </div>
        <div className="ml-16 w-full max-w-[1200px] flex flex-col gap-4 mt-8">
          <span className="text-base">
            Webify is a DAO built by the community, for the community.
          </span>
          <span>
            Curious to join or collaborate? Drop us a line at{" "}
            <a href="mailto:webifylab@outlook.com" className="text-[#f31260]">
              webifylab@outlook.com
            </a>
            .
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
