<template>
  <v-touch ref="swipe" class="touchWrapper" @swipeup="swipeUp" @swipedown="swipeDown">
    <article class="mainFrame" @wheel="scrollController($event)" >
      <div class="frame" v-if="sharedState.isTablet === false"></div>
      <logo></logo>
      <pagination v-if="sharedState.isTablet === false"></pagination>
      <div class="content-wrapper" :style="{ transform: calcPosition() }">
        <first-view></first-view>
        <about v-if="sharedState.location <= 2 || sharedState.isTablet === true"></about>
        <works v-if="sharedState.location >= 3 && sharedState.location <= 7 || sharedState.isTablet === true"></works>
        <blogs v-if="sharedState.location === 8 || sharedState.isTablet === true"></blogs>
        <contact v-if="sharedState.location === 9 || sharedState.isTablet === true"></contact>
      </div>
    </article>
    <tFooter v-if="sharedState.isTablet === true"></tFooter>
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
  import tfooter from './footer.vue';

  Vue.use(VueTouch, {name: 'v-touch'});

  export default {
    data: function () {
      return {
        sharedState: store.state
      }
    },
    created: function() {
      if(document.body.clientWidth > 900){
        window.addEventListener('keydown', this.callKeyEvent);
      } else if(document.body.clientWidth <= 900) {
        this.sharedState.isTablet = true;
      }
    },
    mounted: function(){
      if(document.body.clientWidth <= 900) {
        this.disableSwipe();
        window.addEventListener('scroll', this.navColourController);
        this.sharedState.position = -1;
        this.sharedState.location = -1;
        this.sharedState.prevWindowSize = document.body.clientWidth;
      }
      window.addEventListener('resize', () => {
        if(this.checkDeviceWidth()){
          if(this.sharedState.prevWindowSize >= 900){
            window.removeEventListener('keydown', this.callKeyEvent);
            window.addEventListener('scroll', this.navColourController);
            this.disableSwipe();
            this.sharedState.isTablet = true;
            this.sharedState.position = -1;
            this.sharedState.location = -1;
            this.sharedState.isRight = false;
            this.sharedState.isColorClass = true;
          }
          this.sharedState.prevWindowSize = document.body.clientWidth;
        } else {
          if(this.sharedState.prevWindowSize <= 900){
            window.addEventListener('keydown', this.callKeyEvent);
            window.removeEventListener('scroll', this.navColourController);
            this.enableSwipe();
            this.sharedState.isTablet = false;
            this.sharedState.position = 0;
            this.sharedState.location = 1;
            this.sharedState.isColorClass = true;
          }
          this.sharedState.prevWindowSize = document.body.clientWidth;
        }
      });
    },
    methods: {
      scrollController(e){
        if(document.body.clientWidth > 900){
          store.scrollMain(e);
        }
      },
      calcPosition(){
        return this.sharedState.translate;
      },
      callKeyEvent(e){
        this.keyEvent(e);
      },
      keyEvent(e){
        if(e.which === 38) {
          store.arrowKeyEvent(false);
        } else if(e.which === 40) {
          store.arrowKeyEvent(true);
        }
      },
      swipeUp(){
        if(document.body.clientWidth > 900){
          store.arrowKeyEvent(true);
        }
      },
      swipeDown(){
        if(document.body.clientWidth > 900){
          store.arrowKeyEvent(false);
        }
      },
      checkDeviceWidth(){
        let temp = 0;
        temp = store.checkDeviceWidth()
        return temp;
      },
      enableSwipe(){
        this.$refs.swipe.enableAll();
      },
      disableSwipe(){
        this.$refs.swipe.disableAll();
      },
      navColourController(){
        store.navColourChange();
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
  Vue.component('contact', contact);
  Vue.component('tFooter', tfooter);
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
    @media (max-width: 900px){
      display: none;
    }
  }
  .touchWrapper{
    height: 100%;
  }
  .mainFrame{
    height:100%;
    overflow: hidden;
    width: 100%;
    @media (max-width: 900px){
      overflow: initial;
    }
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