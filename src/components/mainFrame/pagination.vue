<template>
  <div class="pagination" :class="{'pagination--first': sharedState.isColorClass, 'pagination--right': sharedState.isRight }">
    <template v-for="num in 5">
      <div class="pagination__list" :class="{'active': sharedState.location == num ? true : false }">0{{ num }}.</div>
    </template>
  </div>
</template>

<script>
  import store from '../../store/store';
  export default {
    data: function() {
      return {
        sharedState: store.state
      }
    },
    methods: {
      test(page){
        console.log(page)
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/sass/foundation/mixins/mixin";
  .pagination{
    left: 60px;
    margin: -120px 0 0;
    position: absolute;
    top: 50%;
    z-index: 10;
    @media (max-height: 800px){
      left: 45px;
    }
    @media (max-height: 700px){
      left: 35px;
    }
    &--right{
      left: auto;
      right: 70px;
      @media (max-height: 800px){
        right: 45px;
      }
      @media (max-height: 700px){
        right: 35px;
      }
    }
    &__list{
      color: #3c3c3c;
      cursor: pointer;
      font-weight: 300;
      @include rem(20);
      letter-spacing: 0.25px;
      margin:0 0 30px;
      position: relative;
      transition: all 0.5s ease 0.2s;
      &:after{
        background: #E00606;
        bottom: 3px;
        content: '';
        display: block;
        height: 2px;
        opacity: 0;
        position: absolute;
        right: -15px;
        transition: all 0.5s ease 0.2s;
        width: 10px;
      }
    }
    &--first{
      .pagination__list{
        color:#fff;
      }
    }
  }
  .active{
    font-weight: 700;
    &:after{
      opacity: 1;
    }
  }
</style>