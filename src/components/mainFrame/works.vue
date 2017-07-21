<template>
  <section class="works" :class="{
    'works1': changeWorks(3),
    'works2': changeWorks(4),
    'works3': changeWorks(5),
    'works4': changeWorks(6),
    'works--left': worksSide(),
    'works--right': !worksSide()
  }">
    <h1 v-if="sharedState.isTablet" class="common__hd">works</h1>
    <yelp-camp v-if="changeWorks(3)" :class="{ 'active-works': changeWorksA() }"></yelp-camp>
    <portfolio v-if="changeWorks(4)" :class="{ 'active-works': changeWorksB() }"></portfolio>
    <ballet v-if="changeWorks(5)" :class="{ 'active-works': changeWorksA() }"></ballet>
    <marketas v-if="changeWorks(6)" :class="{ 'active-works': changeWorksB() }"></marketas>
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
        sharedState: store.state
      }
    },
    methods: {
      changeWorks(num){
        if(document.body.clientWidth <= 900 && num <= 4 || num == 7){
          return true;
        }
        return this.sharedState.location === num ? true : false;
      },
      changeWorksA(){
        if(document.body.clientWidth <= 900){
          return true;
        }
        return this.sharedState.worksA;
      },
      changeWorksB(){
        if(document.body.clientWidth <= 900){
          return true;
        }
        return this.sharedState.worksB;
      },
      worksSide(){
        let loc = this.sharedState.location;
        return loc % 2 == 0 ? true : false;
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
    @media (max-width: 1200px){
      background-position: 3vw top;
    }
    @media (max-width: 900px){
      background: none;
    }
  }
  .works2 {
    background: url(/dist/img/topBg.jpg) no-repeat 25vw top;
    @media (max-width: 1200px){
      background-position: 10vw top;
    }
    @media (max-width: 900px){
      background: none;
    }
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
    transition: all 0.4s ease 0s;
    width: 100%;
    z-index: 1;
    @media (max-width:900px){
      height: inherit;
      padding: 90px 0 95px;
      position: static;
    }
    &:after{
      background: $bg-color;
      content: "";
      display: block;
      height: 100%;
      left: 0 ;
      position: absolute;
      top: 0;
      transition: all 0.4s ease 0s;
      width: 100vw;
      z-index: 0;
      @media (max-width: 900px){
        content: none;
      }
    }
    &__caption,
    &__hd,
    &__lead,
    &__view{
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.4s ease 0s;
      z-index: 1;
    }
    &__caption{
      color: $main-text-color;
      @include rem(20);
      position: relative;
      text-transform: uppercase;
      z-index: 2;
      @media (max-height: 800px) and (max-width: 1200px){
        @include rem(18);
      }
      @media (max-height: 620px), (max-width: 1024px){
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
      @media (max-height: 800px) and (max-width: 1200px){
        @include rem(40);
      }
      @media (max-height: 620px){
        @include rem(40);
      }
      @media (max-width: 1024px){
        @include rem(36);
        max-width: 450px;
      }
    }
    &__lead{
      color: $main-text-color;
      @include rem(14);
      font-weight: 500;
      letter-spacing: 0.05em;
      line-height: 1.5;
      max-width: 600px;
      position: relative;
      z-index: 2;
      width: 85%;
      @media (max-width: 1200px){
        max-width: 540px;
      }
      @media (max-width: 1024px){
        max-width: 470px;
      }
    }
    &__view{
      position: relative;
      a{
        border: solid 1px $main-color;
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
        @media (max-height: 700px){
          margin: 10px 0 0;
        }
        @media (max-height: 650px), (max-width: 1024px){
          @include rem(12);
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
        @media (max-width: 1024px) and (max-height: 800px){
          transform: matrix(1,0,-0.8,1,0,0) translateX(-38%);
        }
      }
    }
    &--right{
      &:after{
        transform: matrix(1,0,-0.8,1,0,0) translateX(42%);
        @media (max-width: 1024px) and (max-height: 800px){
          transform: matrix(1,0,-0.8,1,0,0) translateX(35%);
        }
      }
    }
    &__ttl{
      @media (max-width: 900px){
        background: url(/dist/img/camping.jpg) no-repeat left center;
        background-size: cover;
        margin: 45px 0 0 12.7604166666%;
        padding: 112px 0 206px;
        width: 87.23958333333334%;
      }
    }
    &__desc{
      @media (max-width: 900px){
        background: rgba($main-color, 0.97);
        margin: -140px 0 0;
        padding: 30px 40px;
        width: 62.5%;
        .works{
          &__lead{
            color: #fff;
            @include rem(14);
            letter-spacing: 0.02em;
            line-height: (20/14);
            margin: 0;
            max-width: 100%;
            width: 100%;
          }
          &__view{
            a{
              border: solid 1px #fff;
              color: #fff;
              margin: 10px 0 0;
              &:after{
                content: none;
              }
              &:hover {
                color: #fff;
              }
            }
          }
        }
        .using{
          margin: 20px 0 0;
          &__list{
            background: #fff;
            color: $main-color;
          }
        }
      }
    }
    &__details{
      &--right{
        margin: 50vh 0 0;
        padding: 0 0 0 45vw;
        transition: all 0.4s ease 0s;
        @media (max-height: 800px){
          margin: 45vh 0 0;
        }
        @media (max-width: 1200px){
          margin: 48vh 0 0;
          padding: 0 0 0 43vw;
        }
        @media (max-height: 800px) and (max-width: 1200px){
          margin: 44vh 0 0;
        }
        @media (max-width: 1024px){
          margin: 53vh 0 0;
          padding: 0 0 0 40vw;
        }
        @media (max-height: 700px){
          margin: 42vh 0 0;
        }
        @media (max-height: 620px){
          margin: 37vh 0 0;
        }
        @media (max-height: 620px) and (max-width: 1200px){
          margin: 42vh 0 0;
        }
        @media (max-height: 620px) and (max-width: 1024px){
          margin: 37vh 0 0;
        }
        @media (max-width: 900px){
          margin: 0;
          padding: 0;
        }
      }
      &--left{
        margin: 15vh 0 0;
        padding: 0 0 0 6vw;
        transition: all 0.4s ease 0s;
        @media (max-width: 1200px){
          padding: 0 0 0 8vw;
        }
        @media (max-height: 700px){
          margin: 8vh 0 0;
        }
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
          //opacity: 0;
        }
        &--left{
          transition: all 0.3s ease 0s;
          //opacity: 0;
        }
      }
    }
  }
  .using{
    display: flex;
    flex-wrap: wrap;
    max-width: 650px;
    opacity: 0;
    position: relative;
    transform: translateY(20px);
    transition: all 0.4s ease 0s;
    width: 85%;
    z-index: 2;
    @media (max-width: 1200px){
      max-width: 470px;
    }
    &__list{
      background: $main-color;
      color: #fff;
      @include rem(12);
      font-weight: bold;
      letter-spacing: 0.04em;
      margin: 0 10px 10px 0;
      padding: 7px 10px;
      @media (max-height:600px), (max-width: 1024px){
        @include rem(10);
        padding: 5px 7px;
      }
    }
  }
  .works{
    &--right{
      .using{
        margin: 20px 0 0;
        @media (max-height: 620px), (max-width: 1024px){
          margin: 10px 0 0;
        }
        @media (max-width: 900px){
          margin: 20px 0 0;
        }
      }
    }
    &--left{
      .using{
        margin: 20px 0 0;
        @media (max-height: 620px){
          margin: 10px 0 0;
        }
        @media (max-width: 900px){
          margin: 20px 0 0;
        }
      }
    }
  }

  .active-works{
    .works{
      &__caption,
      &__hd,
      &__lead,
      &__view{
        opacity: 1;
        transform: translateY(0px);
        transition: all 0.4s ease 0.2s;
      }
      &__hd{
        transition: all 0.4s ease 0.4s;
      }
      &__lead{
        transition: all 0.4s ease 0.6s;
      }
      &__view{
        transition: opacity 0.4s ease 1s, transform 0.4s ease 1s;
      }
    }
    .using{
      opacity: 1;
      transform: translateY(0px);
      transition: all 0.4s ease 0.8s;
    }
  }


</style>