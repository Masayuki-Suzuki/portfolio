<template>
  <section class="about">
    <h1>Who am I</h1>
  </section>
</template>

<script>
  import Vue from 'vue';
  import Logo from './logo.vue';
  import pagination from './pagination.vue';

  export default {
    data: function () {
      return {
        isColorClass: false,
      }
    }
  }
  // Create components
  Vue.component('logo', Logo);
  Vue.component('pagination', pagination);
</script>

<style lang="scss">
  @import "../../../assets/sass/foundation/mixins/mixin";
  @import "../../../assets/sass/foundation/variables/variables";
  .about{
    background: $bg-color;
    height:100%;
    position: relative;
    width: 100%;
  }
</style>