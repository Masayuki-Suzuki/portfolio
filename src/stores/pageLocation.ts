import { defineStore } from 'pinia'

export type WorksLocation = 1 | 2 | 3 | 4 | 5
export type WorksSide = 'right' | 'left' | null

export const usePageLocationStore = defineStore('pageLocation', {
    state: () => ({
        pageLocation: 'first',
        pageLocationNum: 0,
        worksLocation: 1 as WorksLocation,
        worksSide: null as WorksSide,
        isRight: false
    }),
    actions: {
        setPageLocation(location: string): void {
            this.pageLocation = location
        },
        setPageLocationNum(num: number): void {
            this.pageLocationNum = num
        },
        setWorksLocation(num: WorksLocation): void {
            this.worksLocation = num
        },
        setWorksSide(side: WorksSide): void {
            this.worksSide = side
        },
        setIsRight(isRight: boolean): void {
            this.isRight = isRight
        }
    }
})
