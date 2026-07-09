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
    },
    {
        // 型 import の規約: 同一モジュールからの value import があれば
        // `import { foo, type Bar }` のインライン形式に統合する。
        // 型のみのモジュールは従来通り `import type { ... }` を維持
        files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
        rules: {
            '@typescript-eslint/consistent-type-imports': [
                'error',
                { fixStyle: 'inline-type-imports' }
            ],
            'import/no-duplicates': ['error', { 'prefer-inline': true }]
        }
    }
)
