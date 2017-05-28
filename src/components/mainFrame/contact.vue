<template>
  <section class="contact">
    <h1 class="contact__hd">contact</h1>
    <form class="contact__form" action="">
      <label class="ttl">Your name<span class="require">*</span> :
        <input type="text" placeholder="John Snow">
      </label>
      <label class="ttl">company :
        <input type="text" placeholder="House Stark">
      </label>
      <label class="ttl">e-mail<span class="require">*</span> :
        <input type="email" placeholder="john@stark.com">
      </label>
      <label class="ttl">message<span class="require">*</span> :
        <textarea placeholder="Winter is Coming" rows="1"></textarea>
      </label>
      <button class="submit">send</button>
    </form>
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
  .contact{
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
      margin: 70px 0 0;
      text-align: center;
      text-transform: uppercase;
      @media (max-height: 800px){
        margin: 3% 0 0;
      }
      @media (max-height: 750px){
        @include rem(55);
        margin: 2% 0 0;
      }
      @media (max-height: 700px){
        @include rem(45);
        margin: 2% 0 0;
      }
      @media (max-height: 650px){
        margin: 1.5% 0 0;
      }
      @media (max-height: 600px){
        @include rem(40);
        margin: 1% 0 0;
      }
    }
    &__form{
      margin: 80px auto 0;
      max-width: 560px;
      @media (max-height: 800px){
        margin: 3% auto 0;
      }
      @media (max-height: 700px){
        margin: 2% auto 0;
      }
      @media (max-height: 600px){
        margin: 1% auto 0;
      }
    }
    .ttl{
      color: $main-text-color;
      @include rem(27);
      font-weight: 300;
      text-transform: uppercase;
      @media (max-height: 700px){
        @include rem(22);
      }
    }
    .require{
      color: #E00606;
    }
    input,textarea{
      background: none;
      border: 0;
      border-bottom: solid 1px #979797;
      display: block;
      @include rem(22);
      font-weight: 300;
      margin: 10px 0 35px;
      padding: 5px 10px;
      width: 100%;
      @media (max-height: 700px){
        @include rem(18);
        margin: 10px 0 25px;
      }
      @media (max-height: 600px){
        margin: 0px 0 25px;
      }
      &:-ms-input-placeholder{
        color: #999;
        font-weight: 300;
      }
      &::-webkit-input-placeholder{
        color: #999;
        font-weight: 300;
      }
      &:placeholder-shown{
        color: #999;
        font-weight: 300;
      }
    }
    .submit{
      background: transparent;
      border: solid 1px $main-color;
      color: $main-text-color;
      display: inline-block;
      @include rem(14);
      overflow: hidden;
      padding: 10px 20px;
      position: relative;
      text-transform: uppercase;
      transition: color .4s ease 0s;
      width: 180px;
      z-index: 1;
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