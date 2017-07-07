<template>
  <section class="about" :class="{'about-active': pageController()}">
    <h1 class="about__hd">Who I am ?</h1>
    <p class="about__lead">Hi, there. I'm Masayuki Suzuki, a Japanese front-end developer based in Vancouver. My focus is creating interactive experiences and user-friendly interfaces whilst maintaining semantic, clean markup and SEO friendly code. I have 4 years experience in the feild in Japan. I continue to learn newly language, tools and framework to go to next stage.</p>
    <div class="wrapper">
      <div class="what-i what-i-can">
        <h2>What I can ?</h2>
        <div class="what-i__images">
          <img src="/dist/img/js.svg" alt="">
          <img src="/dist/img/html5.svg" alt="">
          <img src="/dist/img/css3.svg" alt="">
          <img src="/dist/img/node.svg" alt="">
          <img src="/dist/img/vue.svg" alt="">
          <img src="/dist/img/wordpress.svg" alt="">
          <img src="/dist/img/mongodb.svg" alt="">
          <img src="/dist/img/jquery.svg" alt="">
        </div>
        <p>Express / Bootstrap / Semantic UI / JSON / AJAX </p>
        <p>PHP / SQL / C & C++ / C# / ASP.NET</p>
      </div>
      <div class="what-i what-i-use">
        <h2>What I use ?</h2>
        <div class="what-i__images">
          <img src="/dist/img/sass.svg" alt="">
          <img src="/dist/img/gulp.svg" alt="">
          <img src="/dist/img/webpack.svg" alt="">
          <img src="/dist/img/git.svg" alt="">
          <img src="/dist/img/github.svg" alt="">
          <img src="/dist/img/photoshop.svg" alt="">
          <img src="/dist/img/ejs.svg" alt="">
          <img src="/dist/img/sketch.svg" alt="">
        </div>
        <p>BEM / OOCSS / SMACSS / RESTful / illustrator</p>
      </div>
    </div>
    <div class="scrollNav">
      <a href=""></a>
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
      }
    },
    methods: {
      pageController(){
        return store.state.showAbout;
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
    &__hd {
      color: $main-text-color;
      @include rem(60);
      font-weight: 300;
      letter-spacing: 0.02em;
      line-height: (72/60);
      margin: 6% 0 0;
      opacity: 0;
      text-align: center;
      text-transform: uppercase;
      transition: all 0.4s ease 0s;
      transform: translateY(30px);
      @media (max-height: 850px) {
        margin: 5% 0 0;
      }
      @media (max-height: 800px) {
        @include rem(50);
        margin: 3% 0 0;
      }
      @media (max-height: 700px) {
        @include rem(45);
        margin: 3.5% 0 0;
      }
      @media (max-height: 550px) {
        @include rem(40);
        margin: 2% 0 0;
      }
    }
    &__lead {
      color: #3C3C3C;
      @include rem(15);
      font-weight: 500;
      letter-spacing: 0.15em;
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
  }
  .what-i{
    width: 50%;
    &-can{
      border-right: solid 1px #A8A8A0;
      padding: 0 50px 0 0;
      @media (max-width: 1024px){
        padding: 0 20px 0 0;
      }
    }
    &-use{
      padding: 0 0 0 50px;
      @media (max-width: 1024px){
        padding: 0 0 0 20px;
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
    }
    &__images{
      margin: auto;
      max-width: 300px;
      opacity: 0;
      text-align: center;
      transition: all 0.4s ease 0.6s;
      transform: translateY(30px);
      width: 90%;
      @media (max-height: 700px), (max-width: 1024px){
        max-width: 240px;
      }
      img {
        display: inline-block;
        margin: 0 50px 40px 0;
        vertical-align: bottom;
        &:nth-of-type(3n){
          margin: 0 0 40px;
        }
        &:last-of-type{
          margin: 0 0 40px;
        }
        /*@media (max-height: 700px), (max-width: 1024px){*/
          /*margin: 0 20px 30px 0;*/
          /*&:nth-of-type(3n){*/
            /*margin: 0 0 30px;*/
          /*}*/
          /*&:last-of-type{*/
            /*margin: 0 0 30px;*/
          /*}*/
        /*}*/
        @media (max-height: 700px), (max-width: 1024px){
          margin: 0 20px 25px 0;
          &:nth-of-type(3n){
            margin: 0 0 25px;
          }
          &:last-of-type{
            margin: 0 0 25px;
          }
        }
        @media (max-height: 600px), (max-width: 1024px){
          margin: 0 20px 20px 0;
          max-width: 85px;
          max-height: 45px;
          &:nth-of-type(3n){
            margin: 0 0 20px;
          }
          &:last-of-type{
            margin: 0 0 20px;
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
    @media (max-height: 700px){
      bottom: 32px;
      margin: 0 0 0 -10px;
    }
    @media (max-height: 550px){
      display: none;
    }
    a{
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