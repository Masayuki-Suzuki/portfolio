<template>
  <section class="works" :class="{
    'works1': changeWorks(3),
    'works2': changeWorks(4),
    'works3': changeWorks(5),
    'works4': changeWorks(6),
    'works5': changeWorks(7),
    'works--left': worksSide(),
    'works--right': !worksSide()
  }">
    <h1 v-if="sharedState.isTablet" class="common__hd">works</h1>
    <yelp-camp v-if="changeWorks(3)" :class="{ 'active-works': changeWorksA() }"></yelp-camp>
    <portfolio v-if="changeWorks(4)" :class="{ 'active-works': changeWorksB() }"></portfolio>
    <ballet v-if="changeWorks(5)" :class="{ 'active-works': changeWorksA() }"></ballet>
    <marketas v-if="changeWorks(6)" :class="{ 'active-works': changeWorksB() }"></marketas>
    <another v-if="changeWorks(7)" :class="{ 'active-works': changeWorksA() }"></another>
    <div class="scrollNav">
      <span @click="paginationClick(8)" href=""></span>
    </div>
    <div class="imgPreload">
      <img src="/dist/img/ballet_bg.jpg" alt="">
      <img src="/dist/img/marketas.jpg" alt="">
      <img src="/dist/img/tokyo.jpg" alt="">
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
  import another from './another.vue';

  export default {
    data: function () {
      return {
        sharedState: store.state
      }
    },
    methods: {
      changeWorks(num){
        if(document.body.clientWidth <= 900 && num <= 4 || document.body.clientWidth <= 900 && num == 7){
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
      },
      paginationClick(num){
        store.paginationLinkAction(num);
      }
    }
  }

  Vue.component('yelp-camp',yelpCamp);
  Vue.component('portfolio', portfolio);
  Vue.component('ballet', ballet);
  Vue.component('marketas', marketas);
  Vue.component('another', another);
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
  .works5{
    background: url(/dist/img/tokyo.jpg) no-repeat -30vw center;
    @media (max-width: 900px){
      background: none;
    }
  }
  .works{
    background-size: cover;
    height:100%;
    padding: 25px;
    position: relative;
    transition: all 0.4s ease 0s;
    width: 100%;
    z-index: 1;
    @media (max-height: 800px), (max-width: 1024px){
      padding: 15px;
    }
    @media (max-width:900px){
      height: inherit;
      padding: 90px 0 95px;
      position: static;
    }
    @media (max-width: 550px){
      padding: 50px 0 55px;
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
      width: 88%;
      z-index: 2;
      @media (max-height: 800px){
        @include rem(43);
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
        display: inline-block;
        @include rem(14);
        line-height: 1;
        margin: 10px 20px 0 0;
        overflow: hidden;
        padding: 12px 0 11px;
        position: relative;
        text-align: center;
        text-transform: uppercase;
        transition: color .5s ease 0s;
        width: 160px;
        z-index: 2;
        @media (max-height: 700px){
          margin: 10px 20px 0 0;
        }
        @media (max-height: 650px), (max-width: 1024px){
          @include rem(12);
          padding: 13px 0 12px;
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
        &.works__github{
          padding: 7px 0 6px;
          &:before{
            content:"\f09b";
            display: inline-block;
            font-family: fontawesome;
            @include rem(24);
            line-height: 1;
            margin: 0 10px 0 0;
            vertical-align: sub;
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
        background-size: 115%;
        height: 380px;
        overflow: hidden;
        //padding: 380px 0 0;
        position: relative;
        width: 87.23958333333334%;
        z-index: -1;
      }
      @media (max-width: 740px){
        height: 320px;
      }
      @media (max-width: 550px){
        height: 230px;
      }
    }
    &__desc{
      @media (max-width: 900px){
        background: rgba($main-color, 0.97);
        margin: -140px 0 0;
        padding: 30px 40px;
        //position: relative;
        width: 62.5%;
        /*z-index: 3;*/
        &:after{
          background: $main-color;
          bottom: -50px;
          content: '';
          display: block;
          height: 2px;
          left: 50%;
          position: absolute;
          transform: translateX(-50%);
          width: 160px;
        }
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
              margin: 10px 10px 0 0;
              padding: 13px 0;
              width: 113px;
              &:after{
                content: none;
              }
              &:hover {
                color: #fff;
              }
              &.works__github{
                padding: 7px 0;
              }
            }
          }
        }
        .using{
          margin: 20px 0 0;
          max-width: inherit;
          width: 100%;
          &__list{
            background: #fff;
            color: $main-color;
          }
        }
      }
      @media (max-width: 740px){
        margin: -100px 0 0;
        width: 85%;
      }
      @media (max-width: 550px){
        margin: -55px 0 0;
        padding: 20px;
        width: 90%;
      }
    }
    &__details{
      &--right{
        margin: 47vh 0 0;
        padding: 0 0 0 45vw;
        transition: all 0.4s ease 0s;
        //@media (max-height: 800px){
        //  margin: 47vh 0 0;
        //}
        &.anotherWorks {
          margin: 55vh 0 0;
          @media (max-height: 800px) and (max-width: 1200px) {
            margin: 54vh 0 0;
          }
          @media (max-width: 900px){
            margin: 0;
          }
        }
        @media (max-width: 1200px){
          margin: 48vh 0 0;
        }
        @media (max-height: 800px) and (max-width: 1200px){
          margin: 48vh 0 0;
        }
        @media (max-width: 1024px){
          margin: 55vh 0 0;
          padding: 0 0 0 40vw;
        }
        @media (max-height: 800px) and (max-width: 1024px) {
          margin: 49vh 0 0;
        }
        @media (max-height: 700px){
          margin: 46vh 0 0;
        }
        @media (max-height: 700px) and (max-width: 1024px) {
          margin: 49vh 0 0;
        }
        @media (max-height: 650px){
          margin: 44vh 0 0;
        }
        @media (max-height: 600px){
          margin: 46vh 0 0;
        }
        @media (max-width: 900px) {
          margin: 0;
          padding: 0;
          position: relative;
          &:before{
            color: $main-color;
            content:"design / coding";
            @include rem(16);
            left: 5%;
            line-height: 1;
            position: absolute;
            text-transform: uppercase;
            top: 112px;
            z-index: -2;
            @media (max-width: 550px){
              top: 62px
            }
          }
          &:after{
            color: $main-color;
            content:"YelpCamp";
            @include rem(36);
            font-weight: 700;
            left: 5%;
            line-height: 1;
            position: absolute;
            text-transform: uppercase;
            top: 130px;
            z-index: -2;
            @media (max-width: 550px){
              top: 80px
            }
          }
          .works{
            &__ttl{
              background: url(/dist/img/camping.jpg) no-repeat left center;
              background-size: 120%;
              margin: 45px 0 0 12.7604166666%;
              @media (max-width: 740px){
                margin: 20px 0 0 12.7604166666%;
              }
              @media (max-width: 550px){
                background-size: cover;
              }
            }
            &__caption{
              color: #fff;
              left: -9%;
              position: absolute;
              top: 110px;
              @media (max-width: 550px){
                top: 60px
              }
            }
            &__hd{
              color: #fff;
              left: -9%;
              position: absolute;
              top: 125px;
              @media (max-width: 550px){
                top: 75px
              }
            }
          }
          &.anotherWorks {
            &:before,
            &:after {
              content: none;
            }
          }
          .anotherWorks{
            &__ttl{
              background: none;
              height: inherit;
              margin: 95px 0 0;
              padding: 0;
              width: 100%;
            }
            &__hd{
              color: $main-color;
              @include rem(30);
              font-weight: 300;
              line-height: 1;
              margin: 0 0 25px;
              max-width: 100%;
              position: static;
              text-align: center;
              width: 100%;
            }
            &__desc{
              background: none;
              margin: 0 auto;
              max-width: 670px;
              padding: 0;
              text-align: center;
              width: 95%;
              @media (max-width: 740px){
                width: 85%;
              }
              &:after{
                content: none;
              }
              .works{
                &__lead{
                  color: $main-color;
                  @include rem(16);
                  font-weight: 300;
                  line-height: (26/16);
                  text-align: center;
                }
              }
            }
          }
        }
      }
      &--left{
        margin: 10vh 0 0;
        padding: 0 0 0 8vw;
        transition: all 0.4s ease 0s;
        @media (max-width: 900px) {
          margin: 100px 0 0;
          padding: 0;
          position: relative;
          text-align: right;
          &:after{
            color: $main-color;
            content:"portfolio site";
            @include rem(36);
            font-weight: 700;
            right: 0;
            line-height: 1;
            position: absolute;
            text-align: left;
            text-transform: uppercase;
            top: 131px;
            width: 320px;
            z-index: -2;
            @media (max-width: 550px){
              width: 296px;
              top: 81px;
            }
          }
          .works{
            &__ttl{
              background: url(/dist/img/topBg.jpg) no-repeat left center;
              background-size: 105%;
              margin: 45px 12.7604166666% 0 0;
              text-align: left;
              @media (max-width: 550px){
                background-size: cover;
              }
            }
            &__caption{
              color: #fff;
              right: -15%;
              position: absolute;
              top: 110px;
              width: 320px;
              @media (max-width: 550px){
                top: 60px;
                width: 295px;
              }
            }
            &__hd{
              color: #fff;
              right: -15%;
              position: absolute;
              top: 125px;
              width: 322px;
              @media (max-width: 550px){
                top: 75px;
                width: 296px;
              }
            }
            &__desc{
              display: inline-block;
              text-align: left;
            }
          }
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
  .imgPreload{
    display: inline;
    height: 0;
    left: -10px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 0;
  }
</style>