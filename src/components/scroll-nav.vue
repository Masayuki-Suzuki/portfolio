<template lang="pug">
.scroll-nav(v-if="!isMobile" @click="pageScroll")
    span.arrow
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { scrollEventHandler } from '~/libs/scrollEventHandler'
import { useDevicesStore } from '~/stores/devices'
import { usePageLocationStore } from '~/stores/pageLocation'
import { useWorksStore } from '~/stores/works'

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
    setup(props) {
        const pageLocationStore = usePageLocationStore()
        const worksStore = useWorksStore()

        // ------------------------------
        // Local state
        const isMobile = ref(false)

        // ------------------------------
        // Methods
        const pageScroll = () => {
            if (props.location) {
                pageLocationStore.setPageLocation(props.location)
            }
            if (props.works) {
                pageLocationStore.setWorksLocation(5)
            }
            worksStore.setIsRightActive(null)
            scrollEventHandler(true)
        }

        onMounted(() => {
            isMobile.value = useDevicesStore().isMobile
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
