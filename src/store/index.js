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

let authStore = (set) => ({
  token: "",
  user: null,
  setToken: (token) => set((state) => ({ ...state, token })),
  setUser: (user) => set((state) => ({ ...state, user })),
  login: async (username, password) => {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const data = await response.json();
      set((state) => ({ ...state, token: data.token, user: data.user }));
    } else {
      throw new Error("Failed to login");
    }
  },
  logout: () => set((state) => ({ ...state, token: "", user: null })),
});

authStore = persist(authStore, { name: "auth" });
homeStore = persist(homeStore, { name: "home" });

export const useAuthStore = create(authStore);
export const useHomeStore = create(homeStore);
