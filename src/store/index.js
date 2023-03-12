import create from "zustand";
import { persist } from "zustand/middleware";

let homeStore = (set) => ({
  view: 0,
  previousView: 0,
  setView: (viewNumber) =>
    set((state) => ({ ...state, view: viewNumber, previousView: state.view })),
  nextView: () =>
    set((state) => ({
      ...state,
      view: state.view + 1,
      previousView: state.view,
    })),
  prevView: () =>
    set((state) => ({
      ...state,
      view: state.view - 1,
      previousView: state.view,
    })),
  resetView: () => set((state) => ({ ...state, view: 0, previousView: 0 })),
});

homeStore = persist(homeStore, { name: "home" });

export const useHomeStore = create(homeStore);
