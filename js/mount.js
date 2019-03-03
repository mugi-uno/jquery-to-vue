import Vue from 'vue';
import TodoApp from './TodoApp';
import NextTodo from './NextTodo';
import TodoCount from './TodoCount';
import TodoEmpty from './TodoEmpty';

new Vue(TodoApp).$mount('#app');
new Vue(NextTodo).$mount('#nextTodo');
new Vue(TodoCount).$mount('#todoCount');
new Vue(TodoEmpty).$mount('#todoEmpty');
