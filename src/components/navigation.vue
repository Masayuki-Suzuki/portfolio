<template lang="pug">
nav.gNav(:class="navClass")

    //- Navigation Icon
    .nav-icon(:class="{'is-open': isOpen, 'is-hidden': rightToLeft || leftToRight}" @click="navToggle()")
        span.top
        span.middle
        span.bottom

    //- title on vertical mode
    p.gNav__title.text-uppercase(
        v-show="!isMobile"
        :class="{'gNav__title--active': !isFirstView, 'is-hidden': isHidden}"
    )
        | masayuki suzuki portfolio web site

    ul.nav-sns(
        v-show="!isOpen && !isMobile"
        :class="{'nav-sns--active': activeNavSns, 'is-hidden': isHidden}"
    )
        li.nav-sns__list
            a.sns__link.github(href="https://github.com/Masayuki-Suzuki" target="_blank")
        li.nav-sns__list
            a.sns__link.linkedin(href="https://www.linkedin.com/in/masayuki-suzuki/" target="_blank")
        li.nav-sns__list
            span.sns__link.email(@click="")

    nav-main-content(:is-open="isOpen")
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from '@vue/composition-api'
import NavMainContent from '~/components/nav-main-content.vue'

export default defineComponent({
    name: 'navigation',
    components: {
        NavMainContent
    },
    setup(_, { root: { $store, $nuxt } }) {
        // --------------------------------
        // Local State
        const isOpen = ref(false)

        // --------------------------------
        // Computed
        const isMobile = computed(() => $store.getters['devices/isMobile'])
        const pageLocation = computed(() => $store.getters['pageLocation/pageLocation'])
        const isFirstView = computed((): boolean => pageLocation.value === 'first')
        const isHidden = computed((): boolean => false)
        const delayedActivePage = computed(() => $store.getters['scrolls/delayedActivePage'])

        // Scroll animation flags
        const rightToLeft = computed(() => $store.getters['scrolls/rightToLeft'])
        const leftToRight = computed(() => $store.getters['scrolls/leftToRight'])

        const activeNavSns = computed((): boolean => {
            return delayedActivePage.value === pageLocation.value && pageLocation.value !== 'first'
        })

        const navClass = computed((): string[] => {
            const classNames: string[] = []

            if (pageLocation.value === 'first') {
                classNames.push('gNav__first-view')
            } else {
                classNames.push(`gNav__${pageLocation.value}`)
            }

            if (isOpen.value) {
                classNames.push('gNav--active')
            }

            if (rightToLeft.value) {
                classNames.push('right-to-left')
            }

            if (leftToRight.value) {
                classNames.push('left-to-right')
            }

            return classNames
        })

        // --------------------------------
        // Methods
        const navToggle = () => {
            isOpen.value = !isOpen.value
        }

        onMounted(() => {
            $nuxt.$on('nav-toggle', navToggle)
        })

        return {
            isOpen,
            isMobile,
            isFirstView,
            isHidden,
            navClass,
            rightToLeft,
            leftToRight,
            delayedActivePage,
            pageLocation,
            activeNavSns,
            navToggle
        }
    }
})

// ToDo: need to fix navigation icon for mobile
</script>

<style lang="sass" scoped>
$nav-size: 74px
$nav-size-mid: 74px
$nav-size-sml: 60px

.gNav
    background: $main-color
    position: absolute
    z-index: 11
    height: 100%
    transition: all .3s ease

    &__title
        color: #fff
        font-size: 1.4rem
        letter-spacing: .06em
        text-align: center
        opacity: 0
        position: absolute
        top: 50%
        right: -250px
        z-index: 1
        width: 400px
        transition: all 0s
        transform: rotate(90deg)
        transform-origin: center 0

        +customMediaV(700, false)
            font-size: 1.2rem

    &__mobile,
    &__first-view
        top: 12px
        right: 12px
        height: $nav-size-mid
        width: $nav-size-mid
        transition: all .3s ease

        +customMediaV(800, false)
            top: 8px
            right: 8px

        +customMediaV(700, false)
            height: $nav-size-sml
            width: $nav-size-sml

        +mdAndDown
            height: 45px
            width: 45px

        +smAndDown
            position: fixed
            top: $FrameWidth
            right: $FrameWidth
            height: 70px
            width: 70px

        +xsAndDown
            top: 15px
            right: 15px
            height: $nav-size-sml
            width: $nav-size-sml

        +customMedia(550, false)
            height: 55px
            width: 55px

        .is-open
            top: 12px
            right: 12px
            height: $nav-size-sml
            width: $nav-size-sml

    &__about,
    &__blog
        top: 0
        right: 0
        width: $nav-size-mid
        transition: all .3s ease

        +customMediaV(700, false)
            width: $nav-size-sml

        +mdAndDown
            width: 45px

        .nav-sns
            .sns__link
                transform: translateX(30px)

        .nav-sns--active
            .sns__link
                transform: translateX(0)

    &__works,
    &__contact
        top: 0
        right: auto
        left: 0
        width: $nav-size-mid

        +customMediaV(700, false)
            width: $nav-size-sml

        +mdAndDown
            width: 45px

        .nav-sns
            .sns__link
                transform: translateX(-30px)

        .nav-sns--active
            .sns__link
                transform: translateX(0)

    &.right-to-left,
    &.left-to-right
        top: 0
        height: 100%
        width: 100%
        transition: all .3s ease

        .gNav__title,
        .nav-sns
            opacity: 0
            transition: none

    &.right-to-left
        right: 0
        left: auto

    &.left-to-right
        right: auto
        left: 0

.nav-icon
    position: absolute
    top: 0
    right: 0
    z-index: 2
    display: block
    padding-bottom: 4px
    height: $nav-size-mid
    width: $nav-size-mid
    transition: all .4s ease
    cursor: pointer

    +customMediaV(800, false)
        height: $nav-size-mid

    +customMediaV(700, false)
        height: $nav-size-sml
        width: $nav-size-sml

    +mdAndDown
        padding-bottom: 2px
        height: 45px
        width: 45px

    +smAndDown
        height: 65px
        width: 70px

    +xsAndDown
        height: $nav-size-sml
        width: $nav-size-sml

    +customMedia(550, false)
        height: 55px
        width: 55px

    span
        background: #fff
        position: relative
        top: 50%
        left: 50%
        display: block
        height: 2px
        width: 30px
        transition: opacity .3s
        transform: translateX(-50%)

        +customMediaV(700, false)
            width: 24px

        +mdAndDown
            height: 1px
            width: 20px

        +smAndDown
            height: 2px
            width: 30px

        +xsAndDown
            width: 24px

    .top
        animation: navIcon-top .4s
        animation-fill-mode: forwards

        +customMediaV(700, false)
            animation: navIcon-top-sml .4s
            animation-fill-mode: forwards

        +mdAndDown
            animation: navIcon-top-mid-w .4s
            animation-fill-mode: forwards

        +smAndDown
            animation: navIcon-top .4s
            animation-fill-mode: forwards

        +xsAndDown
            animation: navIcon-top-sml .4s
            animation-fill-mode: forwards

    .middle
        width: 20px
        opacity: 1
        transition: opacity .4s
        transform: translateX(-75%) translateY(-1px)

        +customMediaV(700, false)
            width: 15px

        +mdAndDown
            width: 12px

        +smAndDown
            width: 20px

        +xsAndDown
            width: 15px

    .bottom
        animation: navIcon-bottom .4s
        animation-fill-mode: forwards

        +customMediaV(700, false)
            animation: navIcon-bottom-sml .4s
            animation-fill-mode: forwards

        +mdAndDown
            animation: navIcon-bottom-mid-w .4s
            animation-fill-mode: forwards

        +smAndDown
            animation: navIcon-bottom .4s
            animation-fill-mode: forwards

        +xsAndDown
            animation: navIcon-bottom-sml .4s
            animation-fill-mode: forwards

    &.is-open
        .top
            animation: navIcon-top-close .4s
            animation-fill-mode: forwards

            +mdAndDown
                animation: navIcon-top-close-md .4s
                animation-fill-mode: forwards

        .middle
            opacity: 0
            transition: opacity .4s

        .bottom
            animation: navIcon-bottom-close .4s
            animation-fill-mode: forwards

            +mdAndDown
                animation: navIcon-bottom-close-tb .4s
                animation-fill-mode: forwards

    &.is-hidden
        opacity: 0

.nav-sns
    bottom: 5%
    position: absolute
    width: 100%
    transition: all .5s ease

    +customMediaV(600, false)
        bottom: 3%

    +customMediaV(500, false)
        display: none

    &.is-hidden
        opacity: 0
        transition: opacity .1s ease

    &__list
        margin-top: 10px
        text-align: center

        +mdAndDown
            margin-top: 15px

    .sns__link
        opacity: 0
        transition: all 0s
        transform: translateX(30px)

        &::before
            color: #fff
            font-size: 3rem

        +customMediaV(700, false)
            &::before
                font-size: 2.4rem

        +mdAndDown
            &::before
                font-size: 2.4rem

.nav-sns--active
    .sns__link
        opacity: 1
        transition-property: all
        transition-duration: .3s
        transition-timing-function: ease

        &.github
            transition-delay: .5s

        &.linkedin
            transition-delay: .65s

        &.email
            transition-delay: .8s

.gNav__title
    &--active
        opacity: 1
        right: -172px
        transition: all .3s ease .5s

        +customMediaV(700, false)
            right: -177px

        +mdAndDown
            font-size: 1.2rem
            right: -185px

.gNav--active
    top: 0
    right: 0
    height: 100%
    width: 100%
    transition: all .3s ease

    .gNav__title
        right: -250px
        opacity: 0
        transition: all 0s

</style>
