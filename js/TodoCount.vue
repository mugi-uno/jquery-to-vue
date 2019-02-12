<template>
  <span id='todoCount'>(全{{count}}件)</span>
</template>

<script>
import { state } from './ObservableStore';

export default {
  computed: {
    count() {
      return state.count;
    }
  }
};
</script>

<style scoped>
span {
  font-size: 0.8em;
}
</style>
