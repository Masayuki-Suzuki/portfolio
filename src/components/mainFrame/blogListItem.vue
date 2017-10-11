<template>
  <div class="blogs__list" :class="{ 'blogs__list--right': ((num % 2) == 0 ) ? true : false }">
    <div class="blogs__thumbnail">
      <img :src="sharedState.blogImages[num - 1]" :alt="sharedState.blogTitles[num - 1]">
    </div>
    <div class="blogs__desc">
      <time>{{ sharedState.blogDates[num - 1].month }} / {{ sharedState.blogDates[num - 1].day }} / {{ sharedState.blogDates[num - 1].year }} - {{ sharedState.blogCategories[num - 1] }}</time>
      <h2 class="title">{{ sharedState.blogTitles[num - 1] }}</h2>
      <p class="summary">{{ sharedState.blogContents[num - 1] }}</p>
      <div class="viewPost">
        <a :href="sharedState.blogURLs[num - 1]" target="_blank">Read the post</a>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import store from '../../store/store';

  export default {
    props: ['num'],
    created(){
      setTimeout( ()=>{
        this.$set(this.sharedState, store.state);
        console.log(this.sharedState);
      },0);

    },
    data: function () {
      return {
        sharedState: store.state
      }
    }
  }
</script>