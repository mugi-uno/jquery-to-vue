const state = {
  todoList: []
};

const getters = {
  todoCount(state) {
    return state.todoList.length;
  },
  visibleTodoList(state) {
    return getters.todoCount(state) > 0;
  },
  nextTodo(state) {
    return getters.todoCount(state) > 0 ? state.todoList[0].todo : '(未登録)';
  }
};

const mutations = {
  addTodo(state) {
    state.todoList.push({
      key: new Date().getTime(),
      todo: ''
    });
  },

  removeTodo(state, index) {
    state.todoList.splice(index, 1);
  },

  updateTodo(state, { index, value }) {
    state.todoList[index].todo = value;
  }
};

export default { state, getters, mutations };
