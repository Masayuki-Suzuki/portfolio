<template>
  <article class="mainFrame">
    <div class="frame"></div>
    <logo :isColorClass="isColorClass"></logo>
    <pagination :isColorClass="isColorClass"></pagination>
    <first-view></first-view>
    <about></about>
    <works1></works1>
    <blogs></blogs>
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

  export default {
    data: function () {
      return {
        isColorClass: true,
        scrollControl: 5,
        test: false,
        show: [true,false,false,false,false]
      }
    },
    methods: {
      /*scrollEvent(e){
        let prevPage = this.scrollControl / 5 - 2;
        let thisPage = this.scrollControl / 5 - 1;
        let nextPage = this.scrollControl / 5;
        var delta = e.deltaY;
        console.log("delta: " + delta);
        console.log("scrollControl: " + this.scrollControl);
        console.log("pages:" + prevPage + " / " + thisPage + " / " + nextPage);
        if(!this.test){

          if (delta >= 5) {
            e.preventDefault();
            if (thisPage < 4) {
              console.log("here")
              Vue.set(this.show, thisPage, !this.show[thisPage]);
              Vue.set(this.show, nextPage, !this.show[nextPage]);
              this.scrollControl += 5 ;
              if(this.scrollControl > 25){
                this.scrollControl = 25;
              }
              this.test = true;
            }
          } else if (delta <= -5 ) {
            e.preventDefault();
            if (thisPage > 0) {
              Vue.set(this.show, thisPage, !this.show[thisPage]);
              Vue.set(this.show, prevPage, !this.show[prevPage]);
              this.scrollControl -= 5;
              if(this.scrollControl < 5){
                this.scrollControl = 5;
              }
              this.test = true;
            }
          }
        } else {
          setTimeout(function () {
            this.test = false;
          }.bind(this), 3000);
        }
        console.log(this.show);
      }*/
    }
  }



  // Create components
  Vue.component('logo', Logo);
  Vue.component('pagination', pagination);
  Vue.component('first-view', firstView);
  Vue.component('about', about);
  Vue.component('works1', works1);
  Vue.component('blogs', blogs);
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
    overflow-y: auto;
    width: 100%;
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