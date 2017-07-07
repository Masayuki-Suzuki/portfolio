<template>
  <div class="pagination" :class="{'pagination--first': sharedState.isColorClass, 'pagination--right': sharedState.isRight }">
      <div class="pagination__list" :class="{'active': activeControl(1) }" @click="paginationClick(1,$event)">01.</div>
      <div class="pagination__list" :class="{'active': activeControl(2) }" @click="paginationClick(2,$event)">02.</div>
      <div class="pagination__list" :class="{'active': activeControl(3) }" @click="paginationClick(3,$event)">03.</div>
      <div class="pagination__list" :style="{'display' : activeControl(3) ? 'block' : 'none'}">
        <ul class="pagination__works">
          <li class="works__list" :class="{'active': worksActiveControl(4)}"></li>
          <li class="works__list" :class="{'active': worksActiveControl(5)}"></li>
          <li class="works__list" :class="{'active': worksActiveControl(6)}"></li>
          <li class="works__list" :class="{'active': worksActiveControl(7)}"></li>
        </ul>
      </div>
      <div class="pagination__list" :class="{'active': activeControl(7) }" @click="paginationClick(7,$event)">04.</div>
      <div class="pagination__list" :class="{'active': activeControl(8) }" @click="paginationClick(8,$event)">05.</div>
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
      paginationClick(num, e){
        e.preventDefault();
        store.paginationLinkAction(num);
      },
      activeControl(num){
        if(num === 3){
          if(this.sharedState.location >= 3 && this.sharedState.location <= 6){
            return true;
          } else {
            return false;
          }
        }
        return this.sharedState.location == num ? true : false;
      },
      worksActiveControl(num){
        return this.sharedState.location + 1 == num ? true : false;
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/sass/foundation/mixins/mixin";
  .pagination{
    left: 60px;
    position: absolute;
    top: 50%;
    transform: translateY(-45%);
    z-index: 10;
    @media (max-height: 800px){
      left: 45px;
    }
    @media (max-height: 700px), (max-width: 1024px){
      left: 35px;
    }
    &--right{
      left: auto;
      right: 70px;
      @media (max-height: 800px){
        right: 45px;
      }
      @media (max-height: 700px), (max-width: 1024px){
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
    &__works{
      margin: -15px 0px -15px 13px;
      width: 15px;
    }
  }
  .active{
    font-weight: 700;
    &:after{
      opacity: 1;
    }
  }
  .works{
    &__list{
      background: #fff;
      border-radius: 50%;
      height: 12px;
      margin: 0 0 15px;
      width: 12px;
      &.active{
        background: #3c3c3c;
      }
    }
  }
</style>