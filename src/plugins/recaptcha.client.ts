import { VueReCaptcha } from 'vue-recaptcha-v3'

// reCAPTCHA v3(スコアベースキー)のクライアント組み込み。
// バッジは非表示(旧 @nuxtjs/recaptcha の hideBadge: true 相当)のため、
// 規約に基づき contact フォームに帰属表示テキストを掲示している。
export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: config.public.recaptchaSiteKey,
        loaderOptions: {
            autoHideBadge: true
        }
    })
})
