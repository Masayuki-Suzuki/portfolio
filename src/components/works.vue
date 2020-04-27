<template lang="pug">
section.works.common-container(
    :class="[`works-page-${worksLocation}`, {'works--left': !isRightSide, 'works--right': isRightSide}]"
)

    h1.common-heading(v-show="isMobile") works
    yelp-camp(v-if="checkActiveWorksPage(1)" :class="{'active-works': isRightActive || isMobile}")
    my-blog(v-if="checkActiveWorksPage(2)" :class="{'active-works': !isRightActive || isMobile}")
    portfolio(v-if="checkActiveWorksPage(3)" :class="{'active-works': isRightActive || isMobile}")
    pinstagram(v-if="checkActiveWorksPage(4)" :class="{'active-works': !isRightActive || isMobile}")
    another(v-if="checkActiveWorksPage(5)" :class="{'active-works': isRightActive || isMobile}")
    scroll-nav(:works="true" )
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import YelpCamp from '~/components/yelp-camp.vue'
import MyBlog from '~/components/my-blog.vue'
import Portfolio from '~/components/portfolio.vue'
import Pinstagram from '~/components/pinstagram.vue'
import Another from '~/components/another.vue'
import ScrollNav from '~/components/scroll-nav.vue'

export default defineComponent({
    name: 'works',
    components: {
        YelpCamp,
        MyBlog,
        Portfolio,
        Pinstagram,
        Another,
        ScrollNav
    },
    setup(_, { root: { $store } }) {
        // ----------------------------------
        // Local state

        // ----------------------------------
        // Computed from vuex
        const isMobile = computed(() => $store.getters['devices/isMobile'])
        const worksLocation = computed(() => $store.getters['pageLocation/worksLocation'])
        const isRightActive = computed(() => $store.getters['works/isRightActive'])

        // ----------------------------------
        // Computed
        const isRightSide = computed(() => {
            return $store.getters['pageLocation/worksSide'] === 'right' || isMobile.value
        })

        // ----------------------------------
        // Methods
        const checkActiveWorksPage = (index: number): boolean => {
            return $store.getters['pageLocation/worksLocation'] === index || isMobile.value
        }

        return {
            isMobile,
            isRightSide,
            worksLocation,
            isRightActive,
            checkActiveWorksPage
        }
    }
})
</script>

<style lang="sass" scoped>
.works
    z-index: 1
    transition: all .4s ease

    @media (max-height: 800px), (max-width: 1024px)
        padding: 15px

    +smAndDown
        height: inherit
        padding: 90px 0 95px
        position: static

    +customMedia(550, false)
        padding: 50px 0 55px

    &::after
        background: $bg-color
        content: ""
        position: absolute
        top: 0
        left: 0
        z-index: 0
        display: block
        height: 100%
        width: 100%
        transition: all .25s ease-in-out

        +smAndDown
            content: none

    &--left
        &::after
            transform: matrix(1, 0, -0.8, 1, 0, 0) translateX(-45%)

            +customMediaHV(1024, 800, false)
                transform: matrix(1, 0, -0.8, 1, 0, 0) translateX(-38%)

            @media (max-width: 1024px) and (orientation: portrait)
                transform: matrix(1, 0, -0.4, 1, 0, 0) translateX(-45%)

    &--right
        &::after
            transform: matrix(1, 0, -0.8, 1, 0, 0) translateX(42%)

            +customMediaHV(1024, 800, false)
                transform: matrix(1, 0, -0.8, 1, 0, 0) translateX(35%)

            @media (max-width: 1024px) and (orientation: portrait)
                transform: matrix(1, 0, -0.4, 1, 0, 0) translateX(42%)

    &-page-1
        background: url(/images/camping.webp) center center / cover no-repeat

        +lgAndDown
            background-position: 3vw top

        @media (max-width: 1024px) and (orientation: portrait)
            background-position-x: -17vw

        +smAndDown
            background: none

    &-page-2
        background: url(/images/blogImage.webp) 20vw 0 / cover no-repeat

        @media (max-width: 1024px) and (orientation: portrait)
            background-position-x: -7vw

        +smAndDown
            background: none

    &-page-3
        background: url(/images/topBg.webp) left top / cover no-repeat

        @media (max-width: 1024px) and (orientation: portrait)
            background-position-x: -40vw

        +smAndDown
            background: none

    &-page-4
        background: url(/images/pinstagram.webp) 10vw center / cover no-repeat

        @media (max-width: 1024px) and (orientation: portrait)
            background-position-x: -15vw

    &-page-5
        background: url(/images/tokyo.webp) -30vw center / cover no-repeat

        @media (max-width: 1024px) and (orientation: portrait)
            background-position-x: -80vw

        +smAndDown
            background: none

    // For child components
    ::v-deep
        .works
            &__details

                &--right,
                &--left
                    transition: all .4s ease

                    &::before,
                    &::after
                        +smAndDown
                            color: $main-color
                            line-height: 1
                            text-transform: uppercase
                            position: absolute
                            z-index: -2

                    &::before
                        top: 112px
                        font-size: 1.6rem
                        padding-left: 0

                        +customMedia(550, false)
                            font-size: 1.4rem
                            top: 62px

                    &::after
                        +smAndDown
                            font-size: 3.6rem
                            font-weight: 700
                            top: 130px

                        +customMedia(550, false)
                            font-size: 3rem
                            top: 80px

                &--right
                    margin-top: 47vh
                    padding-left: 45vw

                    +lgAndDown
                        margin-top: 48vh

                    +customMediaHV(1199, 800, false)
                        margin-top: 48vh

                    +mdAndDown
                        margin-top: 55vh
                        padding-left: 40vw

                    +customMediaHV(1023, 800, false)
                        margin-top: 49vh

                    +customMediaV(700, false)
                        margin-top: 46vh

                    +customMediaHV(1023, 700, false)
                        margin-top: 49vh

                    +customMediaV(650, false)
                        margin-top: 44vh

                    +customMediaV(600, false)
                        margin-top: 46vh

                    +smAndDown
                        margin-top: 100px
                        padding-left: 0
                        position: relative

                    &::before,
                    &::after
                        +smAndDown
                            left: 3%

                    .works
                        &__title
                            +smAndDown
                                margin: 45px 0 0 12.7604166666%

                            +xsAndDown
                                margin-top: 20px

                            +customMedia(550, false)
                                background-size: cover !important

                        &__caption,
                        &__heading
                            +smAndDown
                                left: -11.2%

                &--left
                    margin-top: 10vh
                    padding-left: 8vw

                    +smAndDown
                        text-align: right
                        position: relative
                        margin-top: 100px
                        padding: 0

                        &::before,
                        &::after
                            text-align: left
                            right: 0
                            z-index: -2

                    .works
                        &__title
                            +smAndDown
                                text-align: left
                                margin: 45px 12.7604166666% 0 0

                        &__caption,
                        &__heading
                            +smAndDown
                                right: -15%

                        &__desc
                            display: inline-block
                            text-align: left

            &__caption,
            &__heading,
            &__lead,
            &__view
                color: $main-text-color
                opacity: 0
                position: relative
                transform: translateY(30px)
                transition: all .4s ease
                z-index: 2

            &__caption,
            &__heading
                text-transform: uppercase

                +smAndDown
                    color: #fff
                    position: absolute

            &__caption
                font-size: 2rem

                +customMediaHV(1199, 800, false)
                    font-size: 1.8rem

                @media (max-height: 620px), (max-width: 1024px)
                    font-size: 1.6rem

                +smAndDown
                    top: 110px

                +customMedia(550, false)
                    font-size: 1.4rem
                    top: 60px

            &__heading
                font-size: 5.5rem
                font-weight: 700
                line-height: 1
                margin: 5px 0 12px
                width: 88%

                +customMediaV(800, false)
                    font-size: 4.3rem

                +customMediaHV(1200, 800, false)
                    font-size: 4rem

                +customMediaV(620, false)
                    font-size: 4rem

                +mdAndDown
                    font-size: 3.6rem
                    max-width: 450px

                +smAndDown
                    top: 125px

                +customMedia(550, false)
                    font-size: 3rem
                    top: 75px

            &__title
                +smAndDown
                    background-size: 115%
                    position: relative
                    z-index: -1
                    height: 380px
                    width: 87.23958333333334%
                    overflow: hidden

                +xsAndDown
                    height: 320px

                +customMedia(550, false)
                    background-size: cover !important
                    height: 230px

            &__desc
                +smAndDown
                    background: rgba($main-color, 0.97)
                    margin-top: -140px
                    padding: 30px 40px
                    width: 62.5%
                    opacity: 1
                    transform: none

                +xsAndDown
                    margin-top: -100px
                    width: 85%

                +customMedia(550, false)
                    margin-top: -55px
                    padding: 20px
                    width: 90%

                &::after
                    +smAndDown
                        background: $main-color
                        content: ''
                        position: absolute
                        bottom: -50px
                        left: 50%
                        display: block
                        height: 2px
                        width: 160px
                        transform: translateX(-50%)

            &__lead
                font-size: 1.4rem
                font-weight: 500
                line-height: 1.5
                letter-spacing: .05em
                max-width: 600px

                +mdAndUp
                    width: 82%

                +lgAndDown
                    max-width: 540px

                +smAndDown
                    color: #fff
                    font-size: 1.4rem
                    letter-spacing: .02em
                    line-height: (20/14)
                    max-width: 470px
                    width: 100%
                    opacity: 1
                    transform: none

            &__view
                display: flex
                align-items: center
                flex-wrap: wrap

                +smAndDown
                    opacity: 1
                    transform: none

                a,
                span
                    border: solid 1px $main-color
                    color: $main-text-color
                    font-size: 1.4rem
                    line-height: 1
                    text-align: center
                    text-transform: uppercase
                    position: relative
                    margin: 10px 20px 0 0
                    padding: 12px 0 11px
                    width: 160px
                    overflow: hidden
                    transition: color .35s ease

                    @media (max-height: 650px), (max-width: 1024px)
                        font-size: 1.2rem
                        padding: 13px 0 12px
                        width: 120px

                    +smAndDown
                        border: solid 1px #fff
                        color: #fff
                        margin: 10px 10px 0 0
                        padding: 13px 0
                        width: 113px

                    &::after
                        background: $main-color
                        content: ''
                        position: absolute
                        top: 0
                        left: 50%
                        z-index: -1
                        height: 100%
                        width: 0
                        transform: matrix(1, 0, -1, 1, 0, 0)
                        transition: all .5s ease

                        +smAndDown
                            content: none

                    &:hover
                        color: #fff

                        &::after
                            left: -25%
                            width: 150%

                    &.works__github
                        display: flex
                        align-items: center
                        justify-content: center
                        padding: 7px 0 6px

                        +smAndDown
                            padding: 7px 0

                        &::before
                            content: '\f09b'
                            font-family: fontawesome
                            font-size: 2.4rem
                            line-height: 1
                            margin-right: 8px

        .using
            position: relative
            z-index: 2
            display: flex
            flex-wrap: wrap
            margin-top: 20px
            max-width: 610px
            width: 85%
            opacity: 0
            transform: translateY(20px)

            @media (max-height: 620px), (max-width: 1024px)
                margin-top: 10px

            +lgAndDown
                max-width: 470px

            +smAndDown
                margin-top: 20px
                max-width: inherit
                width: 100%
                opacity: 1
                transform: none

            &__list
                background: $main-color
                color: #fff
                font-size: 1.2rem
                font-weight: 700
                letter-spacing: .04em
                margin: 0 10px 10px 0
                padding: 7px 10px

                @media (max-height: 600px), (max-width: 1024px)
                    font-size: 1rem
                    padding: 5px 7px

                +smAndDown
                    background: #fff
                    color: $main-color

        .active-works
            .using
                opacity: 1
                transform: translateY(0)
                transition: opacity .4s ease .8s, transform .4s ease .8s

            .works
                &__caption,
                &__heading,
                &__lead,
                &__view
                    opacity: 1
                    transform: translateY(0)
                    transition: opacity .4s ease .2s, transform .4s ease .2s

                    +xsAndDown
                        transition: none

                &__heading
                    transition-delay: .4s

                &__lead
                    transition-delay: .6s

                &__view
                    transition-delay: 1s

.no-webp
    .works
        &-page-1
            background: url(/images/camping.jpg) center center / cover no-repeat

            +lgAndDown
                background-position: 3vw top

            @media (max-width: 1024px) and (orientation: portrait)
                background-position-x: -17vw

            +smAndDown
                background: none

        &-page-2
            background: url(/images/blogImage.jpg) 20vw 0 / cover no-repeat

            @media (max-width: 1024px) and (orientation: portrait)
                background-position-x: -7vw

            +smAndDown
                background: none

        &-page-3
            background: url(/images/topBg.jpg) left top / cover no-repeat

            @media (max-width: 1024px) and (orientation: portrait)
                background-position-x: -40vw

            +smAndDown
                background: none

        &-page-4
            background: url(/images/pinstagram.jpg) 10vw center / cover no-repeat

            @media (max-width: 1024px) and (orientation: portrait)
                background-position-x: -15vw

        &-page-5
            background: url(/images/tokyo.jpg) -30vw center / cover no-repeat

            @media (max-width: 1024px) and (orientation: portrait)
                background-position-x: -80vw

            +smAndDown
                background: none
</style>

