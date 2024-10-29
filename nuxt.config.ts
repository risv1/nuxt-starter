// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-10-24",
  modules: [
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@unocss/nuxt",
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  ssr: false,
  devtools: { enabled: true },
  css: ["./app/app.css"],
  srcDir: "app",
  serverDir: "server",
  unocss: {
    nuxtLayers: true,
  },
  imports: {
    dirs: ["./store"],
  }
});
