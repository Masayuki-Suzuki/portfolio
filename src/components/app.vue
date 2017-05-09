<template>
  <div class="container">
    <main-frame></main-frame>
    <nav-frame></nav-frame>
  </div>
</template>

<script>
  import Vue from 'vue';
  import mainFrame from './main.vue';
  import navFrame from './nav.vue';

  export default {
  }

  Vue.component('main-frame', mainFrame);
  Vue.component('nav-frame', navFrame);
</script>

<style lang="scss">
  .container{
    background: #fff;
    height: 100vh;
    overflow: hidden;
    padding: 20px;
    position: relative;
    width: 100%;
  }
</style>