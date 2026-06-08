import { Screen } from "@/types";
import { create } from "zustand";

interface dialogDisplay {
  title: string;
  content: string;
  onSubmit: () => void;
}

interface systemState {
  screenId: number;
  setScreenId: (screen_id: number) => void;

  visibleDialog: boolean;
  setVisibleDialog: (state: boolean) => void;

  dialogDisplay: dialogDisplay | null;
  setDialogDisplay: (dialog: dialogDisplay) => void;
  clearDialogDisplay: () => void;
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

  dialogDisplay: null,

  setDialogDisplay(dialog) {
    set({ dialogDisplay: dialog });
  },

  clearDialogDisplay() {
    set({ dialogDisplay: null });
  },
}));
