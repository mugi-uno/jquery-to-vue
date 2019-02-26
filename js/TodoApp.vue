<template>
  <div>
    <add-todo-button @click='addTodo' />
    <todo-list
      :todo-list='todoList'
      :visible='visibleTodoList'
      @update='updateTodo($event)'
      @remove='removeTodo($event)'
    />
    <todo-empty :visible='!visibleTodoList' />
    <div>
      <next-todo :next-todo-text='nextTodo' />
      <todo-count :count='todoCount' />
    </div>
  </div>
</template>

<script>
import TodoList from './TodoList';
import TodoEmpty from './TodoEmpty';
import NextTodo from './NextTodo';
import TodoCount from './TodoCount';
import AddTodoButton from './AddTodoButton';
import * as store from './ObservableStore';

export default {
  components: {
    TodoList,
    TodoEmpty,
    NextTodo,
    TodoCount,
    AddTodoButton
  },

  computed: {
    todoList: () => store.state.todoList,
    todoCount: store.getters.todoCount,
    visibleTodoList: store.getters.visibleTodoList,
    nextTodo: store.getters.nextTodo
  },

  methods: {
    addTodo: store.mutations.addTodo,
    removeTodo: store.mutations.removeTodo,
    updateTodo: store.mutations.updateTodo
  }
};
</script>
