import classNames from "classnames";
import Image from "next/image";
import NoDataSvg from './no-data.svg'
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
      <Image src={NoDataSvg} alt="" width={150} height={150}></Image>
      {/* <span className="text-gray-500 text-sm">没有数据~</span> */}
    </div>
  );
};
