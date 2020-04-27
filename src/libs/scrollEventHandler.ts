import { StrictStore } from 'vuex/types/index'
import { NuxtApp } from '@nuxt/types/app'

type scrollDownActionParams = {
    store: StrictStore
    location: string
    isFirstView: boolean
}

type commonActionParams = {
    store: StrictStore
    toLeft: boolean
    path: string
}

type firstDelayActionParams = {
    store: StrictStore
    location: string
    isRight: boolean
}

type secondDelayActionParams = {
    store: StrictStore
    page: string
    isWorksProperties: 'set' | ''
}

// Constance
const FIRST_DELAY = 310
const SECOND_DELAY = 700

const resetWorksProperties = (commit): void => {
    commit('pageLocation/setWorksSide', { side: null })
    commit('works/setIsRightActive', { isRight: null })
}

// For first & second page scroll event
const scrollDownAction = ({ store: { commit }, location, isFirstView }: scrollDownActionParams) => {
    if (isFirstView) {
        history.replaceState(null, '', '/')
    } else {
        history.replaceState(null, '', '/about')
    }
    commit('pageLocation/setPageLocation', { location })
    commit('scrolls/setIsFirstView', { isFirstView })
    commit('scrolls/setDelayedActivePage', { page: location })
    commit('pageLocation/setIsRight', { isRight: false })
}

// Setup url path location and navigation animation flag
const commonAction = ({ store: { commit }, toLeft, path }: commonActionParams): void => {
    path = path.includes('/') ? path : `/${path}`
    history.replaceState(null, '', path)
    if (toLeft) {
        commit('scrolls/setRightToLeft', { val: true })
    } else {
        commit('scrolls/setLeftToRight', { val: true })
    }
}

// Setup page location and navigation side
const firstDelayAction = ({ store: { commit }, location, isRight }: firstDelayActionParams): void => {
    setTimeout(() => {
        commit('pageLocation/setPageLocation', { location })
        commit('pageLocation/setIsRight', { isRight })
    }, FIRST_DELAY)
}

// remove navigation animation flag, setup delayed page location and setup properties for works page.
const secondDelayAction = (
    { store: { commit }, page, isWorksProperties }: secondDelayActionParams
): void => {
    setTimeout(() => {
        commit('scrolls/setRightToLeft', { val: false })
        commit('scrolls/setLeftToRight', { val: false })

        // Set properties for works page
        if (isWorksProperties === 'set') {
            commit('pageLocation/setWorksSide', { side: 'right' })
            commit('works/setIsRightActive', { isRight: true })
        } else {
            resetWorksProperties(commit)
        }

        commit('scrolls/setDelayedActivePage', { page })
    }, SECOND_DELAY)
}

// Works scroll event
const worksScrollEvent = (store: StrictStore, direction: boolean, side: 'right' | 'left'): void => {
    setTimeout(() => {
        store.commit('pageLocation/setWorksSide', { side })
        const currentLocation = store.getters['pageLocation/worksLocation']
        let payload
        if (direction) {
            payload = { num: currentLocation + 1 }
        } else {
            payload = { num: currentLocation - 1 }
        }
        store.commit('pageLocation/setWorksLocation', payload)
    }, FIRST_DELAY)
    setTimeout(() => {
        const isRight = side === 'right' ?? false
        store.commit('works/setIsRightActive', { isRight })
    }, SECOND_DELAY)
}

const commonDirectControlAction = (store: StrictStore, location: string) => {
    location = location.includes('/') ? location.replace('/', '') : location
    const path = location === 'first' ? '/' : '/' + location
    const isRight = location === 'works' || location === 'contact'

    if (store.getters['pageLocation/isRight']) {
        commonAction({ store, toLeft: false, path })
    } else {
        commonAction({ store, toLeft: true, path })
    }
    firstDelayAction({ store, isRight, location })

    if (location === 'works') {
        secondDelayAction({ store, page: location, isWorksProperties: 'set' })
    } else {
        secondDelayAction({ store, page: location, isWorksProperties: '' })
    }

    store.commit('pageLocation/setWorksLocation', { num: 1 })
}

// direction true is scroll down, false is scroll up
export const scrollEventHandler = (store: StrictStore, direction: boolean): void => {
    const pageLocation = store.getters['pageLocation/pageLocation']
    const worksPageLocation = store.getters['pageLocation/worksLocation']

    switch (pageLocation) {
        case 'first':
            // To about
            if (direction) {
                scrollDownAction({ store, location: 'about', isFirstView: false })
            }
            break

        case 'about':
            // To Works
            if (direction) {
                commonAction({ store, toLeft: true, path: '/works' })
                firstDelayAction({ store, location: 'works', isRight: true })
                secondDelayAction({
                    store,
                    page: 'works',
                    isWorksProperties: 'set'
                })

                // Back to First
            } else {
                scrollDownAction({ store, location: 'first', isFirstView: true })
            }
            break

        case 'works':
            // Forward
            if (direction) {
                switch (worksPageLocation) {

                    // 1st and 3rd works page
                    case 1:
                    case 3:
                        worksScrollEvent(store, true, 'left')
                        break

                    // 2nd and 4th works page
                    case 2:
                    case 4:
                        worksScrollEvent(store, true, 'right')
                        break

                    // Last works page. Move to blog page
                    case 5:
                        commonAction({ store, toLeft: false, path: '/blog' })
                        firstDelayAction({ store, location: 'blog', isRight: false })
                        secondDelayAction({
                            store,
                            page: 'blog',
                            isWorksProperties: ''
                        })
                }

                // Backward
            } else {
                switch (worksPageLocation) {

                    // 1st page. Back to about page
                    case 1:
                        commonAction({ store, toLeft: false, path: '/about' })
                        firstDelayAction({ store, location: 'about', isRight: false })
                        secondDelayAction({
                            store,
                            page: 'about',
                            isWorksProperties: ''
                        })
                        break

                    // 2nd and 4th works page
                    case 2:
                    case 4:
                        worksScrollEvent(store, false, 'right')
                        break

                    // 3rd and last works page
                    case 3:
                    case 5:
                        worksScrollEvent(store, false, 'left')
                        break
                }
            }
            break

        case 'blog':
            // To Contact
            if (direction) {
                commonAction({ store, toLeft: true, path: '/contact' })
                firstDelayAction({ store, location: 'contact', isRight: true })
                secondDelayAction({
                    store,
                    page: 'contact',
                    isWorksProperties: ''
                })

                // back to works page 5 (another)
            } else {
                commonAction({ store, toLeft: true, path: '/works' })
                firstDelayAction({ store, location: 'works', isRight: true })
                secondDelayAction({
                    store,
                    page: 'works',
                    isWorksProperties: 'set'
                })
            }
            break

        case 'contact':
            // Back to blog
            if (!direction) {
                commonAction({ store, toLeft: false, path: '/blog' })
                firstDelayAction({ store, location: 'blog', isRight: false })
                secondDelayAction({
                    store,
                    page: 'blog',
                    isWorksProperties: ''
                })
            }
    }
}

// For pagination and navigation.
export const directPageController = (
    store: StrictStore,
    pageLocation: string,
    nuxt: NuxtApp | null = null,
    nav = false
) => {
    const currentLocation = store.getters['pageLocation/pageLocation']

    switch (pageLocation) {
        case 'home':
        case 'first':
            if (currentLocation !== 'first') {
                if (currentLocation === 'about') {
                    scrollDownAction({ store, location: 'first', isFirstView: true })
                } else {
                    commonDirectControlAction(store, 'first')
                    store.commit('scrolls/setIsFirstView', { isFirstView: true })
                }
            }
            break

        case 'about':
            if (currentLocation !== 'about') {
                if (currentLocation === 'first') {
                    scrollDownAction({ store, location: 'about', isFirstView: false })
                } else {
                    commonDirectControlAction(store, 'about')
                }
            }
            break

        default:
            if (currentLocation !== pageLocation) {
                store.commit('scrolls/setIsFirstView', { isFirstView: false })
                commonDirectControlAction(store, pageLocation)
            }
    }
    if (nav && nuxt) {
        nuxt.$emit('nav-toggle')
    }
}
