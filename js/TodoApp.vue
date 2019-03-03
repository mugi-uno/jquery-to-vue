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

export default {
  components: {
    TodoList,
    TodoEmpty,
    NextTodo,
    TodoCount,
    AddTodoButton
  },

  data() {
    return {
      todoList: []
    };
  },

  computed: {
    todoCount() {
      return this.todoList.length;
    },
    visibleTodoList() {
      return this.todoCount > 0;
    },
    nextTodo() {
      return this.todoCount > 0 ? this.todoList[0].todo : '(未登録)';
    }
  },

  methods: {
    addTodo() {
      this.todoList.push({
        key: new Date().getTime(),
        todo: ''
      });
    },

    removeTodo(index) {
      this.todoList.splice(index, 1);
    },

    updateTodo({ index, value }) {
      this.todoList[index].todo = value;
    }
  }
};
</script>
