// @nuxt/eslint モジュールが生成するプロジェクト対応の flat config をベースにする。
// コードフォーマットは Prettier(.prettierrc)側の責務のため、stylistic ルールは有効化しない。
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    {
        // サードパーティのビルド済みスクリプト(modernizr 等)は対象外
        ignores: ['src/static/**']
    },
    {
        rules: {
            // 既存コードベースの慣習に合わせた調整
            'vue/multi-word-component-names': 'off'
        }
    }
)
