<template lang="pug">
  .wrap
    .item(
      v-for="todo in 10" :key="todo.id"
    )
</template>

<script>
export default {
  name: 'PostHeaderStory'
}
</script>

<style lang="scss" scoped>
  .wrap {
    overflow-x: scroll;
    white-space: nowrap;
    .item {
      width: 100px;
      height: 100px;
      background: #fff;
      display: inline-block;
      margin-right: 5px;
    }
  }
</style>
