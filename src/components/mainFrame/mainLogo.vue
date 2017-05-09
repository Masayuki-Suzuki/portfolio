<template>
  <div class="mainlogo">
    <object class="mainlogo__image" data="/dist/img/mainLogo.svg" type="image/svg+xml"></object>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  .mainlogo{
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    &__image{
       background: rgba(255,255,255,0.8);
       padding: 32px 29px 31px 28px;
     }
  }
</style>