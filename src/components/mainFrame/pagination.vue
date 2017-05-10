<template>
  <div class="pagination">
    <div class="pagination__list active">01.</div>
    <div class="pagination__list">02.</div>
    <div class="pagination__list">03.</div>
    <div class="pagination__list">04.</div>
    <div class="pagination__list">05.</div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  @import "../../../assets/sass/foundation/mixins/mixin";
  .pagination{
    left: 50px;
    margin: -120px 0 0;
    position: absolute;
    top: 50%;
    &__list{
      color: #FFFFFF;
      font-family: Lato-Light;
      @include rem(20);
      letter-spacing: 0.25px;
      margin:0 0 30px;
    }
  }

  .active{
    font-weight: 700;
    position: relative;
    &:after{
      background: #E00606;
      bottom: 3px;
      content: '';
      display: block;
      height: 2px;
      position: absolute;
      right: -15px;
      width: 10px;
    }
  }
</style>