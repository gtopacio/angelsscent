export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'AngelScentsPH',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo_favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap' },
    ],
    script: [
      { src: 'https://kit.fontawesome.com/483b59b551.js', crossorigin: 'anonymous' },
      { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js", type: "text/javascript" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",type: "text/javascript" },
      { src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js", type: "text/javascript" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/imports.js', mode: 'client' },
    { src: '~/plugins/vuex-persist', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    //'@nuxtjs/google-fonts'
  ],
  router: {
    middleware: ['auth']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyA_wIoMJj59KoO0lxLuU1qROem6MeUMX-0",
          authDomain: "angelsscent-dev.firebaseapp.com",
          projectId: "angelsscent-dev",
          storageBucket: "angelsscent-dev.appspot.com",
          messagingSenderId: "620830937908",
          appId: "1:620830937908:web:d85dfb1c46bf05e59b0b61"
        },
        services: {
          firestore: true,
          storage: true,
          auth: {
            persistence: 'local', // default
            initialize: {
              // onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: false, // default
          }
        }
      }
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  ssr: false
}
