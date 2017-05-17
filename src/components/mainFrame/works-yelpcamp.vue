<template>
  <section class="works1">
    <p class="works__caption">design / coding</p>
    <h1 class="works__hd">YelpCamp</h1>
    <p class="works__lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <ul class="using">
      <li class="using__list">HTML5</li>
      <li class="using__list">CSS3</li>
      <li class="using__list">Javascript</li>
      <li class="using__list">Node.js</li>
      <li class="using__list">Express</li>
      <li class="using__list">MongoDB</li>
      <li class="using__list">Bootstrap</li>
      <li class="using__list">EJS</li>
    </ul>
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
  $locationX: 46.5vw;
  .works1 {
    background: url(/dist/img/camping.jpg) no-repeat center center;
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
      transform: matrix(1,0,-1.2,1,0,0) translateX(48%);
      width: 100vw;
      z-index: 0;
    }
  }
  .works{
    &__caption{
      color: $main-text-color;
      @include rem(20);
      margin: 54vh 0 0;
      padding: 0 0 0 $locationX;
      position: relative;
      text-transform: uppercase;
      z-index: 2;
    }
    &__hd{
      color: $main-text-color;
      @include rem(55);
      font-weight: 700;
      line-height: 1;
      margin: 5px 0 12px;
      padding: 0 0 0 $locationX;
      position: relative;
      text-transform: uppercase;
      z-index: 2;
    }
    &__lead{
      color: $main-text-color;
      @include rem(14);
      font-weight: 500;
      letter-spacing: 0.08em;
      line-height: 1.5;
      margin: 0 0 0 $locationX;
      max-width: 600px;
      position: relative;
      z-index: 2;
      width: 100%;
    }
    &__view{
      padding: 0 0 0 $locationX;
      position: relative;
      z-index: 2;
      a{
        border: solid 1px $main-color;
        //border-radius: 4px;
        color: $main-text-color;
        display: block;
        @include rem(14);
        line-height: 1;
        margin: 30px 0 0;
        padding: 12px 0 11px;
        text-align: center;
        text-transform: uppercase;
        width: 160px;
      }
    }
  }
  .using{
    display: flex;
    margin: 20px 0 0 $locationX;
    max-width: 650px;
    position: relative;
    width: 100%;
    z-index: 2;
    &__list{
      background: $main-color;
      color: #fff;
      @include rem(12);
      font-weight: bold;
      letter-spacing: 0.04em;
      margin: 0 10px 0 0;
      padding: 7px 10px;
    }
  }
</style>