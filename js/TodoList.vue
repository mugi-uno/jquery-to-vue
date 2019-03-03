<template>
  <div id='todoList' v-show='visible'>
    <div
      v-for='todo in todoList'
      :key='todo.key'
      class='todo'
    >
      <input type='text' />
      <button class='delete'>削除</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todoList: { type: Array, default: () => [] },
    visible: { type: Boolean, default: false }
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
