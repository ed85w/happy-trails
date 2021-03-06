export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  router: {
    base: ''
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'happy-trails',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/scss/variables.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/aos.client'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // font awesome icons
    ['nuxt-fontawesome', {
      component: 'fa', // customize component name
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faInstagram', 'faFacebook']
        },
        {
          set: '@fortawesome/free-regular-svg-icons',
          icons: ['faEnvelope']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faPhoneAlt']
        }
      ]
    }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // extend (config, ctx) {
    // }
  },
  /*
  ** Style Resources
  ** Used for global sass variables
  */
  styleResources: {
    scss: [
      '~/assets/scss/variables.scss'
    ]
  }
}
