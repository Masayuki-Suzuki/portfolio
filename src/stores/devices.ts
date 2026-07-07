import { defineStore } from 'pinia'

export const useDevicesStore = defineStore('devices', {
    state: () => ({
        isMobile: false,
        prevWindowWidth: 0
    }),
    actions: {
        setIsMobile(isMobile: boolean): void {
            this.isMobile = isMobile
        },
        setWindowSize(val: number): void {
            this.prevWindowWidth = val
        }
    }
})
