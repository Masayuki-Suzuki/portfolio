<template lang="pug">
ul.gNav__main(:style="{'visibility': isOpen ? 'visible' : 'hidden'}")
    li.gNav__list.text-uppercase(
        v-for="list in navList"
        @click="navClickAction(list)"
        :class="list"
    ) {{ list }}
    li.gNav__list.gNav__list--privacy
        n-link.text-uppercase(to="/privacy-policy") privacy policy
    li.gNav__list.gNav__list--sns
        ul.sns
            li.sns__list
                a.sns__link.github(href="https://github.com/Masayuki-Suzuki" target="_blank")
            li.sns__list
                a.sns__link.linkedin(href="https://www.linkedin.com/in/masayuki-suzuki/" target="_blank")
            li.sns__list
                span.sns__link.email(@click="")
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import { pageScroller } from '~/libs/pageScroller'

export default defineComponent({
    name: 'nav-main-content',
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    },
    setup(_, { root: { $store, $nuxt } }) {
        // --------------------------------
        // Local State
        const navList = [
            'home',
            'about',
            'works',
            'blog',
            'contact'
        ]

        // ---------------------------------
        // Computed from vuex
        const isMobile = computed(() => $store.getters['devices/isMobile'])

        // ---------------------------------
        // Methods
        const navClickAction = (pageLocation: string): void => {
            pageScroller($store, $nuxt, pageLocation, isMobile.value, true)
        }

        return {
            navList,
            navClickAction
        }
    }
})
</script>

<style lang="sass" scoped>
$list-slide-threshold: 50px
$list-slide-delay: .3s

.gNav
    &__main
        display: flex
        align-items: center
        flex-direction: column
        justify-content: center
        height: 100%
        width: 100%

    &__list
        color: #fff
        font-size: 2.4rem
        letter-spacing: .06em
        position: relative
        margin-bottom: 30px
        cursor: pointer
        opacity: 0
        transform: translateX($list-slide-threshold)

        &--privacy
            font-size: 2rem
            margin-top: 30px
            margin-bottom: 0
            transform: translateY(10px)

        a
            color: #fff
            +pseudo(#fff)

.gNav--active
    .home
        transition: opacity .3s ease $list-slide-delay, transform .3s ease $list-slide-delay

    .about
        transition: opacity .3s ease ($list-slide-delay * 1.3), transform .3s ease ($list-slide-delay * 1.3)

    .works
        transition: opacity .3s ease ($list-slide-delay * 1.6), transform .3s ease ($list-slide-delay * 1.6)

    .blog
        transition: opacity .3s ease ($list-slide-delay * 1.9), transform .3s ease ($list-slide-delay * 1.9)

    .contact
        transition: opacity .3s ease ($list-slide-delay * 2.1), transform .3s ease ($list-slide-delay * 2.1)

    .gNav__list
        opacity: 1
        transform: translateX(0)

        &--privacy
            transform: translateY(0)
            transition: opacity .3s ease ($list-slide-delay * 2.7), transform .3s ease ($list-slide-delay * 2.7)

    .sns__link
        opacity: 1
        transform: translateX(0)

    .github
        transition: opacity .3s ease ($list-slide-delay * 2.85), transform .3s ease ($list-slide-delay * 2.85)

    .linkedin
        transition: opacity .3s ease ($list-slide-delay * 3), transform .3s ease ($list-slide-delay * 3)

    .email
        transition: opacity .3s ease ($list-slide-delay * 3.15), transform .3s ease ($list-slide-delay * 3.15)

.sns
    margin-top: 15px

    &__link
        opacity: 0
        transform: translateY(10px)
</style>
