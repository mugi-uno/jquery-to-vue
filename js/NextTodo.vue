<template>
  <span id='nextTodo'>次のTODO: {{nextTodoText}}</span>
</template>

<script>
import { state } from './ObservableStore';

export default {
  computed: {
    nextTodoText() {
      return state.nextTodoText;
    }
  }
};
</script>

<style scoped>
span {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
