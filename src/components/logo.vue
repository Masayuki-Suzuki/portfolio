<template lang="pug">
.logo(:class="{'logo__right': isRight, 'is-white': isRightActive === false}" @click="logoClick($event)")
    svg.logo__svg(viewBox="0 0 70 57" xmlns="http://www.w3.org/2000/svg")
        title logo
        path.path(
            :class="colourClass"
            :d="pathStr"
            fill-rule="evenodd"
        )
</template>

<script lang="ts">
import { computed, defineComponent, SetupContext } from '@vue/composition-api'
import { pageScroller } from '~/libs/pageScroller'

export default defineComponent({
    name: 'logo',
    props: {
        colourClass: {
            type: String,
            default: 'logo-white'
        }
    },
    setup(_, { root: { $store, $nuxt } }: SetupContext) {
        // -------------------------------------------------
        // Local State
        const pathStr = 'M14.573 41.567l5.01-18.199 4.724 22.053 8.446-39.395 8.016 50.957' +
            ' 5.583-27.405 4.437 15.201 4.581-24.836 14.601-4.497-15.03 3.426-4.867 21.84-3.865-13.49-5.297' +
            ' 22.267L32.323.031l-8.16 39.61-5.01-20.34-5.01 21.196L.115 46.064z'

        // -------------------------------------------------
        // Computed from vuex
        const isMobile = computed(() => $store.getters['devices/isMobile'])
        const isRight = computed(() => $store.getters['pageLocation/isRight'])
        const isRightActive = computed(() => $store.getters['works/isRightActive'])

        // eslint-disable-next-line
        const logoClick = (): void => {
            pageScroller($store, $nuxt, 'first', isMobile.value)
        }

        return {
            isRight,
            isRightActive,
            pathStr,
            logoClick
        }
    }
})
</script>

<style lang="sass" scoped>

=xs-svg
    width: 60px

=cstm-svg
    width: 50px

.logo
    cursor: pointer
    position: fixed
    top: $FrameWidth
    left: $FrameWidth
    z-index: 10
    padding: 20px

    +customMediaV(800, false)
        top: $FrameWidthSp
        left: $FrameWidthSp
        padding: $FrameWidthSp

    +customMediaV(700, false)
        padding: 10px

    +mdAndDown
        top: 0
        left: 0
        padding: $FrameWidth

    +xsAndDown
        padding: 25px 15px

    &__right
        left: auto
        right: $FrameWidth

        +customMediaV(800, false)
            right: 20px

        +customMediaV(700, false)
            right: 15px

        +mdAndDown
            right: 0

    &__svg
        height: auto
        width: 70px

        +xsAndDown
            +xs-svg

        +customMediaV(800, false)
            +xs-svg

        +customMedia(550, false)
            +cstm-svg

        +customMediaV(700, false)
            +cstm-svg

.path
    transition: all .5s ease .2s

.logo-white
    fill: #fff
    stroke: #fff

.logo-black
    fill: #3c3c3c
    stroke: #3c3c3c

.is-white
    .path
        @extend .logo-white
        transition: all .2s ease

</style>
