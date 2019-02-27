import Vue from 'vue';
import Vuex from 'vuex';
import TodoApp from './TodoApp';
import storeData from './store';

Vue.use(Vuex) 

const store = new Vuex.Store(storeData);

new Vue({ store, render: h => h(TodoApp) }).$mount('#app');
