<template lang="pug">
article.works__details.works__details--right
    .works__title
        p.works__caption coding
        h1.works__heading WorldWise
    .works__desc
        p.works__lead
            | WorldWise is a web application that allows you to record and revisit the places you’ve traveled.
            | You can drop pins on the map, leave comments, and manage your personal travel memories.
            | The frontend is built with React and TypeScript, while the backend runs on a custom Go-based API server.
            | It uses MongoDB as the database and Firebase Authentication for user authentication.
        ul.using
            li.using__list(v-for="item in usingList" :key="item") {{ item }}
        .works__view
            a.works__github(href="https://github.com/Masayuki-Suzuki/WorldWise" target="_blank") github
            a.view-site.text-capitalised(href="https://world-wise.masa.works/" target="_blank") view site

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'WorldWise',
    setup() {
        // --------------------------------
        // Local State
        const usingList = [
            'React',
            'Typescript',
            'Golang',
            'Fiber',
            'MongoDB',
            'Docker',
            'Firebase'
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
        +smAndDown
            margin-top: 0

        &::before
            +smAndDown
                content: 'coding'

        &::after
            +smAndDown
                content: 'WorldWise'

        .works
            &__title
                +smAndDown
                    background: url(/images/traveling.jpg) left bottom / 100% no-repeat

.no-webp
    .works
        .works__details
            .works__title
                +smAndDown
                    background: url(/images/traveling.jpg) left bottom / 100% no-repeat
</style>
