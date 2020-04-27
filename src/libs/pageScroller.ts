import { StrictStore } from 'vuex/types/index'
import { NuxtApp } from '@nuxt/types/app'
import { directPageController } from '~/libs/scrollEventHandler'
import smoothScroll, { ISmoothScroll } from '~/libs/smooth-scroll'

export const pageScroller = (
    $store: StrictStore,
    $nuxt: NuxtApp,
    pageLocation: string,
    isMobile: boolean,
    nav = false
): void => {
    if (isMobile) {
        pageLocation = pageLocation.replace('home', 'first')
        const target: HTMLElement | null = document.querySelector(`.${pageLocation}`)
        if (target) {
            if (nav) {
                $nuxt.$emit('nav-toggle')
            }
            const pos = target.offsetTop
            const params: ISmoothScroll = {
                target: window,
                pos,
                duration: 800,
                horizontal: false,
                easing: 'easeInOutCubic'
            }
            smoothScroll(params)
        }
    } else {
        directPageController($store, pageLocation, $nuxt, nav)
    }
}
