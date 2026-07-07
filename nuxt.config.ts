// Issue #31: Nuxt 4 起動のための最小構成。
// head / runtimeConfig / modules / styles の本移行は Issue #32, #33 で行う。
export default defineNuxtConfig({
    compatibilityDate: '2026-07-07',

    srcDir: 'src/',

    // 旧 `src/static` を公開ディレクトリとして維持
    dir: {
        public: 'src/static'
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
