import { create } from "zustand";
import Cookies from "js-cookie";
import { immer } from "zustand/middleware/immer";
import { IUser, getUserInfo } from "../service/user";
import { IArticleSource, IArticleType } from "../service/public";

type Action = {
  setToken: (token: string) => void;

  setUid: (uid: string) => void;

  logout: () => void;

  getUserInfo: () => void;
  setUserInfo: (data: IUser | null) => void;

  hydrateCommon: (data: CommonState) => void;
};

export interface CommonState {
  token?: string;

  uid?: string;

  user?: IUser | null;

  _hydrated?: boolean;

  articleSource: IArticleSource[];

  articleType: IArticleType[];
}

export const useCommonStore = create<CommonState & Action>()(
  immer((set, get) => ({
    token: undefined,

    userId: undefined,

    articleSource: [],

    articleType: [],
    setToken: (token) =>
      set((state) => {
        state.token = token;
        Cookies.set("token", `${token}`);
      }),
    setUid: (uid) =>
      set((state) => {
        state.uid = uid;

        Cookies.set("uid", `${uid}`);
      }),
    logout: () =>
      set((state) => {
        Cookies.remove("token");
        Cookies.remove("userId");
        state.token = undefined;
        state.uid = undefined;
        window.location.reload();
      }),

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
        state.uid = data.uid;
        state.articleSource = data.articleSource;
        state.articleType = data.articleType;
      });
    },
  }))
);
