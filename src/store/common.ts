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
  setToken: (token?: string) => void;
  logout: () => void;

  sourceList: IGetSourceListItem[] | null;
  getSourceList: () => void;

  typeList: IGetTypeListItem[] | null;
  getTypeList: () => void;

  user: IUser | null;
  getUserInfo: () => void;
};

interface State {
  token?: string;
}

export const useCommonStore = create<State & Action>()(
  immer((set, get) => ({
    token: undefined,
    setToken: (token) =>
      set((state) => {
        if (token) {
          Cookies.set("token", token);
        }
        state.token = Cookies.get("token");
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
      const { user } = get();
      if (user) {
        return;
      }
      const { data } = await getUserInfo();
      console.log(data, "rewrwerw");
    },
  }))
);
