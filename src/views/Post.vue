<template lang="pug">
  div.post
    Header
    PostContent
    PostInputArea.postInputArea
</template>

<script>
  import Header from '@/components/Header.vue'
  import PostContent from '@/components/PostContent.vue'
  import PostInputArea from '@/components/PostInputArea.vue'

  export default {
  name: 'post',
  components: {
    Header,
    PostContent,
    PostInputArea
  }
}
</script>

<style lang="scss" scoped>
  .post {
    width: 100%;
    max-width: 768px;
    margin: auto;
    background: $dark-color;
  }
  .postInputArea {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
