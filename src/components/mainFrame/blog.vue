<template lang="ejs">
  <section class="blogs" :class="{'blog-active': pageController()}">
    <h1 class="blogs__hd">Blogs</h1>
    <div class="blogs__container">
      <% for(var i = 0; i < 3; i++){ %>
      <div class="blogs__list">
        <img src="/dist/img/dummy1.jpg" alt="dummy">
        <time>January / 30 / 2017 - coding</time>
        <h2 class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h2>
        <p class="summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur.</p>
        <div class="viewPost">
          <a href="">Read the post</a>
        </div>
      </div>
      <% } %>
    </div>
    <div class="more">
      <a href="">read more post</a>
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
      }
    },
    methods: {
      pageController(){
        return store.state.showBlog;
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/sass/foundation/mixins/mixin";
  @import "../../../assets/sass/foundation/variables/variables";
  .blogs{
    background: $bg-color;
    height:100%;
    padding: 25px;
    position: relative;
    width: 100%;
    @media (max-height: 800px){
      padding: 15px;
    }
    &__hd{
      color: $main-text-color;
      @include rem(60);
      font-weight:300;
      letter-spacing: 0.02em;
      line-height: (72/60);
      margin: 90px 0 0;
      opacity: 0;
      text-align: center;
      text-transform: uppercase;
      transform: translateY(30px);
      transition: all 0.4s ease 0.2s;
      @media (max-height: 900px){
        margin: 6% 0 0;
      }
      @media (max-height: 850px){
        margin: 4% 0 0;
      }
      @media (max-height: 800px){
        margin: 3% 0 0;
      }
      @media (max-height: 750px){
        @include rem(55);
        margin: 2% 0 0;
      }
      @media (max-height: 700px){
        @include rem(45);
        margin: 4% 0 0;
      }
      @media (max-height: 600px){
        @include rem(40);
        margin: 5% 0 0;
      }
      @media (max-height: 550px){
        margin: 3% 0 0;
      }
    }
    &__container{
      display: flex;
      justify-content: space-between;
      margin: 2.5% auto;
      max-width: 1180px;
      width: 80%;
      @media (max-height: 800px){
        margin: 2% auto;
      }
      @media (max-height: 700px){
        width: 85%;
      }
      @media (max-height: 650px){
        margin: 1% auto;
      }
    }
    &__list{
      background: #fff;
      margin: 0 3% 0 0;
      overflow: hidden;
      position: relative;
      &:before,
      &:after{
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 10;
      }
      &:before{
        background: $main-color;
        left: -100%;
      }
      &:after{
        background: #fff;
        left: 0;
      }
      &:first-of-type{
        &:before,
        &:after{
          transition: left 0.4s ease 0.4s;
        }
      }
      &:nth-of-type(2){
        &:before,
        &:after{
          transition: left 0.4s ease 0.8s;
        }
      }
      &:last-of-type{
        margin: 0;
        &:before,
        &:after{
          transition: left 0.4s ease 1.2s;
        }
      }
      img{
        display: block;
        width: 100%;
      }
      time{
        color: #7c7c7c;
        display: block;
        @include rem(12);
        font-weight: 500;
        letter-spacing: 0.04em;
        padding: 20px 25px 0;
        text-align: center;
        text-transform: uppercase;
        width: 100%;
        @media (max-height: 700px){
          padding: 15px 20px 0;
        }
        @media (max-height: 600px){
          padding: 10px 20px 0;
        }
      }
    }
    .title{
      color: $main-text-color;
      @include rem(24);
      font-weight: 500;
      letter-spacing: 0.02em;
      margin: 5px 0 10px;
      padding: 0 20px;
      text-align: center;
      @media (max-height: 700px){
        @include rem(20);
      }
      @media (max-height: 600px){
        @include rem(18);
      }
      &:after{
        background: $main-color;
        content: '';
        display: block;
        height: 2px;
        margin: 12px auto 10px;
        width: 44px;
      }
    }
    .summary{
      color: $main-text-color;
      @include rem(16);
      font-weight: 500;
      padding: 0 20px;
      text-align: center;
      @media (max-height: 600px){
        @include rem(14);
      }
    }
    .viewPost{
      margin: 20px 0 0;
      padding: 0 20px 25px;
      text-align: center;
      @media (max-height: 700px){
        padding: 0 15px 20px;
      }
      @media (max-height: 600px){
        margin: 10px 0 0;
        padding: 0 15px 12px;
      }
      a{
        color: $main-text-color;
        display: inline-block;
        @include rem(14);
        font-weight: 700;
        letter-spacing: 0.04em;
        position: relative;
        text-transform: uppercase;
        @include pseudo($main-text-color);
      }
    }
  }
  .blog-active{
    .blogs{
      &__hd{
        opacity: 1;
        transform: translateY(0);
        transition: all 0.4s ease 0.2s;
      }
      &__list{
        &:before{
          left: 100%;
        }
        &:after{
          left: 200%;
        }
        &:first-of-type{
          &:before,
          &:after{
            transition: left .6s ease 0.4s;
          }
        }
        &:nth-of-type(2){
          &:before,
          &:after{
            transition: left .6s ease 0.67s;
          }
        }
        &:last-of-type{
          margin: 0;
          &:before,
          &:after{
            transition: left .6s ease 0.92s;
          }
        }
      }
    }
    .more{
      opacity: 1;
      transform: translateY(0);
      transition: all 0.5s ease 1.1s;
    }
  }
  .more{
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.4s ease 0.7s;
    a{
      border: solid 1px $main-color;
      //border-radius: 4px;
      color: $main-text-color;
      display: block;
      @include rem(14);
      line-height: 1;
      margin: 30px auto 0;
      overflow: hidden;
      padding: 12px 0 11px;
      position: relative;
      text-align: center;
      text-transform: uppercase;
      transition: color .5s ease 0s;
      width: 160px;
      z-index: 0;
      @media (max-height: 650px){
        margin: 15px auto 0;
      }
      @media (max-height: 650px){
        @include rem(12);
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
</style>