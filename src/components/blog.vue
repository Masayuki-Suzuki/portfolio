<template lang="pug">
section.common-container.blog(:class="{'blog--active': pageActive}")
    h1.common-heading.blog__heading Blog
    .blog__container(v-if="blogData")
        blog-card(v-for="(item, index) in blogData.edges" :blog-data="item.node" :num="index" :key="index")
    .more
        a(href="https://anonymous-frontend.dev/" target="_blank") read more post
    scroll-nav
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { checkPageActivation } from '~/libs/checkPageActivation'
import BlogCard from '~/components/blog-card.vue'
import ScrollNav from '~/components/scroll-nav.vue'
import { BlogData } from '~/types/global'

export default defineComponent({
    name: 'blog',
    components: {
        BlogCard,
        ScrollNav
    },
    props: {
        blogData: {
            type: Object as PropType<BlogData>,
            required: true as true
        }
    },
    setup(_, { root: { $store } }) {
        // --------------------------------------
        // Computed from vuex state
        const isMobile = computed(() => $store.getters['devices/isMobile'])
        const pageLocation = computed(() => $store.getters['pageLocation/pageLocation'])
        const delayedActivePage = computed(() => $store.getters['scrolls/delayedActivePage'])

        // --------------------------------------
        // Computed
        const pageActive = computed((): boolean =>
            checkPageActivation($store, delayedActivePage.value, 'blog'))

        return {
            pageLocation,
            isMobile,
            pageActive
        }
    }
})
</script>

<style lang="sass" scoped>
.blog
    +smAndDown
        height: inherit
        padding: 90px 0 95px
        position: static

    &__container
        position: relative
        display: flex
        justify-content: space-between
        margin: 2.5% auto
        max-width: 1180px
        width: 80%

        +customMediaV(800, false)
            margin: 1% auto

        +customMediaV(700, false)
            width: 85%

        +smAndDown
            flex-direction: column
            justify-content: flex-start
            margin: 35px auto 0
            max-width: 650px
            width: 90%

        +xsAndDown
            margin: 20px auto 0

        +customMedia(550, false)
            max-width: 400px

.more
    opacity: 0
    transform: translateY(30px)
    transition: all .4s ease .7s

    a
        border: solid 1px $main-color
        font-size: 1.4rem
        line-height: 1
        text-align: center
        text-transform: uppercase
        position: relative
        z-index: 0
        display: block
        margin: 30px auto 0
        padding: 12px 0 11px
        width: 160px
        overflow: hidden

        +pseudo($main-color)

.blog--active
    .blog
        &__heading
            opacity: 1
            transform: translateY(0)
            transition: all .4s ease .2s

    .more
        opacity: 1
        transform: translateY(0)
        transition: all .5s ease 1.1s
</style>
