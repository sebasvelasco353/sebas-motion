import en from './locales/en.json';
import es from './locales/es.json';

export default {
  target: 'static',
  router: {
    base: '/sebas-motion/',
  },
  generate: {
    routes: [
      '/projects/HistoriasEnJuego',
      '/projects/InstagramPosts',
      '/projects/LogoAnimation',
    ],
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sebas-motion',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Portafolio de Sebas-Motion, Sebastian Lopez, animador y motion graphics artist de Cali Colombia.'},
      {hid: 'robots', name: 'robots', content: 'index, follow'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: 'favicon.ico'},
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/tailwindcss',
    //'@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
     [
       'nuxt-i18n',
       {
         locales: ['en', 'es'],
         defaultLocale: 'es',
         vueI18n: {
           fallbackLocale: 'es',
           messages: { es, en }
         }
       }
     ]
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
};
