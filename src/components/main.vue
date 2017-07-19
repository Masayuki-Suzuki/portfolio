<template>
  <v-touch class="touchWrapper" @swipeup="swipeUp" @swipedown="swipeDown">
    <article class="mainFrame" @wheel="scrollController($event)" >
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
  </v-touch>
</template>

<script>
  import Vue from 'vue';
  import VueTouch from 'vue-touch';
  import store from '../store/store';
  import Logo from './mainFrame/logo.vue';
  import pagination from './mainFrame/pagination.vue';
  import firstView from './mainFrame/firstView.vue';
  import about from './mainFrame/about.vue';
  import works from './mainFrame/works.vue';
  import works3 from './mainFrame/ballet.vue';
  import blogs from './mainFrame/blog.vue';
  import contact from './mainFrame/contact.vue';

  Vue.use(VueTouch, {name: 'v-touch'});


  export default {
    data: function () {
      return {
        sharedState: store.state
      }
    },
    computed: {

    },
    created: function() {
      window.addEventListener('keydown', (e) => {
        this.keyEvent(e);
      });
    },
    methods: {
      scrollController(e){
        store.scrollMain(e);
      },
      calcPosition(){
        return this.sharedState.translate;
      },
      keyEvent(e){
        if(e.which === 38) {
          store.arrowKeyEvent(false);
        } else if(e.which === 40) {
          store.arrowKeyEvent(true);
        }
      },
      swipeUp(){
        store.arrowKeyEvent(true);
      },
      swipeDown(){
        store.arrowKeyEvent(false);
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
  .touchWrapper{
    height: 100%;
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