<template>
  <nav class="gNav" :class="{
    'gNav__firstView': activePage(1),
    'gNav__about': activePage(2),
    'gNav__works': activePage(3),
    'gNav__blogs': activePage(7),
    'gNav__contact': activePage(8),
    'gNav--active': isClose,
    'right-to-left': rtl(),
    'left-to-right': ltr()
  }" @wheel="blockScroll($event)">
    <div class="navIcon" :class="{isOpen: isClose, isHidden: isHidden()}" @click="isClose = !isClose">
      <span class="top"></span>
      <span class="middle"></span>
      <span class="bottom"></span>
    </div>
    <p class="gNav__ttl" :class="{ 'ttl__active': !activePage(1), isHidden: isHidden() }">Masayuki Suzuki Portfolio Web Site</p>
    <ul class="navSns" :class="{ 'navSns--active': !activePage(1), isHidden: isHidden()}">
      <li class="navSns__list">
        <a class="sns__link github sns__link--nav" href="https://github.com/Masayuki-Suzuki" target="_blank"></a>
      </li>
      <li class="navSns__list">
        <a class="sns__link linkedin sns__link--nav" href="https://www.linkedin.com/in/masayuki-suzuki/"　target="_blank"></a>
      </li>
      <li class="navSns__list">
        <span class="sns__link email sns__link--nav" @click="paginationClick(8)"></span>
      </li>
    </ul>
    <ul class="gNav__main" v-if="isClose">
      <li class="gNav__list" @click="paginationClick(1)">home</li>
      <li class="gNav__list" @click="paginationClick(2)">about</li>
      <li class="gNav__list" @click="paginationClick(3)">works</li>
      <li class="gNav__list" @click="paginationClick(7)">blog</li>
      <li class="gNav__list" @click="paginationClick(8)">contact</li>
    </ul>
  </nav>
</template>

<script>
  import store from '../store/store';
  export default {
    data: function () {
      return {
        sharedState: store.state,
        isClose: false
      }
    },
    methods: {
      blockScroll(e){
        e.preventDefault();
      },
      activePage(num){
        if(num >= 3 && num <= 6){
          if(this.sharedState.location >= 3 && this.sharedState.location <= 6){
            return true;
          } else {
            return false;
          }
        }
        return this.sharedState.location == num ? true : false;
      },
      rtl(){
        return this.sharedState.rtl;
      },
      ltr(){
        return store.state.ltr;
      },
      isHidden(){
        return store.state.isHidden;
      },
      paginationClick(num){
        store.paginationLinkAction(num);
        this.isClose = !this.isClose;
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/sass/foundation/mixins/mixin";

  @keyframes navIcon-top {
    0% {
      transform: translateY(0px) rotate(-45deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(-10px) rotate(0deg);
    }
  }

  @keyframes navIcon-top-sml {
    0% {
      transform: translateY(0px) rotate(-45deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(-8px) rotate(0deg);
    }
  }

  @keyframes navIcon-bottom {
    0% {
      transform: translateY(-1px) rotate(45deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(8px) rotate(0deg);
    }
  }

  @keyframes navIcon-bottom-sml {
    0% {
      transform: translateY(-1px) rotate(45deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(6px) rotate(0deg);
    }
  }

  @keyframes navIcon-top-close {
    0% {
      transform: translateY(-10px) rotate(0deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(0px) rotate(-45deg);
    }
  }

  @keyframes navIcon-bottom-close {
    0% {
      transform: translateY(8px) rotate(0deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(-4px) rotate(45deg);
    }
  }

  @keyframes navIcon-top-mid-w {
    0% {
      transform: translateY(0px) rotate(-45deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(-7px) rotate(0deg);
    }
  }

  @keyframes navIcon-bottom-mid-w{
    0% {
      transform: translateY(-1px) rotate(45deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(5px) rotate(0deg);
    }
  }

  $nav-size: 74px;
  $nav-size-mid: 74px;
  $nav-size-sml: 60px;
  .gNav{
    background: #3c3c3c;
    height: 100%;
    overflow: hidden;
    position: absolute;
    transition: all 0.3s ease 0s;
    z-index: 11;
    &__main{
      align-items:center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 100%;
    }
    &__list{
      color: #fff;
      cursor: pointer;
      @include rem(24);
      letter-spacing: 0.06em;
      margin: 0 0 30px;
      position: relative;
      text-transform: uppercase;
    }
    &__ttl{
      color: #fff;
      @include rem(14);
      letter-spacing: 0.06em;
      opacity: 0;
      position: absolute;
      right: -225%;
      top: 50%;
      text-align: center;
      text-transform: uppercase;
      transition: all .5s ease 0s;
      transform: rotate(90deg);
      width: 400px;
      z-index: 1;
      @media (max-height: 700px){
        @include rem(12);
        right: -166%;
        width: 300px;
      }
    }
    &__firstView{
      height: $nav-size-mid;
      right: 12px;
      top: 12px;
      transition: all .3s ease 0s;
      width: $nav-size-mid;
      @media (max-height: 800px){
        right: 8px;
        top: 8px;
      }
      @media (max-height: 700px){
        height: $nav-size-sml;
        width: $nav-size-sml;
      }

      @media (max-width: 1024px){
        height: 45px;
        width: 45px;
      }
      .isOpen{
        right: 12px;
        top: 12px;
      }
    }
    &__about,
    &__blogs{
      right: 0;
      top: 0;
      transition: all .3s ease 0s;
      width: $nav-size-mid;
      @media (max-height: 700px){
        width: $nav-size-sml;
      }
      @media (max-width: 950px){
        width: 45px;
      }
    }
    &__works,
    &__contact{
      left: 0;
      right: auto;
      top: 0;
      width: $nav-size-mid;
      @media (max-height: 700px){
        width: $nav-size-sml;
      }
      @media (max-width: 950px){
        width: 45px;
      }
    }
    &.right-to-left{
      height: 100%;
      left: auto;
      right: 0;
      transition: all 0.3s ease 0s;
      width: 100%;
    }
    &.left-to-right{
      height: 100%;
      left: 0;
      right: auto;
      transition: all 0.3s ease 0s;
      width: 100%;
    }
  }
  .navIcon{
    cursor: pointer;
    display: block;
    height: $nav-size-mid - 2px;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.4s ease 0s;
    width: $nav-size-mid;
    z-index: 2;
    @media (max-height: 800px){
      height: $nav-size-mid - 4px;
    }
    @media (max-height: 700px){
      height: $nav-size-sml - 4px;
      width: $nav-size-sml;
    }
    @media (max-width: 1024px){
      height: 45px;
      width: 45px;
    }
    span {
      background: #fff;
      height: 2px;
      display: block;
      left: 50%;
      margin-left: -15px;
      position: relative;
      top: 50%;
      transition: 0.3s opacity;
      width: 30px;
      @media (max-height: 700px){
        margin-left: -12px;
        width: 24px;
      }
      @media (max-width: 1024px){
        height: 1px;
        margin-left: -11px;
        width: 20px;
      }
    }
    .top {
      animation: navIcon-top .4s;
      animation-fill-mode: forwards;
      @media (max-height: 700px){
        animation: navIcon-top-sml .4s;
        animation-fill-mode: forwards;
      }
      @media (max-width: 1024px){
        animation: navIcon-top-mid-w .4s;
        animation-fill-mode: forwards;
      }
    }
    .middle {
      transition: .4s opacity;
      transform: translateY(-1px);
      opacity: 1;
      width: 20px;
      @media (max-height: 700px){
        width: 15px;
      }
      @media (max-width: 1024px){
        width: 12px;
      }
    }
    .bottom {
      animation: navIcon-bottom .4s;
      animation-fill-mode: forwards;
      @media (max-height: 700px){
        animation: navIcon-bottom-sml .4s;
        animation-fill-mode: forwards;
      }
      @media (max-width: 1024px){
        animation: navIcon-bottom-mid-w .4s;
        animation-fill-mode: forwards;
      }
    }
    &.isOpen {
      .middle {
        opacity: 0;
        transition: .4s opacity;
      }
      .top {
        animation: navIcon-top-close .4s;
        animation-fill-mode: forwards;
      }
      .bottom {
        animation: navIcon-bottom-close .4s;
        animation-fill-mode: forwards;
      }
    }
    &.isHidden{
      opacity: 0;
      transition: all 0.3s ease 0s;
    }
  }
  .navSns{
    bottom: 5%;
    opacity: 0;
    position: absolute;
    right: -30%;
    transition: all .5s ease 0s;
    @media (max-height: 600px){
      bottom: 3%;
    }
    @media (max-height: 500px){
      display: none;
    }

    &__list{
      margin: 10px 0;
      text-align: center;
    }
    &--active{
      opacity: 1;
      right: 30%;
      transition: all .5s ease 0.3s;
      @media (max-width: 1024px){
        right: 23%;
      }
    }
    &.isHidden{
      opacity: 0;
      transition: opacity .2s ease 0s;
    }
  }

  .ttl__active{
    opacity: 1;
    right: -219%;
    transition: all .3s ease .5s;
    @media (max-height: 700px){
      right: -199%;
    }
    @media (max-width: 1024px){
      @include rem(12);
      right: -285%;
      width: 300px;
    }
  }
  .gNav--active{
    height: 100%;
    right: 0;
    top: 0;
    transition: all .3s ease 0s;
    width: 100%;
  }

</style>
