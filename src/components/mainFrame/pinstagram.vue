<template>
  <div class="works__details works__details--left">
    <p class="works__caption">design / coding</p>
    <h1 class="works__hd works__hd--ballet">Pinstagram</h1>
    <p class="works__lead">Pinstagram is a photo sharing service which cloned and combined Instagram and Pinterest. It's created by React, Redux, Next. This project is still working on, I'm planning to release this Single Page Application as soon as possible.</p>
    <ul class="using">
      <li class="using__list">HTML5</li>
      <li class="using__list">CSS3</li>
      <li class="using__list">Sass/Scss</li>
      <li class="using__list">Javascript</li>
      <li class="using__list">ES2015-2017</li>
      <li class="using__list">React</li>
      <li class="using__list">Redux</li>
      <li class="using__list">Next.js</li>
      <li class="using__list">Node.js</li>
      <li class="using__list">Koa.js</li>
      <li class="using__list">MongoDB</li>
    </ul>
    <div class="works__view">
      <a class="works__github" href="https://github.com/Masayuki-Suzuki/Pinstagram" target="_blank">github</a>
      <span href="http://ballet-bloch.masa.works/" target="_blank">coming soon</span>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    data: function () {
      return {
        isColorClass: false,
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/sass/foundation/mixins/mixin";
  @import "../../../assets/sass/foundation/variables/variables";
  .works__hd--ballet{
    @media (max-width: 1480px){
      @include rem(46);
    }
    @media (max-width: 1200px){
      @include rem(39);
    }
  }
</style>