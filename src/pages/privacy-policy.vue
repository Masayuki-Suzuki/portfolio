<template lang="pug">
.privacy-policy
    h1 Privacy Policy
    p
        | This website uses Google Analytics in order to improve and analyze access data.
        | Google may set up or read a cookie to your browser at that time. Also web browser using this website sends
        | non-personal information automatically. (For example, Website address which used, IP address and etc.)

    p This website may use those information in order to grasp usage situation or to improve user experience.

    p
        | The user using this website allows that this website and Google
        | use those information for the above way and purpose.

    p
        | Accessing, collection and usage those information way is determined
        | by Privacy Policy for Google Analytics and the Google Privacy Policy.

    p
        n-link(to="/") top page
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: '',
    layout: 'privacy',
    setup() {
        return {}
    }
})
</script>

<style lang="sass" scoped>
.privacy-policy
    margin: 80px auto 0
    max-width: 600px
    width: 90%

h1
    color: $main-color
    font-size: 40px
    font-weight: 500
    text-align: center
    margin-bottom: 1.6rem

p
    color: $main-color
    font-size: 2rem
    font-weight: 300
    letter-spacing: 0.02em
    line-height: 1.5
    margin-bottom: 1em

    &:last-of-type
        text-align: center

a
    background: #3c3c3c
    border-radius: 4px
    color: #fff
    line-height: 1
    text-decoration: none
    text-transform: uppercase
    display: inline-block
    margin: 30px 0 0
    padding: 15px 60px

</style>
