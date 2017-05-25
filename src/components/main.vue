<template>
  <article class="mainFrame" @wheel="scrollController($event)">
    <div class="frame"></div>
    <logo></logo>
    <pagination :active-page="sharedState.paginationActive"></pagination>
    <div class="content-wrapper" :style="{ transform: calcPosition }">
      <first-view></first-view>
      <about></about>
      <works1></works1>
      <blogs></blogs>
      <contact></contact>
    </div>
  </article>
</template>

<script>
  import Vue from 'vue';
  import store from '../store/store';
  import Logo from './mainFrame/logo.vue';
  import pagination from './mainFrame/pagination.vue';
  import firstView from './mainFrame/firstView.vue';
  import about from './mainFrame/about.vue';
  import works1 from './mainFrame/works-yelpcamp.vue';
  import works3 from './mainFrame/works-ballet.vue';
  import blogs from './mainFrame/blog.vue';
  import contact from './mainFrame/contact.vue';

  export default {
    data: function () {
      return {
        sharedState: store.state
      }
    },
    computed: {
      calcPosition: function(){
        return this.sharedState.translate;
      }
    },
    methods: {
      scrollController: function(e){
        store.scrollMain(e);
      }
    }
  }

  // Create components
  Vue.component('logo', Logo);
  Vue.component('pagination', pagination);
  Vue.component('first-view', firstView);
  Vue.component('about', about);
  Vue.component('works1', works1);
  Vue.component('blogs', blogs);
  Vue.component('contact',contact)

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
    @media (max-height: 800px){
      border: solid 15px #fff;
    }
  }
  .mainFrame{
    background: url(/dist/img/topBg.jpg) no-repeat center center;
    background-size: cover;
    height:100%;
    overflow: hidden;
    width: 100%;
  }
  .content-wrapper{
    height: 100%;
    transition: all 0.5s ease-in-out 0s;
  }
  .scroll{
    &-enter-active,
    &-leave-active{
      transition: all 0.5s ease 0s;
    }
    &-enter{
      transform: translateY(-100vh);
    }
    &-leave-to{
      transform: translateY(0);
    }
  }
</style>