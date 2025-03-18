"use client";

interface IStoreProvider {
  children?: React.ReactNode;
}
export const StoreProvider: React.FC<IStoreProvider> = (props) => {
  const { children } = props;
  return <>{children}</>;
};
