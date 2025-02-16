// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver, defineNuxtModule, addServerHandler } from 'nuxt/kit'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // modules: ['@nuxtjs/supabase', 'vuetify-nuxt-module','./modules/module', './app/stok/module.ts', './app/cbs/module.ts', './app/dash/module.ts'],
  modules: [
    '@nuxtjs/supabase',
    'vuetify-nuxt-module',
    './modules/module',
    './app/stok/module.ts',
    './app/cbs/module.ts',
    './app/dash/module.ts',
  ].map((module) => {
    console.log(`Loading module: ${module}`);
    return module;
  }),
  
  supabase: {
    redirect:false,
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    }
   },
})
