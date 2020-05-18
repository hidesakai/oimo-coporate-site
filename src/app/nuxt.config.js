
const CONFIG = {
  baseDir: process.env.BASE_DIR || '/',
  baseUri: process.env.BASE_URL || 'https://oimo-inc.co.jp/',
  titleBase: 'Web開発 東京 | Webシステム開発のOIMO(オイモ)',
  description: '株式会社OIMO(オイモ)は、PHPでのWebシステム開発 を提供しております。パートナーとして寄り添ったサポートを心がけております、お気軽にご相談ください。',
  keywords: 'Web開発,PHP,東京',
}

export default {
  mode: 'universal',
  generate: {
    dir: '../../docs'
  },
  env: {
    ...CONFIG
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: CONFIG.titleBase,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: CONFIG.description },
      { hid: 'keywords', name: 'keywords', content: CONFIG.keywords },
      {
        name: 'google-site-verification',
        content: '3I0XB1nLk9DZXIaGdL6awHpEWrS2joe2h74P75gAt4I'
      },
      { hid: 'og:site_name', property: 'og:site_name', content: CONFIG.titleBase },
      { hid: 'og:description', property: 'og:description', content: CONFIG.description },
      { hid: 'og:image', property: 'og:image', content: CONFIG.baseUri + 'assets/img/ogp2.png' }
    ],
    script: [
      {
        src: 'https://sdk.form.run/js/v2/formrun.js'
      }
    ],
    link: [
      { rel: 'icon', sizes: '260x260', type: 'image/png', href: CONFIG.baseUri + 'assets/img/favicon.png' },
      { rel: 'apple-touch-icon', sizes: '512x512', type: 'image/png', href: CONFIG.baseUri + 'assets/img/desktopicon.png' },
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
    '@nuxtjs/google-gtag',
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
  'google-gtag': {
    id: 'UA-166937140-1',
    debug: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      //
    },
    extractCSS: true
  }
}
