<template lang="pug">
  div.post
    Header(ref="header")
    PostHead(ref="postHead")
    PostContent(v-bind:style="postContentHeight")
    PostInputArea.postInputArea(ref="postInputArea")
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
    this.matchHeight()
  },
  methods: {
    matchHeight() { 
      const header = this.$refs.header.clientHeight;
      const postHead = this.$refs.postHead.clientHeight;
      const postInputArea = this.$refs.postInputArea.clientHeight;
      const heightString = header + postHead + postInputArea;
      console.log(heightString)
      // Vue.set(this.postContentHeight, 'height', heightString);
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
</style>
