<template lang="ejs">
  <section class="blogs">
    <h1 class="blogs__hd">Blogs</h1>
    <div class="blogs__container">
      <% for(var i = 0; i < 3; i++){ %>
      <div class="blogs__list">
        <img src="/dist/img/dummy1.jpg" alt="dummy">
        <time>January / 30 / 2017 - coding</time>
        <h2 class="title">Lorem ipsum dolor sit amet</h2>
        <p class="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        <div class="viewPost">
          <a href="">Read the post</a>
        </div>
      </div>
      <% } %>
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
      margin: 100px auto;
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
        padding: 20px 25px 0;
        text-align: center;
        text-transform: uppercase;
        width: 100%;
      }
      .tittle{
        font-weight: 500;
        text-align: center;
      }
    }
  }
</style>