import { LocalContext, LocalGetters } from 'vuex'

export type Context = LocalContext['works']
export type Getters = LocalGetters['works']
type State = {
    isRightActive: boolean | null
}

export const state = (): State => {
    return {
        isRightActive: null
    }
}

export const getters = {
    isRightActive: (state: State) => state.isRightActive
}

export const mutations = {
    setIsRightActive: (state: State, payload: { isRight: boolean | null }) => {
        state.isRightActive = payload.isRight
    }
}
