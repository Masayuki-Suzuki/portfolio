// セクション遷移は history.replaceState で /about 等の URL を書くため、
// それらへの直接アクセス(リロード・外部リンク)はトップへ戻す
export default defineNuxtRouteMiddleware((to) => {
    if (to.path !== '/' && to.path !== '/privacy-policy') {
        return navigateTo('/')
    }
})
