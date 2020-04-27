<template lang="pug">
article.works__details.works__details--right
    .works__title
        p.works__caption design / coding
        h1.works__heading YelpCamp
    .works__desc
        p.works__lead
            | YelpCamp is a campgrounds information-sharing website which is made by Node.js, Express and MongoDB.
            | I followed The Web Developer Bootcamp course by Colt Steele on Udemy.
        ul.using
            li.using__list(v-for="item in usingList" :key="item") {{ item }}
        .works__view
            a.works__github(href="https://github.com/Masayuki-Suzuki/yelpCamp" target="_blank") github
            a.view-site.text-capitalised(href="http://yelpcamp.masa.works" target="_blank") view site

</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'yelp-camp',
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
        +smAndDown
            margin-top: 0

        &::before
            +smAndDown
                content: 'design / coding'

        &::after
            +smAndDown
                content: 'YelpCamp'

        .works
            &__title
                +smAndDown
                    background: url(/images/camping.webp) left bottom / 100% no-repeat

.no-webp
    .works
        .works__details
            .works__title
                +smAndDown
                    background: url(/images/camping.jpg) left bottom / 100% no-repeat
</style>
