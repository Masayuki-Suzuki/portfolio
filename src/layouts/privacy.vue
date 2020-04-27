<template lang="pug">
.privacy
    nuxt
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'privacy',
    setup() {
        return {}
    }
})
</script>

<style lang="sass" scoped>
.privacy
    background: $bg-color
    display: flex
    align-items: center
    justify-content: center
    height: 100%
    width: 100%
</style>
