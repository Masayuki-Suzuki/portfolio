<template>
  <div class="works__details works__details--right">
    <p class="works__caption">design / coding</p>
    <h1 class="works__hd">Ballet Bloch Canada</h1>
    <p class="works__lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <ul class="using">
      <li class="using__list">HTML5</li>
      <li class="using__list">CSS3</li>
      <li class="using__list">Sass/Scss</li>
    </ul>
    <div class="works__view">
      <a href="http://ballet-bloch.masa.works/" target="_blank">View Site</a>
    </div>
    <div class="works__github">
      <a href="https://github.com/Masayuki-Suzuki/yelpCamp" target="_blank"></a>
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