<template lang="pug">
#chat
  textarea(v-model="message")
  br
  button(
    type="button"
    @click="send"
  ) 送信
  p {{ getUserName }}でログイン中
  ul.messages
    li.message(v-for="(msg, index) in messages")
      p.name {{ msg.user.name }}
      p.body {{ msg.body }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      message: '',
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
    },
    send() {
      const url = 'chat'
      const params = {
        user_id: this.getUserId,
        message: this.message
      }
      this.$axios.post(url, params)
        .then(() => {
          this.message = ''
        })
    }
  }
}
</script>

<style lang="scss" scoped>
textarea {
  border: 1px solid #000;
}
button {
  border: 1px solid #000;
}
.message {
  display: flex;
  align-items: center;
  font-size: 14px;
  &:not(:first-child) {
    margin-top: 10px;
  }
}
.name {
  font-weight: bold;
}
.body {
  margin-left: 20px;
}
</style>
