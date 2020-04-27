<template lang="pug">
section.common-container.about(:class="{'about--active': pageActive}")
    h1.common-heading.about__heading Who I am ?
    p.about__lead
        | Hi, there. I'm Masayuki Suzuki, a Japanese front-end developer based in Vancouver. My focus is creating
        | interactive experiences and user-friendly interfaces whilst maintaining semantic, clean markup and SEO
        | friendly code. I have 4 years experience in this field in Japan. I continue to learn new language,
        | tools and framework to proceed to the next stage.

    .wrapper
        .what-i(v-for="kind in kinds" :key="kind" :class="`what-i-${kind}`")
            h2.subtitle.text-uppercase {{ `What I ${kind} ?` }}
            .what-i__images
                img.icon(
                    v-for="image in images[kind]"
                    :src="`/images/${image.fileName}.svg`"
                    :alt="image.alt"
                    :class="`icon-${image.fileName}`"
                )

            p.what-i__others {{ others[kind] }}

    scroll-nav
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import { checkPageActivation } from '~/libs/checkPageActivation'
import ScrollNav from '~/components/scroll-nav.vue'

export default defineComponent({
    name: 'about',
    components: {
        ScrollNav
    },
    setup(_, { root: { $store } }) {
        // --------------------------------------
        // Local state
        const kinds = ['can', 'use']
        const images = {
            can: [
                { fileName: 'ts', alt: 'ts' },
                { fileName: 'vue', alt: 'vue' },
                { fileName: 'nuxt', alt: 'nuxt' },
                { fileName: 'js', alt: 'js' },
                { fileName: 'html5', alt: 'html5' },
                { fileName: 'css3', alt: 'css3' },
                { fileName: 'golang', alt: 'golang' },
                { fileName: 'react', alt: 'react' },
                { fileName: 'wordpress', alt: 'wordpress' }
            ],
            use: [
                { fileName: 'jetbrain', alt: 'jetbrain' },
                { fileName: 'pug', alt: 'pug' },
                { fileName: 'sass', alt: 'sass' },
                { fileName: 'babel', alt: 'babel' },
                { fileName: 'webpack', alt: 'webpack' },
                { fileName: 'git', alt: 'git' },
                { fileName: 'github', alt: 'github' },
                { fileName: 'sketch', alt: 'sketch' },
                { fileName: 'photoshop', alt: 'photoshop' }
            ]
        }

        const others = {
            can: 'Vuex / JSON / AJAX / RESTful / Node.js',
            use: 'BEM / OOCSS / Gulp / EJS'
        }

        // --------------------------------------
        // Computed from vuex state
        const isMobile = computed(() => $store.getters['devices/isMobile'])
        const pageLocation = computed(() => $store.getters['pageLocation/pageLocation'])
        const delayedActivePage = computed(() => $store.getters['scrolls/delayedActivePage'])

        // --------------------------------------
        // Computed
        const pageActive = computed((): boolean =>
            checkPageActivation($store, delayedActivePage.value, 'about'))

        return {
            kinds,
            images,
            others,
            pageLocation,
            pageActive,
            delayedActivePage,
            isMobile
        }
    }
})
</script>

<style lang="sass" scoped>
.about
    +smAndDown
        height: inherit
        padding: 90px 25px 95px

    +customMedia(550, false)
        padding: 50px 25px 55px

    &__lead
        color: $main-color
        font-size: 1.5rem
        font-weight: 500
        letter-spacing: .05em
        line-height: 1.5
        text-align: center
        margin: 30px auto 60px
        max-width: 1024px
        width: 95%
        opacity: 0
        transform: translateY(30px)

        +customMediaV(800, false)
            margin: 25px auto 50px

        +customMediaV(700, false)
            margin: 15px auto 25px

        +customMediaV(600, false)
            margin: 10px auto 25px

        +lgAndDown
            max-width: 800px

        +mdAndDown
            max-width: 700px

        +smAndDown
            font-size: 1.6rem
            font-weight: 400
            max-width: 660px

        +mdAndUp
            transition: all .25s ease .6s

// mobile first
.wrapper
    margin: auto
    width: 100%

    +mdAndUp
        display: flex
        justify-content: space-between
        max-width: 1024px
        width: 85%

    +lgAndUp
        width: 95%

.what-i
    width: 100%

    +smAndDown
        margin: 0 auto

    &-can
        border-right: solid 1px #a8a8a0
        padding-right: 50px

        @media (max-width: 1024px), (max-height: 750px) and (max-width: 1200px)
            padding-right: 20px

        +smAndDown
            border: 0
            bottom: 0
            margin: 0 auto 60px
            padding: 0
            max-width: 410px

    &-use
        padding-left: 50px

        @media (max-width: 1024px), (max-height: 750px) and (max-width: 1200px)
            padding-left: 20px

        +smAndDown
            max-width: 480px
            padding: 0

    &__images
        display: flex
        align-items: center
        justify-content: center
        flex-wrap: wrap
        margin: auto
        max-width: 350px
        opacity: 0
        transform: translateY(30px)

        +mdAndUp
            transition: all .25s ease 1s

    &__others
        font-size: 1.4rem
        font-weight: 500
        letter-spacing: .05em
        text-align: center
        opacity: 0
        transform: translateY(30px)

        +mdAndUp
            transition: all .25s ease 1.2s

.subtitle
    font-size: 3rem
    font-weight: 300
    letter-spacing: .08em
    text-align: center
    margin: 0 auto 50px
    opacity: 0
    transform: translateY(30px)

    +customMediaV(700, false)
        font-size: 2.4rem
        margin: 0 auto 30px

    +smAndDown
        font-size: 3rem
        margin: 0 auto 35px

    +mdAndUp
        transition: all .25s ease .8s

.icon
    margin: 0 20px 30px
    max-height: 60px
    width: 60px

    @media (max-height: 700px), (max-width: 1024px)
        max-height: 50px
        width: 50px

    @media (max-height: 600px), (max-width: 1024px), (max-height: 750px) and (max-width: 1200px)
        max-height: 45px

    +smAndDown
        max-height: 60px
        width: 60px

    +customMedia(500, false)
        max-height: 50px
        width: 50px

    +xxsOnly
        max-height: 40px
        width: 40px

    &-react
        width: 60px
        @media (max-width: 740px)
            margin: 0 30px 30px 0

// when page is active or on mobile.
.about--active
    .about
        &__heading,
        &__lead
            opacity: 1
            transform: translateY(0)

    .subtitle
        opacity: 1
        transform: translateY(0)

    .what-i
        &__images,
        &__others
            opacity: 1
            transform: translateY(0)
</style>
