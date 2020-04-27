<template lang="pug">
article.works__details.works__details--left
    .works__title
        p.works__caption design / coding
        h1.works__heading Pinstagram
    .works__desc
        p.works__lead
            | Pinstagram is a photo sharing service which cloned and combined Instagram and Pinterest.
            | It's created by React, Redux, Next. This project is still working on,
            | I'm planning to release this Single Page Application as soon as possible.
        ul.using
            li.using__list(v-for="item in usingList" :key="item") {{ item }}
        .works__view
            a.works__github(href="https://github.com/Masayuki-Suzuki/Pinstagram" target="_blank") github
            span.view-site.text-capitalised coming soon

</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'pinstagram',
    setup() {
        // --------------------------------
        // Local State
        const usingList = [
            'Javascript',
            'React',
            'Next.js',
            'Redux',
            'HTML5',
            'CSS3',
            'Sass/Scss',
            'Node.js',
            'Koa.js',
            'MongoDB'
        ]
        return {
            usingList
        }
    }
})
</script>

<style lang="sass" scoped>
.works
    .works
        &__details
            &::before
                +smAndDown
                    content: 'design / coding'
                    width: 250px

                +customMedia(550, false)
                    width: 293px

            &::after
                +smAndDown
                    content: 'PINSTAGRAM'
                    width: 250px

                +customMedia(550, false)
                    top: 80px
                    width: 200px

            .works
                &__title
                    +smAndDown
                        background: url(/images/pinstagram.webp) left bottom / 100% no-repeat

                &__caption

                    +smAndDown
                        width: 250px

                &__heading
                    +smAndDown
                        width: 253px

                    +customMedia(550, false)
                        width: 200px

.no-webp
    .works
        .works__details
            .works__title
                +smAndDown
                    background: url(/images/pinstagram.jpg) left bottom / 100% no-repeat
</style>
