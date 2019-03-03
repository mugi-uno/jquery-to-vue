<template>
  <button
    id='addTodo'
    @click='handleClick'
  >
    タスクを追加する
  </button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
};
</script>

<style scoped>
#addTodo {
  font-size: 1.2rem;
}
</style>
