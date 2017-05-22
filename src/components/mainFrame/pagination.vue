<template>
  <div class="pagination" :class="{'pagination--first': sharedState.isColorClass}">
    <div class="pagination__list" :class="{'active': sharedState.paginationActive[0]}">01.</div>
    <div class="pagination__list" :class="{'active': sharedState.paginationActive[1]}">02.</div>
    <div class="pagination__list" :class="{'active': sharedState.paginationActive[2]}">03.</div>
    <div class="pagination__list" :class="{'active': sharedState.paginationActive[3]}">04.</div>
    <div class="pagination__list" :class="{'active': sharedState.paginationActive[4]}">05.</div>
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
    watch: {
      sharedState(){
        console.log(this.sharedState.state.paginationActive);
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/sass/foundation/mixins/mixin";
  .pagination{
    left: 50px;
    margin: -120px 0 0;
    position: absolute;
    top: 50%;
    z-index: 10;
    @media (max-height: 700px){
      left: 35px;
    }
    &__list{
      color: #3c3c3c;
      font-weight: 300;
      @include rem(20);
      letter-spacing: 0.25px;
      margin:0 0 30px;
      transition: all 0.5s ease 0.2s;
    }
    &--first{
      .pagination__list{
          color:#fff;
      }
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