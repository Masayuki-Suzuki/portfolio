<template>
  <section class="works" :class="{
    'works1': changeWorks(3),
    'works2': changeWorks(4),
    'works3': changeWorks(5),
    'works4': changeWorks(6),
    'works--left': worksSide(),
    'works--right': !worksSide(),
    'right-to-left': rtl(),
    'left-to-right': ltr()
  }">
    <yelp-camp v-if="changeWorks(3)"></yelp-camp>
    <portfolio v-if="changeWorks(4)"></portfolio>
    <ballet v-if="changeWorks(5)"></ballet>
    <marketas v-if="changeWorks(6)"></marketas>
    <div class="scrollNav">
      <a href=""></a>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue';
  import store from '../../store/store';
  import yelpCamp from './yelpCamp.vue';
  import portfolio from './portfolio.vue';
  import ballet from './ballet.vue';
  import marketas from './marketas.vue';

  export default {
    data: function () {
      return {
      }
    },
    methods: {
      changeWorks(num){
        return store.state.location === num ? true : false;
      },
      worksSide(){
        let loc = store.state.location;
        return loc % 2 == 0 ? true : false;
      },
      rtl(){
        console.log(store.state.worksRtl);
        return store.state.worksRtl;
      },
      ltr(){
        return store.state.worksLtr;
      }
    }
  }

  Vue.component('yelp-camp',yelpCamp);
  Vue.component('portfolio', portfolio);
  Vue.component('ballet', ballet);
  Vue.component('marketas', marketas);
</script>

<style lang="scss">
  @import "../../../assets/sass/foundation/mixins/mixin";
  @import "../../../assets/sass/foundation/variables/variables";
  $locationX: 45vw;
  .works1 {
    background: url(/dist/img/camping.jpg) no-repeat center center;
  }
  .works2 {
    background: url(/dist/img/topBg.jpg) no-repeat 25vw top;
  }
  .works3 {
    background: url(/dist/img/ballet_bg.jpg) no-repeat center center;
  }
  .works4 {
    background: url(/dist/img/marketas.jpg) no-repeat 15vw center;
  }
  .works{
    background-size: cover;
    height:100%;
    padding: 25px;
    position: relative;
    transition: all 0.3s ease 0s;
    width: 100%;
    z-index: 1;
    &:after{
      background: $bg-color;
      content: "";
      display: block;
      height: 100%;
      left: 0 ;
      position: absolute;
      top: 0;
      transition: all 0.3s ease 0s;
      width: 100vw;
      z-index: 0;
    }
    &__caption{
      color: $main-text-color;
      @include rem(20);
      position: relative;
      text-transform: uppercase;
      z-index: 2;
      @media (max-height: 620px){
        @include rem(16);
      }
    }
    &__hd{
      color: $main-text-color;
      @include rem(55);
      font-weight: 700;
      line-height: 1;
      margin: 5px 0 12px;
      position: relative;
      text-transform: uppercase;
      z-index: 2;
      @media (max-height: 800px){
        @include rem(45);
      }
      @media (max-height: 620px){
        @include rem(40);
      }
    }
    &__lead{
      color: $main-text-color;
      @include rem(14);
      font-weight: 500;
      letter-spacing: 0.08em;
      line-height: 1.5;
      max-width: 600px;
      position: relative;
      z-index: 2;
      width: 100%;
    }
    &__view{
      position: relative;
      a{
        border: solid 1px $main-color;
        //border-radius: 4px;
        color: $main-text-color;
        display: block;
        @include rem(14);
        line-height: 1;
        margin: 20px 0 0;
        overflow: hidden;
        padding: 12px 0 11px;
        position: relative;
        text-align: center;
        text-transform: uppercase;
        transition: color .5s ease 0s;
        width: 160px;
        z-index: 2;
        @media (max-height: 620px){
          @include rem(12);
          margin: 20px 0 0;
          padding: 9px 0;
          width: 120px;
        }
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
    &--left{
      &:after{
        transform: matrix(1,0,-0.8,1,0,0) translateX(-45%);
      }
      .works{
      }
    }
    &--right{
      &:after{
        transform: matrix(1,0,-0.8,1,0,0) translateX(42%);
      }
      .works{
      }
    }
    &__details{
      &--right{
        margin: 50vh 0 0;
        padding: 0 0 0 45vw;
        transition: all 0.3s ease 0s;
        @media (max-height: 800px){
          margin: 47vh 0 0;
        }
        @media (max-height: 700px){
          margin: 44vh 0 0;
        }
        @media (max-height: 620px){
          margin: 40vh 0 0;
        }
      }
      &--left{
        margin: 15vh 0 0;
        padding: 0 0 0 10vw;
        transition: all 0.3s ease 0s;
      }
    }
    &.right-to-left{
      &:after{
        transform: matrix(1,0,-0.8,1,0,0) translateX(-30%);
        transition: all 0.3s ease 0s;
        width: 200vw;
      }
      .works__details{
        &--right{
          transition: all 0.3s ease 0s;
          opacity: 0;
        }
        &--left{
          transition: all 0.3s ease 0s;
          opacity: 0;
        }
      }
    }
  }
  .using{
    display: flex;
    flex-wrap: wrap;
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
      margin: 0 10px 10px 0;
      padding: 7px 10px;
    }
  }
  .works{
    &--right{
      .using{
        margin: 20px 0 0;
        @media (max-height: 620px){
          margin: 10px 0 0;
        }
      }
    }
    &--left{
      .using{
        margin: 20px 0 0;
        @media (max-height: 620px){
          margin: 10px 0 0;
        }
      }
    }
  }
</style>