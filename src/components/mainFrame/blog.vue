<template lang="ejs">
  <section class="blogs" :class="{'blog-active': pageController()}">
    <h1 class="common__hd blogs__hd">Blogs</h1>
    <div class="blogs__container">
      <div class="blogs__list">
        <div class="blogs__thumbnail">
          <img src="/dist/img/blog/seashore.jpg" alt="seashore">
        </div>
        <div class="blogs__desc">
          <time>July / 31 / 2017 - Life</time>
          <h2 class="title">Why I started the medium.</h2>
          <p class="summary">Hi there!! I’m Masa, Masayuki Suzuki and a front-end developer based in Vancouver, Canada. I wa...</p>
          <div class="viewPost">
            <a href="https://medium.com/@masayuki.s/why-i-started-the-medium-f349e0c075c1" target="_blank">Read the post</a>
          </div>
        </div>
      </div>
      <% for(var i = 0; i < 2; i++){ %>
      <% if(i === 0) { %>
        <div class="blogs__list blogs__list--right">
      <% } else { %>
      <div class="blogs__list">
      <% } %>
        <div class="blogs__thumbnail">
          <img src="/dist/img/dummy1.jpg" alt="dummy">
        </div>
        <div class="blogs__desc">
          <time>coming soon</time>
          <h2 class="title">Coming Soon.</h2>
          <p class="summary">I'll write new post soon!!</p>
          <div class="viewPost">
            <a href="/">Read the post</a>
          </div>
        </div>
      </div>
      <% } %>
    </div>
    <div class="more">
      <a href="https://medium.com/@masayuki.s" target="_blank">read more post</a>
    </div>
    <div class="scrollNav">
      <span @click="paginationClick(9)" href=""></span>
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
        if(document.body.clientWidth <= 900){
          return true;
        }
        return store.state.showBlog;
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
  .blogs{
    background: $bg-color;
    height:100%;
    padding: 25px;
    position: relative;
    width: 100%;
    @media (max-height: 800px){
      padding: 15px;
    }
    @media (max-width: 900px){
      padding: 90px 0;
    }
    @media (max-width: 550px){
      padding: 50px 0;
    }
    &__hd{
      margin: 90px 0 0;
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
      @media (max-width: 900px){
        @include rem(50);
        line-height: 1;
        margin: 0 auto;
      }
    }
    &__container{
      display: flex;
      justify-content: space-between;
      margin: 2.5% auto;
      max-width: 1180px;
      position: relative;
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
      @media (max-width: 900px){
        flex-direction: column;
        justify-content: flex-start;
        margin: 35px auto 0;
        max-width: 650px;
        width: 90%;
      }
      @media (max-width: 740px){
        margin: 20px auto 0;
      }
      @media (max-width: 550px){
        max-width: 400px;
      }
    }
    &__list{
      background: #fff;
      margin: 0 3% 0 0;
      overflow: hidden;
      position: relative;
      width: 33.3333333%;
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
        left: -103%;
      }
      &:after{
        background: #fff;
        left: 0;
      }
      @media (max-width: 900px){
        background: none;
        display: flex;
        justify-content: flex-end;
        margin: 25px auto;
        width: 100%;
        &:before,
        &after{
          content: none;
        }
      }
      @media (max-width: 550px){
        display: block;
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
        @media (max-width: 900px){
          padding: 20px 25px 0 75px;
          text-align: left;
        }
        @media (max-width: 740px){
          padding: 85px 25px 0;
        }
        @media (max-width: 550px){
          padding: 15px 15px 0;
          text-align: center;
        }
      }
    }
    &__thumbnail{
      @media (max-width: 900px){
        left: 0;
        max-width: 260px;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 10;
      }
      @media (max-width: 740px){
        max-width: 300px;
      }
      @media (max-width: 550px){
        position: static;
        max-width: 100%;
      }
      img{
        display: block;
        width: 100%;
      }
    }
    &__desc{
      @media (max-width: 900px) {
        background: #fff;
        margin: 30px 0 0;
        max-width: 440px;
        width: 100%;
      }
      @media (max-width: 740px){
        margin: 85px 0 0;
        max-width: 600px;
        width: 88%;
      }
      @media (max-width: 550px){
        margin: 0;
        width: 100%;
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
      @media (max-height: 700px), (max-width: 900px){
        @include rem(20);
      }
      @media (max-height: 600px){
        @include rem(18);
      }
      @media (max-width: 900px){
        padding: 0 25px 0 75px;
        text-align: left;
      }
      @media (max-width: 740px){
        padding: 0 25px;
      }
      @media (max-width: 550px){
        padding: 0 15px;
        text-align: center;
      }
      &:after{
        background: $main-color;
        content: '';
        display: block;
        height: 2px;
        margin: 12px auto 10px;
        width: 44px;
        @media (max-width: 900px){
          margin: 12px 0 10px;
        }
        @media (max-width: 550px){
          margin: 12px auto 10px;
        }
      }
    }
    .summary{
      color: $main-text-color;
      @include rem(16);
      font-weight: 500;
      padding: 0 20px;
      text-align: center;
      @media (max-height: 600px), (max-width: 900px){
        @include rem(14);
      }
      @media (max-width: 900px){
        padding: 0 25px 0 75px;
        text-align: left;
      }
      @media (max-width: 740px){
        padding: 0 25px;
      }
      @media (max-width: 550px){
        padding: 0 15px;
        text-align: center;
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
      @media (max-width: 900px){
        padding: 0 25px 20px 75px;
        text-align: left;
      }
      @media (max-width: 740px){
        padding: 0 25px 20px 25px;
      }
      @media (max-width: 550px){
        padding: 0 15px 15px;
        text-align: center;
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
    &__list{
      &--right{
        @media (max-width: 900px){
          justify-content: flex-start;
          .blogs__thumbnail{
            left: auto;
            right: 0;
          }
          time{
            padding: 20px 75px 0 25px;
            @media (max-width: 740px){
              padding: 85px 25px 0;
            }
          }
          .title,
          .summary{
            padding: 0 75px 0 25px;
            @media (max-width: 740px){

            }
          }
          .viewPost{
            padding: 0 75px 20px 25px;
          }
        }
        @media (max-width: 740px){
          time{
            padding: 85px 25px 0;
          }
          .title,
          .summary{
            padding: 0 25px;
          }
          .viewPost{
            padding: 0 25px 20px 25px;
          }
        }
        @media (max-width: 550px){
          time{
            padding: 15px 15px 0;
          }
          .title,
          .summary{
            padding: 0 15px;
          }
          .viewPost{
            padding: 0 15px 15px 15px;
          }
        }
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
          left: 103%;
        }
        &:after{
          left: 203%;
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
          @media (max-width: 900px){
            margin: 25px 0;
          }
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
      @media (max-width: 900px){
        background: $main-color;
        color: #fff;
        padding: 15px 0;
        width: 200px;
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