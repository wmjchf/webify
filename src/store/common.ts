import { create } from "zustand";

import { immer } from "zustand/middleware/immer";

type Action = {
  setToken: (token?: string) => void;
  logout: () => void;
};

interface State {
  token: string | null;
}

export const useCommonStore = create<State & Action>()(
  immer((set) => ({
    token: null,
    setToken: (token) =>
      set((state) => {
        if (token) {
          localStorage.setItem("token", token);
        }
        state.token = localStorage.getItem("token");
      }),
    logout: () =>
      set((state) => {
        localStorage.removeItem("token");
        state.token = null;
      }),
  }))
);
