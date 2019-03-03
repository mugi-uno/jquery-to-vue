<template>
  <div id='todoEmpty' v-show='visible'>タスクがありません</div>
</template>

<script>
import EventBus, { UPDATE_TODO_COUNT } from './EventBus';

export default {
  data() {
    return {
      count: 0
    };
  },

  computed: {
    visible() {
      return this.count === 0;
    }
  },

  beforeMount() {
    EventBus.$on(UPDATE_TODO_COUNT, (count) => {
      this.count = count;
    });
  }
};
</script>

<style scoped>
div {
  border-radius: 5px;
  border: 1px dashed gray;
  margin: 20px 0px;
  padding: 20px;
  text-align: center;
  width: 400px;
}
</style>
