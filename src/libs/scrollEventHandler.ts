import { usePageLocationStore, WorksLocation, WorksSide } from '~/stores/pageLocation'
import { useScrollsStore } from '~/stores/scrolls'
import { useWorksStore } from '~/stores/works'

// Constance
const FIRST_DELAY = 310
const SECOND_DELAY = 700

const resetWorksProperties = (): void => {
    usePageLocationStore().setWorksSide(null)
    useWorksStore().setIsRightActive(null)
}

// For first & second page scroll event
const scrollDownAction = (location: string, isFirstView: boolean): void => {
    const pageLocationStore = usePageLocationStore()
    const scrollsStore = useScrollsStore()

    if (isFirstView) {
        history.replaceState(null, '', '/')
    } else {
        history.replaceState(null, '', '/about')
    }
    pageLocationStore.setPageLocation(location)
    scrollsStore.setIsFirstView(isFirstView)
    scrollsStore.setDelayedActivePage(location)
    pageLocationStore.setIsRight(false)
}

// Setup url path location and navigation animation flag
const commonAction = (toLeft: boolean, path: string): void => {
    const scrollsStore = useScrollsStore()

    path = path.includes('/') ? path : `/${path}`
    history.replaceState(null, '', path)
    if (toLeft) {
        scrollsStore.setRightToLeft(true)
    } else {
        scrollsStore.setLeftToRight(true)
    }
}

// Setup page location and navigation side
const firstDelayAction = (location: string, isRight: boolean): void => {
    setTimeout(() => {
        const pageLocationStore = usePageLocationStore()
        pageLocationStore.setPageLocation(location)
        pageLocationStore.setIsRight(isRight)
    }, FIRST_DELAY)
}

// remove navigation animation flag, setup delayed page location and setup properties for works page.
const secondDelayAction = (page: string, isWorksProperties: 'set' | ''): void => {
    setTimeout(() => {
        const scrollsStore = useScrollsStore()

        scrollsStore.setRightToLeft(false)
        scrollsStore.setLeftToRight(false)

        // Set properties for works page
        if (isWorksProperties === 'set') {
            usePageLocationStore().setWorksSide('right')
            useWorksStore().setIsRightActive(true)
        } else {
            resetWorksProperties()
        }

        scrollsStore.setDelayedActivePage(page)
    }, SECOND_DELAY)
}

// Works scroll event
const worksScrollEvent = (direction: boolean, side: 'right' | 'left'): void => {
    setTimeout(() => {
        const pageLocationStore = usePageLocationStore()
        pageLocationStore.setWorksSide(side)
        const currentLocation = pageLocationStore.worksLocation
        const num = (direction ? currentLocation + 1 : currentLocation - 1) as WorksLocation
        pageLocationStore.setWorksLocation(num)
    }, FIRST_DELAY)
    setTimeout(() => {
        const isRight = side === 'right'
        useWorksStore().setIsRightActive(isRight)
    }, SECOND_DELAY)
}

const commonDirectControlAction = (location: string): void => {
    const pageLocationStore = usePageLocationStore()

    location = location.includes('/') ? location.replace('/', '') : location
    const path = location === 'first' ? '/' : '/' + location
    const isRight = location === 'works' || location === 'contact'

    if (pageLocationStore.isRight) {
        commonAction(false, path)
    } else {
        commonAction(true, path)
    }
    firstDelayAction(location, isRight)

    if (location === 'works') {
        secondDelayAction(location, 'set')
    } else {
        secondDelayAction(location, '')
    }

    pageLocationStore.setWorksLocation(1)
}

// direction true is scroll down, false is scroll up
export const scrollEventHandler = (direction: boolean): void => {
    const pageLocationStore = usePageLocationStore()
    const pageLocation = pageLocationStore.pageLocation
    const worksPageLocation = pageLocationStore.worksLocation

    switch (pageLocation) {
        case 'first':
            // To about
            if (direction) {
                scrollDownAction('about', false)
            }
            break

        case 'about':
            // To Works
            if (direction) {
                commonAction(true, '/works')
                firstDelayAction('works', true)
                secondDelayAction('works', 'set')

                // Back to First
            } else {
                scrollDownAction('first', true)
            }
            break

        case 'works':
            // Forward
            if (direction) {
                switch (worksPageLocation) {

                    // 1st and 3rd works page
                    case 1:
                    case 3:
                        worksScrollEvent(true, 'left')
                        break

                    // 2nd and 4th works page
                    case 2:
                    case 4:
                        worksScrollEvent(true, 'right')
                        break

                    // Last works page. Move to blog page
                    case 5:
                        commonAction(false, '/blog')
                        firstDelayAction('blog', false)
                        secondDelayAction('blog', '')
                }

                // Backward
            } else {
                switch (worksPageLocation) {

                    // 1st page. Back to about page
                    case 1:
                        commonAction(false, '/about')
                        firstDelayAction('about', false)
                        secondDelayAction('about', '')
                        break

                    // 2nd and 4th works page
                    case 2:
                    case 4:
                        worksScrollEvent(false, 'right')
                        break

                    // 3rd and last works page
                    case 3:
                    case 5:
                        worksScrollEvent(false, 'left')
                        break
                }
            }
            break

        case 'blog':
            // To Contact
            if (direction) {
                commonAction(true, '/contact')
                firstDelayAction('contact', true)
                secondDelayAction('contact', '')

                // back to works page 5 (another)
            } else {
                commonAction(true, '/works')
                firstDelayAction('works', true)
                secondDelayAction('works', 'set')
            }
            break

        case 'contact':
            // Back to blog
            if (!direction) {
                commonAction(false, '/blog')
                firstDelayAction('blog', false)
                secondDelayAction('blog', '')
            }
    }
}

// For pagination and navigation.
// navToggle: ナビゲーションを閉じる必要がある場合に呼ばれるコールバック
// (旧 $nuxt.$emit('nav-toggle') の置き換え。#36 でストア化予定)
export const directPageController = (
    pageLocation: string,
    navToggle: (() => void) | null = null
): void => {
    const pageLocationStore = usePageLocationStore()
    const scrollsStore = useScrollsStore()
    const currentLocation = pageLocationStore.pageLocation

    switch (pageLocation) {
        case 'home':
        case 'first':
            if (currentLocation !== 'first') {
                if (currentLocation === 'about') {
                    scrollDownAction('first', true)
                } else {
                    commonDirectControlAction('first')
                    scrollsStore.setIsFirstView(true)
                }
            }
            break

        case 'about':
            if (currentLocation !== 'about') {
                if (currentLocation === 'first') {
                    scrollDownAction('about', false)
                } else {
                    commonDirectControlAction('about')
                }
            }
            break

        default:
            if (currentLocation !== pageLocation) {
                scrollsStore.setIsFirstView(false)
                commonDirectControlAction(pageLocation)
            }
    }
    if (navToggle) {
        navToggle()
    }
}
