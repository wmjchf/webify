import { create } from "zustand";
import Cookies from "js-cookie";
import { immer } from "zustand/middleware/immer";
import {
  getUserInfo,
  IArticleSource,
  IArticleType,
  IUser,
} from "../service/public";

type Action = {
  setToken: (token: string) => void;

  setUid: (uid: string) => void;

  logout: () => void;

  getUserInfo: () => void;

  hydrateCommon: (data: CommonState) => void;

  toggleConfirmLoginOpen: () => void;

  toggleFollowModalData: (uid: string, type:IFollowModalType) => void;

  switchFollowModal:(type:IFollowModalType)=>void
};
export type IFollowModalType  = '1'|'2'
interface IFollowModalData {
  isOpen: boolean;
  uid: string;
  type:IFollowModalType
}

export interface CommonState {
  token?: string;

  uid?: string;

  user?: IUser | null;

  _hydrated?: boolean;

  confirmLoginOpen?: boolean;

  followModalData?: IFollowModalData;

  articleSource: IArticleSource[];

  articleType: IArticleType[];
}

export const useCommonStore = create<CommonState & Action>()(
  immer((set, get) => ({
    token: undefined,

    userId: undefined,

    articleSource: [],

    articleType: [],

    confirmLoginOpen: false,

    followModalData: {
      isOpen: false,
      uid: "",
      type:"1"
    },

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
        Cookies.remove("uid");
        state.token = undefined;
        state.uid = undefined;
        window.location.reload();
      }),

    user: null,
    getUserInfo: async () => {
      const { uid } = get();
      const { data } = await getUserInfo(uid as string);
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
    toggleConfirmLoginOpen: () => {
      const data = get();
      set((state) => {
        state.confirmLoginOpen = !data.confirmLoginOpen;
      });
    },

    toggleFollowModalData: (uid: string,type:IFollowModalType) => {
      const data = get();
      set((state) => {
        const followModalData = data.followModalData;
        state.followModalData = {
          isOpen: !followModalData?.isOpen,
          uid: uid,
          type:type
        };
      });
    },
    switchFollowModal:(type:IFollowModalType)=>{
      const data = get();
      set((state) => {
        const followModalData = data.followModalData;
        state.followModalData = {
          isOpen: followModalData?.isOpen as boolean,
          uid: followModalData?.uid as string,
          type:type
        };
      });
    }
  }))
);
