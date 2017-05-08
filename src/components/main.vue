<template>
  <div>
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