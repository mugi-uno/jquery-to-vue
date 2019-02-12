<template>
  <div id='todoEmpty' v-show='visible'>タスクがありません</div>
</template>

<script>
import { state } from './ObservableStore';

export default {
  computed: {
    visible() {
      return state.count === 0;
    }
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
