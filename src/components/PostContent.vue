<template lang="pug">
  div.wrap
    div.inner
      PostContentTalk(
        v-for="(msg, index) in messages"
        :name="msg.user.name"
        :body="msg.body"
        :img="msg.image_path"
        :time="msg.created_at"
        :userId="msg.user_id"
        :myUserId="getUserId"
        @scroll="scroll"
        @showImgModal="showImgModal"
      )
</template>

<script>
import PostContentTalk from '@/components/PostContentTalk.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'PostContent',
  components: {
    PostContentTalk
  },
  props: ['messages'],
  computed: {
    ...mapGetters('user', ['getUserId'])
  },
  methods: {
    scroll() {
      const element = document.getElementById('postContent');
      const scrollHeight = element.scrollHeight;
      element.scrollTop = scrollHeight
    },
    showImgModal(path) {
      this.$emit("showImgModal", path)
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap {
    width: 95%;
    margin: 0 auto;
    background: $light-color;
    border-radius: 6px;
    padding: 10px;
    overflow: scroll;
    white-space: nowrap;
  }
</style>
