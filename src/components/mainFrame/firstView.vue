<template>
  <section class="firstView">
    <div class="mainlogo">
      <div class="mainlogo__image">
        <object  data="/dist/img/mainLogo.svg" type="image/svg+xml"></object>
      </div>
    </div>
    <ul class="sns">
      <li class="sns__list">
        <a class="sns__link github" href="https://github.com/Masayuki-Suzuki" target="_blank"></a>
      </li>
      <li class="sns__list">
        <a class="sns__link linkedin" href="https://www.linkedin.com/in/masayuki-suzuki/"　target="_blank"></a>
      </li>
      <li class="sns__list">
        <span class="sns__link email" @click="paginationClick(8)"></span>
      </li>
    </ul>
    <div class="scroll-icon">
      <div class="scroll-icon__main"></div>
      <p class="scroll-icon__text">Scroll</p>
    </div>
  </section>
</template>

<script>
  import store from '../../store/store';
  export default {
    methods: {
      paginationClick(num){
        if(document.body.clientWidth <= 900){
          store.targetController(num + 1);
          this.isClose = !this.isClose;
        } else {
          store.paginationLinkAction(num);
          this.isClose = !this.isClose;
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/sass/foundation/mixins/mixin";
  @keyframes scrollAnimation {
    0% {
      opacity: 0;
      transform: translateY(0px);
    }
    37.5%{
      opacity: 1;
    }
    75% {
      opacity: 0;
      transform: translateY(7px);
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes scrollAnimation-touch{
    from, 20%,55%, 80%, to {
      transform: translate3d(0,0,0);
    }

    40%, 45% {
      transform: translate3d(0, -30px, 0);
    }

    70% {
      transform: translate3d(0, -20px, 0);
    }

    90% {
      transform: translate3d(0, 0px,0);
    }
  }
  .firstView{
    background: url(/dist/img/topBg.jpg) no-repeat center center;
    background-size: cover;
    height:100%;
    position: relative;
    transition: all 0.5s ease 0s;
    width: 100%;
    z-index: 0;
    @media (max-width:900px){
      height: 100vh;
      min-height: 500px;
    }
  }
  .mainlogo{
    align-items: center;
    display: flex;
    justify-content: center;
    padding:30vh 0 0;
    pointer-events: none;
    &__image{
      background: rgba(255,255,255,0.6);
      padding: 32px 34px 28px 34px;
    }
    @media (max-height: 700px),(max-width: 1024px){
      padding: 32vh 0 0;
      &__image{
        width: 240px;
        object{
          width: 100%;
        }
      }
    }
    @media (max-height: 600px){
      padding: 27vh 0 0;
    }
    @media (max-width: 900px){
      padding: 35vh 0 0 0;
      &__image {
        width: 270px;
      }
    }
    @media (max-width: 900px) and (max-height: 700px){
      padding: 30vh 0 0 0;
      &__image {
        width: 240px;
      }
    }
    @media (max-width: 900px) and (max-height: 550px){
      padding: 24vh 0 0 0;
    }
    @media (max-width: 550px) {
      padding: 28vh 0 0 0;
      &__image {
        padding: 18px 22px;
        width: 200px;
      }
    }
  }
  .sns{
    margin: 15px 0;
    text-align: center;
    width: 100%;
    @media (max-width: 900px){
      margin: 32px 0 0;
    }
    @media (max-width: 900px) and (max-height: 550px), (max-width: 550px){
      margin: 20px 0 0;
    }
    &__list{
      display: inline-block;
      margin: 0 7px;
      @media (max-width: 550px){
        margin: 0 12px;
      }
    }
    &__link{
      display: block;
      &:before{
        color: rgba(255,255,255,0.8);
        display: block;
        font-family: fontawesome;
        @include rem(36);
        line-height: 1;
        @media (max-width: 900px){
          @include rem(40);
        }
        @media (max-width: 900px) and (max-height: 550px){
          @include rem(34);
        }
      }
      &--nav{
        &:before {
          color: #fff;
          @include rem(30);
          @media (max-height: 600px), (max-width: 1024px){
            @include rem(24);
          }
        }
      }
    }
  }
  .github{
    &:before{
      content: '\f092';
    }
  }
  .linkedin{
    &:before{
      content: '\f08c';
    }
  }
  .email{
    &:before{
      content: '\f003';
      cursor: pointer;
    }
  }
  .scroll-icon{
    bottom: 4%;
    left: 50%;
    margin: 0 0 0 -23px;
    text-align: center;
    position: absolute;
    /*Landscape（画面横）*/
    @media (max-device-width: 1024px) and (orientation: landscape),
    (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 1) and (orientation: landscape),
    (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape){
      bottom: 11%;
    }
    @media (max-width: 900px){
      animation: scrollAnimation-touch 1.5s infinite;
      bottom: 8%;
    }
    @media (max-width: 900px) and (max-height: 600px){
      margin: 0 0 0 -18px;
    }
    @media (max-width: 550px){
      bottom: 12%;
    }
    &__main{
      border: solid 2px #fff;
      border-radius: 15px;
      display: inline-block;
      height: 46px;
      position: relative;
      width: 30px;
      @media (max-width: 900px){
        border: solid 3px #fff;
        border-top: 0;
        border-right: 0;
        border-radius: 0;
        height: 36px;
        opacity: 0.8;
        transform: rotateZ(-45deg);
        width: 36px;
      }
      @media (max-width: 900px) and (max-height: 600px){
        height: 28px;
        width: 28px;
      }
      &:before{
        animation: scrollAnimation 1.5s ease infinite;
        background: #fff;
        border-radius:50%;
        content:"";
        display: block;
        height: 8px;
        left:50%;
        margin: 0 0 0 -4px;
        position: absolute;
        top: 8px;
        width:8px;
        @media (max-width: 900px){
          content:none;
        }
      }

    }
    &__text{
      color: #fff;
      @include rem(16);
      font-weight:700;
      letter-spacing: 1px;
      @media (max-height: 800px){
        @include rem(15);
      }
      @media (max-width: 900px){
        display: none;
      }
    }
  }
  .scroll-out{
    transform: translateY(-100vh);
  }
</style>