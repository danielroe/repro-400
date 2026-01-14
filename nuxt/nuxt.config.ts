// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  routeRules: {
    '/api/test': { isr: true }
  },
  devtools: { enabled: true }
})
