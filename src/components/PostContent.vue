<template lang="pug">
  div.wrap
    div.inner
      PostContentTalk(
        v-for="(msg, index) in messages"
        :name="msg.user.name"
        :body="msg.body"
        :img="msg.image_path"
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
  data() {
    return {
      messages: []
    }
  },
  computed: {
    ...mapGetters('user', ['getUserId', 'getUserName'])
  },
  mounted() {
    this.getMessages()

    this.$Echo.channel('chat')
      .listen('MessageCreated', () => {
        this.getMessages()
      })
  },
  methods: {
    getMessages() {
      const url = 'chat'
      this.$axios.get(url)
        .then(response => {
          this.messages = response.data
        })
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
