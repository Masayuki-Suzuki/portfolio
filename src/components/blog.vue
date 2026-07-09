<template lang="pug">
    section.common-container.blog(:class="{'blog--active': pageActive}")
        h1.common-heading.blog__heading Blog
        .blog__container(v-if="blogData")
            blog-card(v-for="(item, index) in blogData" :blog-data="item" :num="index" :key="item.documentId")
        .more
            a(href="https://anonymous-frontend.dev/" target="_blank") read more post
        scroll-nav
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue'
import { storeToRefs } from 'pinia'
import { checkPageActivation } from '~/libs/checkPageActivation'
import BlogCard from '~/components/blog-card.vue'
import ScrollNav from '~/components/scroll-nav.vue'
import type { BlogData } from '~/types/global'
import { useDevicesStore } from '~/stores/devices'
import { usePageLocationStore } from '~/stores/pageLocation'
import { useScrollsStore } from '~/stores/scrolls'

export default defineComponent({
    name: 'blog',
    components: {
        BlogCard,
        ScrollNav
    },
    props: {
        blogData: {
            // データ取得は #39(Apollo v5)で復旧するため、それまでは null 許容
            type: Array as PropType<BlogData>,
            default: null
        }
    },
    setup() {
        // --------------------------------------
        // Store state
        const { isMobile } = storeToRefs(useDevicesStore())
        const { pageLocation } = storeToRefs(usePageLocationStore())
        const { delayedActivePage } = storeToRefs(useScrollsStore())

        // --------------------------------------
        // Computed
        const pageActive = computed((): boolean =>
            checkPageActivation(delayedActivePage.value, 'blog'))

         
        /* eslint-enable no-console */

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
