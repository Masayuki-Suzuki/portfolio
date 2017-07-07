<template>
  <article class="mainFrame" @wheel="scrollController($event)">
    <div class="frame"></div>
    <logo></logo>
    <pagination></pagination>
    <div class="content-wrapper" :style="{ transform: calcPosition() }">
      <first-view></first-view>
      <about v-if="sharedState.location <= 2"></about>
      <works v-if="sharedState.location >= 3 && sharedState.location <= 6"></works>
      <blogs v-if="sharedState.location === 7"></blogs>
      <contact v-if="sharedState.location === 8"></contact>
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
  import works from './mainFrame/works.vue';
  import works3 from './mainFrame/ballet.vue';
  import blogs from './mainFrame/blog.vue';
  import contact from './mainFrame/contact.vue';

  export default {
    data: function () {
      return {
        sharedState: store.state
      }
    },
    computed: {

    },
    methods: {
      scrollController(e){
        store.scrollMain(e);
      },
      calcPosition(){
        return this.sharedState.translate;
      }
    }
  }

  // Create components
  Vue.component('logo', Logo);
  Vue.component('pagination', pagination);
  Vue.component('first-view', firstView);
  Vue.component('about', about);
  Vue.component('works', works);
  Vue.component('blogs', blogs);
  Vue.component('contact',contact)

</script>

<style lang="scss">
  [v-cloak] {
    display:none
  }
  .frame{
    border: solid 25px #fff;
    height:100%;
    left: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    @media (max-height: 800px) , (max-width: 1024px){
      border: solid 15px #fff;
    }
  }

  .mainFrame{
    height:100%;
    overflow: hidden;
    width: 100%;
  }
  .content-wrapper{
    height: 100%;
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