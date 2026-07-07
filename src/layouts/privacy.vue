<template lang="pug">
.privacy
    slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'privacy-layout'
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
