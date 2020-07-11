<template lang="pug">
  .wrap
    .logo room
    PostHeaderStory
</template>

<script>
import PostHeaderStory from '@/components/PostHeaderStory.vue'

export default {
  name: 'postHeader',
  components: {
    PostHeaderStory
  }
}
</script>

<style lang="scss" scoped>
  .wrap {
    width: 100%;
    position: relative;
  }
  .logo {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    line-height: 1;
    padding: 10px 0;
    color: #f1a483;
  }
</style>
