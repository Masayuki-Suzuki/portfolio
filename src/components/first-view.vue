<template lang="pug">
section.first

    //- Logo image
    .main-logo
        .main-logo__image
            img(src="/images/mainLogo.svg")
            //object(data="/images/mainLogo.svg" type="image/svg+xml")

    //- sns link and icons
    ul.sns
        li.sns__list
            a.sns__link.github(href="https://github.com/Masayuki-Suzuki" target="_blank")
        li.sns__list
            a.sns__link.linkedin(href="https://www.linkedin.com/in/masayuki-suzuki/" target="_blank")
        li.sns__list
            span.sns__link.email(@click="")

    //- scroll indicator
    .scroll-icon
        .scroll-icon__main
        p.scroll-icon__text.text-capitalised scroll
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        return {}
    }
})
/* eslint-disable */
</script>

<style lang="sass" scoped>
@keyframes scrollIndicator
    0%
        opacity: 0
        transform: translateY(0)
    37.5%
        opacity: 1
    75%
        opacity: 0
        transform: translateY(7px)
    100%
        opacity: 0

@keyframes scrollAnimation-touch
    from, 20%, 55%, 80%, 90%, to
        transform: translate3d(0, 0, 0)
    40%, 45%
        transform: translate3d(0, -30px, 0)
    70%
        transform: translate3d(0, -20px, 0)


.first
    background: url(/images/topBg.webp) center center/cover no-repeat
    position: relative
    z-index: 0
    height: 100%
    width: 100%
    transition: all .5s ease

    +mdAndDown
        height: 100vh
        min-height: 500px

.no-webp
    .first
        background: url(/images/topBg.jpg) center center/cover no-repeat

.main-logo
    display: flex
    align-items: center
    justify-content: center
    padding-top: 30vh
    pointer-events: none

    +customMedia(1023, false)
        padding-top: 32vh

    +customMediaV(700, false)
        padding-top: 32vh

    +customMediaV(600, false)
        padding-top: 27vh

    +customMedia(899, false)
        padding-top: 35vh

    +customMediaHV(899, 700, false)
        padding-top: 30vh

    +customMediaHV(899, 550, false)
        padding-top: 24vh

    +customMedia(549, false)
        padding-top: 28vh

    &__image
        background: rgba(255, 255, 255, 0.6)
        padding: 32px 34px 28px 34px

        +customMedia(1023, false)
            width: 240px

            img
                width: 100%

        +customMediaV(700, false)
            width: 240px

            img
                width: 100%

        +smAndDown
            width: 270px

        +customMediaHV(899, 700, false)
            width: 240px

        +customMedia(549, false)
            padding: 18px 22px
            width: 200px

.scroll-icon
    text-align: center
    position: absolute
    left: 50%
    bottom: 4%
    margin-left: -23px

    // For Landscape
    @media (max-device-width: 1024px) and (orientation: landscape), (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 1) and (orientation: landscape), (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)
        bottom: 11%

    +smAndDown
        animation: scrollAnimation-touch 1.5s infinite
        bottom: 8%

    +customMediaHV(900, 600, false)
        margin-bottom: -18px

    +customMedia(550, false)
        bottom: 12%

    &__main
        border: solid 2px #fff
        border-radius: 15px
        position: relative
        display: inline-block
        height: 46px
        width: 30px

        +smAndDown
            border-width: 3px
            border:
                top: 0
                right: 0
                radius: 0
            height: 36px
            width: 36px
            opacity: .8
            transform: rotateZ(-45deg)

        +customMediaHV(899, 600, false)
            height: 28px
            width: 28px

        &:before
            animation: scrollIndicator 1.5s ease infinite
            background: #fff
            border-radius: 50%
            content: ''
            display: block
            position: absolute
            top: 8px
            left: 50%
            margin-left: -4px
            height: 8px
            width: 8px

            +smAndDown
                display: none

    &__text
        color: #fff
        font-size: 1.6rem
        font-weight: 700
        letter-spacing: 1px

        +customMediaV(799, false)
            font-size: 1.5rem

        +smAndDown
            display: none

</style>
