import { Button } from "@heroui/react";
import { Link } from "../../../../i18n/routing";

const Page = () => {
  return (
    <div className="flex justify-center h-screen overflow-auto">
      <div className="w-full max-w-[1550px] flex flex-col justify-center h-screen">
        <div className="ml-12 flex flex-col px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
          <span>Making quality content visible,</span>
          <span>where sharing creates value</span>
        </div>
        <div className="ml-16 w-full max-w-[1200px] flex flex-col gap-4 mt-8">
          <span className="text-base">
            In the era of information explosion, high-quality and valuable
            information needs better dissemination.
          </span>
          <span className="text-base">
            Webify does not create content, but we excel at discovering,
            curating, and sharing valuable information, ensuring it reaches a
            wider audience.
          </span>
          <span className="text-base">
            We are not just information disseminators—we are amplifiers of
            value. Powered by Web3 technology, we are building an open, fair,
            and efficient information aggregation and social platform where
            quality content gains visibility through your sharing, and every
            share creates value.
          </span>
        </div>
        <div className="ml-14 mt-8">
          <Link href={"/"}>
            <Button size="lg" color="danger">
              Launch App
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
