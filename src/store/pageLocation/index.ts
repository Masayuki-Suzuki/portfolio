import { LocalContext, LocalGetters } from 'vuex'

type Context = LocalContext['pageLocation']
type Getters = LocalGetters['pageLocation']

type State = {
    pageLocation: string
    pageLocationNum: number
    worksLocation: 1 | 2 | 3 | 4 | 5
    worksSide: 'right' | 'left' | null
    isRight: boolean
}

export const state = (): State => {
    return {
        pageLocation: 'first',
        pageLocationNum: 0,
        worksLocation: 1,
        worksSide: null,
        isRight: false
    }
}

export const getters = {
    pageLocation: (state: State) => state.pageLocation,
    pageLocationNum: (state: State) => state.pageLocationNum,
    worksLocation: (state: State) => state.worksLocation,
    worksSide: (state: State) => state.worksSide,
    isRight: (state: State) => state.isRight
}

export const mutations = {
    setPageLocation: (state: State, payload: { location: string }) => {
        state.pageLocation = payload.location
    },
    setPageLocationNum: (state: State, payload: { num: number }) => {
        state.pageLocationNum = payload.num
    },
    setWorksLocation: (state: State, payload: { num: 1 | 2 | 3 | 4 | 5 }) => {
        state.worksLocation = payload.num
    },
    setWorksSide: (state: State, payload: { side: 'right' | 'left' | null }) => {
        state.worksSide = payload.side
    },
    setIsRight: (state: State, payload: { isRight: boolean }) => {
        state.isRight = payload.isRight
    }
}
