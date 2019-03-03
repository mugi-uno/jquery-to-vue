<template>
  <div id='todoList' v-show='visible'>
    <div
      v-for='(todo, index) in todoList'
      :key='todo.key'
      class='todo'
    >
      <input
        type='text'
        :value='todo.todo'
        @input='updateTodo(index, $event.target.value)'
      />
      <button
        class='delete'
        @click='removeTodo(index)'
      >
        削除
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todoList: { type: Array, default: () => [] },
    visible: { type: Boolean, default: false }
  },

  methods: {
    updateTodo(index, value) {
      this.$emit('update', { index, value });
    },
    removeTodo(index) {
      this.$emit('remove', index);
    }
  }
};
</script>

<style scoped>
#todoList {
  border-radius: 5px;
  border: 1px dashed gray;
  margin: 20px 0px;
  padding: 20px;
  text-align: center;
  width: 400px;
}

.todo input {
  width: 80%;
}
</style>
