<template>
  <div class="logo" :class="{'logo__right': sharedState.isRight}" @click="logoClick($event)">
    <svg class="logo__svg" viewBox="0 0 70 57" xmlns="http://www.w3.org/2000/svg">
      <title>logo</title>
      <path class="path" :class="{logoWhite: sharedState.isColorClass, logoBlack: !sharedState.isColorClass}" d="M14.573 41.567l5.01-18.199 4.724 22.053 8.446-39.395 8.016 50.957 5.583-27.405 4.437 15.201 4.581-24.836 14.601-4.497-15.03 3.426-4.867 21.84-3.865-13.49-5.297 22.267L32.323.031l-8.16 39.61-5.01-20.34-5.01 21.196L.115 46.064z" stroke="#FFF" fill="#FFF" fill-rule="evenodd"/>
    </svg>
  </div>
</template>

<script>
  import store from '../../store/store';
  export default {
    data: function(){
      return {
        sharedState: store.state
      }
    },
    methods: {
      logoClick(e){
        let num = store.state.location;
        e.preventDefault();
        if(num !== 1){
          store.paginationLinkAction(1);
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../assets/sass/foundation/variables/variables';
  .logo{
    cursor: pointer;
    left: $FrameWidth;
    padding: 20px;
    position: fixed;
    top:$FrameWidth;
    z-index: 10;
    @media (max-height: 800px){
      left: 15px;
      padding: 15px;
      top: 15px;
    }
    @media (max-height: 700px){
      left: 15px;
      padding: 10px;
      top: 15px;
    }
    @media (max-width: 900px){
      left: 0;
      padding: 25px;
      top: 0;
    }
    @media (max-width: 740px){
      padding: 25px 15px;
    }
    &__right{
      left: auto;
      right: $FrameWidth;
      @media (max-height: 800px){
        right: 20px;
      }
      @media (max-height: 700px){
        right: 15px;
      }
    }
    &__svg{
      height: auto;
      width: 70px;
      @media (max-height: 800px), (max-width: 740px){
        width: 60px;
      }
      @media (max-height: 700px), (max-width: 550px){
        width: 50px;
      }
    }
  }
  .logoWhite {
    fill: #fff;
    stroke: #fff;
  }
  .logoBlack {
    fill: #3c3c3c;
    stroke: #3c3c3c
  }
  .path{
    transition: all 0.5s ease 0.2s;
  }
</style>