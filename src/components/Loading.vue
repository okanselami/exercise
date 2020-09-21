<template>
  <div v-if="loading" class="spinner">Loading</div>
</template>
<script>
export default {
  name: 'Loading',
  props: {
    loading: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.spinner {
  display: block;
  color: $color4;
}
</style>
