<template>
  <article class="mainFrame" @wheel.stop="scrollEvent($event)">
    <div class="frame"></div>
    <logo :isColorClass="isColorClass"></logo>
    <pagination :isColorClass="isColorClass"></pagination>
    <transition name="scroll">
      <first-view v-show="show[0]"></first-view>
    </transition>
    <transition name="scroll">
      <about v-show="show[0]"></about>
    </transition>
  </article>
</template>

<script>
  import Vue from 'vue';
  import Logo from './mainFrame/logo.vue';
  import pagination from './mainFrame/pagination.vue';
  import firstView from './mainFrame/firstView.vue';
  import about from './mainFrame/about.vue';

  export default {
    data: function () {
      return {
        isColorClass: true,
        scrollControl: 0,
        test: true,
        show: [true,false,false,false,false]
      }
    },
    methods: {
      scrollEvent(e){
        e.preventDefault();
        e.stopPropagation();
        console.dir(thisPage);
        var delta = e.deltaY;
        console.log(delta)
        if (delta > this.scrollControl) {
          if (thisPage <= this.show.length) {
            Vue.set(this.show, thisPage, !this.show[thisPage]);
            Vue.set(this.show, nextPage, !this.show[nextPage]);
            this.scrollControl += 20;
          }
        } else if (delta < -20) {
          if (thisPage >= 0) {
            Vue.set(this.show, thisPage, !this.show[thisPage]);
            Vue.set(this.show, prevPage, !this.show[prevPage]);
            this.scrollControl -= 20;
            if(this.scrollControl <= 0){
              this.scrollControl = 20;
            }
          }
        }
      }
    }
  }



  // Create components
  Vue.component('logo', Logo);
  Vue.component('pagination', pagination);
  Vue.component('first-view', firstView);
  Vue.component('about', about);
</script>

<style lang="scss">
  .frame{
    border: solid 25px #fff;
    height:100%;
    left: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  }
  .mainFrame{
    background: url(/dist/img/topBg.jpg) no-repeat center center;
    background-size: cover;
    height:100%;
    width: 100%;
  }
  .scroll{
    &-enter-active,
    &-leave-active{
      transition: all 0.5s ease 0s;
    }
    &-enter,
    &-leave-to{
      transform: translateY(-100vh);
    }
  }
</style>