import { defineStore } from "pinia";

type User = {
  email: string;
  name: string;
};

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null as User | null,
  }),
  persist: {
    storage: persistedState.localStorage,
  },
  actions: {
    async setUser(user: User | null) {
      this.user = user;
    },
  },
});
