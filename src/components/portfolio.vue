<template lang="pug">
article.works__details.works__details--right
    .works__title
        p.works__caption design / logo design / coding
        h1.works__heading Portfolio site
    .works__desc
        p.works__lead
            | This is my portfolio site. It's created with Vue.js and Nuxt.js mainly also use Typescript.
            | I've coded all events and animation by Typescript from scratch as well. Now this is version 3.
            | I adopt vue composition api instead of class component by doing this, vue components can have
            | a lot of benefits from typescript more than conventional api.

        ul.using
            li.using__list(v-for="item in usingList" :key="item") {{ item }}

        .works__view
            a.works__github(href="https://github.com/Masayuki-Suzuki/portfolio" target="_blank") github

</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'portfolio',
    setup() {
        // --------------------------------
        // Local State
        const usingList = [
            'Typescript',
            'Vue.js',
            'Nuxt.js',
            'Vuex',
            'HTML5',
            'Pug',
            'CSS3',
            'Sass'
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
        +lgAndUp
            margin-top: 45vh

        &::before
            +smAndDown
                content: 'design / logo design / coding'

        &::after
            +smAndDown
                content: 'portfolio site'

    .works
        &__title
            +smAndDown
                background: url(/images/topBg.webp) left bottom / 100% no-repeat

.no-webp
    .works
        .works__details
            .works__title
                +smAndDown
                    background: url(/images/topBg.jpg) left bottom / 100% no-repeat
</style>
