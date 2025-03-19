import { create } from "zustand";
import Cookies from "js-cookie";
import { immer } from "zustand/middleware/immer";
import {
  IGetSourceListItem,
  IGetTypeListItem,
  getSourceList,
  getTypeList,
} from "../service/news";
import { IUser, getUserInfo } from "../service/user";

type Action = {
  setToken: (token: string) => void;

  setUserId: (userId: string) => void;

  logout: () => void;

  sourceList: IGetSourceListItem[] | null;
  getSourceList: () => void;

  typeList: IGetTypeListItem[] | null;
  getTypeList: () => void;

  getUserInfo: () => void;
  setUserInfo: (data: IUser | null) => void;

  hydrateCommon: (data: CommonState) => void;
};

export interface CommonState {
  token?: string;

  userId?: string;

  user?: IUser | null;

  _hydrated?: boolean;
}

export const useCommonStore = create<CommonState & Action>()(
  immer((set, get) => ({
    token: undefined,

    userId: undefined,

    setToken: (token) =>
      set((state) => {
        state.token = token;
        Cookies.set("token", `${token}`);
      }),
    setUserId: (userId) =>
      set((state) => {
        state.userId = userId;
        Cookies.set("userId", `${userId}`);
      }),
    logout: () =>
      set((state) => {
        Cookies.remove("token");
        state.token = undefined;
        window.location.reload();
      }),

    sourceList: null,
    getSourceList: async () => {
      const { sourceList } = get();
      if (sourceList) {
        return;
      }
      const { data } = await getSourceList();
      set((state) => {
        state.sourceList = data;
      });
    },

    typeList: null,
    getTypeList: async () => {
      const { typeList } = get();
      if (typeList) {
        return;
      }
      const { data } = await getTypeList();
      set((state) => {
        state.typeList = data;
      });
    },

    user: null,
    getUserInfo: async () => {
      const { data } = await getUserInfo();

      set((state) => {
        state.user = data;
      });
    },
    setUserInfo: (data) => {
      set((state) => {
        state.user = data;
      });
    },
    _hydrated: false,
    hydrateCommon: (data) => {
      set((state) => {
        state.user = data.user;
        state.token = data.token;
        state._hydrated = true;
        state.userId = data.userId;
      });
    },
  }))
);
