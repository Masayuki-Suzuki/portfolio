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
import { computed, defineComponent } from '@vue/composition-api'
import gql from 'graphql-tag'
import FirstView from '~/components/first-view.vue'
import About from '~/components/about.vue'
import Works from '~/components/works.vue'
import Blog from '~/components/blog.vue'
import Contact from '~/components/contact.vue'

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
        posts: gql`
             query blogRowData {
                 posts (first: 3) {
                     edges {
                         node {
                             title
                             content
                             featuredImage {
                                 sourceUrl
                             }
                             date
                             link
                             categories (first: 1) {
                                 edges {
                                     node {
                                         name
                                     }
                                 }
                             }
                         }
                     }
                 }
             }
         `
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
