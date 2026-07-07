<template lang="pug">
.content-wrapper(:class="wrapperClasses")
    first-view
    client-only
        about(v-if="isMobile || pageLocation === 'about' || pageLocation === 'first'")
        works(v-if="isMobile || pageLocation === 'works'")
        blog(v-if="isMobile || pageLocation === 'blog'" :blog-data="posts")
        contact(v-if="isMobile || pageLocation === 'contact'")
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useDevicesStore } from '~/stores/devices'
import { usePageLocationStore } from '~/stores/pageLocation'
import { useScrollsStore } from '~/stores/scrolls'
import FirstView from '~/components/first-view.vue'
import About from '~/components/about.vue'
import Works from '~/components/works.vue'
import Blog from '~/components/blog.vue'
import Contact from '~/components/contact.vue'

// NOTE(#39): 旧実装の blogRowData クエリ(graphql-tag)は Apollo v5 移行時に復元する。
// 旧 graphql-tag は古い graphql との CJS/ESM 相互運用でモジュール読込時にクラッシュ
// するため、このファイルからは一旦撤去(クエリ全文は git 履歴 / Issue #39 参照)

export default defineComponent({
    name: 'index-page',
    components: {
        FirstView,
        About,
        Works,
        Blog,
        Contact
    },
    setup() {
        // ---------------------------------------------------------
        // Store state
        const { isMobile } = storeToRefs(useDevicesStore())
        const { isFirstView } = storeToRefs(useScrollsStore())
        const { pageLocation } = storeToRefs(usePageLocationStore())

        // TODO(#39): @nuxtjs/apollo v5 の useAsyncQuery(BLOG_ROW_DATA) で
        // Strapi からブログ一覧を取得する(旧 smart query の置き換え)
        const posts = ref(null)

        // Local computed
        const wrapperClasses = computed(() => {
            return {
                'is-first-view': isFirstView.value,
                'is-mobile': isMobile.value
            }
        })

        return {
            isMobile,
            isFirstView,
            pageLocation,
            posts,
            wrapperClasses
        }
    }
})
</script>

<style lang="sass" scoped>
.content-wrapper
    height: 100%
    transition: transform 0.5s cubic-bezier(.69, .06, .34, .99) 0s
    transform: translateY(-100%)

    &.is-mobile,
    &.is-first-view
        transform: translateY(0)
</style>
