<template>
  <div class="works__details works__details--right">
    <div class="works__ttl">
      <p class="works__caption">design / logo design / coding</p>
      <h1 class="works__hd">Portfolio Site</h1>
    </div>
    <div class="works__desc">
      <p class="works__lead">This is my portfolio site. It's created by Vue.js mainly also used Node.js and Express in the back-end. Apart from that, I've coded all events and animation by Javascript from scratch. This site was a little bit challenging to me.</p>
      <ul class="using">
        <li class="using__list">HTML5</li>
        <li class="using__list">CSS3</li>
        <li class="using__list">Sass/Scss</li>
        <li class="using__list">Javascript</li>
        <li class="using__list">Vue.js</li>
        <li class="using__list">Node.js</li>
        <li class="using__list">Express</li>
      </ul>
      <div class="works__view">
        <a class="works__github" href="https://github.com/Masayuki-Suzuki/portfolio" target="_blank">github</a>
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