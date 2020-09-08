<template lang="pug">
div.postHead
  div.postHead_item(
    v-for="story in storyArray"
    :key="story"
  )
</template>

<script>
export default {
  name: 'PostHead',
  data() {
    return {
      storyArray: [
        'imgpath',
        'imgpatha',
        'imgpathb',
        'imgpathc',
        'imgpathd',
        'imgpathe',
        'imgpathf',
        'imgpathg',
        'imgpathh',
        'imgpathi',
        'imgpathj'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.postHead {
  background: $main-color;
  margin-top: 10px;
  padding: 10px;
  overflow: scroll;
  white-space: nowrap;
  &_item {
    display: inline-block;
    width: 100px;
    height: 100px;
    background: $light-color;
    border-radius: 6px;
    &:nth-child(n+2) {
      margin-left: 10px;
    }
  }
}
</style>
