import { head } from './src/config/head'

// Strapi(ブログCMS)のオリジン。GraphQL とサムネイル画像の両方で使う。
// ビルド時に NUXT_PUBLIC_STRAPI_URL で上書き可能
const STRAPI_URL = process.env.NUXT_PUBLIC_STRAPI_URL || 'https://dashboard.anonymous-frontend.dev'

export default defineNuxtConfig({
    compatibilityDate: '2026-07-07',

    srcDir: 'src/',

    modules: [
        '@nuxt/eslint',
        '@pinia/nuxt',
        '@nuxtjs/apollo',
        'nuxt-gtag'
    ],

    // 測定 ID は実行時に NUXT_PUBLIC_GTAG_ID で注入(runtimeConfig.public.gtag.id)。
    // 計測は本番ビルドのみ有効($production / $development は Nuxt の環境別設定)
    gtag: {
        enabled: false
    },
    $production: {
        gtag: {
            enabled: true
        }
    },

    apollo: {
        // 認証トークンは plugins/apollo-auth.ts の apollo:auth フックで
        // サーバ専用 runtimeConfig から注入する(クライアントには渡さない)
        clients: {
            default: {
                httpEndpoint: `${STRAPI_URL}/graphql`
            }
        }
    },

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
        recaptchaSecretKey: '',      // NUXT_RECAPTCHA_SECRET_KEY(レガシー秘密鍵)
        recaptchaScoreThreshold: 0.5, // NUXT_RECAPTCHA_SCORE_THRESHOLD
        resendApiKey: '',            // NUXT_RESEND_API_KEY
        mailTo: '',                  // NUXT_MAIL_TO
        mailFrom: '',                // NUXT_MAIL_FROM
        strapiApiToken: '',          // NUXT_STRAPI_API_TOKEN
        public: {
            recaptchaSiteKey: '',    // NUXT_PUBLIC_RECAPTCHA_SITE_KEY
            scrollThreshold: 0,      // NUXT_PUBLIC_SCROLL_THRESHOLD
            strapiUrl: STRAPI_URL,   // サムネイル画像の相対 URL 解決に使用
            gtag: {
                id: ''               // NUXT_PUBLIC_GTAG_ID(GA4 測定 ID)
            }
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
