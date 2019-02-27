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
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    TodoList,
    TodoEmpty,
    NextTodo,
    TodoCount,
    AddTodoButton
  },

  computed: {
    ...mapState([
      'todoList'
    ]),
    ...mapGetters([
      'todoCount',
      'visibleTodoList',
      'nextTodo'
    ])
  },

  methods: {
    ...mapMutations([
      'addTodo',
      'removeTodo',
      'updateTodo'
    ])
  }
};
</script>
