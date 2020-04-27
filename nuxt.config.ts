import { Configuration } from '@nuxt/types'
import { head } from './src/config/head'

require('dotenv').config()
const debug = process.env.NODE_ENV !== 'production'

const config: Configuration = {
    mode: 'universal',

    srcDir: 'src/',

    debug,

    /*
    ** Headers of the page
    */
    head,

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

    /*
    ** Global CSS
    */
    css: [
        'ress/dist/ress.min.css',
        '~/assets/styles/index.sass'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/composition-api'
    ],

    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/eslint-module'
    ],

    serverMiddleware: [
        '~/server/contact-form'
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/apollo',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        '@nuxtjs/style-resources',
        '@nuxtjs/recaptcha',
        '@nuxtjs/apollo',
        'nuxt-babel'
    ],

    styleResources: {
        sass: [
            '~/assets/styles/mixins/_index.sass',
            '~/assets/styles/variables/_index.sass'
        ]
    },

    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        baseURL: process.env.BASE_URL,
        browserBaseURL: process.env.BROWSER_URL
    },

    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: 'https://anonymous-frontend.dev/wp/graphql'
            }
        }
    },

    recaptcha: {
        hideBadge: true,
        siteKey: process.env.RECAPTCHA_SITE_KEY,
        version: 3
    },

    env: {
        /* eslint-disable */
        // @ts-ignore
        SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
        // @ts-ignore
        SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
        // @ts-ignore
        SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
        // @ts-ignore
        MAIL_TO: process.env.MAIL_TO,
        // @ts-ignore
        MAIL_FROM: process.env.MAIL_FROM,
        // @ts-ignore
        SCROLL_THRESHOLD: process.env.SCROLL_THRESHOLD
        /* eslint-enable */
    },

    // Max age for static assets
    render: {
        static: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    },

    router: {
        middleware: ['redirect']
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        cssSourceMap: debug,
        // hardSource: debug,
        parallel: true,

        loaders: {
            scss: { sourceMap: debug }
        },

        extend(config, ctx) {
            if (ctx.isDev && ctx.isClient && config.module) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(ts|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}

export default config
