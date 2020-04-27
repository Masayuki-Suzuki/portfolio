<template lang="pug">
footer.footer
    .footer__logo
        a(href="/")
            svg.logo__svg(viewBox="0 0 70 57"  xmlns="http://www.w3.org/2000/svg")
                title footer logo
                path.path(:d="pathStr" stroke="#fff" fill="#fff" fill-rule="evenodd")

    p.footer__copy.text-uppercase masayuki suzuki portfolio ©
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        const pathStr = 'M14.573 41.567l5.01-18.199 4.724 22.053 8.446-39.395 8.016 50.957 ' +
            '5.583-27.405 4.437 15.201 4.581-24.836 14.601-4.497-15.03 3.426-4.867 21.84-3.865-13.49-5.297 ' +
            '22.267L32.323.031l-8.16 39.61-5.01-20.34-5.01 21.196L.115 46.064z'

        return {
            pathStr
        }
    }
})
</script>

<style lang="sass" scoped>
.footer
    background: $main-color
    padding: 20px 0
    text-align: center

    &__logo
        display: inline-block
        margin-bottom: 10px

    &__copy
        color: #fff
        font-size: 1.6rem
        letter-spacing: .02em
        line-height: 1

.logo__svg
    width: 60px
</style>
