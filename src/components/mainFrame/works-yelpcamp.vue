<template>
  <section class="works1">
    <p class="works__caption">design / coding</p>
    <h1 class="works__hd">YelpCamp</h1>
    <p class="works__lead">YelpCamp is a campgrounds information sharing site which made by Node.js, Express and MongoDB. I followed The Web Developer Bootcamp course by Colt Steele on Udemy.</p>
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
      transform: matrix(1,0,-0.8,1,0,0) translateX(42%);
      width: 100vw;
      z-index: 0;
    }
  }
  .works{
    &__caption{
      color: $main-text-color;
      @include rem(20);
      margin: 50vh 0 0;
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
      a{
        border: solid 1px $main-color;
        //border-radius: 4px;
        color: $main-text-color;
        display: block;
        @include rem(14);
        line-height: 1;
        margin: 30px 0 0;
        overflow: hidden;
        padding: 12px 0 11px;
        position: relative;
        text-align: center;
        text-transform: uppercase;
        transition: color .5s ease 0s;
        width: 160px;
        z-index: 2;
        &:after{
          background: $main-color;
          content:"";
          height: 100%;
          left: 50%;
          position: absolute;
          top: 0;
          transform: matrix(1,0,-1,1,0,0);
          transition: all .5s ease 0s;
          width: 0;
          z-index: -1;
        }
        &:hover {
          color: #fff;
          &:after{
            left: -25%;
            width: 150%;
          }
        }
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