<template lang="pug">
.pagination(:class="parentClass")
    template(v-for="(location, index) in locations")

        // Just shows page number.
        .pagination__list(
            :key="location"
            :class="{'active': checkCurrentLocation(location)}"
            @click="pageClickAction(location)"
        ) {{ `0${index + 1}.` }}

        // If location is works, insert dots indicator
        .pagination__list(v-if="location === 'works'")

            //- If current page is "works", dots indicator shows below the "03."
            ul.pagination__works(v-if="pageLocation === 'works'")

                //- **key: Generate random string
                li.works__list(
                    v-for="i in 5"
                    :class="{'active': checkWorksCurrentLocation(i)}"
                    :key="`${Math.random().toString(32).substring(2)}`"
                )

</template>

<script lang="ts">
import { computed, defineComponent, SetupContext } from '@vue/composition-api'
import { directPageController } from '~/libs/scrollEventHandler'

export default defineComponent({
    name: 'pagination',
    setup(_, { root: { $store } }: SetupContext) {
        // -----------------------------------------
        // Local State
        const locations = ['first', 'about', 'works', 'blog', 'contact']

        // -----------------------------------------
        // Computed from vuex state
        const pageLocation = computed(() => $store.getters['pageLocation/pageLocation'])
        const worksLocation = computed(() => $store.getters['pageLocation/worksLocation'])
        const isRight = computed(() => $store.getters['pageLocation/isRight'])
        const isRightActive = computed(() => $store.getters['works/isRightActive'])

        // -----------------------------------------
        // Computed
        const isWorks = computed(() => pageLocation.value === 'works')

        // Create css class array for .pagination class element
        const parentClass = computed((): string[] => {
            const classAry: string[] = []
            if (pageLocation.value === 'first' || isRightActive.value === false) {
                classAry.push('pagination--first')
            }
            if (isRight.value) {
                classAry.push('pagination--right')
            }
            return classAry
        })

        // -----------------------------------------
        // Methods
        const checkCurrentLocation = (loc: string): boolean => {
            return loc === pageLocation.value
        }

        const checkWorksCurrentLocation = (index: 1 | 2 | 3 | 4 | 5): boolean => {
            return worksLocation.value === index
        }

        const pageClickAction = (pageLocation: string): void => {
            directPageController($store, pageLocation)
        }

        return {
            locations,
            pageLocation,
            worksLocation,
            isRight,
            isWorks,
            parentClass,
            checkCurrentLocation,
            checkWorksCurrentLocation,
            pageClickAction
        }
    }
})
</script>

<style lang="sass" scoped>
.pagination
    position: absolute
    top: 50%
    left: 60px
    z-index: 10
    transform: translateY(-45%)

    +customMediaV(800, false)
        left: 45px

    +customMediaV(700, false)
        left: 35px

    +mdAndDown
        left: 35px

    +smAndDown
        display: none

    &--right
        left: auto
        right: 70px

        +customMediaV(800, false)
            right: 45px

        +customMediaV(700, false)
            right: 35px

        +mdAndDown
            right: 35px

    &__list
        color: $main-color
        font-size: 2rem
        font-weight: 300
        letter-spacing: .25px
        position: relative
        margin-bottom: 30px
        cursor: pointer
        transition: all .5s ease .2s

        &::after
            background: #e00606
            content: ''
            position: absolute
            right: -15px
            bottom: 3px
            display: block
            height: 2px
            width: 10px
            opacity: 0
            transition: all .5s ease .2s

    &--first .pagination__list
        color: #fff

    &__works
        display: flex
        align-items: center
        flex-direction: column
        margin: -15px 0
        width: 100%
        cursor: default

    .active
        font-weight: 700

        &:after
            opacity: 1

.works
    &__list
        background: #fff
        border-radius: 50%
        margin-bottom: 10px
        height: 8px
        width: 8px

        &.active
            background: $main-color

    .pagination__list
        background: #fff
        border-radius: 50%
        margin-bottom: 10px
        height: 8px
        width: 8px

</style>
