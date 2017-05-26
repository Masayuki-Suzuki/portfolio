<template>
  <nav class="gNav" :class="{'gNav--active': isClose}">
    <div class="navIcon" :class="{isOpen: isClose}" @click="isClose = !isClose">
      <span class="top"></span>
      <span class="middle"></span>
      <span class="bottom"></span>
    </div>
    <ul class="gNav__main" v-show="isClose">
      <li class="gNav__list"><a href="">home</a></li>
      <li class="gNav__list"><a href="">about</a></li>
      <li class="gNav__list"><a href="">works</a></li>
      <li class="gNav__list"><a href="">blog</a></li>
      <li class="gNav__list"><a href="">contact</a></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data: function () {
      return {
        isClose: false
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
  $nav-size: 74px;
  $nav-size-mid: 74px;
  $nav-size-sml: 60px;
  .gNav{
    background: #3c3c3c;
    height:$nav-size-mid;
    position: absolute;
    right: 8px;
    top: 8px;
    transition: all 0.3s ease 0s;
    width: $nav-size-mid;
    z-index: 11;
    @media (max-height: 800px){
      height: $nav-size-mid;
      width: $nav-size-mid;
    }
    @media (max-height: 700px){
      height: $nav-size-sml;
      width: $nav-size-sml;
    }
    &--active{
      height: 100%;
      right: 0;
      top: 0;
      width: 100%;
    }
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
      @include rem(24);
      letter-spacing: 0.06em;
      margin: 0 0 30px;
      position: relative;
      text-transform: uppercase;
      a{
        color: #fff;
        @include pseudo(#fff);
      }
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
    @media (max-height: 800px){
      height: $nav-size-mid - 4px;
      width: $nav-size-mid;
    }
    @media (max-height: 700px){
      height: $nav-size-sml - 4px;
      width: $nav-size-sml;
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
    }
    .top {
      animation: navIcon-top .4s;
      animation-fill-mode: forwards;
      @media (max-height: 700px){
        animation: navIcon-top-sml .4s;
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
    }
    .bottom {
      animation: navIcon-bottom .4s;
      animation-fill-mode: forwards;
      @media (max-height: 700px){
        animation: navIcon-bottom-sml .4s;
        animation-fill-mode: forwards;
      }
    }
    &.isOpen {
      right: 12px;
      top: 12px;
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
  }
</style>
