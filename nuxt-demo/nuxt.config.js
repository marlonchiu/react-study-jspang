module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Hello Nuxt Demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  // css:['~assets/css/normailze.css'],
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /** 图片转 base64 */
    loaders: [
      {
        test:/\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader",
        query:{
          limit: 1024,
          name: 'img/[name].[hash].[ext]'
        }
      }
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  vender:[
    'element-ui'
  ],
  babel : {
      "plugins": [["component", [
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-default"
      },
      'transform-async-to-generator',
      'transform-runtime'
    ]]],
    comments: true
  },
  plugins: [
    { src: '~plugins/element-ui', ssr: true }
  ],
  css: ['element-ui/lib/theme-chalk/index.css',
    '~assets/css/normailze.css',
    '~assets/css/main.css'] //css的路径我吃了大亏注意element-ui的版本
}

