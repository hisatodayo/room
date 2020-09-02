<template lang="pug">
  div.post
    PostHeader
    PostContent
    PostInputArea
</template>

<script>
  import PostHeader from '@/components/PostHeader.vue'
  import PostContent from '@/components/PostContent.vue'
  import PostInputArea from '@/components/PostInputArea.vue'

  export default {
  name: 'post',
  components: {
    PostHeader,
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
    background: #07597c;
  }
</style>
