<template>
  <div class="firstView">
    <logo></logo>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Logo from './mainFrame/logo.vue';

  export default {
    data: function () {
      return {
        msg: 'Hello world!'
      }
    }
  }

  Vue.component('logo', Logo);
</script>

<style lang="scss">
  .firstView{
    background: url(/dist/img/topBg.jpg) no-repeat center center;
    background-size: cover;
    height:100vh;
    width: 100%;
  }
</style>