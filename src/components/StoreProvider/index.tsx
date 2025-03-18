"use client";

import { useEffect } from "react";
import { CommonState, useCommonStore } from "../../store/common";

interface IStoreProvider {
  children?: React.ReactNode;
  commonState: CommonState;
}
export const StoreProvider: React.FC<IStoreProvider> = (props) => {
  const { children, commonState } = props;
  const { hydrateCommon, _hydrated } = useCommonStore();
  useEffect(() => {
    if (!_hydrated && commonState) {
      hydrateCommon(commonState);
    }
  }, []);
  return <>{children}</>;
};
