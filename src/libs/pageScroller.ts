import { directPageController } from '~/libs/scrollEventHandler'
import smoothScroll, { type ISmoothScroll } from '~/libs/smooth-scroll'

// navToggle: ナビゲーションを閉じる必要がある場合に呼ばれるコールバック
// (旧 $nuxt.$emit('nav-toggle') の置き換え。#36 でストア化予定)
export const pageScroller = (
    pageLocation: string,
    isMobile: boolean,
    navToggle: (() => void) | null = null
): void => {
    if (isMobile) {
        pageLocation = pageLocation.replace('home', 'first')
        const target: HTMLElement | null = document.querySelector(`.${pageLocation}`)
        if (target) {
            if (navToggle) {
                navToggle()
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
        directPageController(pageLocation, navToggle)
    }
}
