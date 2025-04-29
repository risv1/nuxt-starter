import { defineStore } from "pinia";

export const useCount = defineStore("count", {
  state: () => ({ count: 0 }),
  actions: {
    increment(this: { count: number }) {
      this.count++;
    },
    decrement(this: { count: number }) {
      this.count--;
    },
  },
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
});
