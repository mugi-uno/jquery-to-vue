import Vue from 'vue';

export const state = Vue.observable({
  todoList: []
});

export const getters = {
  todoCount() {
    return state.todoList.length;
  },
  visibleTodoList() {
    return getters.todoCount() > 0;
  },
  nextTodo() {
    return getters.todoCount() > 0 ? state.todoList[0].todo : '(未登録)';
  }
};

export const mutations = {
  addTodo() {
    state.todoList.push({
      key: new Date().getTime(),
      todo: ''
    });
  },
  
  removeTodo(index) {
    state.todoList.splice(index, 1);
  },
  
  updateTodo({ index, value }) {
    state.todoList[index].todo = value;
  }  
};
