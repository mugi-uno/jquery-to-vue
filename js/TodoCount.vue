<template>
  <span id='todoCount'>(全{{count}}件)</span>
</template>

<script>
export default {
  props: {
    count: { type: Number }
  }
};
</script>

<style scoped>
span {
  font-size: 0.8em;
}
</style>
