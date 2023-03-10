import create from "zustand";
import { persist } from "zustand/middleware";

let homeStore = (set) => ({
  view: 0,
  setView: (viewNumber) => set((state) => ({ ...state, view: viewNumber })),
  nextView: () => set((state) => ({ ...state, view: state.view + 1 })),
  prevView: () => set((state) => ({ ...state, view: state.view - 1 })),
  resetView: () => set((state) => ({ ...state, view: 0 })),
});

homeStore = persist(homeStore, { name: "home" });

export const useHomeStore = create(homeStore);
