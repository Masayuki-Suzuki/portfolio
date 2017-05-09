import Vue from 'vue';
import mainFrame from './components/app.vue';
require('../assets/build/sass/style.css');

new Vue(mainFrame).$mount('#app');

