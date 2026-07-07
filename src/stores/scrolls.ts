import { defineStore } from 'pinia'

export const useScrollsStore = defineStore('scrolls', {
    state: () => ({
        translate: 'translateY(0vh)',
        rightToLeft: false,
        leftToRight: false,
        isFirstView: true,
        delayedActivePage: ''
    }),
    actions: {
        setTranslate(val: number): void {
            this.translate = `translateY(${val}vh)`
        },
        setRightToLeft(val: boolean): void {
            this.rightToLeft = val
        },
        setLeftToRight(val: boolean): void {
            this.leftToRight = val
        },
        setIsFirstView(isFirstView: boolean): void {
            this.isFirstView = isFirstView
        },
        setDelayedActivePage(page: string): void {
            this.delayedActivePage = page
        }
    }
})
