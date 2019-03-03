<template>
  <div id='todoEmpty' v-show='visible'>タスクがありません</div>
</template>

<script>
export default {
  props: {
    visible: { type: Boolean, default: false }
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
