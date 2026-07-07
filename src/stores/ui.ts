import { defineStore } from 'pinia'

// 旧 $nuxt.$emit('nav-toggle') イベントバスの置き換え
export const useUiStore = defineStore('ui', {
    state: () => ({
        isNavOpen: false
    }),
    actions: {
        toggleNav(): void {
            this.isNavOpen = !this.isNavOpen
        },
        closeNav(): void {
            this.isNavOpen = false
        }
    }
})
