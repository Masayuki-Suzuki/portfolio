<template>
  <div class="works__details works__details--left">
    <p class="works__caption">design / Logo design / coding</p>
    <h1 class="works__hd">marketa’s B & B</h1>
    <p class="works__lead">Marketa’s is a Bed and Breakfast Service. I coded and designed this site in a school assignment using html5, css3 (scss) and jQuery. This is my first time logo design.</p>
    <ul class="using">
      <li class="using__list">HTML5</li>
      <li class="using__list">CSS3</li>
      <li class="using__list">Sass/Scss</li>
      <li class="using__list">Javascript</li>
    </ul>
    <div class="works__view">
      <a class="works__github" href="https://github.com/Masayuki-Suzuki/marketas" target="_blank">github</a>
      <a href="http://marketas.masa.works/" target="_blank">View Site</a>
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
</style>