<template lang="pug">
  div.post
    Header#Header
    PostHead#postHead(
      :images="images"
      @showImgModal="showImgModal"
    )
    PostContent.postContent#postContent(
      :style="postContentHeight"
      :messages="messages"
      @showImgModal="showImgModal"
    )
    PostInputArea#postInputArea.postInputArea
    imgModal(
      v-show="imgModalActive"
      :path="path"
      @closeModal="closeModal"
    )
</template>

<script>
  import Header from '@/components/Header.vue'
  import PostContent from '@/components/PostContent.vue'
  import PostInputArea from '@/components/PostInputArea.vue'
  import PostHead from '@/components/PostHead.vue'
  import imgModal from '@/components/imgModal.vue'

  export default {
  name: 'post',
  components: {
    Header,
    PostContent,
    PostInputArea,
    PostHead,
    imgModal
  },
  data() {
    return {
      postContentHeight: {},
      messages: [],
      imgModalActive: false,
      path: ""
    }
  },
  computed: {
    images() {
      const result = this.messages.filter(item => {
         return item.image_path
      })
      return result
    }
  },
  created() {
    this.getMessages()

    this.$Echo.channel('chat')
      .listen('MessageCreated', () => {
        this.getMessages()
      })
  },
  mounted() {
    this.$nextTick(() => {
      this.setPostContentHeight()
    });
  },
  methods: {
    setPostContentHeight() { 
      const header = document.getElementById('Header').clientHeight;
      const postHead = document.getElementById('postHead').clientHeight;
      const postInputArea = document.getElementById('postInputArea').clientHeight;
      const matchResult = header + postHead + postInputArea
      const heightString = 'calc(95vh - '+ matchResult + 'px)';
      this.$set(this.postContentHeight, 'height', heightString);
    },
    getMessages() {
      const url = 'chat'
      this.$axios.get(url)
        .then(response => {
          this.messages = response.data
        })
    },
    showImgModal(path) {
      this.path = path;
      this.imgModalActive = true;
    },
    closeModal() {
      this.imgModalActive = false;
    }
  }
}
</script>

<style lang="scss" scoped>
  .post {
    width: 100%;
    max-width: 768px;
    margin: auto;
    background: $forth-color;
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
