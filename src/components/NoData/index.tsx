import classNames from "classnames";
import Image from "next/image";
interface INoData {
  className?: string;
}
export const NoData: React.FC<INoData> = (props) => {
  const { className } = props;
  return (
    <div
      className={classNames(
        "flex justify-center items-center flex-col gap-4 h-full w-full text-center text-gray-500",
        className
      )}
    >
      <Image src="/image/no-data.svg" alt="" width={200} height={200}></Image>
      <span className="text-gray-500 text-sm">没有书籍~</span>
    </div>
  );
};
