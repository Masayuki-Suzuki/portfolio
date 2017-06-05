<template>
  <div class="container">
    <main-frame></main-frame>
    <nav-frame></nav-frame>
  </div>
</template>

<script>
  import Vue from 'vue';
  import store from '../store/store';
  import mainFrame from './main.vue';
  import navFrame from './nav.vue';

  export default {
  }

  Vue.component('main-frame', mainFrame);
  Vue.component('nav-frame', navFrame);
</script>

<style lang="scss">
  @import '../../assets/sass/foundation/variables/variables';
  .container{
    background: #fff;
    height: 100vh;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

</style>