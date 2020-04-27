<template lang="pug">
.scroll-nav(v-if="!isMobile" @click="pageScroll")
    span.arrow
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import { scrollEventHandler } from '~/libs/scrollEventHandler'

export default defineComponent({
    name: 'scroll-nav',
    props: {
        location: {
            type: String,
            default: null
        },
        works: {
            type: Boolean,
            default: false
        }
    },
    setup({ location, works }, { root: { $store } }) {
        // ------------------------------
        // Local state
        const isMobile = ref(false)

        // ------------------------------
        // Methods
        const pageScroll = () => {
            if (location) {
                $store.commit('pageLocation/setPageLocation', { location })
            }
            if (works) {
                $store.commit('pageLocation/setWorksLocation', { num: 5 })
            }
            $store.commit('works/setIsRightActive', { isRight: null })
            scrollEventHandler($store, true)
        }

        onMounted(() => {
            isMobile.value = $store.getters['devices/isMobile']
        })

        return { isMobile, pageScroll }
    }
})
</script>

<style lang="sass" scoped>
.scroll-nav
    position: absolute
    bottom: 55px
    left: 50%
    z-index: 5
    display: flex
    justify-content: center
    transform: translateX(-50%) rotateZ(-45deg)

    +customMediaV(800, false)
        bottom: 45px

    @media (max-height: 700px), (max-width: 1024px)
        bottom: 32px

    @media (max-height: 600px), (max-width: 900px), (max-height: 640px) and (max-width: 1024px)
        display: none

    .arrow
        border: solid 1px #979797
            top: 0
            right: 0
        height: 30px
        width: 30px

        @media (max-height: 700px), (max-width: 1024px)
            height: 20px
            width: 20px

</style>
