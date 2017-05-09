<template>
  <div class="firstView">
    <logo :isColorClass="isColorClass"></logo>
    <button @click="isColorClass = !isColorClass">Click</button>
    <main-logo></main-logo>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Logo from './mainFrame/logo.vue';
  import mainLogo from './mainFrame/mainLogo.vue';

  export default {
    data: function () {
      return {
        isColorClass: true
      }
    }
  }

  Vue.component('logo', Logo);
  Vue.component('main-logo', mainLogo);
</script>

<style lang="scss">
  .firstView{
    background: url(/dist/img/topBg.jpg) no-repeat center center;
    background-size: cover;
    height:100%;
    width: 100%;
  }
</style>