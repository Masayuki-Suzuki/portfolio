<template lang="pug">
.blog-card(:class="[`blog-card-${num + 1}` ,{'blog-card--right': num % 2 === 0}]")
    .blog__thumbnail
        img(:src="blogData.featuredImage.sourceUrl" :alt="blogData.title")

    .blog__desc
        time.date {{ blogData.date | dateFormatter }} - {{ category }}
        h2.title {{ blogData.title | entityDecoder}}
        p.summary {{ blogData.content | entityDecoder | deleteContentTag}}
        .view-post
            a(:href="blogData.url" target="_blank") Read the post

</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/composition-api'
import format from 'date-fns/format'
import { BlogNode } from '~/types/global'

export default defineComponent({
    name: '',
    props: {
        num: {
            type: Number,
            required: true
        },
        blogData: {
            type: Object as PropType<BlogNode>,
            required: true
        }
    },
    filters: {
        dateFormatter(date: string) {
            return format(new Date(date), 'LLL dd, yyyy')
        },
        entityDecoder(str: string) {
            const dummyElement = document.createElement('textarea')
            dummyElement.innerHTML = str
            return dummyElement.value
        },
        deleteContentTag(str: string) {
            str = str.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').slice(0, 110)
            if (str.slice(-1) !== '.' || str.slice(-1) !== '?') {
                str += '...'
            }
            return str
        }
    },
    setup({ blogData }) {

        const category = computed(() => {
            return blogData.categories.edges[0].node.name
        })

        return {
            category
        }
    }
})
</script>

<style lang="sass" scoped>
.blog-card
    background: #fff
    position: relative
    margin-right: 3%
    width: 33.3333333%
    overflow: hidden

    +smAndDown
        background: none
        display: flex
        justify-content: flex-end
        margin: 25px auto
        width: 100%

    +customMedia(550, false)
        display: block

    &::before,
    &::after
        content: ''
        position: absolute
        top: 0
        z-index: 10
        display: block
        height: 100%
        width: 105%

        +smAndDown
            content: none

    &::before
        background: $main-color
        left: -103%

    &::after
        background: #fff
        left: 0

.blog
    &__thumbnail
        +smAndDown
            position: absolute
            top: 0
            left: 0
            z-index: 10
            max-width: 260px
            width: 100%

        +xsAndDown
            max-width: 300px

        +customMedia(550, false)
            position: static
            max-width: 100%

        img
            display: block
            width: 100%

    &__desc
        +smAndDown
            background: #fff
            margin-top: 30px
            max-width: 440px
            width: 100%

        +xsAndDown
            margin-top: 85px
            max-width: 600px
            width: 88%

        +customMedia(550, false)
            margin-top: 0
            width: 100%

.date
    color: #646464
    font-size: 1.2rem
    font-weight: 500
    letter-spacing: .04em
    text-align: center
    text-transform: uppercase
    display: block
    padding: 20px 10px 0
    width: 100%

    +customMediaV(700, false)
        padding: 15px 20px 0

    +customMediaV(600, false)
        padding: 10px 20px 0

    +smAndDown
        padding: 20px 25px 0 75px
        text-align: left

    +xsAndDown
        padding: 85px 25px 0

    +customMedia(550, false)
        padding: 15px 15px 0
        text-align: center

.title
    color: $main-text-color
    font-size: 2.0rem
    font-weight: 600
    hyphens: auto
    letter-spacing: .02em
    text-align: center
    margin: 5px 0 10px
    padding: 0 16px

    @media (max-height: 700px), (max-width: 900px)
        font-size: 2rem

    +customMediaV(600, false)
        font-size: 1.8rem

    +smAndDown
        padding: 0 25px 0 75px
        text-align: left

    +xsAndDown
        padding: 0 25px

    +customMedia(550, false)
        padding: 0 15px
        text-align: center

    &::after
        background: $main-color
        content: ''
        display: block
        margin: 12px auto 10px
        height: 2px
        width: 44px

.summary
    color: $main-text-color
    font-size: 1.6rem
    font-weight: 500
    text-align: center
    padding: 0 16px

    @media (max-height: 600px), (max-width: 900px)
        font-size: 1.4rem

    +smAndDown
        padding: 0 25px 0 75px
        text-align: left

    +xsAndDown
        padding: 0 25px

    +customMedia(550, false)
        padding: 0 15px
        text-align: center

.view-post
    display: flex
    align-items: center
    justify-content: center
    margin-top: 20px
    padding: 0 20px 25px

    +customMediaV(700, false)
        padding: 0 15px 20px

    +customMediaV(600, false)
        margin-top: 10px
        padding: 0 15px 12px

    +smAndDown
        justify-content: flex-start
        padding: 0 25px 20px 75px

    +xsAndDown
        padding: 0 25px 20px

    +customMedia(550, false)
        padding: 0 15px 15px
        justify-content: center

    a
        color: $main-text-color
        font-size: 1.4rem
        font-weight: 700
        letter-spacing: .04em
        text-transform: uppercase
        position: relative

        +pseudo($main-text-color)

.blog--active
    .blog
        &-card
            &::before
                left: 103%

            &::after
                left: 203%

    .blog-card-1
        &::before,
        &::after
            transition: left .6s ease .4s

    .blog-card-2
        &::before,
        &::after
            transition: left .6s ease .67s

    .blog-card-3
        margin-right: 0

        &::before,
        &::after
            transition: left .6s ease .92s

.blog-card--right
    +smAndDown
        justify-content: flex-start

        .blog__thumbnail
            left: auto
            right: 0

        .date
            padding: 20px 75px 0 25px

        .title,
        .summary
            padding: 0 75px 0 25px

        .view-post
            padding: 0 75px 20px 25px

    +xsAndDown
        .date
            padding: 85px 25px 0

        .title,
        .summary
            padding: 0 25px

        .view-post
            padding: 0 20px 20px 25px

    +customMedia(550, false)
        .date
            padding: 15px 15px 0

        .title,
        .summary
            padding: 0 15px

        .view-post
            padding: 0 15px 15px 15px
</style>
