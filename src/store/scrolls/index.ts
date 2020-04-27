import { LocalContext, LocalGetters } from 'vuex'

export type Context = LocalContext['scrolls']
export type Getters = LocalGetters['scrolls']
type State = {
    translate: string
    rightToLeft: boolean
    leftToRight: boolean
    isFirstView: boolean
    delayedActivePage: string
}

export const state = (): State => {
    return {
        translate: 'translateY(0vh)',
        rightToLeft: false,
        leftToRight: false,
        isFirstView: true,
        delayedActivePage: ''
    }
}

export const getters = {
    translate: (state: State) => state.translate,
    rightToLeft: (state: State) => state.rightToLeft,
    leftToRight: (state: State) => state.leftToRight,
    isFirstView: (state: State) => state.isFirstView,
    delayedActivePage: (state: State) => state.delayedActivePage
}

export const mutations = {
    setTranslate: (state: State, payload: { val: number }): void => {
        state.translate = `translateY(${payload.val}vh)`
    },
    setRightToLeft: (state: State, payload: { val: boolean }): void => {
        state.rightToLeft = payload.val
    },
    setLeftToRight: (state: State, payload: { val: boolean }): void => {
        state.leftToRight = payload.val
    },
    setIsFirstView: (state: State, payload: { isFirstView: boolean }): void => {
        state.isFirstView = payload.isFirstView
    },
    setDelayedActivePage: (state: State, payload: { page: string }): void => {
        state.delayedActivePage = payload.page
    }
}
