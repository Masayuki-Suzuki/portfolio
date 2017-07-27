<template>
  <footer class="footer">
    <div class="footer__logo">
      <a href="/">
        <svg class="logo__svg" viewBox="0 0 70 57" xmlns="http://www.w3.org/2000/svg">
          <title>logo</title>
          <path class="path logoWhite" d="M14.573 41.567l5.01-18.199 4.724 22.053 8.446-39.395 8.016 50.957 5.583-27.405 4.437 15.201 4.581-24.836 14.601-4.497-15.03 3.426-4.867 21.84-3.865-13.49-5.297 22.267L32.323.031l-8.16 39.61-5.01-20.34-5.01 21.196L.115 46.064z" stroke="#FFF" fill="#FFF" fill-rule="evenodd"/>
        </svg>
      </a>
    </div>
    <p class="footer__copy">MASAYUKI SUZUKI PORTFORIO ©</p>
  </footer>
</template>

<script>
  export default {
    data: function(){
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "../../assets/sass/foundation/mixins/mixin";
  @import '../../assets/sass/foundation/variables/variables';
  .footer{
    background: $main-color;
    padding: 20px 0;
    text-align: center;
    &__logo{
      display: inline-block;
      margin:0 0 10px;
    }
    &__copy{
      color: #fff;
      @include rem(12);
      letter-spacing: 0.02em;
      line-height: 1;
    }
  }
</style>