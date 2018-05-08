<template>
  <div class="works__details works__details--left">
    <div class="works__ttl anon">
      <p class="works__caption">design / logo design / coding</p>
      <h1 class="works__hd">Personal Blog</h1>
    </div>
    <div class="works__desc">
      <p class="works__lead">I made my personal blog using Wordpress with Trellis, Bedrock and Sage. ( I call these things "Roots 3 combo" ) Especially Sage is almost de facto standard starter theme in the web industry.
        I’m posting articles such as web development, what I studying and studied,  a joined event, daily life and etc as my whim takes one at will.</p>
      <ul class="using">
        <li class="using__list">HTML5</li>
        <li class="using__list">CSS3</li>
        <li class="using__list">Sass/Scss</li>
        <li class="using__list">Wordpress</li>
        <li class="using__list">PHP</li>
        <li class="using__list">Trellis</li>
        <li class="using__list">Bedrock</li>
        <li class="using__list">Sage</li>
      </ul>
      <div class="works__view">
        <a class="works__github" href="https://github.com/Masayuki-Suzuki/Anonymous" target="_blank">github</a>
        <a href="https://anon.one/" target="_blank">View Site</a>
      </div>
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