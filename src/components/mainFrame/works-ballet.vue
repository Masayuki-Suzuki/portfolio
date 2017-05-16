<template>
  <section class="works1">
    <p class="works__caption">design / coding</p>
    <h1 class="works__hd">Ballet Bloch Canada</h1>
    <p class="works__lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <div class="works__view">
      <a href="">View Site</a>
    </div>
    <div class="scrollNav">
      <a href=""></a>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue';

  export default {
    data: function () {
      return {
        isColorClass: false,
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/sass/foundation/mixins/mixin";
  @import "../../../assets/sass/foundation/variables/variables";
  .works1 {
    background: url(/dist/img/ballet_bg.jpg) no-repeat center center;
    background-size: cover;
    height:100%;
    padding: 25px;
    position: relative;
    width: 100%;
    &:after{
      background: $bg-color;
      content: "";
      display: block;
      height: 100%;
      left: 0 ;
      position: absolute;
      top: 0;
      transform: matrix(1,0,-1,1,0,0) translateX(47%);
      width: 100vw;
      z-index: 0;
    }
  }
  .works{
    &__caption{
      color: $main-text-color;
      @include rem(20);
      margin: 55vh 0 0;
      padding: 0 0 0 48vw;
      position: relative;
      text-transform: uppercase;
      z-index: 2;
    }
    &__hd{
      color: $main-text-color;
      @include rem(55);
      font-weight: 700;
      padding: 0 0 0 48vw;
      position: relative;
      text-transform: uppercase;
      z-index: 2;
    }
    &__lead{
      color: $main-text-color;
      @include rem(14);
      font-weight: 300;
      letter-spacing: 0.04em;
      line-height: 1.5;
      margin: 0 0 0 48vw;
      max-width: 650px;
      position: relative;
      z-index: 2;
      width: 100%;
    }
  }
</style>