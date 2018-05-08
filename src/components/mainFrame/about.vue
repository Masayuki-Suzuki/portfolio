<template>
  <section class="about" :class="{'about-active': pageController()}">
    <h1 class="common__hd about__hd">Who I am ?</h1>
    <p class="about__lead">Hi, there. I'm Masayuki Suzuki, a Japanese front-end developer based in Vancouver. My focus is creating interactive experiences and user-friendly interfaces whilst maintaining semantic, clean markup and SEO friendly code. I have 4 years experience in this field in Japan. I continue to learn new language, tools and framework to proceed to the next stage.</p>
    <div class="wrapper">
      <div class="what-i what-i-can">
        <h2>What I can ?</h2>
        <div class="what-i__images">
          <img class="ico-js" src="/dist/img/js.svg" alt="Javascript">
          <img class="ico-html" src="/dist/img/html5.svg" alt="html5">
          <img class="ico-css" src="/dist/img/css3.svg" alt="css3">
          <img class="ico-react" src="/dist/img/react.svg" alt="react.js">
          <img class="ico-vue" src="/dist/img/vue.svg" alt="vue.js">
          <img class="ico-wp" src="/dist/img/wordpress.svg" alt="wordpress">
          <img class="ico-node" src="/dist/img/node.svg" alt="node.js">
          <img class="ico-mongo" src="/dist/img/mongodb.svg" alt="mongodb">
          <img class="ico-jq" src="/dist/img/jquery.svg" alt="jquery">
        </div>
        <p class="what-i__another">Express / Bootstrap / JSON / AJAX / PHP / SQL<span> </span></p>
      </div>
      <div class="what-i what-i-use">
        <h2>What I use ?</h2>
        <div class="what-i__images">
          <img src="/dist/img/sass.svg">
          <img src="/dist/img/gulp.svg">
          <img src="/dist/img/webpack.svg">
          <img src="/dist/img/git.svg">
          <img src="/dist/img/github.svg">
          <img src="/dist/img/photoshop.svg">
          <img class="ico-ejs" src="/dist/img/ejs.svg">
          <img src="/dist/img/sketch.svg">
        </div>
        <p>BEM / OOCSS / RESTful / illustrator</p>
      </div>
    </div>
    <div v-if="!sharedState.isTablet" class="scrollNav">
      <span @click="paginationClick(3)"></span>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue';
  import store from '../../store/store';

  export default {
    data: function () {
      return {
        isColorClass: false,
        sharedState: store.state
      }
    },
    methods: {
      pageController(){
        if(document.body.clientWidth <= 900){
          return true;
        }
        return store.state.showAbout;
      },
      paginationClick(num){
        store.paginationLinkAction(num);
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/sass/foundation/mixins/mixin";
  @import "../../../assets/sass/foundation/variables/variables";
  .about {
    background: $bg-color;
    height: 100%;
    padding: 25px;
    position: relative;
    width: 100%;
    @media (max-height: 800px) {
      padding: 15px;
    }
    @media (max-width: 900px) {
      height: initial;
      padding: 90px 25px 95px;
    }
    @media (max-width: 550px){
      padding: 50px 25px 55px;
    }
    &__hd {
      margin: 10vh 0 0;
      transition: all 0.4s ease 0s;
      @media (max-height: 800px) {
        @include rem(50);
        margin: 9vh 0 0;
      }
      @media (max-height: 750px) {
        margin: 6vh 0 0;
      }
      @media (max-height: 700px) {
        @include rem(45);
        margin: 9vh 0 0;
      }
      @media (max-height: 650px) {
        margin: 5vh 0 0;
      }
      @media (max-height: 600px) {
        margin: 8vh 0 0;
      }
      @media (max-height: 550px) {
        @include rem(40);
        margin: 5vh 0 0;
      }
      @media (max-width: 900px){
        margin: 0;
      }
      @media (max-width: 550px){
        @include rem(40);
      }
    }
    &__lead {
      color: #3C3C3C;
      @include rem(15);
      font-weight: 500;
      letter-spacing: 0.05em;
      line-height: 1.5;
      margin: 30px auto 60px;
      max-width: 1024px;
      opacity: 0;
      text-align: center;
      transition: all 0.4s ease 0.2s;
      transform: translateY(30px);
      width: 95%;
      @media (max-height: 800px) {
        margin: 25px auto 50px;
      }
      @media (max-height: 700px) {
        margin: 15px auto 40px;
      }
      @media (max-height: 600px) {
        margin: 10px auto 25px;
      }
      @media (max-width: 1200px){
        max-width: 800px;
      }
      @media (max-width: 1024px){
        max-width: 700px;
      }
      @media (max-width: 900px){
        @include rem(14);
        font-weight: 400;
        max-width: 660px;
      }
    }
  }
  .wrapper{
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 1024px;
    width: 95%;
    @media (max-width: 1024px){
      width: 85%;
    }
    @media (max-width: 900px){
      display: block;
      width: 100%;
    }
  }
  .what-i{
    width: 100%;
    @media (max-width: 900px){
      margin: 0 auto;
    }
    &-can{
      border-right: solid 1px #A8A8A0;
      padding: 0 50px 0 0;
      @media (max-width: 1024px) , (max-height: 750px) and (max-width: 1200px){
        padding: 0 20px 0 0;
      }
      @media (max-width: 900px){
        border: 0;
        margin: 0 auto 60px;
        max-width: 410px;
        padding: 0;
      }
    }
    &-use{
      padding: 0 0 0 50px;
      @media (max-width: 1024px), (max-height: 750px) and (max-width: 1200px){
        padding: 0 0 0 20px;
      }
      @media (max-width: 900px){
        max-width: 480px;
        padding: 0;
      }
    }
    &__another{
      line-height: 1.44;
      span{
        display: inline-block;
        &:before{
          content:" / ";
        }
        @media (max-width: 378px){
          display: inline;
          &:before{
            content: none;
          }
        }
      }
    }
    h2{
      @include rem(30);
      font-weight: 300;
      letter-spacing: 0.08em;
      margin: 0 auto 50px;
      opacity: 0;
      text-align: center;
      text-transform: uppercase;
      transition: all 0.4s ease 0.4s;
      transform: translateY(30px);
      @media (max-height: 700px){
        @include rem(24);
        margin: 0 auto 30px;
      }
      @media (max-width: 900px){
        @include rem(30);
        margin: 0 auto 35px;
      }
    }
    &__images{
      margin: auto;
      max-width: 300px;
      opacity: 0;
      text-align: center;
      transition: all 0.4s ease 0.6s;
      transform: translateY(30px);
      width: 90%;
      @media (max-height: 700px),(max-width: 1024px),
      (max-height: 750px) and (max-width: 1200px){
        max-width: 240px;
      }
      @media (max-width: 900px){
        max-width: 485px;
        width: 100%;
      }
      @media (max-width: 740px){
        max-width: 400px;
      }
      @media (max-width: 550px){
        max-width: 269px;
      }
      img {
        display: inline-block;
        margin: 0 50px 40px 0;
        vertical-align: middle;
        &:nth-of-type(3n){
          margin: 0 0 40px;
        }
        &:nth-of-type(n+7){
          margin: 0 30px 40px 0;
          @media (max-height: 700px), (max-width: 1024px){
            margin: 0 15px 25px 0;
          }
        }
        &:last-of-type{
          margin: 0 0 40px;
        }
        @media (max-height: 700px), (max-width: 1024px){
          margin: 0 20px 25px 0;
          max-height: 50px;
          &:nth-of-type(3n){
            margin: 0 0 25px;
          }
          &:last-of-type{
            margin: 0 0 25px;
          }
        }
        @media (max-height: 600px), (max-width: 1024px),
        (max-height: 750px) and (max-width: 1200px){
          margin: 0 25px 20px 0;
          max-width: 85px;
          max-height: 45px;
          &:nth-of-type(3n){
            margin: 0 0 20px;
          }
          &:last-of-type{
            margin: 0 0 20px;
          }
        }
        @media (max-width: 900px){
          margin: 0 50px 38px 0;
          max-height: inherit;
          max-width: inherit;
          vertical-align: middle;
          &:nth-of-type(3n){
            margin: 0 50px 38px 0;
          }
          &:nth-of-type(4n){
            margin: 0 0 38px;
          }
        }
        @media (max-width: 740px){
          margin: 0 30px 30px 0;
          max-width: 85px;
          &:nth-of-type(3n){
            margin: 0 30px 30px 0;
          }
          &:nth-of-type(4n){
            margin: 0 0 30px;
          }
        }
        @media (max-width: 550px){
          max-width: inherit;
          vertical-align: middle;
          &:nth-of-type(3n){
            margin: 0 0 30px 0;
          }
          &:nth-of-type(4n){
            margin: 0 30px 30px 0;
          }
          &:last-of-type{
            margin: 0 0 30px;
          }
        }
        &.ico-{
          &react{
            width: 60px;
            @media (max-width: 740px){
              margin: 0 30px 30px 0;
            }
          }
          &node{
            width: 70px;
            @media (max-height: 700px), (max-width: 1024px){
              width: 60px;
            }
            @media (max-width: 900px){
              margin: 0 0 38px;
              width: 90px;
            }
            @media (max-width: 740px){
              margin: 0 30px 30px 0;
            }
            @media (max-width: 550px){
              margin: 0 15px 30px 0;
              width: 70px;
            }
          }
          &mongo{
            width: 90px;
            @media (max-height: 700px), (max-width: 1024px){
              width: 75px;
            }
            @media (max-width: 900px){
              margin: 0 40px 38px 0;
              width: 110px;
            }
            @media (max-width: 740px){
              margin: 0 30px 30px 0;
            }
            @media (max-width: 550px){
              margin: 0 15px 30px 0;
              width: 90px;
            }
          }
          &jq{
            width: 74px;
            @media (max-height: 700px), (max-width: 1024px){
              width: 65px;
            }
            @media (max-width: 900px){
              margin: 0 0 38px;
              width: 100px;
            }
            @media (max-width: 550px){
              margin: 10px 0 30px;
              width: 70px;
            }
          }
          &ejs{
            @media (max-width: 900px) {
              margin: 0 45px 38px 0;
            }
          }
        }
      }
    }
    p{
      color: $main-text-color;
      @include rem(14);
      font-weight: 500;
      letter-spacing: 0.05em;
      margin: 0 0 5px;
      opacity: 0;
      text-align: center;
      transition: all 0.4s ease 0s;
      transform: translateY(30px);
    }
  }
  .about-active{
    .about{
      &__hd {
        opacity: 1;
        transition: all 0.4s ease 0.4s;
        transform: translateY(0px);
      }
      &__lead{
        opacity: 1;
        transition: all 0.4s ease 0.6s;
        transform: translateY(0px);
      }
    }
    .what-i{
      h2{
        opacity: 1;
        transition: all 0.4s ease 0.8s;
        transform: translateY(0px);
      }
      &__images{
        opacity: 1;
        transition: all 0.4s ease 1.0s;
        transform: translateY(0px);
      }
      p{
        opacity: 1;
        transition: all 0.4s ease 1.2s;
        transform: translateY(0px);
      }
    }
  }
  .scrollNav{
    bottom: 55px;
    left: 50%;
    margin: 0 0 0 -15px;
    position: absolute;
    transform: rotateZ(-45deg);
    text-align: center;
    z-index: 5;
    @media (max-height: 800px){
      bottom: 45px;
    }
    @media (max-height: 700px), (max-width: 1024px){
      bottom: 32px;
      margin: 0 0 0 -10px;
    }
    @media (max-height: 600px),
    (max-width: 900px),
    (max-height: 640px) and (max-width: 1024px){
      display: none;
    }
    span{
      border: solid 1px #979797;
      border-top: 0;
      border-right: 0;
      display: inline-block;
      height: 30px;
      width: 30px;
      @media (max-height: 700px), (max-width: 1024px){
        height: 20px;
        width: 20px;
      }
    }
  }
</style>