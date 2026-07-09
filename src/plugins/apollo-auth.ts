// Strapi API トークンを Apollo リクエストへ注入する。
// トークンはサーバ専用 runtimeConfig のため SSR 時のみ付与される
// (クライアントバンドルには含まれない)。ブログ一覧は SSR で取得され
// payload 経由でクライアントへ渡るため、クライアント側での再取得は不要。
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('apollo:auth', ({ token }) => {
        if (import.meta.server) {
            const config = useRuntimeConfig()
            if (config.strapiApiToken) {
                token.value = config.strapiApiToken
            }
        }
    })
})
