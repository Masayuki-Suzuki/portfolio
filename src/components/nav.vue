<template>
  <nav class="gNav">
    <p class="text">{{ text }}</p>
  </nav>
</template>

<script>
  export default {
    name: 'nav-frame',
    data: function () {
      return {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ipsa nam odit optio quibusdam tempora? Aliquam debitis quam reprehenderit! Ab, id magnam minima minus modi nesciunt perferendis totam vel vero.'
      }
    }
  }
</script>

<style lang="scss">
  $text-color:#777;
  .text{
    color: $text-color;
  }
</style>
