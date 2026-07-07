import { useDevicesStore } from '~/stores/devices'

export const checkPageActivation = (current: string, locationName: string): boolean => {
    const devicesStore = useDevicesStore()
    if (devicesStore.isMobile) {
        return true
    } else {
        return current === locationName
    }
}
