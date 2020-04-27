export const checkPageActivation = (store, current, locationName: string) => {
    const isMobile = store.getters['devices/isMobile']
    if (isMobile) {
        return true
    } else {
        return current === locationName
    }
}
