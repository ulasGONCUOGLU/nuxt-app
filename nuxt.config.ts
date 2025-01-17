// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', 'vuetify-nuxt-module'],
  supabase: {
    redirect: true, // true olduğunda login sayfasına yönlendiriliyorsun false olduğunda index sayfasındasın (redirectOptions silebilirsin)
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      include: undefined,     // Tüm sayfalar için yönlendirme
      exclude: [],            // Yönlendirme dışında bırakılacak yollar
      cookieRedirect: false,
    },
  
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    }
  }
})