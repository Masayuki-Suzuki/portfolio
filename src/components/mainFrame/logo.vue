<template>
  <div class="logo">
    <svg width="70" height="57" viewBox="0 0 70 57" xmlns="http://www.w3.org/2000/svg">
      <title>logo</title>
      <path :class="{logoWhite: isColorClass, logoBlack: !isColorClass}" d="M14.573 41.567l5.01-18.199 4.724 22.053 8.446-39.395 8.016 50.957 5.583-27.405 4.437 15.201 4.581-24.836 14.601-4.497-15.03 3.426-4.867 21.84-3.865-13.49-5.297 22.267L32.323.031l-8.16 39.61-5.01-20.34-5.01 21.196L.115 46.064z" stroke="#FFF" fill="#FFF" fill-rule="evenodd"/>
    </svg>
  </div>
</template>

<script>
  export default {
    props: ['isColorClass']
  }
</script>

<style lang="scss">
  .logo{
    left:20px;
    padding: 20px;
    position: absolute;
    top:20px;
  }
  .logoWhite {
    fill: #fff;
    stroke: #fff;
  }
  .logoBlack {
    fill: #3c3c3c;
    stroke: #3c3c3c
  }
</style>