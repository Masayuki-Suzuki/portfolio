<template lang="pug">
article.works__details.works__details--right
    .works__title
        h1.works__heading Another Works
    .works__desc
        p.works__lead
            |I have over six years of professional experience in Canada, along with prior work in Japan.
            |During this time, I’ve developed web applications using TypeScript, React, and Vue, as well as
            |built websites with WordPress. Many of the client projects I’ve worked on cannot be published
            |in this portfolio, but I’d be happy to share details through the contact form or during an interview.
            |In addition, I regularly release personal projects and source code on GitHub beyond what is showcased
            |here in my portfolio. Please feel free to take a look.
        .works__view
            a.works__github(href="https://github.com/Masayuki-Suzuki?tab=repositories" target="_blank") github

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Another',
    setup() {
        // --------------------------------
        // Local State
        const usingList = [
            'HTML5',
            'CSS3',
            'Javascript',
            'Node.js',
            'Express',
            'MongoDB',
            'Bootstrap',
            'EJS'
        ]
        return {
            usingList
        }
    }
})
</script>

<style lang="sass" scoped>
.works
    .works__details.works__details--right
        margin-top: 52vh

        +mdAndDown
            margin-top: 58vh

        +customMediaV(800, false)
            margin-top: 51vh

        +customMediaV(700, false)
            margin-top: 50vh

        +customMediaV(600, false)
            margin-top: 47vh

        +customMediaV(550, false)
            margin-top: 40vh

        +smAndDown
            margin-top: 0

            &::before,
            &::after
                content: ''

        .works
            &__title
                +smAndDown
                    background: none
                    height: inherit
                    margin: 95px 0 0
                    padding: 0
                    width: 100%

            &__heading
                +smAndDown
                    color: $main-text-color
                    font-size: 3rem
                    font-weight: 300
                    line-height: 1
                    text-align: center
                    position: static
                    margin: 0 auto
                    padding: 0
                    width: 95%

                +xsAndDown
                    width: 85%

            &__desc
                +smAndDown
                    background: none
                    text-align: center
                    margin: 0 auto
                    padding: 0
                    max-width: 670px
                    width: 80%

                    &::after
                        content: none

            &__lead
                +smAndDown
                    color: $main-text-color
                    font-size: 1.6rem
                    font-weight: 300
                    line-height: (26/16)
                    text-align: center
                    margin-top: 24px
                    max-width: 100%
                    width: 100%

            &__view
                +smAndDown
                    display: flex
                    justify-content: center
                    margin-top: 16px

            &__github
                +smAndDown
                    color: $main-text-color
                    border-color: $main-color
</style>
