<template lang="pug">
  div.post
    Header#Header
    PostHead#postHead
    PostContent.postContent(:style="postContentHeight")
    PostInputArea#postInputArea.postInputArea
</template>

<script>
  import Header from '@/components/Header.vue'
  import PostContent from '@/components/PostContent.vue'
  import PostInputArea from '@/components/PostInputArea.vue'
  import PostHead from '@/components/PostHead.vue'

  export default {
  name: 'post',
  components: {
    Header,
    PostContent,
    PostInputArea,
    PostHead
  },
  data() {
    return {
      postContentHeight: {}
    }
  },
  mounted() {
    this.setPostContentHeight()
  },
  methods: {
    setPostContentHeight() { 
      const header = document.getElementById('Header').clientHeight;
      const postHead = document.getElementById('postHead').clientHeight;
      const postInputArea = document.getElementById('postInputArea').clientHeight;
      const matchResult = header + postHead + postInputArea
      const heightString = 'calc(95vh - '+ matchResult + 'px)';
      this.$set(this.postContentHeight, 'height', heightString);
    }
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
  .postContent {
    margin-top: 1.5vh;
  }
</style>
