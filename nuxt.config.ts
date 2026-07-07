import { head } from './src/config/head'

export default defineNuxtConfig({
    compatibilityDate: '2026-07-07',

    srcDir: 'src/',

    // 旧 `src/static` を公開ディレクトリとして維持
    dir: {
        public: 'src/static'
    },

    app: {
        head
    },

    /*
    ** 環境変数は NUXT_ プレフィックスで実行時に注入する(.env.example 参照)
    ** 非 public はサーバ専用 = クライアントバンドルには含まれない
    */
    runtimeConfig: {
        recaptchaSecretKey: '',      // NUXT_RECAPTCHA_SECRET_KEY
        sendgridApiKey: '',          // NUXT_SENDGRID_API_KEY
        mailTo: '',                  // NUXT_MAIL_TO
        mailFrom: '',                // NUXT_MAIL_FROM
        strapiApiToken: '',          // NUXT_STRAPI_API_TOKEN
        public: {
            recaptchaSiteKey: '',    // NUXT_PUBLIC_RECAPTCHA_SITE_KEY
            scrollThreshold: 0,      // NUXT_PUBLIC_SCROLL_THRESHOLD
            ga4MeasurementId: ''     // NUXT_PUBLIC_GA4_MEASUREMENT_ID(#42 で使用)
        }
    },

    vite: {
        resolve: {
            alias: {
                // 暫定シム: 既存コンポーネントの `@vue/composition-api` import を
                // Vue 3 本体へ解決させる。コンポーネント移行(#36, #37)完了後に削除。
                '@vue/composition-api': 'vue'
            }
        }
    }
})
