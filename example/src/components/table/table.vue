<template>
  <el-table
    :data="data"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </el-table>
</template>

<script>
export default {
  name: "ele-table",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>
