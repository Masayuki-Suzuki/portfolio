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
import { computed, defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import gql from 'graphql-tag'
import { useDevicesStore } from '~/stores/devices'
import { usePageLocationStore } from '~/stores/pageLocation'
import { useScrollsStore } from '~/stores/scrolls'
import FirstView from '~/components/first-view.vue'
import About from '~/components/about.vue'
import Works from '~/components/works.vue'
import Blog from '~/components/blog.vue'
import Contact from '~/components/contact.vue'
import type { BlogData } from '~/types/global'

const BLOG_ROW_DATA = gql`
   query blogRowData {
       posts(sort: "createdAt:desc", pagination: { limit: 3 }) {
          documentId
          title
          slug
          excerpt
          thumbnail {
              url
              alternativeText
              width
              height
          }
          tags {
              name
              slug
          }
          createdAt
          updatedAt
      }
   }
`

export default defineComponent({
    name: 'IndexPage',
    components: {
        FirstView,
        About,
        Works,
        Blog,
        Contact
    },
    async setup() {
        // ---------------------------------------------------------
        // Store state
        const { isMobile } = storeToRefs(useDevicesStore())
        const { isFirstView } = storeToRefs(useScrollsStore())
        const { pageLocation } = storeToRefs(usePageLocationStore())

        // ---------------------------------------------------------
        // Blog posts (SSR で取得し payload 経由でクライアントへ)
        const { data: blogRes, error: blogError } = await useAsyncQuery<{ posts: BlogData }>(BLOG_ROW_DATA)
        const posts = computed(() => blogRes.value?.posts ?? null)

        // 取得失敗はブログ枠が空になるだけで画面は壊さない。ただし原因調査の
        // ためサーバログには必ず残す(沈黙失敗の防止)
        if (import.meta.server && blogError.value) {
            console.error('[blog] Failed to fetch posts via GraphQL:', blogError.value.message ?? blogError.value)
        }

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
