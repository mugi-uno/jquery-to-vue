<template>
  <span id='nextTodo'>次のTODO: {{nextTodoText}}</span>
</template>

<script>
export default {
  props: {
    nextTodoText: { type: String, default: '' }
  }
};
</script>

<style scoped>
span {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
