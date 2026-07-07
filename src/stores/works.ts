import { defineStore } from 'pinia'

export const useWorksStore = defineStore('works', {
    state: () => ({
        isRightActive: null as boolean | null
    }),
    actions: {
        setIsRightActive(isRight: boolean | null): void {
            this.isRightActive = isRight
        }
    }
})
