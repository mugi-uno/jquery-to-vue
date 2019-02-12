import Vue from 'vue';

export const state = Vue.observable({
  nextTodoText: '',
  count: 0
});

export const mutations = {
  updateNextTodoText(text) {
    state.nextTodoText = text;
  },
  updateTodoCount(count) {
    state.count = count;
  }
};
