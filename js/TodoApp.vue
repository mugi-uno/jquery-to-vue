<template>
  <todo-list
    :todo-list='todoList'
    :visible='visibleTodoList'
  />
</template>

<script>
import TodoList from './TodoList';
import EventBus, {
  ADD_TODO,
  REMOVE_TODO
} from './EventBus';

export default {
  components: { TodoList },

  data() {
    return {
      todoList: []
    };
  },

  beforeMount() {
    EventBus.$on(ADD_TODO, () => {
      this.addTodo();
    });
    EventBus.$on(REMOVE_TODO, (index) => {
      this.removeTodo();
    });
  },

  computed: {
    todoCount() {
      return this.todoList.length;
    },
    visibleTodoList() {
      return this.todoCount > 0;
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
    }
  }
};
</script>
