// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-10-24',
  devtools: { enabled: true },
  srcDir: 'app',
  modules: [
    '@vueuse/nuxt',
    "@nuxt/icon",
    "@unocss/nuxt",
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
})