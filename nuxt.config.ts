// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt'
  ],
  runtimeConfig: {
    public: {
      apiURL: 'http://localhost:3000/api/v1',
    }
  },
  devServer: {
    port: 8000
  }
})
