// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-10-24',
  devtools: { enabled: true },
  srcDir: 'app',
  serverDir: 'server',
  modules: [
    '@vueuse/nuxt',
    "@nuxt/icon",
    "@unocss/nuxt",
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  unocss: {
    nuxtLayers: true,
  },
  css: ['./app/app.css'],
})