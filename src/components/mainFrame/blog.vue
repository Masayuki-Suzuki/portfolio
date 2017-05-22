<template lang="ejs">
  <section class="blogs">
    <h1 class="blogs__hd">Blogs</h1>
    <div class="blogs__container">
      <% for(var i = 0; i < 3; i++){ %>
      <div class="blogs__list">
        <img src="/dist/img/dummy1.jpg" alt="dummy">
        <time>January / 30 / 2017 - coding</time>
        <h2 class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h2>
        <p class="summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur, eos error eveniet facilis incidunt laboriosam maxime molestiae odio omnis possimus quaerat, quis quos rem repellat suscipit tempora.</p>
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
  .blogs{
    background: $bg-color;
    height:100%;
    padding: 25px;
    position: relative;
    width: 100%;
    &__hd{
      color: $main-text-color;
      @include rem(60);
      font-weight:300;
      letter-spacing: 0.02em;
      line-height: (72/60);
      margin: 70px 0 0;
      text-align: center;
      text-transform: uppercase;
    }
    &__container{
      display: flex;
      justify-content: space-between;
      margin: 70px auto;
      max-width: 1180px;
      width: 80%;
    }
    &__list{
      background: #fff;
      margin: 0 3% 0 0;
      &:last-of-type{
        margin: 0;
      }
      img{
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
    }
    .viewPost{
      margin: 20px 0 0;
      padding: 0 20px 25px;
      text-align: center;
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
  .more{
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