<template>
  <div class="firstView">
    <logo :isColorClass="isColorClass"></logo>
    <main-logo></main-logo>
    <div class="scroll-icon">
      <div class="scroll-icon__main"></div>
      <p class="scroll-icon__text">Scroll</p>
    </div>
    <pagination></pagination>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Logo from './mainFrame/logo.vue';
  import mainLogo from './mainFrame/mainLogo.vue';
  import pagination from './mainFrame/pagination.vue';

  export default {
    data: function () {
      return {
        isColorClass: true
      }
    }
  }

  // Create components
  Vue.component('logo', Logo);
  Vue.component('main-logo', mainLogo);
  Vue.component('pagination', pagination);
</script>

<style lang="scss">
  @import "../../assets/sass/foundation/mixins/mixin";
  .firstView{
    background: url(/dist/img/topBg.jpg) no-repeat center center;
    background-size: cover;
    height:100%;
    width: 100%;
  }
  .scroll-icon{
    bottom: 6%;
    left: 50%;
    margin: 0 0 0 -23px;
    text-align: center;
    position: absolute;
    &__main{
      border: solid 2px #fff;
      border-radius: 15px;
      display: inline-block;
      height: 46px;
      position: relative;
      width: 30px;
      &:before{
        background: #fff;
        border-radius:50%;
        content:"";
        display: block;
        height: 8px;
        left:50%;
        margin: 0 0 0 -4px;
        position: absolute;
        top: 8px;
        width:8px;
      }
    }
    &__text{
      color: #fff;
      @include rem(16);
      font-weight:700;
      letter-spacing: 1px;
    }
  }
</style>