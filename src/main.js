import Vue from 'vue';
import app from './components/app.vue';
import store from './store/store';
import * as style from '../assets/build/sass/style.css';

new Vue(app).$mount('#app');
