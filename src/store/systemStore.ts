import { Screen } from "@/types";
import { create } from "zustand";

interface systemState {
  screenId: number;
  setScreenId: (screen_id: number) => void;

  visibleDialog: boolean;
  setVisibleDialog: (state: boolean) => void;
}

export const useSystemStore = create<systemState>((set, get) => ({
  screenId: Screen.HOME,

  setScreenId(screen_id) {
    set({ screenId: screen_id });
  },

  visibleDialog: false,

  setVisibleDialog(state) {
    set({ visibleDialog: state });
  },
}));
