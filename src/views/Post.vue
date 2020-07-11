<template lang="pug">
  div.post
    PostHeader
    PostContent
</template>

<script>
  import PostHeader from '@/components/PostHeader.vue'
  import PostContent from '@/components/PostContent.vue'

  export default {
  name: 'post',
  components: {
    PostHeader,
    PostContent
  }
}
</script>

<style lang="scss" scoped>
  .post {
    width: 100%;
    max-width: 768px;
    margin: auto;
    background: #07597c;
    padding-bottom: 50px;
  }
</style>
