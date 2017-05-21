<template>
  <article class="mainFrame" @wheel="scrollController($event)">
    <div class="frame"></div>
    <logo :isColorClass="isColorClass"></logo>
    <pagination :isColorClass="isColorClass"></pagination>
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
        isColorClass: true,
        isFired: false,
        delta: 0,
        uintDelta: 0,
        timeStamp: 0,
        sleep: 300,
        cTime: Date.now(),
        cDelta: 0,
        position: 0,
        location: 1
      }
    },
    computed: {
      calcPosition: function(){
        return 'translateY(' + (this.position * -100) + 'vh)';
      }
    },
    methods: {
      scrollEvent: function(direction){
        console.log('scroll');
        if(direction && this.position < 4){
          this.position++;
          this.location++;
        } else {
          if(this.position > 0) {
            this.position--;
            this.location--;
          }
        }
        if(this.location > 1){
          this.isColorClass = false;
        } else {
          this.isColorClass = true;
        }
        switch (this.position){
          case 0:
            history.replaceState('','','/');
            break;
          case 1:
            history.replaceState('','','/about');
            break;
          case 2:
            history.replaceState('','','/works');
            break;
          case 3:
            history.replaceState('','','/blogs');
            break;
          case 4:
            history.replaceState('','','/contact');
            break;
          default:
            break;
        }
      },
      scrollController: function(e){
        e.preventDefault();
        this.delta = e.deltaY ? -(e.deltaY) : e.wheelDelta ? e.wheelDelta : -(e.detail);
        if (!this.delta) {
          return;
        }
        this.uintDelta = Math.abs(this.delta);
        if (this.uintDelta - this.cDelta > 0) {
          this.timeStamp = e.timeStamp;
          if (!this.isFired && this.timeStamp - this.cTime > this.sleep) {
            if(this.delta < 0){
              this.scrollEvent(true);
            } else {
              this.scrollEvent(false);
            }
            this.isFired = true;
          }
          this.cTime = this.timeStamp;
        } else {
          this.isFired = false;
        }
        this.cDelta = this.uintDelta;
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
    height: 100vh;
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