<template lang="pug">
div.app-container
    article.main-frame(
        @wheel="scrollController($event)"
        @touchstart="touchStart($event)"
        @touchmove="touchMove($event)"
        @touchend="touchEnd"
    )
        .frame
        logo(:colour-class="logoClass")
        pagination
        nuxt
    navigation
    the-footer
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, onMounted, onUnmounted, ref, watch } from '@vue/composition-api'
import _debounce from 'lodash.debounce'
import Logo from '~/components/logo.vue'
import Pagination from '~/components/pagination.vue'
import Navigation from '~/components/navigation.vue'
import TheFooter from '~/components/the-footer.vue'
import { scrollEventHandler } from '~/libs/scrollEventHandler'

export default defineComponent({
    name: 'default-layout',
    components: {
        Logo,
        Pagination,
        Navigation,
        TheFooter
    },
    setup(_, { root: { $store, $el } }) {
        // ---------------------------------------------------------------
        // Local State
        let save = 0
        let isFired = false
        // const isMobile = ref(false)
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
        // Vuex getters
        const isMobile = computed(() => $store.getters['devices/isMobile'])
        const prevWidth = computed(() => $store.getters['devices/prevWindowWidth'])
        const isFirstView = computed(() => $store.getters['scrolls/isFirstView'])

        // ---------------------------------------------------------------
        // Watchers
        watch(isFirstView, () => {
            logoClass.value = isFirstView.value ? 'logo-white' : 'logo-black'
        })

        // ---------------------------------------------------------------
        // Methods

        // Check touch device
        const checkTouchDevice = () => {
            if (process.client && navigator) {
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
            const tag = $el.getElementsByClassName('first')[0]
            const tagHeight = tag.clientHeight

            if (window.pageYOffset + 60 >= tagHeight) {
                logoClass.value = 'logo-black'
            } else {
                logoClass.value = 'logo-white'
            }
        }

        // Check device width
        const checkDeviceWidth = (): boolean => {
            if (process.client && document.body.clientWidth < 900) {
                $store.commit('devices/setIsMobile', { isMobile: true })
                $store.commit('pageLocation/setIsRight', { isRight: false })
                $store.commit('scrolls/setTranslate', { val: 0 })
                // isMobile.value = true
            } else {
                $store.commit('devices/setIsMobile', { isMobile: false })
                // isMobile.value = false
            }

            return isMobile.value
        }

        // page transition with up/down key
        const keyDownEvent = ({ which }: KeyboardEvent): void => {
            if (which === 38) {
                scrollEventHandler($store, false)
            } else if (which === 40) {
                scrollEventHandler($store, true)
            }
        }

        // Window resize handler
        const resizeHandler = (): void => {
            checkTouchDevice()
            if (checkDeviceWidth()) {
                if (prevWidth.value >= 900) {
                    window.removeEventListener('keydown', keyDownEvent)
                    window.addEventListener('scroll', logoColourChange)
                    $store.commit('pageLocation/setPageLocation', { location: 'mobile' })
                    history.replaceState(null, '', '/')
                }
            } else if (prevWidth.value < 900) {
                window.addEventListener('keydown', keyDownEvent)
                window.removeEventListener('scroll', logoColourChange)
                $store.commit('pageLocation/setPageLocation', { location: 'first' })
                $store.commit('pageLocation/setWorksLocation', { num: 1 })
                $store.commit('scrolls/setIsFirstView', { isFirstView: true })
                $store.commit('pageLocation/setWorksSide', { side: null })
                $store.commit('works/setIsRightActive', { isRight: null })
            }
            $store.commit('devices/setWindowSize', { val: document.body.clientWidth })
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
                const speed = parseInt(process.env.SCROLL_THRESHOLD || '0', 10)
                if (delta) {
                    if (!isFired && clock > 50) {
                        isFired = true
                        scrollEventHandler($store, (delta < 0))
                        setTimeout(() => (isFired = false), speed)
                    }
                }
            }
        }

        const touchStart = ({ touches }: TouchEvent): void => {
            if (!isMobile.value && isTouchDevice.value) {
                swipe.flag = true
                swipe.start.y = touches[0].pageY
            }
        }

        const touchMove = ({ touches }: TouchEvent): void => {
            if (!isMobile.value && isTouchDevice.value) {
                swipe.current.y = touches[0].pageY
                swipe.distance.y = swipe.current.y - swipe.start.y
                if (swipe.flag && swipe.distance.y > 0 && swipe.distance.y >= swipe.threshold) {
                    swipe.flag = false
                    scrollEventHandler($store, false)
                }
                if (swipe.flag && swipe.distance.y < 0 && swipe.distance.y >= swipe.threshold * -1) {
                    swipe.flag = false
                    scrollEventHandler($store, true)
                }
            }
        }

        const touchEnd = (): void => {
            swipe.flag = false
        }

        // ---------------------------------------------------------------
        // Lifecycle Hooks
        onBeforeMount(() => {
            if (process.client) {
                const clientWidth = document.body.clientWidth
                $store.commit('devices/setWindowSize', { val: clientWidth })
                if (clientWidth < 960) {
                    $store.commit('devices/setIsMobile', { isMobile: true })
                }
                checkTouchDevice()
            }
        })

        onMounted(() => {
            // isMobile.value = $store.getters['devices/isMobile']
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
