<template lang="pug">
article.works__details.works__details--left
    .works__title
        p.works__caption design / logo design / coding
        h1.works__heading Personal Blog
    .works__desc
        p.works__lead
            | I used to run this blog on WordPress with Trellis, Bedrock, and Sage (I called “Roots 3 combo”),
            | which had become something of a de facto starter stack in the industry.
            | In 2025, though, I rebuilt it entirely: the frontend is now in TypeScript and Next.js,
            | whilst the backend is powered by Strapi, an open-source headless CMS.
            | The design carries over much of the previous look, yet beneath the surface
            | it’s an altogether different system. I still post about web development,
            | things I’m studying or have studied, events I’ve taken part in, and bits of daily life, whenever I fancy.
        ul.using
            li.using__list(v-for="item in usingList" :key="item") {{ item }}
        .works__view
            a.works__github(href="https://github.com/Masayuki-Suzuki/Anonymous2025Update" target="_blank") github
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
            'Tailwind CSS',
            'TypeScript',
            'Next.js',
            'Strapi',
            'GraphQL',
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
