import { LocalContext, LocalGetters } from 'vuex'

type Context = LocalContext['devices']
type Getters = LocalGetters['devices']
type State = {
    isMobile: boolean
    prevWindowWidth: number
}

export const state = (): State => {
    return {
        isMobile: false,
        prevWindowWidth: 0
    }
}

export const getters = {
    isMobile: (state: State): boolean => state.isMobile,
    prevWindowWidth: (state: State): number => state.prevWindowWidth
}

export const mutations = {
    setIsMobile: (state: State, payload: { isMobile: boolean }): void => {
        state.isMobile = payload.isMobile
    },
    setWindowSize: (state: State, payload: { val: number }): void => {
        state.prevWindowWidth = payload.val
    }
}
