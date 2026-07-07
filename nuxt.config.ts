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
                    // @import / 旧ビルトイン関数 / スラッシュ除算は Dart Sass 2.0-3.0 で
                    // 削除予定。@use への全面移行は規模が大きいため別途検討とし、
                    // 既存コード由来の警告のみ抑制する
                    silenceDeprecations: ['import', 'global-builtin', 'slash-div']
                }
            }
        }
    }
})
