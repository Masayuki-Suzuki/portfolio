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
        <textarea placeholder="Winter is Coming"></textarea>
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
        isColorClass: false,
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
    &__form{
      margin: 80px auto 0;
      max-width: 560px;
    }
    .ttl{
      color: $main-text-color;
      @include rem(27);
      font-weight: 300;
      text-transform: uppercase;
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
      border: solid 1px $main-color;
      display: inline-block;
      padding: 10px 20px;
    }
  }
</style>