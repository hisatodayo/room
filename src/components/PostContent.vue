<template lang="pug">
  div.wrap
    PostContentTalk(
      v-for="item in 5" :key="item.id"
      )
</template>

<script>
  import PostContentTalk from '@/components/PostContentTalk.vue'

  export default {
    name: 'PostContent',
    components: {
      PostContentTalk
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    width: 95%;
    margin: 10px auto 0;
    background: #fff;
    border-radius: 6px;
    padding: 10px;
  }
</style>
