import { create } from "zustand";

import { immer } from "zustand/middleware/immer";

type Action = {
  setName: (name: string) => void;
};

interface State {
  name: string;
}

export const useCommonStore = create<State & Action>()(
  immer((set) => ({
    name: "demo",
    setName: (name) =>
      set((state) => {
        state.name = name;
      }),
  }))
);
