
export default {
  mode: 'universal',
  generate: {
    dir: '../../docs'
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: 'OIMO Inc.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ディスクリプションディスクリプションディスクリプション' },
      {
        name: 'google-site-verification',
        content: '3I0XB1nLk9DZXIaGdL6awHpEWrS2joe2h74P75gAt4I'
      }
    ],
    script: [
      {
        src: 'https://sdk.form.run/js/v2/formrun.js'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    {
      src: '~assets/css/main.scss',
      lang: 'scss'
    }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-webfontloader'
  ],
  webfontloader: {
    custom: {
      families: [
        'Roboto:n7',
        'Noto Sand JP:n5,n7'
      ],
      urls: ['https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;700&family=Roboto:wght@700&display=auto']
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
