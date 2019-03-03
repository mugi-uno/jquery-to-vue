<template>
  <span id='todoCount'>(全{{count}}件)</span>
</template>

<script>
import EventBus, { UPDATE_TODO_COUNT } from './EventBus';

export default {
  data() {
    return {
      count: 0
    };
  },

  beforeMount() {
    EventBus.$on(UPDATE_TODO_COUNT, (count) => {
      this.count = count;
    });
  }
};
</script>

<style scoped>
span {
  font-size: 0.8em;
}
</style>
