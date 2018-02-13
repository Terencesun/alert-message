<template>
  <div id="app">
    <sample></sample>
  </div>
</template>

<script>
export default {
  components: {
    "sample": (resolve) => require(["./sample.vue"], resolve)
  }
}
</script>

<style lang="less">
</style>
