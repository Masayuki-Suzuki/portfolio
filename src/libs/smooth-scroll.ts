import { isWindow } from '~/libs/type-guards'

export type ISmoothScroll = {
    target: HTMLElement | Element | Window
    pos: number
    duration: number
    horizontal: boolean
    easing:
        'linear' |
        'easeInQuad' | 'easeOutQuad' | 'easeInOutQuad' |
        'easeInCubic' | 'easeOutCubic' | 'easeInOutCubic' |
        'easeInQuart' | 'easeOutQuart' | 'easeInOutQuart' |
        'easeInQuint' | 'easeOutQuint' | 'easeInOutQuint'
}

export const easings = {
    linear(t) {
        return t
    },
    easeInQuad(t) {
        return t * t
    },
    easeOutQuad(t) {
        return t * (2 - t)
    },
    easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    },
    easeInCubic(t) {
        return t * t * t
    },
    easeOutCubic(t) {
        return (--t) * t * t + 1
    },
    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    },
    easeInQuart(t) {
        return t * t * t * t
    },
    easeOutQuart(t) {
        return 1 - (--t) * t * t * t
    },
    easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
    },
    easeInQuint(t) {
        return t * t * t * t * t
    },
    easeOutQuint(t) {
        return 1 + (--t) * t * t * t * t
    },
    easeInOutQuint(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
    }
}

/**
 * Pure JS smooth scroll
 * @param { Element | HTMLElement } target: target DOM
 * @param { number } pos: target scroll position
 * @param { number } duration: scrolling duration - unit: ms
 * @param { boolean } horizontal: if true, scrolling horizontally
 * @param { string } easing
 * @example
 * // easing types
 * 'linear' | 'easeInQuad' | 'easeOutQuad' | 'easeInOutQuad' | 'easeInCubic' | 'easeOutCubic' | 'easeInOutCubic'
 * 'easeInQuart' | 'easeInOutQuart' | 'easeInQuint' | 'easeOutQuint' | 'easeInOutQuint'
 */
export const smoothScroll = ({ target, pos, duration, horizontal, easing }: ISmoothScroll) => {
    pos = pos < 0 ? 0 : pos

    if (duration < 0) {
        return
    }

    // Set current position
    let currentPos
    if (isWindow(target)) {
        currentPos = horizontal ? target.pageXOffset : target.pageYOffset
    } else {
        currentPos = horizontal ? target.scrollLeft : target.scrollTop
    }

    // Start time
    let start: number | null = null

    if (process.client) {
        window.requestAnimationFrame(function step(currentTime) {
            start = !start ? currentTime : start

            const progress = currentTime - start
            const time = Math.min(1, (progress / duration))
            const timeFunction = easings[easing](time)

            if (currentPos < pos) {

                if (horizontal) {
                    target.scrollTo(Math.ceil((timeFunction * (pos - currentPos)) + currentPos), 0)
                } else {
                    target.scrollTo(0, Math.ceil((timeFunction * (pos - currentPos)) + currentPos))
                }

                if (progress < duration) {
                    window.requestAnimationFrame(step)
                }
            } else {
                if (horizontal) {
                    target.scrollTo(Math.ceil(currentPos + (timeFunction * (pos - currentPos))), 0)
                } else {
                    target.scrollTo(0, Math.ceil(currentPos + (timeFunction * (pos - currentPos))))
                }

                if (progress < duration) {
                    window.requestAnimationFrame(step)
                }
            }
        })
    }
}

export default smoothScroll
