<template lang="pug">
div.app-container(ref="rootEl")
    main.main-frame(
        @wheel="scrollController($event)"
        @touchstart="touchStart($event)"
        @touchmove="touchMove($event)"
        @touchend="touchEnd"
    )
        .frame
        logo(:colour-class="logoClass")
        pagination
        slot
    navigation
    the-footer
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, onUnmounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import _debounce from 'lodash.debounce'
import Logo from '~/components/logo.vue'
import Pagination from '~/components/pagination.vue'
import Navigation from '~/components/navigation.vue'
import TheFooter from '~/components/the-footer.vue'
import { scrollEventHandler } from '~/libs/scrollEventHandler'
import { useDevicesStore } from '~/stores/devices'
import { usePageLocationStore } from '~/stores/pageLocation'
import { useScrollsStore } from '~/stores/scrolls'
import { useWorksStore } from '~/stores/works'

export default defineComponent({
    name: 'DefaultLayout',
    components: {
        Logo,
        Pagination,
        Navigation,
        TheFooter
    },
    setup() {
        const runtimeConfig = useRuntimeConfig()

        const devicesStore = useDevicesStore()
        const pageLocationStore = usePageLocationStore()
        const scrollsStore = useScrollsStore()
        const worksStore = useWorksStore()

        // ---------------------------------------------------------------
        // Local State
        let save = 0
        let isFired = false
        const rootEl = ref<HTMLElement | null>(null)
        const logoClass = ref('logo-white')
        const isTouchDevice = ref(false)
        const swipe = {
            flag: false,
            threshold: 100,
            start: {
                y: 0
            },
            current: {
                y: 0
            },
            distance: {
                y: 0
            }
        }

        // ---------------------------------------------------------------
        // Store state
        const { isMobile, prevWindowWidth: prevWidth } = storeToRefs(devicesStore)
        const { isFirstView } = storeToRefs(scrollsStore)

        // ---------------------------------------------------------------
        // Watchers
        watch(isFirstView, () => {
            logoClass.value = isFirstView.value ? 'logo-white' : 'logo-black'
        })

        // ---------------------------------------------------------------
        // Methods

        // Check touch device
        const checkTouchDevice = () => {
            if (import.meta.client && navigator) {
                if (
                    navigator.userAgent.includes('iPhone') ||
                    navigator.userAgent.includes('android') ||
                    'ontouchend' in document
                ) {
                    isTouchDevice.value = true
                } else {
                    isTouchDevice.value = false
                }
            }
        }

        // Change logo colour by scroll position
        const logoColourChange = (): void => {
            const tag = rootEl.value?.getElementsByClassName('first')[0]
            if (!tag) {
                return
            }
            const tagHeight = tag.clientHeight

            if (window.pageYOffset + 60 >= tagHeight) {
                logoClass.value = 'logo-black'
            } else {
                logoClass.value = 'logo-white'
            }
        }

        // Check device width
        const checkDeviceWidth = (): boolean => {
            if (import.meta.client && document.body.clientWidth < 900) {
                devicesStore.setIsMobile(true)
                pageLocationStore.setIsRight(false)
                scrollsStore.setTranslate(0)
            } else {
                devicesStore.setIsMobile(false)
            }

            return isMobile.value
        }

        // page transition with up/down key
        const keyDownEvent = ({ key }: KeyboardEvent): void => {
            if (key === 'ArrowUp') {
                scrollEventHandler(false)
            } else if (key === 'ArrowDown') {
                scrollEventHandler(true)
            }
        }

        // Window resize handler
        const resizeHandler = (): void => {
            checkTouchDevice()
            if (checkDeviceWidth()) {
                if (prevWidth.value >= 900) {
                    window.removeEventListener('keydown', keyDownEvent)
                    window.addEventListener('scroll', logoColourChange)
                    pageLocationStore.setPageLocation('mobile')
                    history.replaceState(null, '', '/')
                }
            } else if (prevWidth.value < 900) {
                window.addEventListener('keydown', keyDownEvent)
                window.removeEventListener('scroll', logoColourChange)
                pageLocationStore.setPageLocation('first')
                pageLocationStore.setWorksLocation(1)
                scrollsStore.setIsFirstView(true)
                pageLocationStore.setWorksSide(null)
                worksStore.setIsRightActive(null)
            }
            devicesStore.setWindowSize(document.body.clientWidth)
        }

        // Debounce resize function
        const debounceResize = _debounce((destroy = false): void => {
            if (destroy) {
                window.removeEventListener('resize', resizeHandler)
            } else {
                window.addEventListener('resize', resizeHandler)
            }
        })

        const debounceScroll = _debounce((destroy = false): void => {
            if (isMobile.value) {
                if (destroy) {
                    window.removeEventListener('scroll', logoColourChange)
                } else {
                    window.addEventListener('scroll', logoColourChange)
                }
            }
        })

        const scrollController = (e: WheelEvent): void => {
            if (!isMobile.value && !isTouchDevice.value) {
                e.preventDefault()
                const clock = e.timeStamp - save
                save = e.timeStamp
                const delta = e.deltaY ? -(e.deltaY) : 0
                const speed = Number(runtimeConfig.public.scrollThreshold) || 0
                if (delta) {
                    if (!isFired && clock > 50) {
                        isFired = true
                        scrollEventHandler(delta < 0)
                        setTimeout(() => (isFired = false), speed)
                    }
                }
            }
        }

        const touchStart = ({ touches }: TouchEvent): void => {
            const touch = touches[0]
            if (touch && !isMobile.value && isTouchDevice.value) {
                swipe.flag = true
                swipe.start.y = touch.pageY
            }
        }

        const touchMove = ({ touches }: TouchEvent): void => {
            const touch = touches[0]
            if (touch && !isMobile.value && isTouchDevice.value) {
                swipe.current.y = touch.pageY
                swipe.distance.y = swipe.current.y - swipe.start.y
                if (swipe.flag && swipe.distance.y > 0 && swipe.distance.y >= swipe.threshold) {
                    swipe.flag = false
                    scrollEventHandler(false)
                }
                if (swipe.flag && swipe.distance.y < 0 && swipe.distance.y >= swipe.threshold * -1) {
                    swipe.flag = false
                    scrollEventHandler(true)
                }
            }
        }

        const touchEnd = (): void => {
            swipe.flag = false
        }

        // ---------------------------------------------------------------
        // Lifecycle Hooks
        onBeforeMount(() => {
            if (import.meta.client) {
                const clientWidth = document.body.clientWidth
                devicesStore.setWindowSize(clientWidth)
                if (clientWidth < 960) {
                    devicesStore.setIsMobile(true)
                }
                checkTouchDevice()
            }
        })

        onMounted(() => {
            checkDeviceWidth()
            if (window) {
                debounceResize()
                debounceScroll()
                window.addEventListener('keydown', keyDownEvent)
            }
        })

        // Delete Event Listeners
        onUnmounted(() => {
            debounceResize(true)
            debounceScroll(true)
            window.removeEventListener('keydown', keyDownEvent)
        })

        return {
            rootEl,
            isMobile,
            logoClass,
            scrollController,
            isTouchDevice,
            touchStart,
            touchMove,
            touchEnd
        }
    }
})
</script>

<style lang="sass" scoped>
.app-container
    background: #fff
    position: relative
    width: 100%

    +mdAndUp
        height: 100%
        overflow: hidden

.frame
    border: solid 15px #fff
    position: fixed
    top: 0
    left: 0
    height: 100%
    width: 100%
    z-index: 10
    pointer-events: none

    +smAndDown
        display: none

    +lgAndUp
        border-width: 25px

    +customMediaV(800, false)
        border-width: 15px

.main-frame
    height: 100%
    width: 100%

    +mdAndUp
        overflow: hidden
</style>
