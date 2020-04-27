<template lang="pug">
article.works__details.works__details--left
    .works__title
        p.works__caption design / logo design / coding
        h1.works__heading Personal Blog
    .works__desc
        p.works__lead
            | I made my personal blog using Wordpress with Trellis, Bedrock and Sage.
            | ( I call these things "Roots 3 combo" ) Especially Sage is almost de facto standard
            | starter theme in the web industry. I’m posting articles such as web development,
            | what I studying and studied,  a joined event, daily life and etc as my whim takes one at will.
        ul.using
            li.using__list(v-for="item in usingList" :key="item") {{ item }}
        .works__view
            a.works__github(href="https://github.com/Masayuki-Suzuki/Anonymous" target="_blank") github
            a.view-site.text-capitalised(href="https://anonymous-frontend.dev" target="_blank") view site

</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'my-blog',
    setup() {
        // --------------------------------
        // Local State
        const usingList = [
            'HTML5',
            'CSS3',
            'Sass/Scss',
            'Wordpress',
            'PHP',
            'Trellis',
            'Bedrock',
            'Sage'
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
                    content: 'design / logo design / coding'
                    width: 328px

                +customMedia(550, false)
                    width: 249px

            &::after
                +smAndDown
                    content: 'personal blog'
                    width: 328px

                +customMedia(550, false)
                    width: 250px

            .works
                &__title
                    +smAndDown
                        background: url(/images/blogImage.webp) left bottom / 100% no-repeat

                &__caption

                    +smAndDown
                        width: 331px

                    +customMedia(550, false)
                        width: 249px

                &__heading
                    +smAndDown
                        width: 332px

                    +customMedia(550, false)
                        width: 252px

.no-webp
    .works
        .works__details
            .works__title
                +smAndDown
                    background: url(/images/blogImage.jpg) left bottom / 100% no-repeat
</style>
