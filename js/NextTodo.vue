<template>
  <span id='nextTodo'>次のTODO: {{nextTodoText}}</span>
</template>

<script>
import EventBus, { UPDATE_NEXT_TODO_TEXT } from './EventBus';

export default {
  data() {
    return {
      nextTodoText: ''
    };
  },

  beforeMount() {
    EventBus.$on(UPDATE_NEXT_TODO_TEXT, (nextTodoText) => {
      this.nextTodoText = nextTodoText;
    });
  }
};
</script>

<style scoped>
span {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
