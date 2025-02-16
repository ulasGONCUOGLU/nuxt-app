import { defineNuxtModule } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'cbs-module',
    configKey: 'cbs',
  },
  setup(_, nuxt) {
    console.log('CBS Module Loaded');

    // Sayfa yönlendirmesini genişletmek için
    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'cbs', // Sayfanın adı
        path: '/cbs', // URL yolu
        file: '../cbs/pages/index.vue'
      });

      // Loglama: Sayfaların terminalde görüntülenmesi
      console.log('Extended Pages:', pages);
    });
  },
});
