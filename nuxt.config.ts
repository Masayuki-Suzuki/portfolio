import { head } from './src/config/head'

export default defineNuxtConfig({
    compatibilityDate: '2026-07-07',

    srcDir: 'src/',

    modules: [
        '@pinia/nuxt'
    ],

    // 旧 `src/static` を公開ディレクトリとして維持
    dir: {
        public: 'src/static'
    },

    app: {
        head
    },

    /*
    ** Global CSS
    */
    css: [
        'ress/dist/ress.min.css',
        '~/assets/styles/index.sass'
    ],

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
        css: {
            preprocessorOptions: {
                sass: {
                    // 旧 @nuxtjs/style-resources 相当: mixins / variables を
                    // 全コンポーネントの <style lang="sass"> に自動注入する
                    additionalData: '@import "~/assets/styles/mixins/_index"\n@import "~/assets/styles/variables/_index"\n',
                    // @import は Dart Sass 3.0 で削除予定。@use への全面移行は
                    // 規模が大きいため別途検討とし、警告のみ抑制する
                    silenceDeprecations: ['import']
                }
            }
        },
        resolve: {
            alias: {
                // 暫定シム: 既存コンポーネントの `@vue/composition-api` import を
                // Vue 3 本体へ解決させる。コンポーネント移行(#36, #37)完了後に削除。
                '@vue/composition-api': 'vue'
            }
        }
    }
})
