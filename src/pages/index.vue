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
import { computed, defineComponent, getCurrentInstance, onMounted, watch } from '@vue/composition-api'
import gql from 'graphql-tag'
import FirstView from '~/components/first-view.vue'
import About from '~/components/about.vue'
import Works from '~/components/works.vue'
import Blog from '~/components/blog.vue'
import Contact from '~/components/contact.vue'

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
    name: 'index-page',
    components: {
        FirstView,
        About,
        Works,
        Blog,
        Contact
    },
    apollo: {
        posts: BLOG_ROW_DATA
    },
    watch: {
        posts: {
            handler(val) { console.log('[apollo posts] updated:', val) },
            immediate: true
        }
    },
    // ついでに初回
    mounted() {
        console.log('[apollo posts] mounted:', this.posts)
    },
    setup(_, { root: { $store } }) {
        // ---------------------------------------------------------
        // Computed from vuex
        const isMobile = computed(() => $store.getters['devices/isMobile'])
        const isFirstView = computed(() => $store.getters['scrolls/isFirstView'])
        const pageLocation = computed(() => $store.getters['pageLocation/pageLocation'])

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
