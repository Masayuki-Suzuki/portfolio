<template>
  <div class="works__details works__details--right">
    <p class="works__caption">design / coding</p>
    <h1 class="works__hd works__hd--ballet">Ballet Bloch Canada</h1>
    <p class="works__lead">Ballet Bloch Canada is the classical ballet and contemporary dance training school. I coded and designed this site in a school assignment using html5 and css3 (scss). I haven't learned about designing and haven't designed a website for a while so it was a little bit difficult.</p>
    <ul class="using">
      <li class="using__list">HTML5</li>
      <li class="using__list">CSS3</li>
      <li class="using__list">Sass/Scss</li>
    </ul>
    <div class="works__view">
      <a class="works__github" href="https://github.com/Masayuki-Suzuki/ballet-bloch" target="_blank">github</a>
      <a href="http://ballet-bloch.masa.works/" target="_blank">View Site</a>
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