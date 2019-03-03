<template>
  <div v-if='false'></div>
</template>

<script>
import EventBus, {
  ADD_TODO,
  REMOVE_TODO
} from './EventBus';

export default {
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
